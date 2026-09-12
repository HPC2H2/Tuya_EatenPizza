# 拼好时 Ray 面板

这是“拼好时 / Eaten Pizza”400×400 六色圆形墨水屏专注计时器的涂鸦 Ray 面板小程序。面板通过 DP101 ～ DP108 读取和控制 T5 AICore 固件，并以设备上报状态为最终依据。

## 当前状态

- 已实现 DP 快照同步、离线/异常状态处理和操作确认超时。
- 已实现专注时长与图块数量的合法组合限制，以及 DP101、DP102 成组下发。
- 已实现动态分段进度环、开始/暂停/继续/再次开始和内置主题切换。
- 已实现 DP106 的`EPZ1`分包协议、串行发送队列及 DP107/108 上传状态展示。
- **自定义图片尚未完成端到端联调。** 当前图片选择后可能无法正确取得尺寸，RJS 六色量化和真机上传未验证成功；不得把该功能标记为可用。

当前建议使用披萨、星空或 Miku 内置主题测试专注计时和设备联动。

## DP 模型

|  DP | 标识符                  | 类型       | 面板行为                           |
| --: | ----------------------- | ---------- | ---------------------------------- |
| 101 | `total_duration`        | Enum / rw  | 与 DP102 成组下发                  |
| 102 | `piece_count`           | Enum / rw  | 选项由 DP101 动态限制              |
| 103 | `current_piece`         | Value / ro | 只读取设备上报                     |
| 104 | `timer_status`          | Enum / rw  | 只下发`idle`或`running`            |
| 105 | `theme`                 | Enum / rw  | `custom`仅在 DP107 为`ready`时允许 |
| 106 | `custom_image`          | Raw / wr   | 单包最多 128 字节，不可回读        |
| 107 | `image_upload_status`   | Enum / ro  | 只读取设备上报                     |
| 108 | `image_upload_progress` | Value / ro | 只读取 0 ～ 100、步长 5 的设备进度 |

合法配置：

- 15 分钟：1、3、5 块
- 30 分钟：1、3、5、6 块
- 45 分钟：1、3、5、9 块
- 60 分钟：1、3、5、6 块
- 90 分钟：1、3、5、6、9 块

每块持续时间由“专注总时长 ÷ 图块数量”自动计算，用户不能单独设置步长。

## 开发与构建

推荐使用 Tuya MiniApp IDE 直接导入本目录。项目配置位于`project.tuya.json`，构建输出目录为`dist/tuya`。

命令行需要 Node.js 18，推荐使用 pnpm 9.x：

```powershell
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
```

常用命令：

```powershell
pnpm start      # 启动Ray开发编译
pnpm typecheck  # TypeScript检查
pnpm build      # 生成正式Tuya构建产物
```

`dist/`、`node_modules/`、`.ray/`和`.ide-check/`均为本地生成内容，不应提交到 Git。提交前的 Husky 钩子会运行 lint-staged、ESLint、Prettier 和 commitlint。

## 设备初始状态

首次启动且固件没有保存配置时，设备默认上报：

```text
total_duration=min_60
piece_count=piece_6
current_piece=0
timer_status=idle
theme=pizza
image_upload_status=idle
image_upload_progress=0
```

面板进入页面时只同步这些状态，不主动下发默认值。DP106 是只写通道，不参与完整快照判定。

## IDE 与手机测试

1. 在 Tuya MiniApp IDE 中登录与设备相同区域的账号。
2. 使用面板工具选择已配网的真实设备。
3. 可点击“真机调试”生成二维码，用智能生活 App 扫码加载当前代码。
4. 稳定测试时，在 IDE 上传源码，并在小程序开发者平台将开发版本设为体验版。
5. 添加智能生活 App 账号到体验白名单，生成真实设备体验二维码后扫码进入。

体验版本不要求正式发布。只有审核通过、发布上线，并在产品“02 设备交互”中关联该面板后，普通用户才能从设备卡片直接进入。

## 自定义图片协议

目标帧为 400×400 六色 4-bit 数据，共 80,000 字节。每个 DP106 Raw 包为：

```text
EPZ1（4字节） + offset（uint32 little-endian）
+ total（uint32 little-endian，固定80000） + payload（最多116字节）
```

前 689 包载荷 116 字节，最后一包载荷 76 字节，共 690 包。必须从 offset 0 开始严格串行发送。DP108 是设备粗粒度接收进度，不是逐包 ACK，也不能用面板本地发送进度代替。

完整业务、DP 备注和固件构建说明请查看仓库根目录的[`README.md`](../README.md)。
