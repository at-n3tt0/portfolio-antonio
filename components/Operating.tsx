"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type System = {
  id: string;
  hostname: string;
  client: string;
  stack: string;
  status: "up" | "warn";
  href: string;
};

const systems: System[] = [
  {
    id: "PMM-001",
    hostname: "sistema-pmm",
    client: "Prefeitura de Marituba",
    stack: "Laravel · MySQL",
    status: "up",
    href: "https://github.com/at-n3tt0/sistema-pmm",
  },
  {
    id: "PMM-002",
    hostname: "sigma-marituba",
    client: "Prefeitura de Marituba",
    stack: "Laravel · MySQL",
    status: "up",
    href: "https://github.com/at-n3tt0/sigma-marituba",
  },
  {
    id: "MON-001",
    hostname: "server-monitor",
    client: "Infra interna",
    stack: "FastAPI · React · PostgreSQL",
    status: "up",
    href: "https://github.com/at-n3tt0/server-monitor",
  },
  {
    id: "NEX-001",
    hostname: "nexlicense",
    client: "SaaS de licenciamento",
    stack: "FastAPI · Docker · Mercado Pago",
    status: "up",
    href: "https://github.com/at-n3tt0/nexlicense",
  },
  {
    id: "COM-001",
    hostname: "comcontrol",
    client: "Controle de ativos de TI",
    stack: "Laravel · PHP",
    status: "up",
    href: "https://github.com/at-n3tt0/comcontrol",
  },
  {
    id: "NAI-001",
    hostname: "escritorio-neto-ai",
    client: "Produto IA admin",
    stack: "Laravel · React · Node · IA",
    status: "up",
    href: "https://github.com/at-n3tt0/escritorio-neto-ai",
  },
];

export default function Operating() {
  return (
    <section id="operating" className="relative py-28 px-4 md:px-6" style={{ background: "#020610" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#f59e0b" }}>
            <span>/</span><span>Em operação</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#f8fafc",
            }}
          >
            Sistemas em produção agora.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#94a3b8" }}>
            Não é portfólio de tela bonita — é o que está respondendo requisição real, neste minuto, para clientes reais.
          </p>
        </div>

        {/* Table */}
        <div
          className="mono text-xs md:text-sm overflow-x-auto"
          style={{
            border: "1px solid rgba(251,191,36,0.15)",
            background: "rgba(10,15,28,0.5)",
            borderRadius: 6,
          }}
        >
          {/* header */}
          <div
            className="grid grid-cols-[90px_1.4fr_1.4fr_1.2fr_70px_28px] gap-3 px-4 py-3 uppercase tracking-wider text-[10px]"
            style={{
              color: "#475569",
              borderBottom: "1px solid rgba(251,191,36,0.12)",
              background: "rgba(3,7,18,0.6)",
            }}
          >
            <span>id</span>
            <span>hostname</span>
            <span>client</span>
            <span className="hidden md:block">stack</span>
            <span className="hidden md:block">status</span>
            <span></span>
          </div>

          {systems.map((s, i) => (
            <motion.a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="grid grid-cols-[90px_1.4fr_1.4fr_1.2fr_70px_28px] gap-3 px-4 py-3 items-center group transition-colors"
              style={{
                borderBottom: i === systems.length - 1 ? "none" : "1px solid rgba(251,191,36,0.06)",
                color: "#cbd5e1",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245,158,11,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span style={{ color: "#f59e0b" }}>{s.id}</span>
              <span style={{ color: "#f8fafc" }} className="font-semibold truncate">{s.hostname}</span>
              <span style={{ color: "#94a3b8" }} className="truncate">{s.client}</span>
              <span className="hidden md:block truncate" style={{ color: "#64748b" }}>{s.stack}</span>
              <span className="hidden md:flex items-center gap-1.5" style={{ color: s.status === "up" ? "#22c55e" : "#f59e0b" }}>
                <span className="status-dot" />
                {s.status}
              </span>
              <span
                className="opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ color: "#f59e0b" }}
              >
                <ArrowUpRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Stack marquee */}
        <div className="mt-12 py-4 overflow-hidden" style={{ borderTop: "1px solid rgba(251,191,36,0.08)", borderBottom: "1px solid rgba(251,191,36,0.08)" }}>
          <div className="text-xs mb-3" style={{ color: "#64748b" }}>
            Rodando em:
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track mono text-base md:text-lg" style={{ color: "#94a3b8" }}>
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="flex gap-12 items-center">
                  <span>Laravel</span><span style={{ color: "#475569" }}>·</span>
                  <span>FastAPI</span><span style={{ color: "#475569" }}>·</span>
                  <span>React</span><span style={{ color: "#475569" }}>·</span>
                  <span>Next.js</span><span style={{ color: "#475569" }}>·</span>
                  <span>PostgreSQL</span><span style={{ color: "#475569" }}>·</span>
                  <span>MySQL</span><span style={{ color: "#475569" }}>·</span>
                  <span>Docker</span><span style={{ color: "#475569" }}>·</span>
                  <span>Linux</span><span style={{ color: "#475569" }}>·</span>
                  <span>Proxmox</span><span style={{ color: "#475569" }}>·</span>
                  <span>Zabbix</span><span style={{ color: "#475569" }}>·</span>
                  <span>Grafana</span><span style={{ color: "#475569" }}>·</span>
                  <span>MikroTik</span><span style={{ color: "#475569" }}>·</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
