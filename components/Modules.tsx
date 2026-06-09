"use client";

import { motion } from "framer-motion";

type Module = {
  id: string;
  title: string;
  desc: string;
  badge: string;
  badgeColor: string;
};

const modules: Module[] = [
  {
    id: "websites",
    title: "Sites profissionais",
    desc: "Sites institucionais, landing pages, portfólios e páginas de venda com identidade visual, responsividade e foco em conversão.",
    badge: "Next.js · Tailwind",
    badgeColor: "#F2A600",
  },
  {
    id: "custom_systems",
    title: "Sistemas sob demanda",
    desc: "Sistemas internos, dashboards, cadastros, controle operacional, gestão de dados e fluxos administrativos — desenvolvidos sob medida.",
    badge: "Laravel · FastAPI · React",
    badgeColor: "#F2A600",
  },
  {
    id: "automation_ai",
    title: "Automações e IA",
    desc: "Automação de tarefas repetitivas, agentes assistivos, organização de informações, integração com APIs e apoio com ferramentas de IA.",
    badge: "n8n · Python · IA",
    badgeColor: "#F2A600",
  },
  {
    id: "consulting",
    title: "Consultoria técnica",
    desc: "Diagnóstico, planejamento, melhoria de processos, estruturação de soluções e orientação tecnológica — antes de escrever uma linha de código.",
    badge: "diagnóstico → roadmap",
    badgeColor: "#F2A600",
  },
  {
    id: "infra_integration",
    title: "Infra & integração",
    desc: "Servidor, virtualização (Proxmox), redes, backup e integrações com APIs externas. Estruturação completa quando o projeto pede.",
    badge: "Linux · Docker · Proxmox",
    badgeColor: "#F2A600",
  },
  {
    id: "support_observability",
    title: "Suporte e melhoria contínua",
    desc: "Após a entrega: ajustes, manutenção evolutiva e, quando contratado, monitoramento com Zabbix + Grafana para acompanhar a infra do cliente.",
    badge: "Zabbix · Grafana",
    badgeColor: "#F2A600",
  },
];

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
            Cada serviço é sob demanda — ajustado ao cenário e ao orçamento de cada cliente.
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
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
