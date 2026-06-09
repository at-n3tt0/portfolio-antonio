export default function StatusFooter() {
  const channels: { label: string; href?: string }[] = [
    { label: "WhatsApp +55 91 98024-2234", href: "https://wa.me/5591980242234" },
    { label: "@at_netto.tech", href: "https://instagram.com/at_netto.tech" },
    { label: "linkedin.com/in/at-netto", href: "https://www.linkedin.com/in/at-netto" },
  ];

  return (
    <footer className="relative px-4 md:px-6 pt-16 pb-10" style={{ borderTop: "1px solid rgba(242,166,0,0.12)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="text-xs mb-2 flex items-center gap-2" style={{ color: "#F2A600" }}>
            <span>/</span><span>Contato</span>
          </div>
          <div className="text-sm" style={{ color: "#94a3b8" }}>
            Atendimento sob demanda — fale com a gente pelos canais abaixo.
          </div>
        </div>

        <div
          className="text-sm"
          style={{
            border: "1px solid rgba(242,166,0,0.12)",
            background: "rgba(28,25,23,0.5)",
            borderRadius: 6,
          }}
        >
          {channels.map((s, i) => {
            const Wrapper: React.ElementType = s.href ? "a" : "div";
            const wrapperProps = s.href
              ? { href: s.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={s.label}
                {...wrapperProps}
                className="flex items-center justify-between px-4 py-3 transition-colors"
                style={{
                  borderBottom: i === channels.length - 1 ? "none" : "1px solid rgba(242,166,0,0.06)",
                  color: "#cbd5e1",
                }}
              >
                <span>{s.label}</span>
                {s.href && (
                  <span className="text-xs" style={{ color: "#F2A600" }}>→</span>
                )}
              </Wrapper>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-3 text-xs" style={{ color: "#64748b" }}>
          <span>© 2026 atnetto.tech · Marituba, PA</span>
          <a href="/privacidade" style={{ color: "#64748b" }} className="hover:text-amber-500 transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
