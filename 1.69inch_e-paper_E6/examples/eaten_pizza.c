#include "eaten_pizza.h"

#include <string.h>

#include "EPD_1in69_E6.h"
#include "ImageData.h"
#include "miku_image.h"
#include "tal_api.h"

#define PIZZA_WIDTH             400
#define PIZZA_HEIGHT            400
#define PIZZA_CENTER            200
#define PIZZA_RADIUS            188
#define PIZZA_DEFAULT_TOTAL_SEC 3600U
#define PIZZA_DEFAULT_PIECES    6U
#define PIZZA_MAX_PIECES        9U
#define PIZZA_KV_KEY            "eaten_pizza_cfg"
#define PIZZA_KV_MAGIC          0x45505A33UL

typedef struct {
    uint32_t magic;
    uint32_t total_duration_sec;
    uint8_t piece_count;
    uint8_t theme;
    uint16_t reserved;
} pizza_saved_config_t;

typedef struct {
    MUTEX_HANDLE mutex;
    THREAD_HANDLE worker;
    pizza_snapshot_t snapshot;
    uint32_t elapsed_before_run_sec;
    SYS_TIME_T run_started_ms;
    uint32_t render_generation;
    uint32_t rendered_generation;
    pizza_state_report_cb report_cb;
    uint8_t *custom_image;
    uint32_t custom_received;
    SYS_TIME_T custom_last_chunk_ms;
    bool custom_ready;
    bool initialized;
} pizza_runtime_t;

static pizza_runtime_t s_pizza;
static uint8_t s_framebuffer[PIZZA_IMAGE_BYTES];

static const int16_t s_piece_vectors[PIZZA_MAX_PIECES][PIZZA_MAX_PIECES][2] = {
    {{0, -1000}},
    {{0, -1000}, {0, 1000}},
    {{0, -1000}, {866, 500}, {-866, 500}},
    {{0, -1000}, {1000, 0}, {0, 1000}, {-1000, 0}},
    {{0, -1000}, {951, -309}, {588, 809}, {-588, 809}, {-951, -309}},
    {{0, -1000}, {866, -500}, {866, 500}, {0, 1000}, {-866, 500}, {-866, -500}},
    {{0, -1000}, {782, -623}, {975, 223}, {434, 901}, {-434, 901}, {-975, 223}, {-782, -623}},
    {{0, -1000}, {707, -707}, {1000, 0}, {707, 707}, {0, 1000}, {-707, 707}, {-1000, 0}, {-707, -707}},
    {{0, -1000}, {643, -766}, {985, -174}, {866, 500}, {342, 940}, {-342, 940}, {-866, 500}, {-985, -174}, {-643, -766}},
};

/* 3x5 digits plus slash, bit 2 is the left-most pixel. */
static const uint8_t s_digit_rows[11][5] = {
    {7, 5, 5, 5, 7}, {2, 6, 2, 2, 7}, {7, 1, 7, 4, 7},
    {7, 1, 7, 1, 7}, {5, 5, 7, 1, 1}, {7, 4, 7, 1, 7},
    {7, 4, 7, 5, 7}, {7, 1, 1, 1, 1}, {7, 5, 7, 5, 7},
    {7, 5, 7, 1, 7}, {1, 1, 2, 4, 4},
};

static bool pizza_is_supported_total(uint32_t seconds)
{
    return seconds == 900U || seconds == 1800U || seconds == 2700U ||
           seconds == 3600U || seconds == 5400U;
}

static bool pizza_is_allowed_piece_count(uint32_t total_minutes, uint8_t piece_count)
{
    switch (total_minutes) {
    case 15U:
        return piece_count == 1U || piece_count == 3U || piece_count == 5U;
    case 30U:
    case 60U:
        return piece_count == 1U || piece_count == 3U || piece_count == 5U ||
               piece_count == 6U;
    case 45U:
        return piece_count == 1U || piece_count == 3U || piece_count == 5U ||
               piece_count == 9U;
    case 90U:
        return piece_count == 1U || piece_count == 3U || piece_count == 5U ||
               piece_count == 6U || piece_count == 9U;
    default:
        return false;
    }
}

static void pizza_mark_for_render_locked(void)
{
    ++s_pizza.render_generation;
    if (s_pizza.render_generation == 0U) {
        s_pizza.render_generation = 1U;
        s_pizza.rendered_generation = 0U;
    }
}

