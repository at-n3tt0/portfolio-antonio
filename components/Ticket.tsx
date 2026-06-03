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
          <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#f59e0b" }}>
            <span>/</span><span>Falar com a gente</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#f8fafc",
            }}
          >
            Manda sua necessidade.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#94a3b8" }}>
            Sem formulário corporativo. Conta o que está acontecendo — a gente responde direto pelo WhatsApp.
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
            background: "rgba(28,25,23,0.5)",
            borderRadius: 6,
          }}
        >
          {/* ticket header */}
          <div
            className="flex items-center justify-between px-4 py-2.5 text-xs"
            style={{
              borderBottom: "1px solid rgba(251,191,36,0.12)",
              color: "#94a3b8",
              background: "rgba(12,10,9,0.6)",
            }}
          >
            <span>
              Novo chamado <span className="mono ml-1" style={{ color: "#f59e0b" }}>#{ticketId}</span>
            </span>
            <span style={{ color: "#64748b" }} className="text-[10px]">rascunho</span>
          </div>

          {/* body */}
          <div className="p-6 md:p-8 space-y-5 text-sm">
            {/* priority + type row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs mb-2" style={{ color: "#94a3b8" }}>
                  Prioridade
                </label>
                <div className="flex gap-2">
                  {PRIORITIES.map((p) => {
                    const labelMap: Record<string, string> = { low: "baixa", normal: "normal", high: "alta" };
                    return (
                      <button
                        key={p}
                        onClick={() => setPriority(p)}
                        className="px-3 py-1.5 transition-colors text-xs"
                        style={{
                          background: priority === p ? "rgba(245,158,11,0.12)" : "transparent",
                          border: `1px solid ${priority === p ? "rgba(245,158,11,0.5)" : "rgba(245,158,11,0.18)"}`,
                          color: priority === p ? "#f59e0b" : "#94a3b8",
                          borderRadius: 9999,
                        }}
                      >
                        {labelMap[p]}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <label className="block text-xs mb-2" style={{ color: "#94a3b8" }}>
                  Tipo
                </label>
                <div className="flex gap-2 flex-wrap">
                  {TYPES.map((tp) => {
                    const labelMap: Record<string, string> = {
                      new_system: "novo sistema",
                      support: "suporte",
                      automation: "automação",
                      infra: "infra",
                    };
                    return (
                      <button
                        key={tp}
                        onClick={() => setType(tp)}
                        className="px-3 py-1.5 transition-colors text-xs"
                        style={{
                          background: type === tp ? "rgba(245,158,11,0.12)" : "transparent",
                          border: `1px solid ${type === tp ? "rgba(245,158,11,0.5)" : "rgba(245,158,11,0.18)"}`,
                          color: type === tp ? "#f59e0b" : "#94a3b8",
                          borderRadius: 9999,
                        }}
                      >
                        {labelMap[tp]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs mb-2" style={{ color: "#94a3b8" }}>
                  Nome
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como te chamamos?"
                  className="w-full px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-xs mb-2" style={{ color: "#94a3b8" }}>
                  Empresa
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="opcional"
                  className="w-full px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs mb-2" style={{ color: "#94a3b8" }}>
                Assunto
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="em uma linha, o que precisa?"
                className="w-full px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-xs mb-2" style={{ color: "#94a3b8" }}>
                Conta um pouco mais
              </label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="problema, sistema necessário, automação que quer, infra a montar..."
                rows={5}
                className="w-full px-3 py-2 resize-none"
              />
            </div>

            {/* submit */}
            <div className="flex items-center justify-between gap-4 pt-2 flex-wrap">
              <span className="text-xs" style={{ color: "#64748b" }}>
                Resposta direto no <span style={{ color: "#22c55e" }}>WhatsApp</span>.
              </span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-base font-semibold px-7 py-3.5 transition-all"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                  color: "#0c0a09",
                  borderRadius: 9999,
                  boxShadow: "0 8px 24px -8px rgba(245,158,11,0.5)",
                }}
              >
                Enviar <span>→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
