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
    title: "Operação real, não tela bonita",
    desc:
      "Construímos sistemas que rodam em produção, com usuários reais, sob pressão. Não entregamos mockup polido que quebra no primeiro deploy.",
  },
  {
    num: "02",
    title: "Stack moderna, escolha cirúrgica",
    desc:
      "Laravel, FastAPI, React, PostgreSQL, Docker, Linux. Cada projeto recebe a stack certa pelo caso — não a stack da moda do mês.",
  },
  {
    num: "03",
    title: "Suporte que não larga",
    desc:
      "Depois do go-live a gente continua. Monitoramento ativo, manutenção evolutiva e plantão para incidente crítico. Sem mensagem ignorada.",
  },
  {
    num: "04",
    title: "Do diagnóstico ao deploy",
    desc:
      "Servidor, rede, banco, backend, frontend, integração, observabilidade, automação. Um time, uma conversa, uma responsabilidade.",
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

const guarantees = [
  { k: "Resposta em horário comercial", v: "até 4h" },
  { k: "Tempo médio de diagnóstico", v: "48h" },
  { k: "Disponibilidade de plantão", v: "24/7" },
  { k: "Backups verificados", v: "diários" },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative py-28 px-4 md:px-6"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 70% 10%, rgba(255,154,0,0.04), transparent 60%), #090908",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#FF9A00" }}>
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
            Não é a única opção. Mas é a única que te entrega tecnologia que funciona, suporte que responde e operação que não para.
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
                border: "1px solid rgba(255,154,0,0.12)",
                borderRadius: 16,
              }}
            >
              <div className="flex items-start gap-5">
                <span
                  className="mono text-xs flex-shrink-0 mt-1"
                  style={{ color: "#FF9A00", letterSpacing: "0.1em" }}
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

        {/* Guarantees row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-12"
          style={{
            background: "rgba(255,154,0,0.12)",
            border: "1px solid rgba(255,154,0,0.12)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {guarantees.map((g) => (
            <div
              key={g.k}
              className="p-5 md:p-6"
              style={{ background: "#0E0C09" }}
            >
              <div
                className="text-2xl md:text-3xl font-extrabold mb-1"
                style={{
                  color: "#FF9A00",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                {g.v}
              </div>
              <div className="text-xs md:text-sm" style={{ color: "#8B8F98" }}>
                {g.k}
              </div>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <div>
          <div className="text-sm mb-4" style={{ color: "#8B8F98" }}>
            Setores que atendemos
          </div>
          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="px-4 py-2 text-sm"
                style={{
                  color: "#cbd5e1",
                  background: "rgba(255,154,0,0.06)",
                  border: "1px solid rgba(255,154,0,0.18)",
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