static void pizza_save_config_locked(void)
{
    const pizza_saved_config_t config = {
        .magic = PIZZA_KV_MAGIC,
        .total_duration_sec = s_pizza.snapshot.total_duration_sec,
        .piece_count = s_pizza.snapshot.piece_count,
        .theme = (uint8_t)s_pizza.snapshot.theme,
    };
    int rt = tal_kv_set(PIZZA_KV_KEY, (const uint8_t *)&config, sizeof(config));
    if (rt != OPRT_OK) {
        PR_WARN("save pizza config failed: %d", rt);
    }
}

static void pizza_load_config(void)
{
    uint8_t *value = NULL;
    size_t length = 0;

    s_pizza.snapshot.total_duration_sec = PIZZA_DEFAULT_TOTAL_SEC;
    s_pizza.snapshot.piece_count = PIZZA_DEFAULT_PIECES;
    s_pizza.snapshot.theme = PIZZA_THEME_PIZZA;

    if (tal_kv_get(PIZZA_KV_KEY, &value, &length) == OPRT_OK &&
        length == sizeof(pizza_saved_config_t)) {
        const pizza_saved_config_t *config = (const pizza_saved_config_t *)value;
        if (config->magic == PIZZA_KV_MAGIC &&
            pizza_is_supported_total(config->total_duration_sec) &&
            pizza_is_allowed_piece_count(config->total_duration_sec / 60U,
                                         config->piece_count) &&
            config->theme <= PIZZA_THEME_MIKU) {
            s_pizza.snapshot.total_duration_sec = config->total_duration_sec;
            s_pizza.snapshot.piece_count = config->piece_count;
            s_pizza.snapshot.theme = (pizza_theme_t)config->theme;
        }
    }
    if (value != NULL) {
        tal_free(value);
    }
}

static void pizza_report_snapshot(const pizza_snapshot_t *snapshot)
{
    pizza_state_report_cb callback = s_pizza.report_cb;
    if (callback != NULL) {
        callback(snapshot);
    }
}

static void pizza_set_pixel(uint8_t *image, int x, int y, uint8_t color)
{
    uint32_t index;
    uint8_t nibble = color & 0x0FU;

    if (x < 0 || x >= PIZZA_WIDTH || y < 0 || y >= PIZZA_HEIGHT) {
        return;
    }
    index = (uint32_t)y * (PIZZA_WIDTH / 2U) + (uint32_t)x / 2U;
    if ((x & 1) == 0) {
        image[index] = (uint8_t)((image[index] & 0x0FU) | (nibble << 4));
    } else {
        image[index] = (uint8_t)((image[index] & 0xF0U) | nibble);
    }
}

static void pizza_fill(uint8_t *image, uint8_t color)
{
    memset(image, (int)((color << 4) | color), PIZZA_IMAGE_BYTES);
}

static int pizza_piece_for_vector(int dx, int dy, uint8_t piece_count)
{
    int best = 0;
    int32_t best_dot = INT32_MIN;
    int i;

    for (i = 0; i < piece_count; ++i) {
        int32_t dot = dx * s_piece_vectors[piece_count - 1U][i][0] +
                      dy * s_piece_vectors[piece_count - 1U][i][1];
        if (dot > best_dot) {
            best_dot = dot;
            best = i;
        }
    }
    return best;
}

static void pizza_draw_circle(uint8_t *image, int cx, int cy, int radius, uint8_t color)
{
    int x;
    int y;
    int radius_squared = radius * radius;

    for (y = cy - radius; y <= cy + radius; ++y) {
        for (x = cx - radius; x <= cx + radius; ++x) {
            int dx = x - cx;
            int dy = y - cy;
            if (dx * dx + dy * dy <= radius_squared) {
                pizza_set_pixel(image, x, y, color);
            }
        }
    }
}

