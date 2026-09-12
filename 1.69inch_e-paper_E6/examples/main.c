#include <stdbool.h>
#include <string.h>

#include "board_com_api.h"
#include "cJSON.h"
#include "eaten_pizza.h"
#include "netmgr.h"
#include "tal_api.h"
#include "tdl_button_manage.h"
#include "tkl_output.h"
#include "tuya_authorize.h"
#include "tuya_config.h"
#include "tuya_iot.h"
#include "tuya_iot_dp.h"

#if defined(ENABLE_WIFI) && (ENABLE_WIFI == 1)
#include "netconn_wifi.h"
#endif

#ifndef PROJECT_VERSION
#define PROJECT_VERSION "1.0.0"
#endif

#ifndef BUTTON_NAME
#define BUTTON_NAME "button1"
#endif

static tuya_iot_client_t s_client;
static tuya_iot_license_t s_license;
static THREAD_HANDLE s_app_thread;
static TDL_BUTTON_HANDLE s_button;
static volatile bool s_cloud_connected;
static bool s_cloud_initialized;

static const uint32_t s_duration_seconds[] = {900U, 1800U, 2700U, 3600U, 5400U};
static const uint8_t s_piece_counts[] = {1U, 3U, 5U, 6U, 9U};

static bool pizza_duration_from_enum(uint32_t value, uint32_t *seconds)
{
    if (seconds == NULL || value >= sizeof(s_duration_seconds) / sizeof(s_duration_seconds[0])) {
        return false;
    }
    *seconds = s_duration_seconds[value];
    return true;
}

static bool pizza_piece_count_from_enum(uint32_t value, uint8_t *piece_count)
{
    if (piece_count == NULL || value >= sizeof(s_piece_counts) / sizeof(s_piece_counts[0])) {
        return false;
    }
    *piece_count = s_piece_counts[value];
    return true;
}

static uint32_t pizza_duration_to_enum(uint32_t seconds)
{
    uint32_t i;
    for (i = 0; i < sizeof(s_duration_seconds) / sizeof(s_duration_seconds[0]); ++i) {
        if (s_duration_seconds[i] == seconds) {
            return i;
        }
    }
    return 0U;
}

static uint32_t pizza_piece_count_to_enum(uint8_t piece_count)
{
    uint32_t i;
    for (i = 0; i < sizeof(s_piece_counts) / sizeof(s_piece_counts[0]); ++i) {
        if (s_piece_counts[i] == piece_count) {
            return i;
        }
    }
    return 0U;
}

static bool pizza_is_writable_object_dp(uint8_t id)
{
    return id == PIZZA_DP_TOTAL_DURATION || id == PIZZA_DP_PIECE_COUNT ||
           id == PIZZA_DP_TIMER_STATUS || id == PIZZA_DP_THEME;
}

static void pizza_cloud_report(const pizza_snapshot_t *snapshot)
{
    dp_obj_t dps[7] = {0};
    int rt;

    if (!s_cloud_connected || snapshot == NULL) {
        return;
    }
    dps[0].id = PIZZA_DP_TOTAL_DURATION;
    dps[0].type = PROP_ENUM;
    dps[0].value.dp_enum = pizza_duration_to_enum(snapshot->total_duration_sec);
    dps[1].id = PIZZA_DP_PIECE_COUNT;
    dps[1].type = PROP_ENUM;
    dps[1].value.dp_enum = pizza_piece_count_to_enum(snapshot->piece_count);
    dps[2].id = PIZZA_DP_CURRENT_PIECE;
    dps[2].type = PROP_VALUE;
    dps[2].value.dp_value = snapshot->current_piece;
    dps[3].id = PIZZA_DP_TIMER_STATUS;
    dps[3].type = PROP_ENUM;
    dps[3].value.dp_enum = snapshot->status;
    dps[4].id = PIZZA_DP_THEME;
    dps[4].type = PROP_ENUM;
    dps[4].value.dp_enum = snapshot->theme;
    dps[5].id = PIZZA_DP_IMAGE_UPLOAD_STATUS;
    dps[5].type = PROP_ENUM;
    dps[5].value.dp_enum = snapshot->image_upload_status;
    dps[6].id = PIZZA_DP_IMAGE_UPLOAD_PROGRESS;
    dps[6].type = PROP_VALUE;
    dps[6].value.dp_value = snapshot->image_upload_progress;

    rt = tuya_iot_dp_obj_report(&s_client, NULL, dps, 7, 0);
    if (rt != OPRT_OK) {
        PR_WARN("report pizza state failed: %d", rt);
    }
}

