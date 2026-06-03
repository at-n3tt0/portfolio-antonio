"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CornerBrackets } from "@/components/Brand";

function Counter({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  const isFloat = !Number.isInteger(to);
  return (
    <span>
      {isFloat ? n.toFixed(2) : Math.round(n)}
      {suffix}
    </span>
  );
}

function MetricBars() {
  const bars = Array.from({ length: 24 });
  return (
    <div className="flex items-end gap-[3px] h-8 mt-2">
      {bars.map((_, i) => (
        <span
          key={i}
          className="bar-tick"
          style={{
            width: 3,
            height: "100%",
            background: i % 3 === 0 ? "#f59e0b" : "rgba(245,158,11,0.35)",
            animationDelay: `${(i * 70) % 1600}ms`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] pt-20 pb-24 px-4 md:px-6 overflow-hidden scanlines"
    >
      {/* Background layers */}
      <div className="noc-grid absolute inset-0 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.10) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #030712)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 md:px-8">
        <CornerBrackets color="rgba(245,158,11,0.35)" size={28} thickness={2} inset={0} />
        {/* Soft command line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono text-[11px] md:text-xs mb-10 flex items-center gap-2 flex-wrap"
          style={{ color: "#475569" }}
        >
          <span style={{ color: "#f59e0b" }}>$</span>
          <span>atnetto.tech</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>Marituba, PA</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>operando desde 2021</span>
        </motion.div>

        {/* Main grid: headline left + dashboard right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
          {/* LEFT — headline */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: "#f8fafc",
              }}
            >
              Nós cuidamos da{" "}
              <span style={{ color: "#f59e0b" }}>tecnologia</span> que sua empresa{" "}
              <span style={{ color: "#f8fafc", textDecoration: "underline", textDecorationColor: "rgba(245,158,11,0.35)", textDecorationThickness: 2, textUnderlineOffset: 8 }}>
                depende
              </span>{" "}
              todo dia.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-lg md:text-xl max-w-xl leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              Construímos, operamos e mantemos os sistemas que sustentam sua operação — do servidor ao código. Sem largar depois do deploy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 text-sm italic"
              style={{ color: "#64748b", fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              — feito por Antonio, em Marituba, PA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#ticket"
                className="group inline-flex items-center gap-2.5 text-base font-semibold px-7 py-3.5 transition-all"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                  color: "#030712",
                  borderRadius: 9999,
                  boxShadow: "0 8px 24px -8px rgba(245,158,11,0.5)",
                }}
              >
                <span>Falar com a gente</span>
                <span>→</span>
              </a>
              <a
                href="#operating"
                className="inline-flex items-center gap-2 text-base px-6 py-3.5 transition-all"
                style={{
                  color: "#cbd5e1",
                  border: "1px solid rgba(245,158,11,0.3)",
                  borderRadius: 9999,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(245,158,11,0.06)";
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)";
                }}
              >
                Ver sistemas no ar
              </a>
            </motion.div>
          </div>

          {/* RIGHT — mini dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full"
          >
            <div
              className="relative"
              style={{
                background: "rgba(10,15,28,0.7)",
                border: "1px solid rgba(251,191,36,0.18)",
                backdropFilter: "blur(6px)",
                borderRadius: 6,
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-4 py-2.5 text-xs"
                style={{
                  borderBottom: "1px solid rgba(251,191,36,0.12)",
                  color: "#94a3b8",
                }}
              >
                <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }} className="font-medium">
                  Painel ao vivo
                </span>
                <span className="flex items-center gap-1.5 mono text-[10px] uppercase tracking-widest" style={{ color: "#22c55e" }}>
                  <span className="status-dot" />
                  <span>live</span>
                </span>
              </div>

              {/* 3 metrics */}
              <div className="grid grid-cols-3 divide-x" style={{ borderColor: "rgba(251,191,36,0.08)" }}>
                {[
                  { label: "Em produção", value: 6, suffix: "" },
                  { label: "Serviços", value: 47, suffix: "" },
                  { label: "Uptime médio", value: 99.94, suffix: "%" },
                ].map((m, i) => (
                  <div
                    key={m.label}
                    className="px-4 py-5"
                    style={{ borderColor: "rgba(251,191,36,0.08)" }}
                  >
                    <div
                      className="text-[10px] uppercase tracking-wider mb-2"
                      style={{ color: "#64748b" }}
                    >
                      {m.label}
                    </div>
                    <div
                      className="text-2xl md:text-3xl font-bold"
                      style={{
                        color: i === 2 ? "#22c55e" : "#f59e0b",
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                      }}
                    >
                      <Counter to={m.value} suffix={m.suffix} duration={1400 + i * 200} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Live activity bars */}
              <div
                className="px-4 py-4"
                style={{ borderTop: "1px solid rgba(251,191,36,0.08)" }}
              >
                <div className="flex items-center justify-between mb-1" style={{ color: "#475569" }}>
                  <span className="mono text-[10px] uppercase tracking-wider">req/s · 60s</span>
                </div>
                <MetricBars />
              </div>

              {/* Activity feed (humano) */}
              <div
                className="px-4 py-3 text-[11px] space-y-1"
                style={{
                  borderTop: "1px solid rgba(251,191,36,0.08)",
                  color: "#94a3b8",
                }}
              >
                <div className="flex items-center justify-between">
                  <span>Sistema PMM operando normalmente</span>
                  <span className="mono text-[10px]" style={{ color: "#22c55e" }}>14ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>NexLicense respondendo</span>
                  <span className="mono text-[10px]" style={{ color: "#22c55e" }}>22ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Monitor coletando métricas</span>
                  <span className="mono text-[10px]" style={{ color: "#22c55e" }}>9ms</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
