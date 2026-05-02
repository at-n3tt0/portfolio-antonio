"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Code2, DatabaseZap, FileText, Globe, MenuSquare, PlugZap, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Globe, Code2, PlugZap, Workflow, FileText, DatabaseZap, MenuSquare, CalendarCheck];

export default function Servicos() {
  const { t } = useLanguage();

  return (
    <section id="servicos" className="py-32 px-6">
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
            {t.servicos.label}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{
            color: "#f8fafc",
            fontFamily: "var(--font-space-grotesk), sans-serif",
          }}
        >
          {t.servicos.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-16 max-w-2xl"
          style={{ color: "#94a3b8" }}
        >
          {t.servicos.sub}
        </motion.p>

        {/* 2-column grid of 8 services */}
        <div className="grid md:grid-cols-2 gap-3">
          {t.servicos.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="group relative flex items-start gap-5 px-6 py-5 transition-all duration-200"
                style={{
                  borderLeft: "3px solid #f59e0b",
                  background: "rgba(251,191,36,0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(251,191,36,0.06)";
                  e.currentTarget.style.boxShadow = "-2px 0 12px rgba(245,158,11,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(251,191,36,0.03)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className="mt-0.5 flex-shrink-0 w-9 h-9 flex items-center justify-center"
                  style={{
                    background: "rgba(251,191,36,0.08)",
                    border: "1px solid rgba(251,191,36,0.2)",
                  }}
                >
                  <Icon size={18} style={{ color: "#f59e0b" }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold text-base mb-1.5"
                    style={{ color: "#f8fafc" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/5591980242234?text=Ola%2C%20vim%20pelo%20site%20da%20atnetto.tech%20e%20quero%20um%20diagnostico."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fb923c)",
              color: "#030712",
            }}
          >
            {t.servicos.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
