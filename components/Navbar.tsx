"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t.nav.inicio, href: "#hero" },
    { label: t.nav.servicos, href: "#servicos" },
    { label: t.nav.sobre, href: "#sobre" },
    { label: t.nav.projetos, href: "#projetos" },
    { label: t.nav.contato, href: "#contato" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060b14]/90 backdrop-blur-md border-b border-[rgba(0,212,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick("#hero")}
          className="font-bold text-xl tracking-tight text-white"
        >
          netto
          <span style={{ color: "#00d4ff" }}>.</span>
          tech
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="text-sm text-slate-400 hover:text-[#00d4ff] transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            </li>
          ))}
          {/* Language toggle */}
          <li>
            <motion.button
              onClick={toggleLang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200"
              style={{
                borderColor: "rgba(0,212,255,0.3)",
                color: "#00d4ff",
                background: "rgba(0,212,255,0.06)",
              }}
              aria-label="Toggle language"
            >
              <Globe size={13} />
              {lang === "pt" ? "EN" : "PT"}
            </motion.button>
          </li>
          <li>
            <a
              href="https://wa.me/559XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                color: "#fff",
              }}
            >
              {t.nav.orcamento}
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#060b14]/95 backdrop-blur-md border-b border-[rgba(0,212,255,0.1)]"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-slate-300 hover:text-[#00d4ff] transition-colors text-sm w-full text-left py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              {/* Language toggle mobile */}
              <li>
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200"
                  style={{
                    borderColor: "rgba(0,212,255,0.3)",
                    color: "#00d4ff",
                    background: "rgba(0,212,255,0.06)",
                  }}
                >
                  <Globe size={13} />
                  {lang === "pt" ? "EN" : "PT"}
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/559XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 px-5 py-3 rounded-full text-sm font-semibold text-center transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    color: "#fff",
                  }}
                >
                  {t.nav.orcamento}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
