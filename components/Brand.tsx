type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, number> = { sm: 32, md: 44, lg: 72, xl: 128 };

/**
 * BrandMark — clean monogram "a" in a rounded square with amber gradient.
 * The accent dot above suggests "active/operational" without being terminal-y.
 */
export function BrandMark({ size = "sm" }: { size?: Size }) {
  const s = sizeMap[size];
  const id = `bg-${size}`;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="atnetto.tech"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="55%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>

      {/* Rounded square card */}
      <rect x="2" y="2" width="60" height="60" rx="14" fill={`url(#${id})`} />

      {/* Highlight gloss (top-left, subtle) */}
      <rect
        x="2"
        y="2"
        width="60"
        height="30"
        rx="14"
        fill="white"
        fillOpacity="0.08"
      />

      {/* Custom "a" — stylized lowercase, geometric */}
      <g fill="#1c1917">
        {/* Bowl of the a (circle with notch) */}
        <path
          d="M 32 18
             C 22 18, 16 25, 16 33
             C 16 41, 22 48, 32 48
             C 36 48, 39 47, 41 45
             L 41 47
             L 48 47
             L 48 30
             C 48 22, 42 18, 32 18 Z
             M 32 25
             C 38 25, 41 28, 41 33
             L 41 36
             C 41 39, 37 41, 33 41
             C 27 41, 24 38, 24 33
             C 24 28, 27 25, 32 25 Z"
        />
      </g>

      {/* Accent dot (cream, subtle "active" indicator) */}
      <circle cx="50" cy="14" r="3" fill="#fefce8" />
    </svg>
  );
}

/**
 * BrandWordmark — mark + text logo.
 */
export function BrandWordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const fontSize = size === "sm" ? 16 : 22;
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size="sm" />
      <span
        className="font-bold tracking-tight"
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          color: "#f5f5f4",
          fontSize,
        }}
      >
        atnetto<span style={{ color: "#f59e0b" }}>.</span>tech
      </span>
    </span>
  );
}

/**
 * CornerBrackets — optional decorative motif. Kept for selective use only.
 */
export function CornerBrackets({
  color = "rgba(245,158,11,0.35)",
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
