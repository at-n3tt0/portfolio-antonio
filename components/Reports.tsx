"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

function StatusBadge({ s }: { s: Report["status"] }) {
  const color = s === "operational" ? "#22c55e" : "#f59e0b";
  return (
    <span
      className="mono text-[10px] uppercase tracking-wider px-2 py-0.5 inline-flex items-center gap-1.5"
      style={{
        color,
        background: `${color}15`,
        border: `1px solid ${color}30`,
      }}
    >
      <span className="status-dot" />
      {s}
    </span>
  );
}

export default function Reports() {
  return (
    <section id="reports" className="relative py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: "#f59e0b" }}>
            incident_reports
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#f8fafc",
            }}
          >
            Relatórios de cada sistema entregue.
          </h2>
          <p className="mt-4 max-w-2xl text-base" style={{ color: "#94a3b8" }}>
            Cada projeto é um caso real: contexto, problema, solução e métricas. Não tela bonita — sistema rodando.
          </p>
        </div>

        <div className="space-y-px" style={{ background: "rgba(251,191,36,0.12)" }}>
          {reports.map((r, i) => (
            <motion.article
              key={r.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="p-6 md:p-8"
              style={{ background: "#030712" }}
            >
              {/* header bar */}
              <div className="flex items-center justify-between flex-wrap gap-3 mb-5 mono text-xs">
                <div className="flex items-center gap-3 flex-wrap">
                  <span style={{ color: "#f59e0b" }}>#{r.num}</span>
                  <span style={{ color: "#475569" }}>·</span>
                  <span style={{ color: "#f8fafc" }} className="font-bold">{r.hostname}</span>
                  <span style={{ color: "#475569" }}>·</span>
                  <span style={{ color: "#94a3b8" }}>{r.client}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ color: "#475569" }} className="mono text-[10px] uppercase tracking-wider">
                    since {r.since}
                  </span>
                  <StatusBadge s={r.status} />
                </div>
              </div>

              {/* body grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-10">
                <div className="space-y-4">
                  <div>
                    <div className="mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "#475569" }}>
                      problema
                    </div>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                      {r.problem}
                    </p>
                  </div>
                  <div>
                    <div className="mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "#475569" }}>
                      solução
                    </div>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                      {r.solution}
                    </p>
                  </div>
                  {/* stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {r.stack.map((s) => (
                      <span
                        key={s}
                        className="mono text-[10px] px-2 py-1"
                        style={{
                          color: "#94a3b8",
                          background: "rgba(245,158,11,0.06)",
                          border: "1px solid rgba(245,158,11,0.15)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* metrics + link */}
                <div className="flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    {r.metrics.map((m) => (
                      <div
                        key={m.k}
                        className="flex items-center justify-between mono text-xs py-2"
                        style={{ borderBottom: "1px dashed rgba(251,191,36,0.1)" }}
                      >
                        <span className="uppercase tracking-wider text-[10px]" style={{ color: "#475569" }}>
                          {m.k}
                        </span>
                        <span style={{ color: "#f59e0b" }} className="font-bold">{m.v}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-xs inline-flex items-center gap-2 self-start mt-2 px-3 py-2 transition-colors"
                    style={{
                      color: "#f59e0b",
                      border: "1px solid rgba(245,158,11,0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(245,158,11,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    inspect_repo
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
