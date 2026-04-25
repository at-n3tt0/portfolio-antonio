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
            "linear-gradient(90deg, transparent, rgba(0,212,255,0.15), transparent)",
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
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#00d4ff] opacity-70">
            {t.sobre.label}
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-16"
        >
          {t.sobre.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              {t.sobre.p1}
            </p>
            <p className="text-slate-400 leading-relaxed">{t.sobre.p2}</p>
            <p className="text-slate-400 leading-relaxed">{t.sobre.p3}</p>

            <div className="pt-2">
              <a
                href="https://wa.me/559XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{ color: "#00d4ff" }}
              >
                {t.sobre.whatsapp}
              </a>
            </div>
          </motion.div>

          {/* Right — avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Avatar placeholder */}
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center text-3xl font-bold select-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))",
                border: "2px solid rgba(0,212,255,0.25)",
                color: "#00d4ff",
              }}
            >
              AN
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {t.sobre.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(0,212,255,0.1)",
                  }}
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#00d4ff" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
