"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Skill badges by category
const skillCategories = [
  {
    label: "Backend",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    skills: ["PHP", "Laravel", "Python", "FastAPI"],
  },
  {
    label: "Frontend",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.1)",
    border: "rgba(96,165,250,0.25)",
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    label: "DevOps / Infra",
    color: "#34d399",
    bg: "rgba(52,211,153,0.1)",
    border: "rgba(52,211,153,0.25)",
    skills: ["Docker", "Linux", "Proxmox"],
  },
  {
    label: "Redes",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.1)",
    border: "rgba(251,146,60,0.25)",
    skills: ["MikroTik", "Zabbix"],
  },
  {
    label: "Banco de Dados",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.1)",
    border: "rgba(167,139,250,0.25)",
    skills: ["MySQL", "PostgreSQL"],
  },
];

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
          className="text-3xl md:text-4xl font-bold mb-16"
          style={{
            color: "#f8fafc",
            fontFamily: "var(--font-space-grotesk), sans-serif",
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
                href="https://wa.me/559XXXXXXXXX"
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

          {/* Right — skill badges grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <div
              className="p-5"
              style={{
                background: "rgba(15,23,42,0.8)",
                border: "1px solid rgba(251,191,36,0.12)",
              }}
            >
              <div
                className="font-mono text-xs mb-4 pb-2"
                style={{
                  color: "#475569",
                  borderBottom: "1px solid rgba(251,191,36,0.08)",
                }}
              >
                <span style={{ color: "#f59e0b" }}>$</span> tech-stack --list
              </div>

              {skillCategories.map((cat, ci) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + ci * 0.07 }}
                  className="mb-4 last:mb-0"
                >
                  <div
                    className="text-xs font-mono mb-2"
                    style={{ color: "#475569" }}
                  >
                    # {cat.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-semibold"
                        style={{
                          color: cat.color,
                          background: cat.bg,
                          border: `1px solid ${cat.border}`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
