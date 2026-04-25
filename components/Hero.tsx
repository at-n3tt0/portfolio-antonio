"use client";

import { motion } from "framer-motion";
import ParticlesBg from "./ParticlesBg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesBg />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060b14] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Brand badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span
            className="inline-block font-mono text-xs tracking-[0.35em] uppercase px-4 py-2 rounded-full border"
            style={{
              color: "#00d4ff",
              borderColor: "rgba(0,212,255,0.25)",
              background: "rgba(0,212,255,0.06)",
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
        >
          <span className="text-white">netto</span>
          <span style={{ color: "#00d4ff" }}>.</span>
          <span
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            tech
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/90 text-xl md:text-2xl font-semibold max-w-2xl mx-auto mb-3"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/559XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              color: "#fff",
            }}
          >
            <span className="relative z-10">{t.hero.cta}</span>
          </a>

          <button
            onClick={() => handleScroll("#servicos")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-[rgba(0,212,255,0.3)] text-slate-300 hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300"
          >
            {t.hero.cta2}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-xs font-mono tracking-widest uppercase">
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
