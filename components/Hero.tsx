"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const SERVICES_PT = [
  "Sites profissionais ✓",
  "Sistemas web ✓",
  "APIs e integracoes ✓",
  "Automacao empresarial ✓",
  "Landing pages ✓",
  "CRM simples ✓",
  "Cardapio digital ✓",
  "Agendamento online ✓",
];

const SERVICES_EN = [
  "Professional websites ✓",
  "Web systems ✓",
  "APIs and integrations ✓",
  "Business automation ✓",
  "Landing pages ✓",
  "Simple CRM ✓",
  "Digital menu ✓",
  "Online booking ✓",
];

function TerminalTyping({ lang }: { lang: string }) {
  const services = lang === "pt" ? SERVICES_PT : SERVICES_EN;
  const [completed, setCompleted] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [waiting, setWaiting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (waiting) {
      timeoutRef.current = setTimeout(() => {
        const target = services[serviceIndex];
        setCompleted((prev) => {
          const next = [...prev, target];
          return next.length > 4 ? next.slice(next.length - 4) : next;
        });
        setCurrentText("");
        setCharIndex(0);
        setServiceIndex((prev) => (prev + 1) % services.length);
        setWaiting(false);
      }, 1500);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }

    const target = services[serviceIndex];
    if (charIndex < target.length) {
      timeoutRef.current = setTimeout(() => {
        setCurrentText(target.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 50);
    } else {
      timeoutRef.current = setTimeout(() => setWaiting(true), 0);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [charIndex, serviceIndex, waiting, services]);

  return (
    <div
      className="w-full max-w-lg mx-auto text-left"
      style={{
        background: "rgba(15,23,42,0.95)",
        border: "1px solid rgba(251,191,36,0.2)",
        padding: "1.25rem 1.5rem",
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: "0.8rem",
        lineHeight: "1.8",
      }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-1.5 mb-3 pb-2" style={{ borderBottom: "1px solid rgba(251,191,36,0.1)" }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
        <span className="ml-2 text-xs" style={{ color: "#475569" }}>atnetto.tech - bash</span>
      </div>

      {/* Command */}
      <div style={{ color: "#64748b" }}>
        <span style={{ color: "#f59e0b" }}>$</span>
        {" "}
        <span style={{ color: "#94a3b8" }}>atnetto.tech</span>
        {" "}
        <span style={{ color: "#f8fafc" }}>--service</span>
      </div>

      {/* Completed lines */}
      {completed.map((line, i) => (
        <div key={i} style={{ color: "#f59e0b" }}>
          <span style={{ color: "#f59e0b", opacity: 0.6 }}>&gt;</span>
          {" "}
          {line}
        </div>
      ))}

      {/* Currently typing line */}
      <div style={{ color: "#f8fafc" }}>
        <span style={{ color: "#f59e0b", opacity: 0.6 }}>&gt;</span>
        {" "}
        {currentText}
        <span className="terminal-cursor">|</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t, lang } = useLanguage();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated dot-grid background */}
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 60%, #030712 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-16">
        {/* Brand badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span
            className="inline-block font-mono text-xs tracking-[0.35em] uppercase px-4 py-2 border"
            style={{
              color: "#f59e0b",
              borderColor: "rgba(251,191,36,0.25)",
              background: "rgba(251,191,36,0.06)",
            }}
          >
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          <span style={{ color: "#f8fafc" }}>atnetto</span>
          <span
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            .
          </span>
          <span style={{ color: "#f8fafc" }}>tech</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto mb-3"
          style={{ color: "rgba(248,250,252,0.9)" }}
        >
          {t.hero.tagline}
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          {t.hero.sub}
        </motion.p>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mb-10"
        >
          <TerminalTyping lang={lang} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/5591980242234?text=Ola%2C%20vim%20pelo%20site%20da%20atnetto.tech%20e%20quero%20um%20diagnostico."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm transition-all duration-300 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fb923c)",
              color: "#030712",
            }}
          >
            {t.hero.cta}
          </a>

          <button
            onClick={() => handleScroll("#servicos")}
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm border transition-all duration-300 hover:border-amber-500"
            style={{
              borderColor: "rgba(251,191,36,0.3)",
              color: "#cbd5e1",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
          >
            {t.hero.cta2}
          </button>
        </motion.div>

      </div>

      {/* Scroll indicator — fora do div de conteúdo, relativo à section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex"
      >
        <div className="flex flex-col items-center gap-2" style={{ color: "#334155" }}>
          <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, #475569, transparent)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
