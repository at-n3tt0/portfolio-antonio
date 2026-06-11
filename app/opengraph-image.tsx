import { ImageResponse } from "next/og";

export const alt = "atnetto.tech — desenvolvimento sob demanda";
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
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(242,166,0,0.18) 0%, transparent 70%), #090908",
          color: "#F5F5F5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            color: "#F2A600",
            textTransform: "uppercase",
          }}
        >
          DESENVOLVIMENTO SOB DEMANDA
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
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
            <span style={{ color: "#F2A600" }}>.</span>
            <span style={{ color: "#F5F5F5" }}>tech</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              color: "#cbd5e1",
              fontWeight: 600,
              maxWidth: 1040,
              lineHeight: 1.25,
            }}
          >
            Sistemas, sites, aplicativos e automações para sua empresa sair da planilha.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#94a3b8",
            letterSpacing: 1,
          }}
        >
          Marituba, PA · atendimento remoto
        </div>
      </div>
    ),
    { ...size },
  );
}
