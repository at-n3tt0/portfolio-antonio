"""Generate vectorized 'at' mark SVG from Inter Black font, font-independent."""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
import sys

FONT = r"C:\Users\antonio.neto\AppData\Local\Temp\inter-900.ttf"
OUT_FULL = r"C:\Users\antonio.neto\portfolio-antonio\public\brand\at-mark.svg"
OUT_TILE = r"C:\Users\antonio.neto\portfolio-antonio\public\brand\at-mark-tile.svg"
OUT_ICON = r"C:\Users\antonio.neto\portfolio-antonio\app\icon.svg"

font = TTFont(FONT)
cmap = font.getBestCmap()
glyph_set = font.getGlyphSet()
units_per_em = font["head"].unitsPerEm
hmtx = font["hmtx"]

paths = []
x_cursor = 0
tracking = -120  # tight kerning to mimic brand-kit letter-spacing=-55 at large size

for ch in "at":
    gname = font.getBestCmap()[ord(ch)]
    pen = SVGPathPen(glyph_set)
    glyph = glyph_set[gname]
    glyph.draw(pen)
    path_d = pen.getCommands()
    paths.append((x_cursor, path_d))
    advance, _ = hmtx[gname]
    x_cursor += advance + tracking

total_width = x_cursor - tracking
ascent = font["OS/2"].sTypoAscender
descent = font["OS/2"].sTypoDescender
total_height = ascent - descent

def build_svg(with_bg: bool) -> str:
    # Render in a 1024x1024 viewBox so it matches existing brand-kit dimensions.
    # Scale glyph paths to fit ~70% of canvas, centered.
    scale = 720 / total_height
    scaled_w = total_width * scale
    tx = (1024 - scaled_w) / 2
    ty = 512 + (ascent * scale) / 2 - 30  # baseline adjust

    inner = ""
    for x_off, d in paths:
        inner += f'<path transform="translate({x_off * scale:.2f} 0)" d="{d}"/>'

    bg = (
        '<rect x="64" y="64" width="896" height="896" rx="180" '
        'fill="#0B0A08" stroke="#2B2114" stroke-width="10"/>'
        if with_bg else ""
    )

    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<defs>
<filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
<feGaussianBlur stdDeviation="8" result="blur"/>
<feColorMatrix in="blur" type="matrix" values="1 0 0 0 1  0 0.55 0 0 0.55  0 0 0 0 0  0 0 0 0.75 0" result="g"/>
<feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge>
</filter>
<linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="#FFB21A"/>
<stop offset="55%" stop-color="#FF9A00"/>
<stop offset="100%" stop-color="#E98E0E"/>
</linearGradient>
</defs>
{bg}
<g transform="translate({tx:.2f} {ty:.2f}) scale({scale:.4f} -{scale:.4f})" fill="url(#orangeGrad)" filter="url(#softGlow)">
{inner}
</g>
</svg>
'''

with open(OUT_FULL, "w", encoding="utf-8") as f:
    f.write(build_svg(with_bg=False))
with open(OUT_TILE, "w", encoding="utf-8") as f:
    f.write(build_svg(with_bg=True))
with open(OUT_ICON, "w", encoding="utf-8") as f:
    f.write(build_svg(with_bg=True))

print(f"Wrote {OUT_FULL}")
print(f"Wrote {OUT_ICON}")
print(f"glyph paths chars: a={len(paths[0][1])}, t={len(paths[1][1])}")
