#!/usr/bin/env python3
"""Desktop preview for the GDEH0169E01 Eaten Pizza firmware."""

from __future__ import annotations

import argparse
import math
import re
import tkinter as tk
import zlib
from pathlib import Path
from tkinter import filedialog, messagebox, ttk

from PIL import Image, ImageTk

from image_processor import convert_image


WIDTH = 400
HEIGHT = 400
CENTER = 200
RADIUS = 188
FRAME_BYTES = 80_000

# Keep these values in sync with app-utils/image_processor.py and the panel driver.
PALETTE = {
    0: (0, 0, 0),
    1: (255, 255, 255),
    2: (255, 220, 0),
    3: (220, 30, 35),
    5: (30, 85, 180),
    6: (40, 145, 70),
}

PIECE_VECTORS = (
    ((0, -1000),),
    ((0, -1000), (0, 1000)),
    ((0, -1000), (866, 500), (-866, 500)),
    ((0, -1000), (1000, 0), (0, 1000), (-1000, 0)),
    ((0, -1000), (951, -309), (588, 809), (-588, 809), (-951, -309)),
    ((0, -1000), (866, -500), (866, 500), (0, 1000), (-866, 500), (-866, -500)),
    ((0, -1000), (782, -623), (975, 223), (434, 901), (-434, 901), (-975, 223), (-782, -623)),
    ((0, -1000), (707, -707), (1000, 0), (707, 707), (0, 1000), (-707, 707), (-1000, 0), (-707, -707)),
    ((0, -1000), (643, -766), (985, -174), (866, 500), (342, 940), (-342, 940), (-866, 500), (-985, -174), (-643, -766)),
)

ALLOWED_PIECES = {
    15: (1, 3, 5),
    30: (1, 3, 5, 6),
    45: (1, 3, 5, 9),
    60: (1, 3, 5, 6),
    90: (1, 3, 5, 6, 9),
}

DIGIT_ROWS = (
    (7, 5, 5, 5, 7), (2, 6, 2, 2, 7), (7, 1, 7, 4, 7),
    (7, 1, 7, 1, 7), (5, 5, 7, 1, 1), (7, 4, 7, 1, 7),
    (7, 4, 7, 5, 7), (7, 1, 1, 1, 1), (7, 5, 7, 5, 7),
    (7, 5, 7, 1, 7), (1, 1, 2, 4, 4),
)

THEME_LABELS = {
    "披萨（固件默认）": "pizza",
    "星空": "stars",
    "初音未来（miku.png）": "miku",
    "自定义图片": "custom",
}

STATUS_LABELS = {
    "空闲": "idle",
    "运行中": "running",
    "已完成（全白）": "completed",
}

ROTATIONS = {
    "0°（固件坐标）": 0,
    "顺时针 90°": 90,
    "180°": 180,
    "逆时针 90°": 270,
}


def piece_duration(total_minutes: int, piece_count: int) -> int:
    if piece_count not in ALLOWED_PIECES.get(total_minutes, ()):
        raise ValueError("专注时长与图块数量组合不合法")
    return total_minutes // piece_count


def new_pixels(color: int = 1) -> bytearray:
    return bytearray([color] * (WIDTH * HEIGHT))


def set_pixel(pixels: bytearray, x: int, y: int, color: int) -> None:
    if 0 <= x < WIDTH and 0 <= y < HEIGHT:
        pixels[y * WIDTH + x] = color & 0x0F


def draw_circle(pixels: bytearray, cx: int, cy: int, radius: int, color: int) -> None:
    radius_squared = radius * radius
    for y in range(max(0, cy - radius), min(HEIGHT - 1, cy + radius) + 1):
        dy = y - cy
        span = math.isqrt(radius_squared - dy * dy)
        start = max(0, cx - span)
        end = min(WIDTH - 1, cx + span)
        offset = y * WIDTH
        pixels[offset + start : offset + end + 1] = bytes([color]) * (end - start + 1)


def generate_pizza() -> bytearray:
    toppings = (
        (150, 110, 3), (245, 105, 3), (112, 177, 5), (202, 155, 6),
        (286, 180, 3), (158, 235, 5), (245, 252, 6), (205, 310, 3),
        (105, 285, 6), (302, 275, 5), (72, 210, 3), (325, 225, 6),
    )
    pixels = new_pixels(1)
    draw_circle(pixels, CENTER, CENTER, 188, 0)
    draw_circle(pixels, CENTER, CENTER, 180, 2)
    draw_circle(pixels, CENTER, CENTER, 158, 3)
    draw_circle(pixels, CENTER, CENTER, 150, 2)
    for x, y, color in toppings:
        draw_circle(pixels, x, y, 13, color)
        draw_circle(pixels, x - 3, y - 3, 4, 0)
    return pixels


