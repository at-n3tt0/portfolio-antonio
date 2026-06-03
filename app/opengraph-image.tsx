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
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,154,0,0.18) 0%, transparent 70%), #090908",
          color: "#F5F5F5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            color: "#FF9A00",
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
            <span style={{ color: "#F5F5F5" }}>atnetto</span>
            <span style={{ color: "#FF9A00" }}>.</span>
            <span style={{ color: "#F5F5F5" }}>tech</span>
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
          <span style={{ color: "#FF9A00" }}>$</span>
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
