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
    title: "Critério técnico",
    desc:
      "Construímos com padrão de produção desde o protótipo: código auditável, deploy reproduzível, decisões de stack justificadas pelo caso.",
  },
  {
    num: "02",
    title: "Clareza no escopo",
    desc:
      "Antes de codar, alinhamos problema, prazo e orçamento. Sem proposta inflada nem entrega surpresa.",
  },
  {
    num: "03",
    title: "Suporte sob demanda",
    desc:
      "Após a entrega, o acompanhamento — manutenção evolutiva, ajustes e monitoramento — é contratado conforme a necessidade do cliente.",
  },
  {
    num: "04",
    title: "Soluções ajustadas ao cenário",
    desc:
      "Servidor, banco, backend, frontend, integração, automação. Uma conversa, uma responsabilidade — dimensionado ao tamanho da operação.",
  },
];

const sectors = [
  "Gestão pública",
  "Comércio & serviços",
  "Indústria leve",
  "Saúde",
  "Educação",
  "Logística",
  "Imobiliário",
  "Software interno",
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
            Quatro razões pra fechar com a gente.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#8B8F98" }}>
            Não é a única opção. Mas entrega tecnologia bem planejada, suporte direto e soluções ajustadas à sua operação.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-px mb-12"
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

        {/* Sectors */}
        <div>
          <div className="text-sm mb-4" style={{ color: "#8B8F98" }}>
            Setores com afinidade
          </div>
          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="px-4 py-2 text-sm"
                style={{
                  color: "#cbd5e1",
                  background: "rgba(242,166,0,0.06)",
                  border: "1px solid rgba(242,166,0,0.18)",
                  borderRadius: 9999,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
