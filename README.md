# 🧩 Tuya Growth Puzzle — 涂鸦生长拼图计时器

> **时间不是被消耗，而是被一块一块地“拼合”完整。**  
> 基于涂鸦 AICore 开发板 + 圆形彩色墨水屏的低干扰专注计时器，支持自定义图片与时间节奏，让专注变得可见、可感、可珍藏。

![Demo](./assets/demo.jpg)  
*（示意图：墨水屏逐块点亮拼图 + 手机 App 设置界面）*

---

## 🌟 核心功能

- ✅ **双参数自由设置**（手机 App）：
  - 总时长：15 ~ 135 分钟
  - 时间步长：1 ~ 15 分钟（每过多久点亮一块拼图）
- ✅ **智能拼图生成**：
  - 拼图块数 = `总时长 ÷ 步长`，**最大 9 块**
  - 超限时自动优化步长，确保体验流畅
- ✅ **个性化图像支持**：
  - 内置多套主题（森林 / 星空 / 电路）
  - **支持用户上传任意图片**，自动裁剪为正方形并分割
- ✅ **墨水屏友好设计**：
  - 每步仅**局刷新增拼图块**（<1s），避免 10s 全刷
  - 残影抑制 + 圆形布局优化
- ✅ **涂鸦 IoT 全链路集成**：
  - App → 云端 → 设备指令下发
  - 计时完成自动推送手机通知
  - 进度实时同步至 App

---

## 📦 硬件清单

本项目基于大连佳显 GDEH0169E01 圆形彩色墨水屏构建，核心组件如下：

| 组件 | 型号 | 说明 |
|------|------|------|
| 彩色墨水屏 | GDEH0169E01 | 400×400 分辨率，6 色，圆形显示 |
| FPC 排线 | FPC-169E01 | 30Pin 排线，连接屏幕与转接板 |
| SPI 转接板 | DESPI-C169 | 集成驱动芯片，支持 SPI 接口通信 |
| 主控开发板 | 涂鸦 AICore Wi-Fi SoC 开发板 | 提供 WiFi、MCU、Tuya SDK 支持 |

> ⚠️ 注意：GDEH0169E01 屏幕需搭配 DESPI-C169 转接板才能正常工作，FPC 为必选连接线。

---

## ☁️ 涂鸦平台集成说明

本项目严格遵循比赛要求，深度调用涂鸦 IoT 平台服务：

### 1. 产品 DP 点定义
| DP ID | 名称 | 类型 | 说明 |
|-------|------|------|------|
| 101 | `total_duration` | value | 总时长（秒） |
| 102 | `step_interval` | value | 用户设置的步长（分钟） |
| 103 | `actual_step` | value | 实际使用的步长（分钟） |
| 104 | `piece_count` | value | 拼图总块数（1~9） |
| 105 | `current_piece` | value | 当前已点亮块数 |
| 106 | `timer_status` | enum | `idle` / `running` / `completed` |

### 2. 云端能力调用
- 设备通过 **MQTT over TLS** 连接涂鸦云
- App 通过 **Tuya Smart App SDK** 下发指令
- 完成时触发 **涂鸦自动化场景**，推送系统通知

```mermaid
graph LR
A[手机 App] -->|1. 下发指令| B(涂鸦 IoT 云平台)
B -->|2. 转发指令| C[涂鸦 AICore 开发板]
C -->|3. 上报状态| B
B -->|4. 推送通知| A
```

---

## 📱 使用流程

1. **配网**  
   长按设备按钮进入配网模式，在 **涂鸦 Smart App** 中添加设备。

2. **设置专注任务**  
   - 在 App 中输入：总时长（如 60min）、步长（如 10min）
   - 选择或上传一张图片（建议比例 1:1）
   - 点击“开始专注”

3. **专注进行中**  
   - 墨水屏初始显示空白框架
   - 每 `实际步长` 分钟，**局刷点亮下一块拼图**
   - 屏幕文字更新：“已完成 3/6”

4. **专注完成**  
   - 墨水屏全刷展示完整拼图
   - 手机收到通知：“🎯 专注成功！你的拼图已完整”

---

## 🛠 开发说明

### 目录结构
├── firmware/          # AICore 板固件（C/C++）
│   ├── main.c
│   ├── tuya_dp_handler.c
│   └── eink_driver/
│       ├── gdeh0169e01.c
│       └── partial_refresh.c
├── app-utils/         # App 辅助工具（Python/JS）
│   ├── image_processor.py   # 图片裁剪 & 分割
│   └── puzzle_layout.json   # 布局配置（1~9块坐标）
├── assets/            # 示例图片、演示视频
└── README.md

### 编译依赖
- 涂鸦 TuyaOpen
- GCC ARM Embedded Toolchain
- Python 3.8+（用于图片预处理）

---

## 🎥 演示视频


---

## 📜 License

本项目仅供学习与参赛使用。  
This project uses code from TuyaOpen (https://github.com/tuya/TuyaOpen),
which is licensed under the Apache License, Version 2.0.
See ./third_party/TuyaOpen/LICENSE for details.

---

> Made with ❤️ for the Tuya Eink Application Development Competition 2026
> Developer: HPC2H2