static void pizza_generate_pizza(uint8_t *image)
{
    static const int16_t toppings[][3] = {
        {150, 110, 3}, {245, 105, 3}, {112, 177, 5}, {202, 155, 6},
        {286, 180, 3}, {158, 235, 5}, {245, 252, 6}, {205, 310, 3},
        {105, 285, 6}, {302, 275, 5}, {72, 210, 3}, {325, 225, 6},
    };
    size_t i;

    pizza_fill(image, 1);
    pizza_draw_circle(image, PIZZA_CENTER, PIZZA_CENTER, 188, 0);
    pizza_draw_circle(image, PIZZA_CENTER, PIZZA_CENTER, 180, 2);
    pizza_draw_circle(image, PIZZA_CENTER, PIZZA_CENTER, 158, 3);
    pizza_draw_circle(image, PIZZA_CENTER, PIZZA_CENTER, 150, 2);

    for (i = 0; i < sizeof(toppings) / sizeof(toppings[0]); ++i) {
        pizza_draw_circle(image, toppings[i][0], toppings[i][1], 13, (uint8_t)toppings[i][2]);
        pizza_draw_circle(image, toppings[i][0] - 3, toppings[i][1] - 3, 4, 0);
    }
}

static void pizza_generate_stars(uint8_t *image)
{
    int x;
    int y;

    pizza_fill(image, 1);
    pizza_draw_circle(image, PIZZA_CENTER, PIZZA_CENTER, 188, 5);
    for (y = 35; y < 365; y += 45) {
        for (x = 35 + ((y / 45) & 1) * 22; x < 365; x += 45) {
            uint8_t color = ((x + y) % 3 == 0) ? 3 : 2;
            pizza_draw_circle(image, x, y, 7, color);
            pizza_set_pixel(image, x - 10, y, color);
            pizza_set_pixel(image, x + 10, y, color);
            pizza_set_pixel(image, x, y - 10, color);
            pizza_set_pixel(image, x, y + 10, color);
        }
    }
}

static void pizza_erase_finished_pieces(uint8_t *image, const pizza_snapshot_t *snapshot)
{
    int x;
    int y;
    int radius_squared = PIZZA_RADIUS * PIZZA_RADIUS;

    if (snapshot->current_piece == 0U) {
        return;
    }
    for (y = 0; y < PIZZA_HEIGHT; ++y) {
        for (x = 0; x < PIZZA_WIDTH; ++x) {
            int dx = x - PIZZA_CENTER;
            int dy = y - PIZZA_CENTER;
            int piece;
            if (dx * dx + dy * dy > radius_squared) {
                continue;
            }
            piece = pizza_piece_for_vector(dx, dy, snapshot->piece_count);
            if (piece < snapshot->current_piece) {
                pizza_set_pixel(image, x, y, 1);
            }
        }
    }
}

static void pizza_draw_glyph(uint8_t *image, int x, int y, unsigned glyph, uint8_t color)
{
    int row;
    int col;
    int scale = 4;

    if (glyph > 10U) {
        return;
    }
    for (row = 0; row < 5; ++row) {
        for (col = 0; col < 3; ++col) {
            if ((s_digit_rows[glyph][row] & (1U << (2 - col))) != 0U) {
                int sx;
                int sy;
                for (sy = 0; sy < scale; ++sy) {
                    for (sx = 0; sx < scale; ++sx) {
                        pizza_set_pixel(image, x + col * scale + sx, y + row * scale + sy, color);
                    }
                }
            }
        }
    }
}

static void pizza_draw_progress(uint8_t *image, const pizza_snapshot_t *snapshot)
{
    int x = 174;
    int y = 188;
    uint8_t color = snapshot->current_piece == snapshot->piece_count ? 3 : 0;

    pizza_draw_circle(image, PIZZA_CENTER, PIZZA_CENTER, 30, 1);
    pizza_draw_glyph(image, x, y, snapshot->current_piece, color);
    pizza_draw_glyph(image, x + 18, y, 10, color);
    pizza_draw_glyph(image, x + 36, y, snapshot->piece_count, color);
}

static void pizza_prepare_frame(const pizza_snapshot_t *snapshot)
{
    if (snapshot->status == PIZZA_STATUS_COMPLETED) {
        pizza_fill(s_framebuffer, 1);
        return;
    }
    switch (snapshot->theme) {
    case PIZZA_THEME_STARS:
        pizza_generate_stars(s_framebuffer);
        break;
    case PIZZA_THEME_MIKU:
        memcpy(s_framebuffer, g_miku_image, PIZZA_IMAGE_BYTES);
        break;
    case PIZZA_THEME_CUSTOM:
        tal_mutex_lock(s_pizza.mutex);
        if (s_pizza.custom_ready) {
            memcpy(s_framebuffer, s_pizza.custom_image, PIZZA_IMAGE_BYTES);
        } else {
            pizza_generate_pizza(s_framebuffer);
        }
        tal_mutex_unlock(s_pizza.mutex);
        break;
    case PIZZA_THEME_PIZZA:
    default:
        pizza_generate_pizza(s_framebuffer);
        break;
    }
    pizza_erase_finished_pieces(s_framebuffer, snapshot);
    pizza_draw_progress(s_framebuffer, snapshot);
}

