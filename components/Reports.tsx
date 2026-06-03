"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectMock from "@/components/ProjectMocks";

type Report = {
  num: string;
  hostname: string;
  client: string;
  stack: string[];
  since: string;
  status: "operational" | "monitoring";
  problem: string;
  solution: string;
  metrics: { k: string; v: string }[];
  href: string;
};

const reports: Report[] = [
  {
    num: "PMM-001",
    hostname: "sistema-pmm",
    client: "Prefeitura Municipal de Marituba",
    stack: ["Laravel", "PHP", "MySQL", "Linux"],
    since: "2023",
    status: "operational",
    problem:
      "Gestão fragmentada de contratos, processos e documentos administrativos em múltiplas planilhas e pastas avulsas.",
    solution:
      "Plataforma centralizada com módulos integrados para fluxo administrativo completo, com histórico, busca e auditoria.",
    metrics: [
      { k: "contratos sob gestão", v: "300+" },
      { k: "usuários ativos", v: "internos" },
      { k: "uptime", v: "99.9%" },
    ],
    href: "https://github.com/at-n3tt0/sistema-pmm",
  },
  {
    num: "MON-001",
    hostname: "server-monitor",
    client: "Infraestrutura interna",
    stack: ["FastAPI", "React", "PostgreSQL", "Docker"],
    since: "2024",
    status: "operational",
    problem:
      "Falta de visibilidade unificada sobre servidores, serviços e alertas críticos espalhados pela operação.",
    solution:
      "Plataforma própria de monitoramento com dashboards customizados, alertas configuráveis e API documentada.",
    metrics: [
      { k: "serviços monitorados", v: "47" },
      { k: "intervalo de coleta", v: "30s" },
      { k: "alertas ativos", v: "configurável" },
    ],
    href: "https://github.com/at-n3tt0/server-monitor",
  },
  {
    num: "NEX-001",
    hostname: "nexlicense",
    client: "SaaS de licenciamento",
    stack: ["FastAPI", "Docker", "Mercado Pago", "PostgreSQL"],
    since: "2024",
    status: "operational",
    problem:
      "Necessidade de controlar ativação, validação e expiração de licenças de software com pagamento integrado.",
    solution:
      "Backend completo de licenciamento com integração Mercado Pago, webhook, controle por chave e dashboard.",
    metrics: [
      { k: "gateway", v: "Mercado Pago" },
      { k: "auth", v: "license-key" },
      { k: "deploy", v: "Docker" },
    ],
    href: "https://github.com/at-n3tt0/nexlicense",
  },
  {
    num: "PMM-002",
    hostname: "sigma-marituba",
    client: "Prefeitura Municipal de Marituba",
    stack: ["Laravel", "PHP", "MySQL"],
    since: "2023",
    status: "operational",
    problem:
      "Necessidade de sistema integrado municipal com módulos administrativos rodando sob mesma autenticação e base.",
    solution:
      "Sistema integrado com módulos plugáveis, RBAC, integração com sistema-pmm e relatórios.",
    metrics: [
      { k: "tipo", v: "monolito modular" },
      { k: "auth", v: "RBAC" },
      { k: "uptime", v: "99.9%" },
    ],
    href: "https://github.com/at-n3tt0/sigma-marituba",
  },
  {
    num: "COM-001",
    hostname: "comcontrol",
    client: "Controle interno de ativos",
    stack: ["Laravel", "PHP", "MySQL"],
    since: "2024",
    status: "operational",
    problem:
      "Equipamentos de TI sem rastreio por unidade — perda de tempo localizando ativos e identificando responsáveis.",
    solution:
      "Sistema de inventário com cadastro por unidade, histórico de movimentação e relatórios de estoque.",
    metrics: [
      { k: "rastreio", v: "por unidade" },
      { k: "histórico", v: "completo" },
      { k: "exportação", v: "CSV/PDF" },
    ],
    href: "https://github.com/at-n3tt0/comcontrol",
  },
  {
    num: "NAI-001",
    hostname: "escritorio-neto-ai",
    client: "Produto IA admin",
    stack: ["Laravel", "React", "Node", "IA"],
    since: "2025",
    status: "monitoring",
    problem:
      "Rotinas administrativas repetitivas e atendimento de primeira linha consumindo tempo humano que deveria ser estratégico.",
    solution:
      "Sistema administrativo com IA integrada para triagem, sugestões automáticas e automação de rotinas.",
    metrics: [
      { k: "fase", v: "beta" },
      { k: "stack ia", v: "modelo agnóstico" },
      { k: "automação", v: "rotinas internas" },
    ],
    href: "https://github.com/at-n3tt0/escritorio-neto-ai",
  },
];

