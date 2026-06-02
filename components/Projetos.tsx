"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const clientesMeta = [
  {
    tags: ["Laravel", "PHP", "MySQL"],
    href: "https://github.com/at-n3tt0/sistema-pmm",
  },
  {
    tags: ["Laravel", "PHP", "MySQL"],
    href: "https://github.com/at-n3tt0/sigma-marituba",
  },
  {
    tags: ["FastAPI", "React", "PostgreSQL", "Docker"],
    href: "https://github.com/at-n3tt0/server-monitor",
  },
  {
    tags: ["FastAPI", "Docker", "Mercado Pago"],
    href: "https://github.com/at-n3tt0/nexlicense",
  },
  {
    tags: ["Laravel", "PHP"],
    href: "https://github.com/at-n3tt0/comcontrol",
  },
  {
    tags: ["Laravel", "React", "Node", "IA"],
    href: "https://github.com/at-n3tt0/escritorio-neto-ai",
  },
];

const tagColor: Record<string, string> = {
  Laravel: "#FF2D20",
  PHP: "#777BB4",
  MySQL: "#4479A1",
  FastAPI: "#009688",
  React: "#61DAFB",
  PostgreSQL: "#336791",
  Docker: "#2496ED",
  Node: "#339933",
  "Mercado Pago": "#00B1EA",
  IA: "#a78bfa",
};

function TagBadge({ label }: { label: string }) {
  const color = tagColor[label] ?? "#94a3b8";
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

        {/* Client cards */}
        <div className="flex flex-col gap-3">
          {t.projetos.items.map((item, i) => {
            const meta = clientesMeta[i];
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

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3
                      className="font-bold text-base"
                      style={{ color: "#f8fafc" }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className="font-mono text-xs px-2 py-0.5"
                      style={{
                        color: "#f59e0b",
                        background: "rgba(251,191,36,0.08)",
                        border: "1px solid rgba(251,191,36,0.15)",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-2"
                    style={{ color: "#64748b" }}
                  >
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {meta.tags.map((tag) => (
                      <TagBadge key={tag} label={tag} />
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="flex-shrink-0 transition-colors duration-200"
                  style={{ color: "#475569" }}
                >
                  <ArrowUpRight size={18} />
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
            Ver repositórios no GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