static bool pizza_update_clock_locked(SYS_TIME_T now_ms, pizza_snapshot_t *report)
{
    uint32_t elapsed_sec;
    uint8_t piece;

    if (s_pizza.snapshot.status != PIZZA_STATUS_RUNNING) {
        return false;
    }
    elapsed_sec = s_pizza.elapsed_before_run_sec +
                  (uint32_t)(now_ms - s_pizza.run_started_ms) / 1000U;
    if (elapsed_sec >= s_pizza.snapshot.total_duration_sec) {
        s_pizza.elapsed_before_run_sec = s_pizza.snapshot.total_duration_sec;
        s_pizza.snapshot.current_piece = s_pizza.snapshot.piece_count;
        s_pizza.snapshot.status = PIZZA_STATUS_COMPLETED;
        pizza_mark_for_render_locked();
        *report = s_pizza.snapshot;
        return true;
    }

    piece = (uint8_t)(((uint64_t)elapsed_sec * s_pizza.snapshot.piece_count) /
                      s_pizza.snapshot.total_duration_sec);
    if (piece > s_pizza.snapshot.piece_count) {
        piece = s_pizza.snapshot.piece_count;
    }
    if (piece != s_pizza.snapshot.current_piece) {
        s_pizza.snapshot.current_piece = piece;
        pizza_mark_for_render_locked();
        *report = s_pizza.snapshot;
        return true;
    }
    return false;
}

static bool pizza_update_upload_timeout_locked(SYS_TIME_T now_ms,
                                               pizza_snapshot_t *report)
{
    if (s_pizza.snapshot.image_upload_status != PIZZA_UPLOAD_RECEIVING ||
        (uint32_t)(now_ms - s_pizza.custom_last_chunk_ms) < PIZZA_UPLOAD_TIMEOUT_MS) {
        return false;
    }
    s_pizza.snapshot.image_upload_status = PIZZA_UPLOAD_ERROR;
    s_pizza.custom_ready = false;
    *report = s_pizza.snapshot;
    PR_WARN("custom image upload timed out at %u bytes", s_pizza.custom_received);
    return true;
}

static void eaten_pizza_worker(void *arg)
{
    (void)arg;
    if (DEV_Module_Init() != 0) {
        PR_ERR("e-paper GPIO initialization failed");
        return;
    }
    EPD_1IN69_E6_Init();
    PR_NOTICE("clearing e-paper before first frame");
    EPD_1IN69_E6_Clear();
    DEV_Delay_ms(1000);

    for (;;) {
        pizza_snapshot_t snapshot;
        pizza_snapshot_t report;
        bool report_needed;
        bool render_needed;
        uint32_t generation;

        tal_mutex_lock(s_pizza.mutex);
        {
            SYS_TIME_T now_ms = tal_system_get_millisecond();
            report_needed = pizza_update_clock_locked(now_ms, &report);
            if (pizza_update_upload_timeout_locked(now_ms, &report)) {
                report_needed = true;
            }
        }
        generation = s_pizza.render_generation;
        render_needed = generation != s_pizza.rendered_generation;
        snapshot = s_pizza.snapshot;
        tal_mutex_unlock(s_pizza.mutex);

        if (report_needed) {
            pizza_report_snapshot(&report);
        }
        if (render_needed) {
            pizza_prepare_frame(&snapshot);
            PR_INFO("refresh display: theme=%u progress=%u/%u status=%u",
                    snapshot.theme, snapshot.current_piece, snapshot.piece_count, snapshot.status);
            EPD_1IN69_E6_Display(s_framebuffer);
            tal_mutex_lock(s_pizza.mutex);
            if (s_pizza.rendered_generation < generation) {
                s_pizza.rendered_generation = generation;
            }
            tal_mutex_unlock(s_pizza.mutex);
        }
        tal_system_sleep(200U);
    }
}

