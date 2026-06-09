type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, number> = { sm: 32, md: 44, lg: 72, xl: 128 };

/**
 * BrandMark — inline "at" mark with brand-kit gradient + glow.
 * Rendered inline so the page Inter font is used; letter-spacing is
 * tuned for small sizes where the kit SVG would collapse.
 */
export function BrandMark({
  size = "sm",
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
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="atnetto.tech"
      role="img"
    >
      <defs>
        <filter id={`${id}-softGlow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 1  0 0.55 0 0 0.55  0 0 0 0 0  0 0 0 0.75 0"
            result="g"
          />
          <feMerge>
            <feMergeNode in="g" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB21A" />
          <stop offset="55%" stopColor="#FF9A00" />
          <stop offset="100%" stopColor="#E98E0E" />
        </linearGradient>
      </defs>
      {glow && (
        <rect
          x="64"
          y="64"
          width="896"
          height="896"
          rx="180"
          fill="#0B0A08"
          stroke="#2B2114"
          strokeWidth="10"
        />
      )}
      <g filter={`url(#${id}-softGlow)`}>
        <text
          x="512"
          y="630"
          textAnchor="middle"
          fontFamily='"Inter Display", Inter, var(--font-inter), Arial, sans-serif'
          fontSize="545"
          fontWeight="900"
          letterSpacing="-55"
          fill={`url(#${id}-grad)`}
        >
          at
        </text>
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
