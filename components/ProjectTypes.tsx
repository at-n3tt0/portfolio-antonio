"use client";

import { motion, useReducedMotion } from "framer-motion";
import { colors } from "@/lib/colors";
import { hoverLift, revealInitial, revealTransition, reducedTransition } from "@/lib/motion";

type ProjectType = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  delivery: string;
};

const projects: ProjectType[] = [
  {
    id: "sistema",
    title: "Sistema interno de gestão",
    problem:
      "Controle de clientes, pedidos, atendimentos ou estoque espalhado em planilhas e conversas.",
    solution:
      "Sistema web com cadastro centralizado, acompanhamento e relatórios.",
    delivery:
      "Sistema publicado, orientação de uso e base pronta para evolução.",
  },
  {
    id: "site",
    title: "Site profissional com captação",
    problem:
      "Empresa sem presença online clara ou com site antigo que não gera contato.",
    solution:
      "Site institucional ou landing page com apresentação objetiva, botão para WhatsApp e estrutura de conversão.",
    delivery:
      "Site publicado, conteúdo organizado e orientação para manutenção.",
  },
  {
    id: "app",
    title: "Aplicativo ou sistema para celular",
    problem:
      "Equipe ou cliente precisa acessar informações e executar ações pelo celular.",
    solution:
      "Aplicativo web instalável ou sistema pensado para celular com telas simples e acesso rápido.",
    delivery:
      "Aplicativo ou sistema para celular publicado, fluxo validado e orientação de uso.",
  },
  {
    id: "automação",
    title: "Automação de atendimento ou processo",
    problem:
      "Equipe repetindo tarefas manuais, copiando dados ou respondendo as mesmas informações várias vezes.",
    solution:
      "Fluxo automatizado entre formulário, WhatsApp, planilha, e-mail ou sistema.",
    delivery:
      "Automação funcionando, registros organizados e ajustes iniciais conforme combinado.",
  },
];

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div
        className="text-[10px] uppercase tracking-widest mb-1"
        style={{ color: colors.brand.orange, letterSpacing: "0.18em" }}
      >
        {label}
      </div>
      <p
        className="text-sm md:text-[15px] leading-relaxed"
        style={{ color: colors.light.textMuted }}
      >
        {text}
      </p>
    </div>
  );
}

export default function ProjectTypes() {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id="project-types"
      initial={revealInitial(!!reduced)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={reduced ? reducedTransition : revealTransition()}
      className="relative py-24 md:py-32 px-4 md:px-6"
      style={{
        background: colors.light.bg,
        color: colors.light.text,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div
            className="text-xs mb-3 flex items-center gap-2 uppercase tracking-widest"
            style={{ color: colors.brand.orange, letterSpacing: "0.18em" }}
          >
            <span>/</span>
            <span>Experiências aplicadas</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: colors.light.text,
              letterSpacing: "-0.02em",
            }}
          >
            Do problema à solução
          </h2>
          <p
            className="mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: colors.light.textMuted }}
          >
            Formatos de solução que podem ser adaptados para diferentes rotinas e operações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={revealInitial(!!reduced)}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={reduced ? reducedTransition : revealTransition((i % 2) * 0.06)}
              whileHover={hoverLift(!!reduced, true)}
              className="at-card-interactive p-6 md:p-7"
              style={{
                background: colors.light.surface,
                border: `1px solid ${colors.light.border}`,
                borderRadius: 14,
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="text-[10px] uppercase tracking-widest mb-3"
                style={{ color: colors.light.textDim, letterSpacing: "0.18em" }}
              >
                Tipo de entrega
              </div>
              <h3
                className="text-xl md:text-2xl font-extrabold mb-5"
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  color: colors.light.text,
                  letterSpacing: "-0.02em",
                }}
              >
                {p.title}
              </h3>

              <div className="space-y-4">
                <Row label="Problema típico" text={p.problem} />
                <Row label="Solução" text={p.solution} />
                <Row label="Entrega típica" text={p.delivery} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
