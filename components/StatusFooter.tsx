import { getLatestCommit } from "@/lib/github";

export default async function StatusFooter() {
  const commit = await getLatestCommit();
  const date = new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC";

  const services: { label: string; status: "operational" | "available"; href?: string }[] = [
    { label: "atnetto.tech", status: "operational" },
    { label: "github.com/at-n3tt0", status: "operational", href: "https://github.com/at-n3tt0" },
    { label: "linkedin.com/in/at-netto", status: "operational", href: "https://www.linkedin.com/in/at-netto" },
    { label: "WhatsApp +55 91 98024-2234", status: "available", href: "https://wa.me/5591980242234" },
  ];

  return (
    <footer className="relative px-4 md:px-6 pt-16 pb-10" style={{ borderTop: "1px solid rgba(251,191,36,0.12)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="mono text-[11px] uppercase tracking-[0.3em] mb-2" style={{ color: "#f59e0b" }}>
              system_status
            </div>
            <div className="mono text-xs" style={{ color: "#64748b" }}>
              snapshot: {date}
            </div>
          </div>
          <div className="mono text-xs" style={{ color: "#64748b" }}>
            {commit ? (
              <>
                build: <span style={{ color: "#94a3b8" }}>{commit.shortSha}</span>{" "}
                · <span style={{ color: "#475569" }}>{commit.relativeAgo}</span>
              </>
            ) : (
              <>build: <span style={{ color: "#94a3b8" }}>—</span></>
            )}
          </div>
        </div>

        <div
          className="mono text-sm"
          style={{
            border: "1px solid rgba(251,191,36,0.12)",
            background: "rgba(10,15,28,0.5)",
          }}
        >
          {services.map((s, i) => {
            const color = s.status === "operational" ? "#22c55e" : "#22c55e";
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
                  borderBottom: i === services.length - 1 ? "none" : "1px solid rgba(251,191,36,0.06)",
                  color: "#cbd5e1",
                }}
              >
                <span className="flex items-center gap-3">
                  <span style={{ color }} className="flex items-center gap-1.5">
                    <span className="status-dot" />
                  </span>
                  <span>{s.label}</span>
                </span>
                <span style={{ color }} className="text-xs uppercase tracking-wider">
                  {s.status}
                </span>
              </Wrapper>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-3 mono text-[11px] uppercase tracking-widest" style={{ color: "#475569" }}>
          <span>© 2026 atnetto.tech · Marituba, PA · Brasil</span>
          <a href="/privacidade" style={{ color: "#64748b" }}>privacy</a>
        </div>
      </div>
    </footer>
  );
}
