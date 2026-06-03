type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, number> = { sm: 28, md: 40, lg: 64, xl: 120 };

/**
 * BrandMark — compact icon mark (@ symbol + corner brackets + ring).
 * Use in navbar, favicons, small accents.
 */
export function BrandMark({ size = "sm" }: { size?: Size }) {
  const s = sizeMap[size];
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="atnetto.tech"
    >
      {/* outer ring */}
      <circle cx="32" cy="32" r="29" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="#f59e0b" strokeWidth="0.6" strokeOpacity="0.15" />

      {/* corner brackets */}
      <g stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.85">
        <path d="M 14 14 L 14 21 M 14 14 L 21 14" />
        <path d="M 50 14 L 50 21 M 50 14 L 43 14" />
        <path d="M 14 50 L 14 43 M 14 50 L 21 50" />
        <path d="M 50 50 L 50 43 M 50 50 L 43 50" />
      </g>

      {/* @ symbol — stylized */}
      <text
        x="32"
        y="40"
        fontFamily="var(--font-geist-mono), 'Courier New', monospace"
        fontSize="28"
        fontWeight="700"
        textAnchor="middle"
        fill="#f59e0b"
      >
        @
      </text>
    </svg>
  );
}

/**
 * CornerBrackets — decorative SCI motif. Wraps a section/container.
 * Use position: relative on parent.
 */
export function CornerBrackets({
  color = "rgba(245,158,11,0.45)",
  size = 36,
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

/**
 * BrandWordmark — text logo with the mark.
 */
export function BrandWordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const fontSize = size === "sm" ? 16 : 22;
  return (
    <span className="inline-flex items-center gap-2">
      <BrandMark size="sm" />
      <span
        className="font-bold tracking-tight"
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          color: "#f8fafc",
          fontSize,
        }}
      >
        atnetto<span style={{ color: "#f59e0b" }}>.</span>tech
      </span>
    </span>
  );
}
