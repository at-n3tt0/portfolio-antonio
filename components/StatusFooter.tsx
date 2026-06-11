export default function StatusFooter() {
  return (
    <footer
      className="relative px-4 md:px-6 pt-14 pb-10"
      style={{ borderTop: "1px solid rgba(242,166,0,0.12)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div
              className="font-extrabold tracking-tight mb-1"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                color: "#F5F5F5",
                fontSize: 18,
                letterSpacing: "-0.03em",
              }}
            >
              atnetto<span style={{ color: "#F2A600" }}>.tech</span>
              <span
                className="font-normal"
                style={{ color: "#94a3b8", fontSize: 13 }}
              >
                {" "}— desenvolvimento sob demanda
              </span>
            </div>
            <div className="text-xs" style={{ color: "#64748b" }}>
              Marituba, PA · atendimento remoto
            </div>
          </div>
          <div
            className="flex items-center gap-3 text-xs"
            style={{ color: "#64748b" }}
          >
            <span>© 2026 atnetto.tech</span>
            <span style={{ color: "#334155" }}>·</span>
            <a
              href="/privacidade"
              style={{ color: "#64748b" }}
              className="hover:text-amber-500 transition-colors"
            >
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
