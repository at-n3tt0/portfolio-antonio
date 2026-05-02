"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Sobre() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-32 px-6">
      {/* Top divider */}
      <div
        className="max-w-6xl mx-auto mb-16 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(251,191,36,0.2), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: "#f59e0b", opacity: 0.7 }}
          >
            {t.sobre.label}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold mb-16 max-w-3xl"
          style={{
            color: "#f8fafc",
            fontFamily: "var(--font-space-grotesk), sans-serif",
            lineHeight: 1.3,
          }}
        >
          {t.sobre.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
              {t.sobre.p1}
            </p>
            <p className="leading-relaxed" style={{ color: "#94a3b8" }}>
              {t.sobre.p2}
            </p>
            <p className="leading-relaxed" style={{ color: "#94a3b8" }}>
              {t.sobre.p3}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {t.sobre.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="p-4"
                  style={{
                    background: "rgba(251,191,36,0.03)",
                    borderLeft: "2px solid rgba(251,191,36,0.4)",
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-0.5"
                    style={{ color: "#f59e0b", fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "#64748b" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5591980242234?text=Ola%2C%20vim%20pelo%20site%20da%20atnetto.tech%20e%20quero%20um%20diagnostico."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{ color: "#f59e0b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fb923c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f59e0b")}
              >
                {t.sobre.whatsapp}
              </a>
            </div>
          </motion.div>

          {/* Right — 4 pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-3"
          >
            {t.sobre.pillars.map((pillar, i) => (
              <motion.div
                key={pillar}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                className="flex items-center gap-4 px-5 py-4"
                style={{
                  background: "rgba(15,23,42,0.8)",
                  border: "1px solid rgba(251,191,36,0.12)",
                }}
              >
                <span
                  className="font-mono text-xs flex-shrink-0"
                  style={{ color: "#f59e0b", opacity: 0.6 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-sm" style={{ color: "#f8fafc" }}>
                  {pillar}
                </span>
                <div
                  className="ml-auto h-px flex-1"
                  style={{ background: "rgba(251,191,36,0.1)", maxWidth: "60px" }}
                />
              </motion.div>
            ))}

            {/* Terminal flavor */}
            <div
              className="mt-4 p-4"
              style={{
                background: "rgba(15,23,42,0.8)",
                border: "1px solid rgba(251,191,36,0.1)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.75rem",
              }}
            >
              <div style={{ color: "#475569" }}>
                <span style={{ color: "#f59e0b" }}>$</span> atnetto.tech --info
              </div>
              <div className="mt-2" style={{ color: "#64748b" }}>
                <span style={{ color: "#f59e0b", opacity: 0.6 }}>&gt;</span>
                {" "}Marituba, PA · Brasil
              </div>
              <div style={{ color: "#64748b" }}>
                <span style={{ color: "#f59e0b", opacity: 0.6 }}>&gt;</span>
                {" "}Solucoes digitais para empresas
              </div>
              <div style={{ color: "#64748b" }}>
                <span style={{ color: "#f59e0b", opacity: 0.6 }}>&gt;</span>
                {" "}@at_netto.tech
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
