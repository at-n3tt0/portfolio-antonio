"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hoverLift, revealInitial, revealTransition, reducedTransition } from "@/lib/motion";

type Module = {
  id: string;
  title: string;
  desc: string;
  badge: string;
};

const main: Module[] = [
  {
    id: "sistema",
    title: "Sistemas sob medida",
    desc: "CRM simples, agendamento, migração de planilha para sistema, controle de cadastros, relatórios e fluxos administrativos desenhados para a rotina da sua empresa.",
    badge: "organização interna",
  },
  {
    id: "site",
    title: "Sites e landing pages",
    desc: "Sites institucionais, landing pages e páginas de venda com visual profissional, carregamento rápido e foco em captar contato.",
    badge: "presença que converte",
  },
  {
    id: "app",
    title: "Aplicativos e sistemas para celular",
    desc: "Aplicativos web instaláveis e sistemas pensados para celular — sua operação na palma da mão, sem depender de processos manuais.",
    badge: "acesso pelo celular",
  },
  {
    id: "automação",
    title: "Automações e integrações",
    desc: "Conectamos WhatsApp, planilhas, e-mail, formulários e sistemas de gestão — automatizando tarefas repetitivas e acabando com a mesma informação digitada três vezes.",
    badge: "menos trabalho manual",
  },
];

const complements: Module[] = [
  {
    id: "dashboard",
    title: "Dashboards e painéis",
    desc: "Painéis web que reúnem indicadores de venda, atendimento e operação em um lugar só — para decidir com dado, não com achismo.",
    badge: "visão consolidada",
  },
  {
    id: "portal",
    title: "Portais e áreas logadas",
    desc: "Áreas restritas para clientes, parceiros ou equipe interna: login, perfil, histórico e ações específicas por tipo de usuário.",
    badge: "área do cliente",
  },
  {
    id: "evolução",
    title: "Manutenção e evolução",
    desc: "Após a entrega, podemos seguir com ajustes, melhorias e suporte conforme combinado — sem fidelidade obrigatória.",
    badge: "evolução contínua",
  },
];

function Card({ m, i, dense = false }: { m: Module; i: number; dense?: boolean }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={revealInitial(!!reduced)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduced ? reducedTransition : revealTransition((i % 3) * 0.06)}
      whileHover={hoverLift(!!reduced)}
      className={`at-card-interactive group relative ${dense ? "p-5" : "p-6"}`}
      style={{
        background: "linear-gradient(180deg, rgba(14,12,9,0.96), #090908)",
        border: "1px solid rgba(242,166,0,0.10)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="mono text-[10px] uppercase tracking-wider" style={{ color: "#94a3b8" }}>
          {m.id}
        </div>
        <div
          className="mono text-[10px] px-2 py-0.5"
          style={{
            color: "#F2A600",
            background: "rgba(242,166,0,0.08)",
            border: "1px solid rgba(242,166,0,0.20)",
            borderRadius: 3,
          }}
        >
          {m.badge}
        </div>
      </div>

      <h3
        className={`${dense ? "text-lg" : "text-xl"} font-bold mb-2 transition-colors`}
        style={{
          color: "#F5F5F5",
          fontFamily: "var(--font-space-grotesk), sans-serif",
        }}
      >
        {m.title}
      </h3>

      <p
        className={`${dense ? "text-xs" : "text-sm"} leading-relaxed`}
        style={{ color: "#94a3b8" }}
      >
        {m.desc}
      </p>
    </motion.div>
  );
}

export default function Modules() {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id="modules"
      initial={revealInitial(!!reduced)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={reduced ? reducedTransition : revealTransition()}
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
              <span>/</span>
              <span>Soluções</span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: "#F5F5F5",
              }}
            >
              O que desenvolvemos
            </h2>
          </div>
          <p className="text-sm max-w-md leading-relaxed" style={{ color: "#94a3b8" }}>
            Transformamos planilhas, WhatsApp e processos manuais em sistemas, sites, aplicativos
            e automações sob medida.
          </p>
        </div>

        {/* Principais (4) — 2x2 on tablet+ */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ background: "rgba(242,166,0,0.12)" }}
        >
          {main.map((m, i) => (
            <Card key={m.id} m={m} i={i} />
          ))}
        </div>

        {/* Section divider label */}
        <div className="mt-12 mb-5 flex items-center gap-3">
          <span
            className="mono text-[10px] uppercase tracking-widest"
            style={{ color: "#F2A600" }}
          >
            Complementos
          </span>
          <span
            className="flex-1 h-px"
            style={{
              background: "linear-gradient(to right, rgba(242,166,0,0.20), transparent)",
            }}
          />
        </div>

        {/* Complementos (3) — 1x3 */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(242,166,0,0.08)" }}
        >
          {complements.map((m, i) => (
            <Card key={m.id} m={m} i={i} dense />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