OPERATE_RET eaten_pizza_init(pizza_state_report_cb report_cb)
{
    OPERATE_RET rt;
    THREAD_CFG_T thread_cfg = {
        .stackDepth = 4096,
        .priority = THREAD_PRIO_2,
        .thrdname = "pizza_display",
    };

    if (s_pizza.initialized) {
        return OPRT_OK;
    }
    memset(&s_pizza, 0, sizeof(s_pizza));
    rt = tal_mutex_create_init(&s_pizza.mutex);
    if (rt != OPRT_OK) {
        return rt;
    }
    pizza_load_config();
    s_pizza.snapshot.status = PIZZA_STATUS_IDLE;
    s_pizza.snapshot.image_upload_status = PIZZA_UPLOAD_IDLE;
    s_pizza.snapshot.image_upload_progress = 0U;
    s_pizza.report_cb = report_cb;
    s_pizza.render_generation = 1U;
    s_pizza.initialized = true;

    rt = tal_thread_create_and_start(&s_pizza.worker, NULL, NULL, eaten_pizza_worker, NULL, &thread_cfg);
    if (rt != OPRT_OK) {
        s_pizza.initialized = false;
        return rt;
    }
    pizza_report_snapshot(&s_pizza.snapshot);
    return OPRT_OK;
}

void eaten_pizza_get_snapshot(pizza_snapshot_t *snapshot)
{
    if (snapshot == NULL || !s_pizza.initialized) {
        return;
    }
    tal_mutex_lock(s_pizza.mutex);
    *snapshot = s_pizza.snapshot;
    tal_mutex_unlock(s_pizza.mutex);
}

static void pizza_reset_timer_locked(void)
{
    s_pizza.elapsed_before_run_sec = 0U;
    s_pizza.snapshot.current_piece = 0U;
    s_pizza.snapshot.status = PIZZA_STATUS_IDLE;
    pizza_mark_for_render_locked();
}

OPERATE_RET eaten_pizza_set_configuration(uint32_t seconds, uint8_t piece_count)
{
    pizza_snapshot_t report;

    if (!s_pizza.initialized || !pizza_is_supported_total(seconds) ||
        !pizza_is_allowed_piece_count(seconds / 60U, piece_count)) {
        return OPRT_INVALID_PARM;
    }
    tal_mutex_lock(s_pizza.mutex);
    s_pizza.snapshot.total_duration_sec = seconds;
    s_pizza.snapshot.piece_count = piece_count;
    pizza_reset_timer_locked();
    pizza_save_config_locked();
    report = s_pizza.snapshot;
    tal_mutex_unlock(s_pizza.mutex);
    pizza_report_snapshot(&report);
    return OPRT_OK;
}

OPERATE_RET eaten_pizza_set_status(pizza_status_t status)
{
    pizza_snapshot_t report;
    SYS_TIME_T now;
    uint8_t piece;
    if (!s_pizza.initialized || status > PIZZA_STATUS_RUNNING) {
        return OPRT_INVALID_PARM;
    }
    now = tal_system_get_millisecond();
    tal_mutex_lock(s_pizza.mutex);
    if (status == PIZZA_STATUS_RUNNING) {
        if (s_pizza.snapshot.image_upload_status == PIZZA_UPLOAD_RECEIVING) {
            tal_mutex_unlock(s_pizza.mutex);
            return OPRT_RESOURCE_NOT_READY;
        }
        if (s_pizza.snapshot.status == PIZZA_STATUS_COMPLETED) {
            s_pizza.elapsed_before_run_sec = 0U;
            s_pizza.snapshot.current_piece = 0U;
            pizza_mark_for_render_locked();
        }
        if (s_pizza.snapshot.status != PIZZA_STATUS_RUNNING) {
            s_pizza.run_started_ms = now;
            s_pizza.snapshot.status = PIZZA_STATUS_RUNNING;
        }
    } else if (status == PIZZA_STATUS_IDLE) {
        if (s_pizza.snapshot.status == PIZZA_STATUS_RUNNING) {
            s_pizza.elapsed_before_run_sec += (uint32_t)(now - s_pizza.run_started_ms) / 1000U;
            if (s_pizza.elapsed_before_run_sec >= s_pizza.snapshot.total_duration_sec) {
                s_pizza.elapsed_before_run_sec = s_pizza.snapshot.total_duration_sec;
                s_pizza.snapshot.current_piece = s_pizza.snapshot.piece_count;
                s_pizza.snapshot.status = PIZZA_STATUS_COMPLETED;
                pizza_mark_for_render_locked();
                report = s_pizza.snapshot;
                tal_mutex_unlock(s_pizza.mutex);
                pizza_report_snapshot(&report);
                return OPRT_OK;
            }
            piece = (uint8_t)(((uint64_t)s_pizza.elapsed_before_run_sec *
                               s_pizza.snapshot.piece_count) /
                              s_pizza.snapshot.total_duration_sec);
            if (piece != s_pizza.snapshot.current_piece) {
                s_pizza.snapshot.current_piece = piece;
                pizza_mark_for_render_locked();
            }
        } else if (s_pizza.snapshot.status == PIZZA_STATUS_COMPLETED) {
            s_pizza.elapsed_before_run_sec = 0U;
            s_pizza.snapshot.current_piece = 0U;
            pizza_mark_for_render_locked();
        }
        s_pizza.snapshot.status = PIZZA_STATUS_IDLE;
    }
    report = s_pizza.snapshot;
    tal_mutex_unlock(s_pizza.mutex);
    pizza_report_snapshot(&report);
    return OPRT_OK;
}

