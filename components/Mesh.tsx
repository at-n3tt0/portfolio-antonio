"use client";

import { motion } from "framer-motion";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  group: "client" | "edge" | "api" | "data" | "infra" | "observe";
};

const W = 1000;
const H = 540;

const nodes: Node[] = [
  // client tier
  { id: "web", label: "Web", x: 200, y: 70, group: "client" },
  { id: "mobile", label: "Mobile", x: 500, y: 70, group: "client" },
  { id: "admin", label: "Admin", x: 800, y: 70, group: "client" },
  // edge / framework
  { id: "next", label: "Next.js", x: 350, y: 180, group: "edge" },
  { id: "react", label: "React", x: 650, y: 180, group: "edge" },
  // api tier
  { id: "laravel", label: "Laravel", x: 200, y: 290, group: "api" },
  { id: "fastapi", label: "FastAPI", x: 500, y: 290, group: "api" },
  { id: "node", label: "Node", x: 800, y: 290, group: "api" },
  // data tier
  { id: "pg", label: "PostgreSQL", x: 300, y: 400, group: "data" },
  { id: "mysql", label: "MySQL", x: 500, y: 400, group: "data" },
  { id: "redis", label: "Redis", x: 700, y: 400, group: "data" },
  // infra tier
  { id: "docker", label: "Docker", x: 200, y: 490, group: "infra" },
  { id: "linux", label: "Linux", x: 400, y: 490, group: "infra" },
  { id: "proxmox", label: "Proxmox", x: 600, y: 490, group: "infra" },
  // observe tier
  { id: "zabbix", label: "Zabbix", x: 850, y: 440, group: "observe" },
  { id: "grafana", label: "Grafana", x: 900, y: 510, group: "observe" },
];

const edges: [string, string][] = [
  ["web", "next"], ["mobile", "react"], ["admin", "next"], ["admin", "react"],
  ["next", "laravel"], ["next", "fastapi"], ["react", "fastapi"], ["react", "node"],
  ["laravel", "mysql"], ["laravel", "pg"], ["fastapi", "pg"], ["fastapi", "redis"], ["node", "redis"],
  ["pg", "docker"], ["mysql", "docker"], ["redis", "linux"],
  ["docker", "linux"], ["linux", "proxmox"],
  ["zabbix", "linux"], ["zabbix", "proxmox"], ["grafana", "zabbix"],
];

const groupColors: Record<Node["group"], string> = {
  client: "#fbbf24",
  edge: "#f59e0b",
  api: "#fb923c",
  data: "#94a3b8",
  infra: "#64748b",
  observe: "#22c55e",
};

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function Mesh() {
  return (
    <section id="mesh" className="relative py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#f59e0b" }}>
            <span>/</span><span>Arquitetura</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#f8fafc",
            }}
          >
            Como as peças conversam.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#94a3b8" }}>
            A arquitetura que entregamos vai do cliente ao bare-metal, com observabilidade no topo. Sem cliente preso a um stack único.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          style={{
            border: "1px solid rgba(251,191,36,0.15)",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,158,11,0.05), transparent 70%), rgba(10,15,28,0.4)",
            borderRadius: 6,
          }}
        >
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            {/* faint grid */}
            <defs>
              <pattern id="meshGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="0.5" cy="0.5" r="0.5" fill="rgba(251,191,36,0.08)" />
              </pattern>
              <linearGradient id="edge" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245,158,11,0.0)" />
                <stop offset="50%" stopColor="rgba(245,158,11,0.6)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0.0)" />
              </linearGradient>
            </defs>
            <rect width={W} height={H} fill="url(#meshGrid)" />

            {/* edges */}
            {edges.map(([from, to], i) => {
              const a = nodeById(from);
              const b = nodeById(to);
              return (
                <g key={`e-${i}`}>
                  <line
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="rgba(245,158,11,0.18)"
                    strokeWidth="1"
                  />
                  <line
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="rgba(245,158,11,0.55)"
                    strokeWidth="1"
                    className="mesh-flow"
                    style={{ animationDelay: `${(i * 0.13) % 3}s` }}
                  />
                </g>
              );
            })}

            {/* nodes */}
            {nodes.map((n) => {
              const color = groupColors[n.group];
              return (
                <g key={n.id}>
                  <circle cx={n.x} cy={n.y} r="22" fill="rgba(3,7,18,0.85)" stroke={color} strokeWidth="1.2" />
                  <circle cx={n.x} cy={n.y} r="4" fill={color} />
                  <text
                    x={n.x}
                    y={n.y + 40}
                    fontFamily="var(--font-geist-mono), monospace"
                    fontSize="11"
                    textAnchor="middle"
                    fill="#cbd5e1"
                  >
                    {n.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* legend */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 px-4 py-3 mono text-[10px] uppercase tracking-widest"
            style={{
              borderTop: "1px solid rgba(251,191,36,0.1)",
              color: "#475569",
              background: "rgba(3,7,18,0.5)",
            }}
          >
            {(["client", "edge", "api", "data", "infra", "observe"] as const).map((g) => (
              <span key={g} className="flex items-center gap-2">
                <span className="w-2 h-2" style={{ background: groupColors[g] }} />
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