static void pizza_handle_object_dp(const dp_obj_t *dp)
{
    OPERATE_RET rt = OPRT_INVALID_PARM;

    if (dp == NULL) {
        return;
    }
    if (dp->type == PROP_VALUE) {
        PR_NOTICE("App DP received: id=%u value=%d", dp->id, dp->value.dp_value);
    } else if (dp->type == PROP_ENUM) {
        PR_NOTICE("App DP received: id=%u enum_index=%u", dp->id, dp->value.dp_enum);
    } else {
        PR_NOTICE("App DP received: id=%u type=%u", dp->id, dp->type);
    }
    switch (dp->id) {
    case PIZZA_DP_TIMER_STATUS:
        if (dp->type == PROP_ENUM && dp->value.dp_enum <= PIZZA_STATUS_RUNNING) {
            rt = eaten_pizza_set_status((pizza_status_t)dp->value.dp_enum);
        }
        break;
    case PIZZA_DP_THEME:
        if (dp->type == PROP_ENUM && dp->value.dp_enum <= PIZZA_THEME_CUSTOM) {
            rt = eaten_pizza_set_theme((pizza_theme_t)dp->value.dp_enum);
        }
        break;
    default:
        PR_WARN("read-only or unknown DP ignored: %u", dp->id);
        return;
    }
    if (rt != OPRT_OK) {
        PR_WARN("DP %u rejected: %d", dp->id, rt);
    } else {
        PR_NOTICE("App DP applied: id=%u", dp->id);
    }
}

static bool pizza_handle_configuration_batch(const dp_obj_recv_t *received, bool *configuration_valid)
{
    const dp_obj_t *duration_dp = NULL;
    const dp_obj_t *pieces_dp = NULL;
    uint32_t seconds;
    uint8_t piece_count;
    uint32_t i;
    OPERATE_RET rt;

    for (i = 0; i < received->dpscnt; ++i) {
        if (received->dps[i].id == PIZZA_DP_TOTAL_DURATION) {
            duration_dp = &received->dps[i];
        } else if (received->dps[i].id == PIZZA_DP_PIECE_COUNT) {
            pieces_dp = &received->dps[i];
        }
    }
    *configuration_valid = true;
    if (duration_dp == NULL && pieces_dp == NULL) {
        return false;
    }
    if (duration_dp == NULL || pieces_dp == NULL) {
        *configuration_valid = false;
        PR_WARN("DP101 and DP102 must be sent in the same object-DP batch");
        return true;
    }

    if (duration_dp->type != PROP_ENUM || pieces_dp->type != PROP_ENUM ||
        !pizza_duration_from_enum(duration_dp->value.dp_enum, &seconds) ||
        !pizza_piece_count_from_enum(pieces_dp->value.dp_enum, &piece_count)) {
        *configuration_valid = false;
        PR_WARN("configuration batch has invalid DP types or enum indexes");
        return true;
    }

    PR_NOTICE("App DP batch received: duration_enum=%u pieces_enum=%u",
              duration_dp->value.dp_enum, pieces_dp->value.dp_enum);
    rt = eaten_pizza_set_configuration(seconds, piece_count);
    if (rt != OPRT_OK) {
        *configuration_valid = false;
        PR_WARN("configuration rejected: total=%u pieces=%u rt=%d",
                seconds, piece_count, rt);
    } else {
        PR_NOTICE("configuration applied: total=%u pieces=%u step=%u",
                  seconds, piece_count, (seconds / 60U) / piece_count);
    }
    return true;
}