OPERATE_RET eaten_pizza_set_theme(pizza_theme_t theme)
{
    pizza_snapshot_t report;
    if (!s_pizza.initialized || theme > PIZZA_THEME_CUSTOM) {
        return OPRT_INVALID_PARM;
    }
    tal_mutex_lock(s_pizza.mutex);
    if (theme == PIZZA_THEME_CUSTOM && !s_pizza.custom_ready) {
        tal_mutex_unlock(s_pizza.mutex);
        return OPRT_NOT_FOUND;
    }
    s_pizza.snapshot.theme = theme;
    pizza_mark_for_render_locked();
    if (theme != PIZZA_THEME_CUSTOM) {
        pizza_save_config_locked();
    }
    report = s_pizza.snapshot;
    tal_mutex_unlock(s_pizza.mutex);
    pizza_report_snapshot(&report);
    return OPRT_OK;
}

static uint32_t pizza_read_le32(const uint8_t *data)
{
    return (uint32_t)data[0] | ((uint32_t)data[1] << 8) |
           ((uint32_t)data[2] << 16) | ((uint32_t)data[3] << 24);
}

static OPERATE_RET pizza_fail_custom_upload(OPERATE_RET error)
{
    pizza_snapshot_t report;

    if (!s_pizza.initialized) {
        return error;
    }
    tal_mutex_lock(s_pizza.mutex);
    s_pizza.custom_ready = false;
    s_pizza.snapshot.image_upload_status = PIZZA_UPLOAD_ERROR;
    report = s_pizza.snapshot;
    tal_mutex_unlock(s_pizza.mutex);
    pizza_report_snapshot(&report);
    return error;
}

