"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Wrench, Network } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Code2, Globe, Wrench, Network];
const colors = ["#00d4ff", "#7c3aed", "#f59e0b", "#10b981"];
const stacks = [
  ["PHP / Laravel", "Python / FastAPI", "React"],
  ["Next.js", "Tailwind CSS", "WordPress"],
  ["Diagnóstico", "Hardware", "Software"],
  ["MikroTik", "Servidores Linux", "Cabeamento"],
];

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
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#00d4ff] opacity-70">
            {t.servicos.label}
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {t.servicos.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg mb-16 max-w-2xl"
        >
          {t.servicos.sub}
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {t.servicos.items.map((item, i) => {
            const Icon = icons[i];
            const color = colors[i];
            const stack = stacks[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="group relative p-7 rounded-2xl border transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                {/* Hover background glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(400px at 0% 0%, ${color}08 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${color}12`,
                    border: `1px solid ${color}25`,
                  }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono"
                      style={{
                        color,
                        background: `${color}10`,
                        border: `1px solid ${color}22`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
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
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/559XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              color: "#fff",
            }}
          >
            {t.servicos.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
