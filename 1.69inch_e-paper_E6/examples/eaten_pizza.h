#ifndef EATEN_PIZZA_H
#define EATEN_PIZZA_H

#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>

#include "tuya_cloud_types.h"

#define PIZZA_DP_TOTAL_DURATION       101
#define PIZZA_DP_PIECE_COUNT          102
#define PIZZA_DP_CURRENT_PIECE        103
#define PIZZA_DP_TIMER_STATUS         104
#define PIZZA_DP_THEME                105
#define PIZZA_DP_CUSTOM_IMAGE         106
#define PIZZA_DP_IMAGE_UPLOAD_STATUS  107
#define PIZZA_DP_IMAGE_UPLOAD_PROGRESS 108

#define PIZZA_IMAGE_BYTES        80000U
#define PIZZA_RAW_HEADER_BYTES   12U
#define PIZZA_RAW_PACKET_BYTES   128U
#define PIZZA_RAW_PAYLOAD_BYTES  116U
#define PIZZA_UPLOAD_TIMEOUT_MS  30000U

typedef enum {
    PIZZA_STATUS_IDLE = 0,
    PIZZA_STATUS_RUNNING,
    PIZZA_STATUS_COMPLETED,
} pizza_status_t;

typedef enum {
    PIZZA_THEME_PIZZA = 0,
    PIZZA_THEME_STARS,
    PIZZA_THEME_MIKU,
    PIZZA_THEME_CUSTOM,
} pizza_theme_t;

typedef enum {
    PIZZA_UPLOAD_IDLE = 0,
    PIZZA_UPLOAD_RECEIVING,
    PIZZA_UPLOAD_READY,
    PIZZA_UPLOAD_ERROR,
} pizza_upload_status_t;

typedef struct {
    uint32_t total_duration_sec;
    uint8_t piece_count;
    uint8_t current_piece;
    pizza_status_t status;
    pizza_theme_t theme;
    pizza_upload_status_t image_upload_status;
    uint8_t image_upload_progress;
} pizza_snapshot_t;

typedef void (*pizza_state_report_cb)(const pizza_snapshot_t *snapshot);

OPERATE_RET eaten_pizza_init(pizza_state_report_cb report_cb);
void eaten_pizza_get_snapshot(pizza_snapshot_t *snapshot);
OPERATE_RET eaten_pizza_set_configuration(uint32_t seconds, uint8_t piece_count);
OPERATE_RET eaten_pizza_set_status(pizza_status_t status);
OPERATE_RET eaten_pizza_set_theme(pizza_theme_t theme);
OPERATE_RET eaten_pizza_custom_image_chunk(const uint8_t *data, size_t length);
void eaten_pizza_button_toggle(void);

#endif