OPERATE_RET eaten_pizza_custom_image_chunk(const uint8_t *data, size_t length)
{
    uint32_t offset;
    uint32_t total;
    uint32_t raw_progress;
    uint8_t reported_progress;
    size_t payload_length;
    size_t expected_payload_length;
    pizza_snapshot_t report;
    bool report_needed = false;

    if (!s_pizza.initialized) {
        return OPRT_RESOURCE_NOT_READY;
    }
    if (data == NULL || length <= PIZZA_RAW_HEADER_BYTES ||
        length > PIZZA_RAW_PACKET_BYTES || memcmp(data, "EPZ1", 4) != 0) {
        return pizza_fail_custom_upload(OPRT_INVALID_PARM);
    }
    offset = pizza_read_le32(data + 4);
    total = pizza_read_le32(data + 8);
    payload_length = length - PIZZA_RAW_HEADER_BYTES;
    if (total != PIZZA_IMAGE_BYTES || offset >= total ||
        (offset % PIZZA_RAW_PAYLOAD_BYTES) != 0U) {
        return pizza_fail_custom_upload(OPRT_INVALID_PARM);
    }
    expected_payload_length = total - offset > PIZZA_RAW_PAYLOAD_BYTES
                                  ? PIZZA_RAW_PAYLOAD_BYTES
                                  : (size_t)(total - offset);
    if (payload_length != expected_payload_length) {
        return pizza_fail_custom_upload(OPRT_INVALID_PARM);
    }

    tal_mutex_lock(s_pizza.mutex);
    if (offset == 0U && s_pizza.snapshot.status == PIZZA_STATUS_RUNNING) {
        report = s_pizza.snapshot;
        tal_mutex_unlock(s_pizza.mutex);
        pizza_report_snapshot(&report);
        return OPRT_RESOURCE_NOT_READY;
    }
    if (s_pizza.custom_image == NULL) {
        s_pizza.custom_image = tal_psram_malloc(PIZZA_IMAGE_BYTES);
        if (s_pizza.custom_image == NULL) {
            s_pizza.snapshot.image_upload_status = PIZZA_UPLOAD_ERROR;
            report = s_pizza.snapshot;
            tal_mutex_unlock(s_pizza.mutex);
            pizza_report_snapshot(&report);
            return OPRT_MALLOC_FAILED;
        }
    }
    if (offset == 0U) {
        s_pizza.custom_received = 0U;
        s_pizza.custom_ready = false;
        s_pizza.snapshot.image_upload_status = PIZZA_UPLOAD_RECEIVING;
        s_pizza.snapshot.image_upload_progress = 0U;
        if (s_pizza.snapshot.theme == PIZZA_THEME_CUSTOM) {
            s_pizza.snapshot.theme = PIZZA_THEME_PIZZA;
            pizza_save_config_locked();
            pizza_mark_for_render_locked();
        }
        report_needed = true;
        PR_INFO("custom image upload started");
    } else if (offset < s_pizza.custom_received) {
        tal_mutex_unlock(s_pizza.mutex);
        PR_NOTICE("duplicate custom image chunk ignored: offset=%u", offset);
        return OPRT_OK;
    } else if (s_pizza.snapshot.image_upload_status != PIZZA_UPLOAD_RECEIVING) {
        s_pizza.custom_ready = false;
        s_pizza.snapshot.image_upload_status = PIZZA_UPLOAD_ERROR;
        report = s_pizza.snapshot;
        tal_mutex_unlock(s_pizza.mutex);
        pizza_report_snapshot(&report);
        return OPRT_COM_ERROR;
    }
    if (offset > s_pizza.custom_received) {
        s_pizza.custom_ready = false;
        s_pizza.snapshot.image_upload_status = PIZZA_UPLOAD_ERROR;
        report = s_pizza.snapshot;
        tal_mutex_unlock(s_pizza.mutex);
        pizza_report_snapshot(&report);
        return OPRT_COM_ERROR;
    }
    memcpy(s_pizza.custom_image + offset, data + PIZZA_RAW_HEADER_BYTES, payload_length);
    s_pizza.custom_received += (uint32_t)payload_length;
    s_pizza.custom_last_chunk_ms = tal_system_get_millisecond();

    raw_progress = (s_pizza.custom_received * 100U) / PIZZA_IMAGE_BYTES;
    reported_progress = (uint8_t)((raw_progress / 5U) * 5U);
    if (reported_progress > s_pizza.snapshot.image_upload_progress) {
        s_pizza.snapshot.image_upload_progress = reported_progress;
        report_needed = true;
    }
    if (s_pizza.custom_received == PIZZA_IMAGE_BYTES) {
        s_pizza.custom_ready = true;
        s_pizza.snapshot.image_upload_status = PIZZA_UPLOAD_READY;
        s_pizza.snapshot.image_upload_progress = 100U;
        s_pizza.snapshot.theme = PIZZA_THEME_CUSTOM;
        pizza_mark_for_render_locked();
        report_needed = true;
        PR_INFO("custom image upload complete");
    }
    report = s_pizza.snapshot;
    tal_mutex_unlock(s_pizza.mutex);
    if (report_needed) {
        pizza_report_snapshot(&report);
    }
    return OPRT_OK;
}

void eaten_pizza_button_toggle(void)
{
    pizza_snapshot_t snapshot = {0};
    if (!s_pizza.initialized) {
        return;
    }
    eaten_pizza_get_snapshot(&snapshot);
    if (snapshot.status == PIZZA_STATUS_RUNNING) {
        eaten_pizza_set_status(PIZZA_STATUS_IDLE);
    } else {
        eaten_pizza_set_status(PIZZA_STATUS_RUNNING);
    }
}
