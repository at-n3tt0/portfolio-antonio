"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t.nav.inicio, href: "#hero", id: "hero" },
    { label: t.nav.servicos, href: "#servicos", id: "servicos" },
    { label: t.nav.sobre, href: "#sobre", id: "sobre" },
    { label: t.nav.projetos, href: "#projetos", id: "projetos" },
    { label: t.nav.contato, href: "#contato", id: "contato" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "servicos", "sobre", "projetos", "contato"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
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
          ? "border-b"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(3,7,18,0.9)",
              backdropFilter: "blur(12px)",
              borderColor: "rgba(251,191,36,0.1)",
            }
          : {}
      }
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick("#hero")}
          className="font-bold text-xl tracking-tight text-white"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          netto
          <span style={{ color: "#f59e0b" }}>.</span>
          tech
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  className="relative text-sm font-medium transition-colors duration-200 pb-1"
                  style={{ color: isActive ? "#f59e0b" : "#94a3b8" }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: "#f59e0b" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}

          {/* Language toggle */}
          <li>
            <motion.button
              onClick={toggleLang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border transition-all duration-200"
              style={{
                borderColor: "rgba(251,191,36,0.3)",
                color: "#f59e0b",
                background: "rgba(251,191,36,0.06)",
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
              className="px-5 py-2 text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                color: "#030712",
              }}
            >
              {t.nav.orcamento}
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "#94a3b8" }}
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
            className="md:hidden border-b"
            style={{
              background: "rgba(3,7,18,0.97)",
              backdropFilter: "blur(12px)",
              borderColor: "rgba(251,191,36,0.1)",
            }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-sm w-full text-left py-1 transition-colors"
                      style={{ color: isActive ? "#f59e0b" : "#cbd5e1" }}
                    >
                      {isActive && (
                        <span style={{ color: "#f59e0b" }} className="mr-2">›</span>
                      )}
                      {link.label}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border transition-all duration-200"
                  style={{
                    borderColor: "rgba(251,191,36,0.3)",
                    color: "#f59e0b",
                    background: "rgba(251,191,36,0.06)",
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
                  className="block mt-2 px-5 py-3 text-sm font-semibold text-center transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                    color: "#030712",
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
