"use client";

import { motion } from "framer-motion";

type Step = {
  num: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entendemos o problema, a rotina atual, a prioridade e o resultado esperado.",
  },
  {
    num: "02",
    title: "Proposta",
    desc: "Definimos escopo, prazo, investimento e o que será entregue antes de começar.",
  },
  {
    num: "03",
    title: "Desenvolvimento",
    desc: "Construímos em etapas, com validações durante o caminho.",
  },
  {
    num: "04",
    title: "Entrega",
    desc: "Publicamos, orientamos o uso e deixamos a entrega organizada.",
  },
  {
    num: "05",
    title: "Evolução",
    desc: "Depois da entrega, podemos seguir com ajustes, melhorias e suporte conforme combinado.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#F2A600" }}>
            <span>/</span>
            <span>Como funciona</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "#F5F5F5",
              letterSpacing: "-0.02em",
            }}
          >
            Como tiramos sua ideia do papel
          </h2>
          <p
            className="mt-4 max-w-2xl text-base leading-relaxed"
            style={{ color: "#8B8F98" }}
          >
            Diagnóstico curto, proposta clara, construção em etapas e acompanhamento depois da
            entrega — conforme o que for combinado.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {/* connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(242,166,0,0.25) 12%, rgba(242,166,0,0.25) 88%, transparent)",
            }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-5 md:p-6"
              style={{
                background: "rgba(14,12,9,0.5)",
                border: "1px solid rgba(242,166,0,0.12)",
                borderRadius: 14,
              }}
            >
              {/* number disc */}
              <div className="relative inline-flex items-center justify-center mb-4">
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(242,166,0,0.20), transparent 70%)",
                  }}
                />
                <span
                  className="relative inline-flex items-center justify-center w-10 h-10 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #FFB300, #F2A600)",
                    color: "#090908",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontWeight: 900,
                    fontSize: 15,
                    letterSpacing: "-0.04em",
                    boxShadow: "0 8px 24px -8px rgba(242,166,0,0.45)",
                  }}
                >
                  {s.num}
                </span>
              </div>

              <h3
                className="text-lg md:text-xl font-extrabold mb-2"
                style={{
                  color: "#F5F5F5",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#a8a29e" }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