static void pizza_button_event(char *name, TDL_BUTTON_TOUCH_EVENT_E event, void *argc)
{
    (void)name;
    (void)argc;
    if (event == TDL_BUTTON_PRESS_SINGLE_CLICK) {
        eaten_pizza_button_toggle();
    } else if (event == TDL_BUTTON_LONG_PRESS_START) {
        PR_NOTICE("button held for 3 seconds: reset Tuya pairing");
        if (s_cloud_initialized) {
            tuya_iot_reset(&s_client);
        }
    }
}

static OPERATE_RET pizza_button_init(void)
{
    OPERATE_RET rt;
    TDL_BUTTON_CFG_T config = {
        .long_start_valid_time = 3000,
        .long_keep_timer = 1000,
        .button_debounce_time = 50,
        .button_repeat_valid_count = 2,
        .button_repeat_valid_time = 300,
    };

    rt = board_register_hardware();
    if (rt != OPRT_OK) {
        return rt;
    }
    rt = tdl_button_create(BUTTON_NAME, &config, &s_button);
    if (rt != OPRT_OK) {
        return rt;
    }
    tdl_button_event_register(s_button, TDL_BUTTON_PRESS_SINGLE_CLICK, pizza_button_event);
    tdl_button_event_register(s_button, TDL_BUTTON_LONG_PRESS_START, pizza_button_event);
    return OPRT_OK;
}

static bool pizza_network_check(void)
{
    netmgr_status_e status = NETMGR_LINK_DOWN;
    netmgr_conn_get(NETCONN_AUTO, NETCONN_CMD_STATUS, &status);
    return status != NETMGR_LINK_DOWN;
}

static void pizza_event_handler(tuya_iot_client_t *client, tuya_event_msg_t *event)
{
    static const uint8_t control_order[] = {
        PIZZA_DP_TOTAL_DURATION,
        PIZZA_DP_PIECE_COUNT,
        PIZZA_DP_THEME,
        PIZZA_DP_TIMER_STATUS,
    };
    uint32_t i;
    size_t order_index;
    (void)client;

    if (event == NULL) {
        return;
    }
    switch (event->id) {
    case TUYA_EVENT_MQTT_CONNECTED:
    case TUYA_EVENT_DIRECT_MQTT_CONNECTED: {
        pizza_snapshot_t snapshot;
        s_cloud_connected = true;
        eaten_pizza_get_snapshot(&snapshot);
        pizza_cloud_report(&snapshot);
        PR_NOTICE("Tuya cloud connected");
    } break;
    case TUYA_EVENT_MQTT_DISCONNECT:
        s_cloud_connected = false;
        PR_WARN("Tuya cloud disconnected; local timer remains active");
        break;
    case TUYA_EVENT_DP_RECEIVE_OBJ: {
        dp_obj_recv_t *received = event->value.dpobj;
        bool configuration_batched;
        bool configuration_valid;
        if (received == NULL) {
            PR_WARN("received an empty object DP event");
            break;
        }

        configuration_batched = pizza_handle_configuration_batch(received, &configuration_valid);

        /* Apply configuration first and status last so a batched start command
         * cannot be reset back to idle by a duration/piece-count update that follows it. */
        for (order_index = 0; order_index < sizeof(control_order); ++order_index) {
            if (configuration_batched &&
                (control_order[order_index] == PIZZA_DP_TOTAL_DURATION ||
                 control_order[order_index] == PIZZA_DP_PIECE_COUNT)) {
                continue;
            }
            if (configuration_batched && !configuration_valid &&
                control_order[order_index] == PIZZA_DP_TIMER_STATUS) {
                PR_WARN("timer command ignored because the accompanying configuration was rejected");
                continue;
            }
            for (i = 0; i < received->dpscnt; ++i) {
                if (received->dps[i].id == control_order[order_index]) {
                    pizza_handle_object_dp(&received->dps[i]);
                }
            }
        }
        for (i = 0; i < received->dpscnt; ++i) {
            if (!pizza_is_writable_object_dp(received->dps[i].id)) {
                PR_WARN("read-only or unknown DP ignored: %u", received->dps[i].id);
            }
        }
        pizza_snapshot_t snapshot;
        eaten_pizza_get_snapshot(&snapshot);
        PR_NOTICE("App control result: total=%u pieces=%u step=%u current=%u status=%u theme=%u upload=%u/%u%%",
                  snapshot.total_duration_sec, snapshot.piece_count,
                  (snapshot.total_duration_sec / 60U) / snapshot.piece_count,
                  snapshot.current_piece, snapshot.status, snapshot.theme,
                  snapshot.image_upload_status, snapshot.image_upload_progress);
        pizza_cloud_report(&snapshot);
    } break;
    case TUYA_EVENT_DP_RECEIVE_RAW: {
        dp_raw_recv_t *received = event->value.dpraw;
        if (received != NULL && received->dp.id == PIZZA_DP_CUSTOM_IMAGE) {
            OPERATE_RET rt = eaten_pizza_custom_image_chunk(received->dp.data, received->dp.len);
            if (rt != OPRT_OK) {
                PR_WARN("custom image chunk rejected: %d", rt);
            }
        }
    } break;
    case TUYA_EVENT_RESET_COMPLETE:
        tal_system_reset();
        break;
    default:
        break;
    }
}