const stackColors: Record<string, string> = {
  Laravel: "#fb7185",
  PHP: "#a78bfa",
  MySQL: "#60a5fa",
  PostgreSQL: "#60a5fa",
  FastAPI: "#34d399",
  Python: "#FFB21A",
  React: "#22d3ee",
  Next: "#94a3b8",
  Node: "#84cc16",
  Docker: "#38bdf8",
  Linux: "#FFB21A",
  IA: "#a78bfa",
  "Mercado Pago": "#22d3ee",
};

function stackColor(s: string) {
  return stackColors[s] ?? "#94a3b8";
}

function StatusBadge({ s }: { s: Report["status"] }) {
  const color = s === "operational" ? "#22c55e" : "#FF9A00";
  const label = s === "operational" ? "no ar" : "em beta";
  return (
    <span
      className="text-[10px] uppercase tracking-wider px-2 py-0.5 inline-flex items-center gap-1.5"
      style={{
        color,
        background: `${color}15`,
        border: `1px solid ${color}30`,
        borderRadius: 3,
      }}
    >
      <span className="status-dot" />
      {label}
    </span>
  );
}

export default function Reports() {
  return (
    <section
      id="reports"
      className="relative py-28 px-4 md:px-6"
      style={{
        background:
          "linear-gradient(180deg, #090908 0%, #060b18 50%, #090908 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#FF9A00" }}>
            <span>/</span><span>Relatórios</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#F5F5F5",
            }}
          >
            Cada sistema é um relato.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#94a3b8" }}>
            Problema real, solução implementada, métrica que importa. Não é tela bonita — é sistema no ar.
          </p>
        </div>

        <div className="space-y-px" style={{ background: "rgba(255,154,0,0.12)" }}>
          {reports.map((r, i) => {
            const mockOnRight = i % 2 === 0;
            return (
              <motion.article
                key={r.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="p-6 md:p-8"
                style={{ background: "#090908" }}
              >
                {/* header bar */}
                <div className="flex items-center justify-between flex-wrap gap-3 mb-6 text-xs">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="mono" style={{ color: "#FF9A00" }}>#{r.num}</span>
                    <span style={{ color: "#475569" }}>·</span>
                    <span className="mono font-bold" style={{ color: "#F5F5F5" }}>{r.hostname}</span>
                    <span style={{ color: "#475569" }}>·</span>
                    <span style={{ color: "#94a3b8" }}>{r.client}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span style={{ color: "#64748b" }} className="text-[11px]">
                      desde {r.since}
                    </span>
                    <StatusBadge s={r.status} />
                  </div>
                </div>

                {/* body grid: text + mock UI */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-start">
                  {/* Text + metrics column */}
                  <div className={`space-y-5 ${mockOnRight ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <div className="text-[11px] mb-1.5" style={{ color: "#FF9A00" }}>
                        Problema
                      </div>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                        {r.problem}
                      </p>
                    </div>
                    <div>
                      <div className="text-[11px] mb-1.5" style={{ color: "#FF9A00" }}>
                        Solução
                      </div>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                        {r.solution}
                      </p>
                    </div>

                    {/* metrics inline */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {r.metrics.map((m) => (
                        <div
                          key={m.k}
                          className="px-3 py-2"
                          style={{
                            background: "rgba(28,25,23,0.5)",
                            border: "1px solid rgba(255,154,0,0.12)",
                            borderRadius: 4,
                          }}
                        >
                          <div className="uppercase tracking-wider text-[9px] mb-0.5" style={{ color: "#475569" }}>
                            {m.k}
                          </div>
                          <div style={{ color: "#FF9A00" }} className="text-xs font-bold truncate">{m.v}</div>
                        </div>
                      ))}
                    </div>

                    {/* stack chips + link */}
                    <div className="flex flex-wrap gap-2 items-center pt-1">
                      {r.stack.map((s) => {
                        const c = stackColor(s);
                        return (
                          <span
                            key={s}
                            className="text-xs px-3 py-1.5 font-medium"
                            style={{
                              color: c,
                              background: `${c}14`,
                              border: `1px solid ${c}33`,
                              borderRadius: 9999,
                            }}
                          >
                            {s}
                          </span>
                        );
                      })}
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs inline-flex items-center gap-1.5 px-3.5 py-1.5 transition-colors ml-auto"
                        style={{
                          color: "#FF9A00",
                          border: "1px solid rgba(255,154,0,0.35)",
                          borderRadius: 9999,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255,154,0,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        Ver código
                        <ArrowUpRight size={11} />
                      </a>
                    </div>
                  </div>

                  {/* Mock UI column */}
                  <motion.div
                    initial={{ opacity: 0, x: mockOnRight ? 24 : -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={mockOnRight ? "lg:order-2" : "lg:order-1"}
                  >
                    <ProjectMock id={r.num} />
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
