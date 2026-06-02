import { ImageResponse } from "next/og";

export const alt = "atnetto.tech — Sites, sistemas, APIs e automações para empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 70%), #030712",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            color: "#f59e0b",
            textTransform: "uppercase",
          }}
        >
          ATNETTO.TECH — MARITUBA, PA
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 140,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -4,
            }}
          >
            <span style={{ color: "#f8fafc" }}>atnetto</span>
            <span style={{ color: "#f59e0b" }}>.</span>
            <span style={{ color: "#f8fafc" }}>tech</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#cbd5e1",
              fontWeight: 600,
              maxWidth: 1000,
              lineHeight: 1.2,
            }}
          >
            Sites, sistemas, APIs e automações para empresas.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 22,
            color: "#94a3b8",
            fontFamily: "monospace",
          }}
        >
          <span style={{ color: "#f59e0b" }}>$</span>
          <span>Laravel</span>
          <span>·</span>
          <span>FastAPI</span>
          <span>·</span>
          <span>React</span>
          <span>·</span>
          <span>PostgreSQL</span>
          <span>·</span>
          <span>Docker</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
