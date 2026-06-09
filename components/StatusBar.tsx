import { getLatestCommit } from "@/lib/github";

export default async function StatusBar() {
  const commit = await getLatestCommit();
  const lastDeploy = commit?.relativeAgo ?? "—";

  return (
    <div
      className="w-full text-[11px]"
      style={{
        background: "rgba(14,12,9,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(242,166,0,0.12)",
        color: "#64748b",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-8 flex items-center justify-between gap-4 overflow-hidden">
        <div className="flex items-center gap-3 md:gap-5 min-w-0 flex-shrink overflow-hidden">
          <span className="flex items-center gap-1.5 flex-shrink-0" style={{ color: "#22c55e" }}>
            <span className="status-dot" />
            <span>no ar</span>
          </span>
          <span className="hidden md:inline" style={{ color: "#334155" }}>·</span>
          <span className="hidden md:inline">Marituba, PA</span>
        </div>
        <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
          <span className="hidden md:inline">
            <span style={{ color: "#475569" }}>último deploy</span>{" "}
            <span className="mono" style={{ color: "#94a3b8" }}>{lastDeploy}</span>
          </span>
          <span className="hidden lg:inline" style={{ color: "#334155" }}>·</span>
          <span>
            <span style={{ color: "#475569" }}>uptime</span>{" "}
            <span className="mono" style={{ color: "#F2A600" }}>99.97%</span>
          </span>
        </div>
      </div>
    </div>
  );
}
