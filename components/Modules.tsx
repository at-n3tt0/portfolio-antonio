"use client";

import { motion } from "framer-motion";

type Module = {
  id: string;
  title: string;
  desc: string;
  badge: string;
  badgeColor: string;
  visual: "deployments" | "chart" | "events" | "topology" | "latency" | "support";
};

const modules: Module[] = [
  {
    id: "web_systems",
    title: "Sistemas web sob medida",
    desc: "Plataformas em produção rodando 24/7 — não \"o site fica pronto e tchau\". Manutenção contínua incluída.",
    badge: "6 active",
    badgeColor: "#22c55e",
    visual: "deployments",
  },
  {
    id: "monitoring",
    title: "Observabilidade",
    desc: "Zabbix, Grafana e alertas que avisam antes do cliente reclamar. Você vê o que está acontecendo na sua infra.",
    badge: "live metrics",
    badgeColor: "#F2A600",
    visual: "chart",
  },
  {
    id: "automation",
    title: "Automações de operação",
    desc: "Integrações, ETLs e fluxos que rodam sozinhos. Reduz trabalho manual e elimina planilha esquecida.",
    badge: "1.2k events/day",
    badgeColor: "#22c55e",
    visual: "events",
  },
  {
    id: "infrastructure",
    title: "Infra completa",
    desc: "Servidores, virtualização (Proxmox), redes, backup. Do bare-metal ao Docker, em pé e auditado.",
    badge: "47 services",
    badgeColor: "#F2A600",
    visual: "topology",
  },
  {
    id: "apis",
    title: "APIs documentadas",
    desc: "FastAPI ou Laravel. Endpoints versionados, autenticação, integração com gateway de pagamento (Mercado Pago).",
    badge: "avg 84ms",
    badgeColor: "#22c55e",
    visual: "latency",
  },
  {
    id: "support",
    title: "Operação contínua",
    desc: "Não largamos depois do go-live. Resposta em horário comercial, plantão para incidentes críticos.",
    badge: "24/7",
    badgeColor: "#22c55e",
    visual: "support",
  },
];

function Visual({ kind }: { kind: Module["visual"] }) {
  if (kind === "deployments") {
    return (
      <div className="flex gap-1 mono text-[10px]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex-1 h-6 flex items-center justify-center"
            style={{
              background: "rgba(34,197,94,0.10)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#22c55e",
            }}
          >
            ●
          </div>
        ))}
      </div>
    );
  }
  if (kind === "chart") {
    const pts = [22, 38, 30, 52, 48, 64, 56, 78, 70, 88, 82, 96];
    const max = 100;
    const w = 240;
    const h = 56;
    const step = w / (pts.length - 1);
    const path = pts
      .map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (v / max) * h}`)
      .join(" ");
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-14">
        <path d={path} stroke="#F2A600" strokeWidth="1.5" fill="none" />
        <path
          d={`${path} L ${w} ${h} L 0 ${h} Z`}
          fill="rgba(242,166,0,0.12)"
        />
        {pts.map((v, i) => (
          <circle
            key={i}
            cx={i * step}
            cy={h - (v / max) * h}
            r="1.5"
            fill="#F2A600"
          />
        ))}
      </svg>
    );
  }
  if (kind === "events") {
    return (
      <div className="mono text-[10px] space-y-0.5" style={{ color: "#64748b" }}>
        <div><span style={{ color: "#22c55e" }}>[09:14]</span> webhook → CRM sync ok</div>
        <div><span style={{ color: "#22c55e" }}>[09:14]</span> invoice.pdf → email ok</div>
        <div><span style={{ color: "#22c55e" }}>[09:15]</span> backup nightly ok</div>
        <div><span style={{ color: "#F2A600" }}>[09:15]</span> retry queue: 0</div>
      </div>
    );
  }
  if (kind === "topology") {
    return (
      <svg viewBox="0 0 240 56" className="w-full h-14">
        {/* nodes */}
        {[
          [30, 14], [80, 14], [130, 14], [180, 14], [210, 14],
          [50, 42], [110, 42], [170, 42],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#F2A600" />
            <circle cx={x} cy={y} r="6" fill="none" stroke="rgba(242,166,0,0.25)" />
          </g>
        ))}
        {/* lines */}
        {[
          [30, 14, 80, 14], [80, 14, 130, 14], [130, 14, 180, 14], [180, 14, 210, 14],
          [30, 14, 50, 42], [80, 14, 110, 42], [130, 14, 110, 42], [180, 14, 170, 42],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(242,166,0,0.3)" strokeWidth="0.6"
          />
        ))}
      </svg>
    );
  }
  if (kind === "latency") {
    return (
      <div className="mono text-[10px]" style={{ color: "#64748b" }}>
        <div className="flex items-center justify-between">
          <span>p50</span>
          <div className="flex-1 mx-3 h-1.5" style={{ background: "rgba(242,166,0,0.10)" }}>
            <div className="h-full" style={{ width: "55%", background: "#22c55e" }} />
          </div>
          <span style={{ color: "#22c55e" }}>62ms</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span>p95</span>
          <div className="flex-1 mx-3 h-1.5" style={{ background: "rgba(242,166,0,0.10)" }}>
            <div className="h-full" style={{ width: "74%", background: "#F2A600" }} />
          </div>
          <span style={{ color: "#F2A600" }}>148ms</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span>p99</span>
          <div className="flex-1 mx-3 h-1.5" style={{ background: "rgba(242,166,0,0.10)" }}>
            <div className="h-full" style={{ width: "88%", background: "#F2A600" }} />
          </div>
          <span style={{ color: "#F2A600" }}>312ms</span>
        </div>
      </div>
    );
  }
  // support
  return (
    <div className="mono text-[10px] flex items-center gap-2" style={{ color: "#64748b" }}>
      <span className="status-dot" style={{ color: "#22c55e" }} />
      <span>on-call · WhatsApp · email</span>
    </div>
  );
}

export default function Modules() {
  return (
    <section
      id="modules"
      className="relative py-28 px-4 md:px-6 scanlines"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 30% 10%, rgba(242,166,0,0.05), transparent 60%), #090908",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#F2A600" }}>
              <span>/</span><span>Módulos</span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: "#F5F5F5",
              }}
            >
              O que entregamos
            </h2>
          </div>
          <p className="text-sm max-w-sm leading-relaxed" style={{ color: "#94a3b8" }}>
            Cada módulo é um serviço que entra em operação — não um pacote estático.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(242,166,0,0.12)" }}>
          {modules.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative p-6 transition-all"
              style={{ background: "#090908" }}
            >
              {/* header */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="mono text-[10px] uppercase tracking-wider"
                  style={{ color: "#475569" }}
                >
                  <span style={{ color: "#94a3b8" }}>{m.id}</span>
                </div>
                <div
                  className="mono text-[10px] px-2 py-0.5"
                  style={{
                    color: m.badgeColor,
                    background: `${m.badgeColor}15`,
                    border: `1px solid ${m.badgeColor}30`,
                    borderRadius: 3,
                  }}
                >
                  {m.badge}
                </div>
              </div>

              {/* title */}
              <h3
                className="text-xl font-bold mb-2 transition-colors"
                style={{
                  color: "#F5F5F5",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                {m.title}
              </h3>

              {/* desc */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
                {m.desc}
              </p>

              {/* visual */}
              <div className="mt-auto">
                <Visual kind={m.visual} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
