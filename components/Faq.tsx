"use client";

import { motion, useReducedMotion } from "framer-motion";
import { colors } from "@/lib/colors";
import { revealInitial, revealTransition, reducedTransition } from "@/lib/motion";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Quanto custa um site profissional?",
    a: "Depende do escopo. Um site simples, uma landing page e um site institucional completo têm tamanhos diferentes. Depois do diagnóstico, enviamos uma proposta com valor, prazo e o que será entregue.",
  },
  {
    q: "Quanto custa um sistema sob medida?",
    a: "Depende da quantidade de telas, regras, usuários, integrações e relatórios. A ideia é entender primeiro o problema e propor uma primeira versão viável, sem criar um sistema maior do que sua empresa precisa.",
  },
  {
    q: "Posso começar com algo simples e evoluir depois?",
    a: "Sim. Na maioria dos casos, esse é o melhor caminho. Começamos com uma versão inicial útil, colocamos para funcionar e evoluímos conforme a rotina da empresa pede.",
  },
  {
    q: "Vocês desenvolvem aplicativos?",
    a: "Sim. Podemos desenvolver aplicativos e sistemas pensados para celular. Também podemos desenvolver aplicativos web instaláveis quando esse for o melhor caminho para o projeto.",
  },
  {
    q: "Vocês fazem automação com WhatsApp, planilhas ou outros sistemas?",
    a: "Sim, quando a integração é viável. Podemos automatizar cadastros, atendimentos, formulários, notificações, registros e tarefas repetitivas que hoje são feitas manualmente.",
  },
  {
    q: "Vocês fazem manutenção depois da entrega?",
    a: "Sim. A manutenção pode ser combinada por mensalidade, pacote de melhorias ou demanda avulsa. Não precisa ser obrigatória para todos os projetos.",
  },
  {
    q: "O sistema fica online?",
    a: "Sim. O sistema pode ficar online para acesso pela equipe, clientes ou administradores, conforme o tipo de projeto. A forma de hospedagem é definida na proposta.",
  },
  {
    q: "Quanto tempo leva para entregar?",
    a: "Depende do escopo. Uma landing page costuma ser mais rápida. Um sistema com várias telas, usuários e regras exige mais tempo. O prazo é definido antes de começar.",
  },
  {
    q: "Vocês trabalham com proposta ou contrato?",
    a: "Sim. Antes de iniciar, alinhamos escopo, prazo, valor e condições de entrega. Quando necessário, isso pode ser formalizado em proposta ou contrato simples.",
  },
  {
    q: "Vocês usam qual tecnologia?",
    a: "A tecnologia é escolhida conforme o problema, o orçamento e a necessidade do projeto. O foco é entregar uma solução estável, organizada e sem amarra proprietária.",
  },
];

export default function Faq() {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id="faq"
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
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-14 max-w-3xl">
          <div
            className="text-xs mb-3 flex items-center gap-2 uppercase tracking-widest"
            style={{ color: colors.brand.orange, letterSpacing: "0.18em" }}
          >
            <span>/</span>
            <span>Perguntas frequentes</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: colors.light.text,
              letterSpacing: "-0.02em",
            }}
          >
            O que clientes costumam perguntar
          </h2>
          <p
            className="mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: colors.light.textMuted }}
          >
            Respostas curtas para o que mais surge antes da gente começar a conversa.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? reducedTransition : revealTransition()}
          className="overflow-hidden"
          style={{
            background: colors.light.surface,
            border: `1px solid ${colors.light.border}`,
            borderRadius: 14,
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.08)",
          }}
        >
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className="faq-item group"
              style={{
                borderTop: i === 0 ? "none" : `1px solid ${colors.light.border}`,
              }}
            >
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 md:px-6 py-4 md:py-5 transition-colors hover:bg-black/[0.025]"
              >
                <span
                  className="text-base md:text-lg font-semibold leading-snug"
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    color: colors.light.text,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="flex-shrink-0 inline-flex items-center justify-center transition-transform duration-200 group-open:rotate-45"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 9999,
                    background: "rgba(242,166,0,0.10)",
                    border: `1px solid ${colors.brand.orange}`,
                    color: colors.brand.orange,
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </summary>
              <div className="faq-answer">
                <div
                  className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-sm md:text-base leading-relaxed max-w-3xl"
                  style={{ color: colors.light.textMuted }}
                >
                  {item.a}
                </div>
              </div>
            </details>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
