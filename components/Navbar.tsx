"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/Brand";

const links = [
  { label: "Soluções", href: "#modules", id: "modules" },
  { label: "Processo", href: "#process", id: "process" },
  { label: "Por que?", href: "#why", id: "why" },
  { label: "Contato", href: "#ticket", id: "ticket" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["hero", ...links.map((l) => l.id)];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const click = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 transition-all"
      style={{
        background: scrolled ? "rgba(14,12,9,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(242,166,0,0.1)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between">
        <button
          onClick={() => click("#hero")}
          className="font-bold text-base tracking-tight inline-flex items-center gap-2.5"
          style={{ fontFamily: "var(--font-inter), Inter, sans-serif", color: "#F5F5F5", letterSpacing: "-0.03em" }}
        >
          <BrandMark size="sm" />
          <span
            className="font-extrabold tracking-tight"
            style={{
              color: "#F5F5F5",
              fontSize: "clamp(17px, 1.7vw, 21px)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            atnetto<span style={{ color: "#F2A600" }}>.tech</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <button
                  onClick={() => click(l.href)}
                  className="px-3 py-1.5 transition-colors"
                  style={{ color: isActive ? "#F2A600" : "#64748b" }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#cbd5e1";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#64748b";
                  }}
                >
                  {isActive && <span style={{ color: "#F2A600" }} className="mr-1">/</span>}
                  {l.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#ticket"
            onClick={(e) => { e.preventDefault(); click("#ticket"); }}
            className="text-xs font-semibold px-4 py-2 transition-all"
            style={{
              background: "linear-gradient(135deg, #F2A600, #F2A600)",
              color: "#090908",
              borderRadius: 9999,
            }}
          >
            Falar com a gente →
          </a>
        </div>

        <button
          className="md:hidden"
          style={{ color: "#94a3b8" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
            style={{
              borderColor: "rgba(242,166,0,0.1)",
              background: "rgba(14,12,9,0.97)",
              backdropFilter: "blur(10px)",
            }}
          >
            <ul className="flex flex-col px-4 py-3 text-sm">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => click(l.href)}
                    className="w-full text-left py-2"
                    style={{ color: active === l.id ? "#F2A600" : "#cbd5e1" }}
                  >
                    {active === l.id && <span style={{ color: "#F2A600" }} className="mr-2">/</span>}
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#ticket"
                  onClick={(e) => { e.preventDefault(); click("#ticket"); }}
                  className="block text-center text-xs font-semibold px-4 py-2.5"
                  style={{
                    background: "linear-gradient(135deg, #F2A600, #F2A600)",
                    color: "#090908",
                    borderRadius: 9999,
                  }}
                >
                  Falar com a gente →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