def generate_stars() -> bytearray:
    pixels = new_pixels(1)
    draw_circle(pixels, CENTER, CENTER, 188, 5)
    for y in range(35, 365, 45):
        x_start = 35 + ((y // 45) & 1) * 22
        for x in range(x_start, 365, 45):
            color = 3 if (x + y) % 3 == 0 else 2
            draw_circle(pixels, x, y, 7, color)
            set_pixel(pixels, x - 10, y, color)
            set_pixel(pixels, x + 10, y, color)
            set_pixel(pixels, x, y - 10, color)
            set_pixel(pixels, x, y + 10, color)
    return pixels


def piece_for_vector(dx: int, dy: int, piece_count: int) -> int:
    vectors = PIECE_VECTORS[piece_count - 1]
    return max(range(piece_count), key=lambda i: dx * vectors[i][0] + dy * vectors[i][1])


def erase_finished_pieces(pixels: bytearray, current_piece: int, piece_count: int) -> None:
    if current_piece == 0:
        return
    radius_squared = RADIUS * RADIUS
    for y in range(HEIGHT):
        dy = y - CENTER
        for x in range(WIDTH):
            dx = x - CENTER
            if dx * dx + dy * dy <= radius_squared:
                if piece_for_vector(dx, dy, piece_count) < current_piece:
                    pixels[y * WIDTH + x] = 1


def draw_glyph(pixels: bytearray, x: int, y: int, glyph: int, color: int) -> None:
    scale = 4
    for row in range(5):
        for col in range(3):
            if DIGIT_ROWS[glyph][row] & (1 << (2 - col)):
                for sy in range(scale):
                    start = (y + row * scale + sy) * WIDTH + x + col * scale
                    pixels[start : start + scale] = bytes([color]) * scale


def draw_progress(pixels: bytearray, current_piece: int, piece_count: int) -> None:
    color = 3 if current_piece == piece_count else 0
    draw_circle(pixels, CENTER, CENTER, 30, 1)
    draw_glyph(pixels, 174, 188, current_piece, color)
    draw_glyph(pixels, 192, 188, 10, color)
    draw_glyph(pixels, 210, 188, piece_count, color)


def find_image_header() -> Path | None:
    candidates = [
        Path(__file__).resolve().parents[1]
        / "1.69inch_e-paper_E6"
        / "examples"
        / "miku_image.h",
        Path.cwd() / "1.69inch_e-paper_E6" / "examples" / "miku_image.h",
        Path.cwd() / "examples" / "miku_image.h",
    ]
    return next((path for path in candidates if path.is_file()), None)


def load_c_array(path: Path, symbol: str = "g_miku_image") -> bytes:
    text = path.read_text(encoding="utf-8", errors="ignore")
    match = re.search(
        rf"\b{re.escape(symbol)}\s*\[[^]]*]\s*=\s*\{{(.*?)\}}\s*;",
        text,
        flags=re.DOTALL,
    )
    if not match:
        raise ValueError(f"在 {path} 中找不到 {symbol}")
    values = bytes(int(token, 16) for token in re.findall(r"0x([0-9A-Fa-f]{1,2})", match.group(1)))
    if len(values) != FRAME_BYTES:
        raise ValueError(f"{symbol} 长度应为 {FRAME_BYTES}，实际为 {len(values)}")
    return values


def decode_framebuffer(data: bytes) -> bytearray:
    if len(data) != FRAME_BYTES:
        raise ValueError(f"帧长度应为 {FRAME_BYTES}，实际为 {len(data)}")
    pixels = new_pixels()
    for y in range(HEIGHT):
        row = y * (WIDTH // 2)
        output = y * WIDTH
        for x_byte in range(WIDTH // 2):
            value = data[row + x_byte]
            pixels[output + x_byte * 2] = value >> 4
            pixels[output + x_byte * 2 + 1] = value & 0x0F
    return pixels


def encode_framebuffer(pixels: bytearray) -> bytes:
    packed = bytearray(FRAME_BYTES)
    for y in range(HEIGHT):
        row = y * (WIDTH // 2)
        source = y * WIDTH
        for x_byte in range(WIDTH // 2):
            packed[row + x_byte] = (
                pixels[source + x_byte * 2] << 4
            ) | pixels[source + x_byte * 2 + 1]
    return bytes(packed)


def quantize_custom(path: Path) -> bytearray:
    framebuffer, _preview = convert_image(path)
    return decode_framebuffer(framebuffer)


def pixels_to_image(pixels: bytearray) -> Image.Image:
    rgb = bytearray(WIDTH * HEIGHT * 3)
    for index, color in enumerate(pixels):
        value = PALETTE.get(color, (255, 0, 255))
        rgb[index * 3 : index * 3 + 3] = bytes(value)
    return Image.frombytes("RGB", (WIDTH, HEIGHT), bytes(rgb))


def render_frame(
    theme: str,
    current_piece: int,
    piece_count: int,
    status: str,
    image_header: Path | None,
    custom_pixels: bytearray | None,
) -> tuple[Image.Image, bytes]:
    if status == "completed":
        logical = new_pixels(1)
    else:
        if theme == "pizza":
            logical = generate_pizza()
        elif theme == "stars":
            logical = generate_stars()
        elif theme == "miku":
            if image_header is None:
                raise FileNotFoundError("找不到固件 image.h")
            logical = decode_framebuffer(load_c_array(image_header))
        elif theme == "custom":
            logical = bytearray(custom_pixels) if custom_pixels is not None else generate_pizza()
        else:
            raise ValueError(f"未知主题：{theme}")
        erase_finished_pieces(logical, current_piece, piece_count)
        draw_progress(logical, current_piece, piece_count)

    # Encode and decode once so the preview follows the real 80,000-byte panel path.
    packed = encode_framebuffer(logical)
    panel_pixels = decode_framebuffer(packed)
    return pixels_to_image(panel_pixels), packed


class PizzaSimulator(tk.Tk):
    def __init__(self) -> None:
        super().__init__()
        self.title("Eaten Pizza · GDEH0169E01 墨水屏模拟器")
        self.geometry("1030x700")
        self.minsize(900, 650)
        self.configure(bg="#20242a")

        self.image_header = find_image_header()
        self.custom_pixels: bytearray | None = None
        self.current_image: Image.Image | None = None
        self.photo: ImageTk.PhotoImage | None = None

        self.theme_var = tk.StringVar(value="披萨（固件默认）")
        self.status_var = tk.StringVar(value="空闲")
        self.total_var = tk.IntVar(value=60)
        self.piece_var = tk.IntVar(value=6)
        self.current_var = tk.IntVar(value=0)
        self.rotation_var = tk.StringVar(value="0°（固件坐标）")
        self.info_var = tk.StringVar()
        self.coordinate_var = tk.StringVar(value="将鼠标放到预览上可查看坐标与颜色")

        self._build_ui()
        for variable in (
            self.theme_var,
            self.status_var,
            self.total_var,
            self.piece_var,
            self.current_var,
            self.rotation_var,
        ):
            variable.trace_add("write", self._schedule_render)
        self.after_idle(self.render)

    def _build_ui(self) -> None:
        style = ttk.Style(self)
        if "vista" in style.theme_names():
            style.theme_use("vista")

        outer = tk.Frame(self, bg="#20242a")
        outer.pack(fill="both", expand=True, padx=18, pady=18)

        preview_card = tk.Frame(outer, bg="#111418", highlightbackground="#3b424b", highlightthickness=1)
        preview_card.pack(side="left", fill="both", expand=True)

        title = tk.Label(
            preview_card,
            text="400 × 400 面板理论画面",
            bg="#111418",
            fg="#f2f4f7",
            font=("Microsoft YaHei UI", 15, "bold"),
        )
        title.pack(pady=(16, 6))
        tk.Label(
            preview_card,
            text="▲ 屏幕 / FPC 顶部",
            bg="#111418",
            fg="#9ca7b5",
            font=("Microsoft YaHei UI", 10),
        ).pack()

        self.preview_label = tk.Label(preview_card, bg="#30363d", cursor="crosshair")
        self.preview_label.pack(expand=True, padx=24, pady=12)
        self.preview_label.bind("<Motion>", self._show_coordinate)
        self.preview_label.bind("<Leave>", lambda _event: self.coordinate_var.set("将鼠标放到预览上可查看坐标与颜色"))

        tk.Label(
            preview_card,
            textvariable=self.coordinate_var,
            bg="#111418",
            fg="#9ca7b5",
            font=("Consolas", 10),
        ).pack(pady=(0, 14))

        controls = tk.Frame(outer, bg="#f3f5f7", width=330)
        controls.pack(side="right", fill="y", padx=(16, 0))
        controls.pack_propagate(False)

        tk.Label(
            controls,
            text="固件状态",
            bg="#f3f5f7",
            fg="#1c232b",
            font=("Microsoft YaHei UI", 15, "bold"),
        ).pack(anchor="w", padx=22, pady=(22, 16))

        form = tk.Frame(controls, bg="#f3f5f7")
        form.pack(fill="x", padx=22)
        self._combo_row(form, "主题（DP 105）", self.theme_var, tuple(THEME_LABELS))
        self._combo_row(form, "专注时长（DP 101）", self.total_var, tuple(ALLOWED_PIECES))
        self.piece_combo = self._combo_row(
            form, "图块数量（DP 102）", self.piece_var, ALLOWED_PIECES[60]
        )
        self._combo_row(form, "专注状态（DP 104）", self.status_var, tuple(STATUS_LABELS))

        tk.Label(form, text="已消除图块数（DP 103）", bg="#f3f5f7", fg="#333b44").pack(anchor="w", pady=(12, 3))
        self.current_scale = tk.Scale(
            form,
            from_=0,
            to=6,
            orient="horizontal",
            variable=self.current_var,
            resolution=1,
            showvalue=True,
            bg="#f3f5f7",
            highlightthickness=0,
        )
        self.current_scale.pack(fill="x")

        self._combo_row(form, "查看方向", self.rotation_var, tuple(ROTATIONS))

        ttk.Button(form, text="加载自定义图片…", command=self.load_custom).pack(fill="x", pady=(18, 5))
        ttk.Button(form, text="导出当前预览 PNG…", command=self.export_png).pack(fill="x", pady=5)

        separator = ttk.Separator(controls, orient="horizontal")
        separator.pack(fill="x", padx=22, pady=18)
        tk.Label(
            controls,
            textvariable=self.info_var,
            justify="left",
            anchor="nw",
            bg="#f3f5f7",
            fg="#333b44",
            font=("Microsoft YaHei UI", 10),
        ).pack(fill="x", padx=22)

        image_path = str(self.image_header) if self.image_header else "未找到"
        tk.Label(
            controls,
            text=f"Miku 固件资源：\n{image_path}",
            justify="left",
            wraplength=286,
            bg="#f3f5f7",
            fg="#707984",
            font=("Microsoft YaHei UI", 8),
        ).pack(side="bottom", fill="x", padx=22, pady=20)

    @staticmethod
    def _combo_row(parent: tk.Widget, label: str, variable: tk.Variable, values: tuple) -> ttk.Combobox:
        tk.Label(parent, text=label, bg="#f3f5f7", fg="#333b44").pack(anchor="w", pady=(10, 3))
        combo = ttk.Combobox(parent, textvariable=variable, values=values, state="readonly")
        combo.pack(fill="x")
        return combo

    def _schedule_render(self, *_args: object) -> None:
        if hasattr(self, "_render_job"):
            self.after_cancel(self._render_job)
        self._render_job = self.after(80, self.render)

    def render(self) -> None:
        try:
            total = int(self.total_var.get())
            allowed = ALLOWED_PIECES[total]
            self.piece_combo.configure(values=allowed)
            pieces = int(self.piece_var.get())
            if pieces not in allowed:
                pieces = allowed[-1]
                self.piece_var.set(pieces)
            actual = piece_duration(total, pieces)
            self.current_scale.configure(to=pieces)
            current = min(pieces, max(0, int(self.current_var.get())))
            if current != self.current_var.get():
                self.current_var.set(current)
            theme = THEME_LABELS[self.theme_var.get()]
            status = STATUS_LABELS[self.status_var.get()]
            image, packed = render_frame(
                theme, current, pieces, status, self.image_header, self.custom_pixels
            )
            rotation = ROTATIONS[self.rotation_var.get()]
            if rotation:
                image = image.rotate(-rotation, expand=False)
            self.current_image = image

            display_size = min(570, max(400, self.winfo_height() - 125))
            shown = image.resize((display_size, display_size), Image.Resampling.NEAREST)
            self.photo = ImageTk.PhotoImage(shown)
            self.preview_label.configure(image=self.photo, width=display_size, height=display_size)
            self.info_var.set(
                f"每块持续时间：{actual} 分钟\n"
                f"图块数量（DP 102）：{pieces}\n"
                f"当前进度：{current}/{pieces}\n"
                f"面板帧：{len(packed):,} 字节\n"
                f"CRC32：{zlib.crc32(packed):08X}\n\n"
                "预览经过与固件一致的逐行\n4-bit 编码、解码后再显示。"
            )
        except Exception as exc:  # Keep invalid temporary Spinbox text from closing the app.
            self.info_var.set(f"无法生成预览：\n{exc}")

    def load_custom(self) -> None:
        filename = filedialog.askopenfilename(
            title="选择自定义图片",
            filetypes=(("图片", "*.png;*.jpg;*.jpeg;*.webp"), ("所有文件", "*.*")),
        )
        if not filename:
            return
        try:
            self.custom_pixels = quantize_custom(Path(filename))
            self.theme_var.set("自定义图片")
            self.render()
        except Exception as exc:
            messagebox.showerror("图片转换失败", str(exc), parent=self)

    def export_png(self) -> None:
        if self.current_image is None:
            return
        filename = filedialog.asksaveasfilename(
            title="导出预览",
            defaultextension=".png",
            filetypes=(("PNG 图片", "*.png"),),
        )
        if filename:
            self.current_image.save(filename)

    def _show_coordinate(self, event: tk.Event) -> None:
        if self.current_image is None or self.photo is None:
            return
        shown_width = self.photo.width()
        shown_height = self.photo.height()
        if not (0 <= event.x < shown_width and 0 <= event.y < shown_height):
            return
        x = min(WIDTH - 1, event.x * WIDTH // shown_width)
        y = min(HEIGHT - 1, event.y * HEIGHT // shown_height)
        rgb = self.current_image.getpixel((x, y))
        nibble = next((key for key, value in PALETTE.items() if value == rgb), -1)
        self.coordinate_var.set(f"x={x:03d}  y={y:03d}  color={nibble}  RGB={rgb}")


def self_test(output: Path | None = None, output_theme: str = "pizza") -> None:
    assert piece_duration(60, 6) == 10
    assert piece_duration(45, 9) == 5
    try:
        piece_duration(45, 6)
    except ValueError:
        pass
    else:
        raise AssertionError("45 minutes / 6 pieces must be rejected")
    image_header = find_image_header()
    image, packed = render_frame("pizza", 0, 6, "idle", image_header, None)
    assert image.size == (WIDTH, HEIGHT)
    assert len(packed) == FRAME_BYTES
    assert encode_framebuffer(decode_framebuffer(packed)) == packed
    test_pixels = new_pixels(1)
    set_pixel(test_pixels, 0, 0, 2)
    set_pixel(test_pixels, 1, 0, 3)
    set_pixel(test_pixels, 0, 1, 5)
    test_packed = encode_framebuffer(test_pixels)
    assert test_packed[0] == 0x23
    assert test_packed[WIDTH // 2] == 0x51
    assert image.getpixel((0, 0)) == PALETTE[1]
    assert image.getpixel((200, 20)) == PALETTE[2]
    erased, _ = render_frame("pizza", 1, 6, "idle", find_image_header(), None)
    assert erased.getpixel((200, 20)) == PALETTE[1]
    if image_header is not None:
        miku, miku_packed = render_frame("miku", 0, 6, "idle", image_header, None)
        assert miku.size == (WIDTH, HEIGHT)
        assert len(miku_packed) == FRAME_BYTES
    if output is not None:
        output_image, _ = render_frame(output_theme, 0, 6, "idle", image_header, None)
        output_image.save(output)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--self-test", action="store_true", help="run renderer checks without opening the GUI")
    parser.add_argument("--output", type=Path, help="write the self-test preview PNG")
    parser.add_argument("--theme", choices=("pizza", "stars", "miku"), default="pizza")
    args = parser.parse_args()
    if args.self_test:
        self_test(args.output, args.theme)
        print("pizza simulator self-test: OK")
        return 0
    app = PizzaSimulator()
    app.mainloop()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
