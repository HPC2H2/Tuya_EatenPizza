#!/usr/bin/env python3
"""Convert an image to the GDEH0169E01 framebuffer and Tuya RAW-DP chunks."""

from __future__ import annotations

import argparse
import base64
import json
import struct
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


WIDTH = 400
HEIGHT = 400
FRAME_BYTES = 80_000
MAGIC = b"EPZ1"
DP_ID = 106
HEADER_BYTES = 12
PACKET_BYTES = 128
PAYLOAD_BYTES = PACKET_BYTES - HEADER_BYTES
MAX_SOURCE_BYTES = 5 * 1024 * 1024
SUPPORTED_FORMATS = {"JPEG", "PNG", "WEBP"}

# Nibble values consumed by EPD_1IN69_E6_Display().
PALETTE = {
    0: (0, 0, 0),
    1: (255, 255, 255),
    2: (255, 220, 0),
    3: (220, 30, 35),
    5: (30, 85, 180),
    6: (40, 145, 70),
}


def center_crop_square(image: Image.Image) -> Image.Image:
    size = min(image.width, image.height)
    left = (image.width - size) // 2
    top = (image.height - size) // 2
    return image.crop((left, top, left + size, top + size))


def nearest_color(pixel: tuple[int, int, int]) -> tuple[int, tuple[int, int, int]]:
    r, g, b = pixel
    nibble, rgb = min(
        PALETTE.items(),
        key=lambda item: (r - item[1][0]) ** 2
        + (g - item[1][1]) ** 2
        + (b - item[1][2]) ** 2,
    )
    return nibble, rgb


def convert_image(source: Path) -> tuple[bytes, Image.Image]:
    if source.stat().st_size > MAX_SOURCE_BYTES:
        raise ValueError("source image must not exceed 5 MiB")

    with Image.open(source) as opened:
        if opened.format not in SUPPORTED_FORMATS:
            raise ValueError("source image must be JPG, JPEG, PNG, or WebP")
        oriented = ImageOps.exif_transpose(opened)
        rgba = oriented.convert("RGBA")
        white = Image.new("RGBA", rgba.size, (255, 255, 255, 255))
        image = Image.alpha_composite(white, rgba).convert("RGB")
    image = center_crop_square(image).resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)

    mask = Image.new("1", (WIDTH, HEIGHT), 0)
    ImageDraw.Draw(mask).ellipse((5, 5, WIDTH - 6, HEIGHT - 6), fill=1)
    white = Image.new("RGB", image.size, PALETTE[1])
    image = Image.composite(image, white, mask)

    packed = bytearray([0x11] * FRAME_BYTES)
    preview = Image.new("RGB", (WIDTH, HEIGHT), PALETTE[1])
    source_pixels = image.load()
    preview_pixels = preview.load()

    for x in range(WIDTH):
        for y in range(HEIGHT):
            nibble, rgb = nearest_color(source_pixels[x, y])
            preview_pixels[x, y] = rgb
            index = y * (WIDTH // 2) + x // 2
            if x % 2 == 0:
                packed[index] = (packed[index] & 0x0F) | (nibble << 4)
            else:
                packed[index] = (packed[index] & 0xF0) | nibble

    return bytes(packed), preview


def write_c_header(path: Path, data: bytes, symbol: str) -> None:
    guard = "_".join(part.upper() for part in symbol.split()) + "_H"
    lines = [f"#ifndef {guard}", f"#define {guard}", "", "#include <stdint.h>", ""]
    lines.append(f"static const uint8_t {symbol}[{len(data)}] = {{")
    for offset in range(0, len(data), 16):
        row = ", ".join(f"0x{value:02X}" for value in data[offset : offset + 16])
        lines.append(f"    {row},")
    lines.extend(["};", "", f"#endif /* {guard} */", ""])
    path.write_text("\n".join(lines), encoding="utf-8")


def make_packets(data: bytes) -> list[str]:
    packets: list[str] = []
    for offset in range(0, len(data), PAYLOAD_BYTES):
        body = data[offset : offset + PAYLOAD_BYTES]
        packet = MAGIC + struct.pack("<II", offset, len(data)) + body
        if len(packet) > PACKET_BYTES:
            raise RuntimeError("internal RAW-DP packet size error")
        packets.append(base64.b64encode(packet).decode("ascii"))
    return packets


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Crop/quantize an image for GDEH0169E01 and package DP 106 chunks."
    )
    parser.add_argument("input", type=Path, help="source PNG/JPEG/WebP image")
    parser.add_argument(
        "--output-prefix",
        type=Path,
        help="output path without suffix (default: next to input)",
    )
    parser.add_argument("--symbol", default="g_custom_image", help="C array symbol")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if not args.input.is_file():
        raise SystemExit(f"input image not found: {args.input}")

    prefix = args.output_prefix or args.input.with_suffix("")
    prefix.parent.mkdir(parents=True, exist_ok=True)
    framebuffer, preview = convert_image(args.input)
    if len(framebuffer) != FRAME_BYTES:
        raise RuntimeError("internal framebuffer size error")

    binary_path = prefix.with_suffix(".bin")
    header_path = prefix.with_suffix(".h")
    preview_path = prefix.with_name(prefix.name + "_preview.png")
    packets_path = prefix.with_name(prefix.name + "_dp106.json")

    binary_path.write_bytes(framebuffer)
    write_c_header(header_path, framebuffer, args.symbol)
    preview.save(preview_path)
    packets = make_packets(framebuffer)
    if len(packets) != 690:
        raise RuntimeError("internal packet count error")
    packets_path.write_text(
        json.dumps(
            {
                "dp_id": DP_ID,
                "encoding": "base64",
                "packet_format": "EPZ1 + offset_le32 + total_le32 + payload",
                "frame_bytes": len(framebuffer),
                "packet_max_bytes": PACKET_BYTES,
                "header_bytes": HEADER_BYTES,
                "chunk_payload_bytes": PAYLOAD_BYTES,
                "packet_count": len(packets),
                "packets": packets,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )

    print(f"framebuffer: {binary_path}")
    print(f"C header:    {header_path}")
    print(f"preview:     {preview_path}")
    print(f"DP packets:  {packets_path} ({len(packets)} packets)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
