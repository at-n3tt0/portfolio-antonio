type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, number> = { sm: 32, md: 44, lg: 72, xl: 128 };

/**
 * Official atnetto "@" symbol — flat-design vectorized at-sign.
 * Path source: brand kit v2 (atnetto_logo_at_symbol_package).
 */
const AT_PATH =
  "M 46 6 L 37 7 L 35 20 L 26 17 L 13 17 L 10 19 L 11 28 L 27 29 L 29 31 L 26 33 L 15 33 L 7 39 L 5 43 L 5 52 L 8 57 L 13 61 L 33 62 L 34 58 L 32 51 L 18 51 L 16 49 L 16 46 L 18 44 L 32 44 L 34 40 L 35 41 L 35 55 L 39 60 L 43 62 L 58 62 L 59 61 L 58 51 L 49 51 L 46 49 L 47 31 L 51 28 L 59 27 L 59 19 L 56 17 L 49 17 L 47 15 Z";

/**
 * BrandMark — the official "@" symbol in atnetto orange.
 * Pass `glow` for the soft-shadow version (use on dark surfaces).
 */
export function BrandMark({
  size = "sm",
  color = "#FF9A00",
  glow = false,
}: {
  size?: Size;
  color?: string;
  glow?: boolean;
}) {
  const s = sizeMap[size];
  const id = `bm-${size}-${glow ? "g" : "f"}`;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 65 68"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="atnetto.tech"
    >
      {glow && (
        <defs>
          <filter id={`${id}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.2" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="1 0 0 0 1  0 0.55 0 0 0.55  0 0 0 0 0  0 0 0 0.7 0"
              result="g"
            />
            <feMerge>
              <feMergeNode in="g" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}
      <g fill={color} filter={glow ? `url(#${id}-shadow)` : undefined}>
        <path d={AT_PATH} />
      </g>
    </svg>
  );
}

/**
 * BrandWordmark — official "@" + "atnetto.tech" text + tagline (optional).
 */
export function BrandWordmark({
  size = "md",
  withTagline = false,
}: {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}) {
  const fontSize = size === "sm" ? 16 : size === "md" ? 22 : 32;
  const markSize: Size = size === "lg" ? "md" : "sm";
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size={markSize} />
      <span className="inline-flex flex-col leading-none">
        <span
          className="font-extrabold tracking-tight"
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            color: "#F5F5F5",
            fontSize,
            letterSpacing: "-0.03em",
          }}
        >
          atnetto<span style={{ color: "#FF9A00" }}>.tech</span>
        </span>
        {withTagline && (
          <span
            className="mt-1.5"
            style={{
              fontSize: fontSize * 0.32,
              letterSpacing: "0.18em",
              color: "#767676",
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            TECNOLOGIA · AUTOMAÇÃO · SUPORTE
          </span>
        )}
      </span>
    </span>
  );
}

/**
 * CornerBrackets — decorative motif (kept for sparing use).
 */
export function CornerBrackets({
  color = "rgba(255,154,0,0.35)",
  size = 28,
  thickness = 2,
  inset = 0,
}: {
  color?: string;
  size?: number;
  thickness?: number;
  inset?: number;
}) {
  const common: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    pointerEvents: "none",
  };
  return (
    <>
      <span style={{ ...common, top: inset, left: inset, borderTop: `${thickness}px solid ${color}`, borderLeft: `${thickness}px solid ${color}` }} />
      <span style={{ ...common, top: inset, right: inset, borderTop: `${thickness}px solid ${color}`, borderRight: `${thickness}px solid ${color}` }} />
      <span style={{ ...common, bottom: inset, left: inset, borderBottom: `${thickness}px solid ${color}`, borderLeft: `${thickness}px solid ${color}` }} />
      <span style={{ ...common, bottom: inset, right: inset, borderBottom: `${thickness}px solid ${color}`, borderRight: `${thickness}px solid ${color}` }} />
    </>
  );
}
