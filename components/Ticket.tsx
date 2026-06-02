"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

const TYPES = ["new_system", "support", "automation", "infra"] as const;
const PRIORITIES = ["low", "normal", "high"] as const;

function randomTicketId() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `ATN-${n}`;
}

export default function Ticket() {
  const ticketId = useMemo(() => randomTicketId(), []);
  const [type, setType] = useState<(typeof TYPES)[number]>("new_system");
  const [priority, setPriority] = useState<(typeof PRIORITIES)[number]>("normal");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const message = `*[ ${ticketId} ] novo chamado*\n\n` +
    `tipo: ${type}\n` +
    `prioridade: ${priority}\n` +
    `nome: ${name || "—"}\n` +
    `empresa: ${company || "—"}\n` +
    `assunto: ${subject || "—"}\n\n` +
    `descrição:\n${desc || "—"}\n\n` +
    `enviado via atnetto.tech`;

  const whatsappHref = `https://wa.me/5591980242234?text=${encodeURIComponent(message)}`;

  return (
    <section id="ticket" className="relative py-28 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: "#f59e0b" }}>
            open_ticket
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#f8fafc",
            }}
          >
            Abra um chamado.
          </h2>
          <p className="mt-4 max-w-2xl text-base" style={{ color: "#94a3b8" }}>
            Sem formulário corporativo. Conta o problema, a gente responde direto pelo WhatsApp.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative"
          style={{
            border: "1px solid rgba(251,191,36,0.2)",
            background: "rgba(10,15,28,0.5)",
          }}
        >
          {/* ticket header */}
          <div
            className="flex items-center justify-between px-4 py-2 mono text-[11px] uppercase tracking-widest"
            style={{
              borderBottom: "1px solid rgba(251,191,36,0.12)",
              color: "#475569",
              background: "rgba(3,7,18,0.6)",
            }}
          >
            <span>new_ticket · <span style={{ color: "#f59e0b" }}>#{ticketId}</span></span>
            <span className="flex items-center gap-1.5" style={{ color: "#22c55e" }}>
              <span className="status-dot" />
              draft
            </span>
          </div>

          {/* body */}
          <div className="p-6 md:p-8 space-y-5 mono text-sm">
            {/* priority + type row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: "#475569" }}>
                  priority
                </label>
                <div className="flex gap-2">
                  {PRIORITIES.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPriority(p)}
                      className="px-3 py-1.5 transition-colors text-xs"
                      style={{
                        background: priority === p ? "rgba(245,158,11,0.12)" : "transparent",
                        border: `1px solid ${priority === p ? "rgba(245,158,11,0.5)" : "rgba(245,158,11,0.18)"}`,
                        color: priority === p ? "#f59e0b" : "#94a3b8",
                      }}
                    >
                      {priority === p && <span className="mr-1">▣</span>}
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: "#475569" }}>
                  type
                </label>
                <div className="flex gap-2 flex-wrap">
                  {TYPES.map((tp) => (
                    <button
                      key={tp}
                      onClick={() => setType(tp)}
                      className="px-3 py-1.5 transition-colors text-xs"
                      style={{
                        background: type === tp ? "rgba(245,158,11,0.12)" : "transparent",
                        border: `1px solid ${type === tp ? "rgba(245,158,11,0.5)" : "rgba(245,158,11,0.18)"}`,
                        color: type === tp ? "#f59e0b" : "#94a3b8",
                      }}
                    >
                      {type === tp && <span className="mr-1">▣</span>}
                      {tp}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: "#475569" }}>
                  name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="seu nome"
                  className="w-full px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: "#475569" }}>
                  company
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="empresa (opcional)"
                  className="w-full px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: "#475569" }}>
                subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="resumo curto"
                className="w-full px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest mb-2" style={{ color: "#475569" }}>
                description
              </label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="descreva o problema, sistema necessário, infra, automação..."
                rows={5}
                className="w-full px-3 py-2 resize-none"
              />
            </div>

            {/* submit */}
            <div className="flex items-center justify-between gap-4 pt-2 flex-wrap">
              <span className="text-[10px] mono uppercase tracking-widest" style={{ color: "#475569" }}>
                channel: <span style={{ color: "#22c55e" }}>● whatsapp</span>
              </span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mono text-sm font-semibold px-5 py-3 transition-all"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                  color: "#030712",
                  letterSpacing: "0.04em",
                }}
              >
                submit_ticket →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
