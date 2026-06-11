"use client";

import { motion } from "framer-motion";

const pains = [
  "Controle de clientes em planilhas diferentes",
  "Pedido que se perde entre WhatsApp e e-mail",
  "Atendimento manual repetindo a mesma informação",
  "Site institucional travado em 2019 sem captar contato",
];

const trustItems = [
  "Você fala direto com quem desenvolve",
  "Escopo claro antes de começar",
  "Atendimento remoto",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] pt-8 md:pt-12 pb-20 px-4 md:px-6 overflow-hidden scanlines"
    >
      {/* Background layers — subtle, no large highlight blocks */}
      <div className="noc-grid absolute inset-0 pointer-events-none opacity-60" />
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #090908)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono text-[11px] md:text-xs mb-10 flex items-center gap-2 flex-wrap"
          style={{ color: "#475569" }}
        >
          <span style={{ color: "#F2A600" }}>›</span>
          <span style={{ color: "#94a3b8" }}>atnetto.tech</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>Marituba, PA</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>desenvolvimento sob demanda</span>
        </motion.div>

        {/* Main grid: headline left + lateral card right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
          {/* LEFT — headline */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: "#F5F5F5",
              }}
            >
              Sistemas, sites e{" "}
              <span style={{ color: "#F2A600" }}>automações</span> para sua empresa{" "}
              <span
                style={{
                  color: "#F5F5F5",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(242,166,0,0.45)",
                  textDecorationThickness: 1,
                  textUnderlineOffset: 6,
                }}
              >
                sair da planilha
              </span>{" "}
              e operar melhor.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-5 md:mt-6 text-lg md:text-xl max-w-xl leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              Desenvolvimento sob demanda para pequenas empresas que precisam organizar processos,
              melhorar o atendimento e ter presença profissional online — sem comprar um sistema
              gigante que não cabe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#ticket"
                className="group inline-flex items-center gap-2.5 text-base font-semibold px-7 py-3.5 transition-all"
                style={{
                  background: "linear-gradient(135deg, #F2A600, #F2A600)",
                  color: "#090908",
                  borderRadius: 9999,
                  boxShadow: "0 8px 24px -8px rgba(242,166,0,0.5)",
                }}
              >
                <span>Falar com a gente</span>
                <span>→</span>
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 text-base px-6 py-3.5 transition-all"
                style={{
                  color: "#cbd5e1",
                  border: "1px solid rgba(242,166,0,0.3)",
                  borderRadius: 9999,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(242,166,0,0.06)";
                  e.currentTarget.style.borderColor = "rgba(242,166,0,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(242,166,0,0.3)";
                }}
              >
                Ver soluções
              </a>
            </motion.div>

            {/* Trust signal pills */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              {trustItems.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-2 text-xs md:text-sm px-3.5 py-1.5"
                  style={{
                    color: "#cbd5e1",
                    background: "rgba(242,166,0,0.05)",
                    border: "1px solid rgba(242,166,0,0.18)",
                    borderRadius: 9999,
                  }}
                >
                  <span style={{ color: "#F2A600" }} aria-hidden>
                    ✓
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — pain card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full"
          >
            <div
              className="relative"
              style={{
                background: "rgba(28,25,23,0.7)",
                border: "1px solid rgba(242,166,0,0.18)",
                backdropFilter: "blur(6px)",
                borderRadius: 6,
              }}
            >
              <div
                className="flex items-center justify-between px-5 py-3 text-xs"
                style={{
                  borderBottom: "1px solid rgba(242,166,0,0.12)",
                  color: "#94a3b8",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  className="font-medium"
                >
                  O tipo de problema que resolvemos
                </span>
                <span
                  className="text-[10px] uppercase tracking-widest"
                  style={{ color: "#64748b" }}
                >
                  exemplos comuns
                </span>
              </div>

              <ul className="divide-y" style={{ borderColor: "rgba(242,166,0,0.08)" }}>
                {pains.map((p) => (
                  <li
                    key={p}
                    className="px-5 py-4 flex items-start gap-3"
                    style={{ borderColor: "rgba(242,166,0,0.08)" }}
                  >
                    <span className="mono text-xs mt-0.5" style={{ color: "#F2A600" }}>
                      ›
                    </span>
                    <p
                      className="text-sm md:text-base leading-snug"
                      style={{
                        color: "#F5F5F5",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                      }}
                    >
                      {p}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
