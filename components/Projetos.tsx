"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const projetosMeta = [
  {
    stack: ["Laravel", "PHP", "MySQL"],
    href: "https://github.com/at-n3tt0",
    highlight: true,
  },
  {
    stack: ["Laravel", "PHP", "MySQL"],
    href: "https://github.com/at-n3tt0/sigma-marituba",
    highlight: false,
  },
  {
    stack: ["FastAPI", "React", "Docker"],
    href: "https://github.com/at-n3tt0/server-monitor",
    highlight: true,
  },
  {
    stack: ["FastAPI", "Docker", "PostgreSQL"],
    href: "https://github.com/at-n3tt0/nexlicense",
    highlight: false,
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
      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium"
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
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#00d4ff] opacity-70">
            {t.projetos.label}
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {t.projetos.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg mb-16 max-w-2xl"
        >
          {t.projetos.sub}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {t.projetos.items.map((item, i) => {
            const meta = projetosMeta[i];
            return (
              <motion.a
                key={item.title}
                href={meta.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col p-7 rounded-2xl border transition-all duration-300"
                style={{
                  background: meta.highlight
                    ? "linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(124,58,237,0.04) 100%)"
                    : "rgba(255,255,255,0.02)",
                  borderColor: meta.highlight
                    ? "rgba(0,212,255,0.2)"
                    : "rgba(255,255,255,0.06)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.06) 100%)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-white text-lg group-hover:text-[#00d4ff] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <span className="text-slate-600 group-hover:text-slate-400 transition-colors duration-200 text-sm ml-4 mt-0.5">
                      ↗
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {meta.stack.map((s) => (
                      <StackBadge key={s} label={s} />
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/at-n3tt0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#00d4ff] transition-colors duration-200 font-mono"
          >
            Ver todos os repositórios no GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