static void pizza_app_main(void)
{
    OPERATE_RET rt;

    cJSON_InitHooks(&(cJSON_Hooks){.malloc_fn = tal_malloc, .free_fn = tal_free});
    tal_time_service_init();
    tal_log_init(TAL_LOG_LEVEL_DEBUG, 1024, (TAL_LOG_OUTPUT_CB)tkl_log_output);
    tal_kv_init(&(tal_kv_cfg_t){.seed = "eaten-pizza-seed", .key = "eaten-pizza-key1"});
    tal_sw_timer_init();
    tal_workq_init();
    tal_cli_init();
    tuya_authorize_init();

    PR_NOTICE("Eaten Pizza %s starting", PROJECT_VERSION);
    rt = eaten_pizza_init(pizza_cloud_report);
    if (rt != OPRT_OK) {
        PR_ERR("pizza state/display initialization failed: %d", rt);
    }

    if (tuya_authorize_read(&s_license) != OPRT_OK) {
        s_license.uuid = TUYA_OPENSDK_UUID;
        s_license.authkey = TUYA_OPENSDK_AUTHKEY;
        PR_WARN("using credentials from examples/tuya_config.h");
    }

    rt = tuya_iot_init(&s_client, &(const tuya_iot_config_t){
        .software_ver = PROJECT_VERSION,
        .productkey = TUYA_PRODUCT_ID,
        .uuid = s_license.uuid,
        .authkey = s_license.authkey,
        .event_handler = pizza_event_handler,
        .network_check = pizza_network_check,
    });
    if (rt != OPRT_OK) {
        PR_ERR("Tuya cloud initialization failed: %d; running offline", rt);
    } else {
        s_cloud_initialized = true;
#if defined(ENABLE_WIFI) && (ENABLE_WIFI == 1)
        netmgr_init(NETCONN_WIFI);
        netmgr_conn_set(NETCONN_WIFI, NETCONN_CMD_NETCFG,
                        &(netcfg_args_t){.type = NETCFG_TUYA_BLE | NETCFG_TUYA_WIFI_AP});
#endif
        tuya_iot_start(&s_client);
    }

    rt = pizza_button_init();
    if (rt != OPRT_OK) {
        PR_WARN("button initialization failed: %d", rt);
    }

    for (;;) {
        if (s_cloud_initialized) {
            tuya_iot_yield(&s_client);
        } else {
            tal_system_sleep(1000);
        }
    }
}

#if OPERATING_SYSTEM == SYSTEM_LINUX
void main(int argc, char *argv[])
{
    (void)argc;
    (void)argv;
    pizza_app_main();
}
#else
static void pizza_app_thread(void *arg)
{
    (void)arg;
    pizza_app_main();
}

void tuya_app_main(void)
{
    THREAD_CFG_T config = {
        .stackDepth = 6144,
        .priority = THREAD_PRIO_1,
        .thrdname = "eaten_pizza",
    };
    tal_thread_create_and_start(&s_app_thread, NULL, NULL, pizza_app_thread, NULL, &config);
}
#endif
