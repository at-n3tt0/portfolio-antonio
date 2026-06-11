"use client";

import { motion } from "framer-motion";

type Reason = {
  num: string;
  title: string;
  desc: string;
};

const reasons: Reason[] = [
  {
    num: "01",
    title: "Atendimento direto do início ao fim",
    desc:
      "Sua conversa não se perde entre várias pessoas. O diagnóstico, a proposta e a execução ficam alinhados do começo ao fim.",
  },
  {
    num: "02",
    title: "Solução sob medida",
    desc:
      "A solução é desenhada a partir da sua rotina, do seu orçamento e do tamanho real da sua operação.",
  },
  {
    num: "03",
    title: "Clareza no escopo",
    desc:
      "Antes de começar, alinhamos prioridade, prazo, custo e o que será entregue.",
  },
  {
    num: "04",
    title: "Desenvolvimento responsável",
    desc:
      "Soluções organizadas, documentadas quando necessário e pensadas para continuar evoluindo depois da entrega.",
  },
];

const commitments = [
  "Diagnóstico antes da proposta",
  "Escopo, prazo e orçamento alinhados",
  "Documentação e entrega organizada",
  "Acompanhamento conforme combinado",
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative py-28 px-4 md:px-6"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 70% 10%, rgba(242,166,0,0.04), transparent 60%), #090908",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#F2A600" }}>
            <span>/</span><span>Por que atnetto.tech</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "#F5F5F5",
              letterSpacing: "-0.02em",
            }}
          >
            Por que escolher a atnetto.tech?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#8B8F98" }}>
            Você fala direto com quem entende o problema, planeja a solução e acompanha a entrega.
          </p>
        </div>

        {/* 4 reasons bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="p-6 md:p-8"
              style={{
                background: "rgba(14,12,9,0.6)",
                border: "1px solid rgba(242,166,0,0.12)",
                borderRadius: 16,
              }}
            >
              <div className="flex items-start gap-5">
                <span
                  className="mono text-xs flex-shrink-0 mt-1"
                  style={{ color: "#F2A600", letterSpacing: "0.1em" }}
                >
                  {r.num}
                </span>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-extrabold mb-3"
                    style={{
                      color: "#F5F5F5",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#a8a29e" }}>
                    {r.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compromissos de trabalho */}
        <div className="text-sm mb-4" style={{ color: "#8B8F98" }}>
          Compromissos de trabalho
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{
            background: "rgba(242,166,0,0.12)",
            border: "1px solid rgba(242,166,0,0.12)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {commitments.map((c) => (
            <div
              key={c}
              className="p-5 md:p-6 flex items-start gap-3"
              style={{ background: "#0E0C09" }}
            >
              <span style={{ color: "#F2A600" }} className="mono text-sm mt-0.5">
                ›
              </span>
              <div
                className="text-sm md:text-base"
                style={{
                  color: "#F5F5F5",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {c}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
