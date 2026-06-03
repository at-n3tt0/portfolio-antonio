type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, number> = { sm: 32, md: 44, lg: 72, xl: 128 };

/**
 * BrandMark — official "at" mark (orange gradient wordmark).
 * Uses Inter Display ExtraBold rendered as SVG text.
 */
export function BrandMark({ size = "sm", withCard = false }: { size?: Size; withCard?: boolean }) {
  const s = sizeMap[size];
  const id = `bm-${size}`;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="atnetto.tech"
    >
      <defs>
        <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 1  0 0.55 0 0 0.55  0 0 0 0 0  0 0 0 0.75 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB21A" />
          <stop offset="55%" stopColor="#FF9A00" />
          <stop offset="100%" stopColor="#E98E0E" />
        </linearGradient>
      </defs>
      {withCard && (
        <rect x="64" y="64" width="896" height="896" rx="180" fill="#0B0A08" stroke="#2B2114" strokeWidth="10" />
      )}
      <g filter={`url(#${id}-glow)`}>
        <text
          x="512"
          y="630"
          textAnchor="middle"
          fontFamily="'Inter Display', Inter, Arial, sans-serif"
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
 * BrandWordmark — full logo: "at" mark + "atnetto.tech" text + tagline.
 * Use in hero, footer, large surfaces.
 */
export function BrandWordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const fontSize = size === "sm" ? 16 : size === "md" ? 22 : 32;
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size="sm" />
      <span
        className="font-black tracking-tight"
        style={{
          fontFamily: "'Inter Display', Inter, var(--font-geist-sans), sans-serif",
          color: "#F5F5F5",
          fontSize,
          letterSpacing: "-0.04em",
        }}
      >
        atnetto<span style={{ color: "#FF9A00" }}>.tech</span>
      </span>
    </span>
  );
}

/**
 * CornerBrackets — decorative motif (kept for sparing use only).
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
