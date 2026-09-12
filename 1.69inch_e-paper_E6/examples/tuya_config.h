#ifndef TUYA_CONFIG_H
#define TUYA_CONFIG_H

/* Hardware authorization stored by TuyaOpen takes precedence over UUID/authkey. */
#if defined(__has_include)
#if __has_include("tuya_config_private.h")
#include "tuya_config_private.h"
#endif
#endif

#ifndef TUYA_PRODUCT_ID
#define TUYA_PRODUCT_ID "REPLACE_WITH_TUYA_PRODUCT_ID"
#endif
#ifndef TUYA_OPENSDK_UUID
#define TUYA_OPENSDK_UUID "REPLACE_WITH_DEVICE_UUID"
#endif
#ifndef TUYA_OPENSDK_AUTHKEY
#define TUYA_OPENSDK_AUTHKEY "REPLACE_WITH_DEVICE_AUTHKEY"
#endif

#endif
