"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projetosMeta = [
  {
    stack: ["Laravel", "PHP", "MySQL"],
    href: "https://github.com/at-n3tt0",
  },
  {
    stack: ["Laravel", "PHP", "MySQL"],
    href: "https://github.com/at-n3tt0/sigma-marituba",
  },
  {
    stack: ["FastAPI", "React", "Docker"],
    href: "https://github.com/at-n3tt0/server-monitor",
  },
  {
    stack: ["FastAPI", "Docker", "PostgreSQL"],
    href: "https://github.com/at-n3tt0/nexlicense",
  },
];

const stackColor: Record<string, string> = {
  Laravel: "#FF2D20",
  PHP: "#777BB4",
  FastAPI: "#009688",
  React: "#61DAFB",
  PostgreSQL: "#336791",
  MySQL: "#F29111",
  Docker: "#2496ED",
};

function StackBadge({ label }: { label: string }) {
  const color = stackColor[label] ?? "#94a3b8";
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium"
      style={{
        background: `${color}18`,
        color,
        border: `1px solid ${color}30`,
      }}
    >
      {label}
    </span>
  );
}

export default function Projetos() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-32 px-6">
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
            {t.projetos.label}
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
          {t.projetos.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-16 max-w-2xl"
          style={{ color: "#94a3b8" }}
        >
          {t.projetos.sub}
        </motion.p>

        {/* Horizontal full-width cards */}
        <div className="flex flex-col gap-3">
          {t.projetos.items.map((item, i) => {
            const meta = projetosMeta[i];
            return (
              <motion.a
                key={item.title}
                href={meta.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative flex items-center gap-6 px-6 py-5 transition-all duration-200"
                style={{
                  borderTop: "1px solid rgba(251,191,36,0.2)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(251,191,36,0.03)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {/* Index */}
                <span
                  className="hidden sm:block flex-shrink-0 font-mono text-xs w-6 text-right"
                  style={{ color: "#334155" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Left: title + description */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold text-base mb-1 transition-colors duration-200"
                    style={{ color: "#f8fafc" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: "#64748b" }}
                  >
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {meta.stack.map((s) => (
                      <StackBadge key={s} label={s} />
                    ))}
                  </div>
                </div>

                {/* Right: Ver mais */}
                <div
                  className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                  style={{ color: "#475569" }}
                >
                  <ArrowUpRight size={18} style={{ color: "inherit" }} />
                </div>
              </motion.a>
            );
          })}

          {/* Bottom border */}
          <div
            className="h-px"
            style={{ background: "rgba(251,191,36,0.1)" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/at-n3tt0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono transition-colors duration-200"
            style={{ color: "#475569" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
          >
            Ver todos os repositórios no GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
