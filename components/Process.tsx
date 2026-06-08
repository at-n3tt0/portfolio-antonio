"use client";

import { motion } from "framer-motion";

type Step = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
};

const steps: Step[] = [
  {
    num: "01",
    title: "Diagnóstico",
    desc:
      "A gente entende o problema antes de propor solução. Conversa direta sobre operação, gargalo, urgência e orçamento.",
    bullets: [
      "Mapeamento da operação atual",
      "Identificação de gargalos críticos",
      "Estimativa de prazo e investimento",
    ],
  },
  {
    num: "02",
    title: "Construção",
    desc:
      "Desenvolvimento sob medida com a stack certa pro problema. Entrega por etapas, com você acompanhando o que está pronto.",
    bullets: [
      "Stack escolhida pelo caso, não por moda",
      "Entregas incrementais validáveis",
      "Documentação e código auditável",
    ],
  },
  {
    num: "03",
    title: "Operação contínua",
    desc:
      "O sistema entra no ar e a gente fica. Monitoramento ativo, manutenção, ajustes e plantão para incidentes críticos.",
    bullets: [
      "Monitoramento 24/7 com alertas",
      "Manutenção evolutiva mensal",
      "Plantão técnico para urgências",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#FF9A00" }}>
            <span>/</span><span>Como funciona</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "#F5F5F5",
              letterSpacing: "-0.02em",
            }}
          >
            Do problema ao sistema rodando — em 3 fases.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#8B8F98" }}>
            Sem proposta inflada. Sem reunião de 1 hora antes de começar. Diagnóstico curto, construção em etapas, operação contínua depois do go-live.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,154,0,0.25), rgba(255,154,0,0.25), transparent)",
            }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative p-6 md:p-8"
              style={{
                background: "rgba(14,12,9,0.5)",
                border: "1px solid rgba(255,154,0,0.12)",
                borderRadius: 16,
              }}
            >
              {/* number disc */}
              <div className="relative inline-flex items-center justify-center mb-5">
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,154,0,0.20), transparent 70%)",
                  }}
                />
                <span
                  className="relative inline-flex items-center justify-center w-12 h-12 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #FFB21A, #FF9A00)",
                    color: "#090908",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontWeight: 900,
                    fontSize: 18,
                    letterSpacing: "-0.04em",
                    boxShadow: "0 10px 30px -8px rgba(255,154,0,0.45)",
                  }}
                >
                  {s.num}
                </span>
              </div>

              <h3
                className="text-xl md:text-2xl font-extrabold mb-3"
                style={{
                  color: "#F5F5F5",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: "#a8a29e" }}>
                {s.desc}
              </p>

              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: "#cbd5e1" }}>
                    <span style={{ color: "#FF9A00", marginTop: 2 }}>›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
