"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TYPES = ["site", "system", "app", "automation", "integration"] as const;
const PRIORITIES = ["low", "normal", "high"] as const;

export default function Ticket() {
  const [type, setType] = useState<(typeof TYPES)[number]>("system");
  const [priority, setPriority] = useState<(typeof PRIORITIES)[number]>("normal");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const message = `*Pré-atendimento — atnetto.tech*\n\n` +
    `tipo: ${type}\n` +
    `prioridade: ${priority}\n` +
    `nome: ${name || "—"}\n` +
    `empresa: ${company || "—"}\n` +
    `assunto: ${subject || "—"}\n\n` +
    `descrição:\n${desc || "—"}`;

  const whatsappHref = `https://wa.me/5591980242234?text=${encodeURIComponent(message)}`;

  return (
    <section id="ticket" className="relative py-28 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="text-xs mb-3 flex items-center gap-2" style={{ color: "#F2A600" }}>
            <span>/</span><span>Falar com a gente</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#F5F5F5",
            }}
          >
            Vamos conversar sobre sua ideia?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#94a3b8" }}>
            Explique o que você precisa: site, sistema, aplicativo, automação ou integração. A resposta vai direto pelo WhatsApp.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative"
          style={{
            border: "1px solid rgba(242,166,0,0.2)",
            background: "rgba(28,25,23,0.5)",
            borderRadius: 6,
          }}
        >
          {/* ticket header */}
          <div
            className="flex items-center justify-between px-4 py-2.5 text-xs"
            style={{
              borderBottom: "1px solid rgba(242,166,0,0.12)",
              color: "#94a3b8",
              background: "rgba(14,12,9,0.6)",
            }}
          >
            <span>Pré-atendimento</span>
            <span style={{ color: "#64748b" }} className="text-[10px]">envio pelo WhatsApp</span>
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
                          background: priority === p ? "rgba(242,166,0,0.12)" : "transparent",
                          border: `1px solid ${priority === p ? "rgba(242,166,0,0.5)" : "rgba(242,166,0,0.18)"}`,
                          color: priority === p ? "#F2A600" : "#94a3b8",
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
                      site: "site",
                      system: "sistema",
                      app: "aplicativo",
                      automation: "automação",
                      integration: "integração",
                    };
                    return (
                      <button
                        key={tp}
                        onClick={() => setType(tp)}
                        className="px-3 py-1.5 transition-colors text-xs"
                        style={{
                          background: type === tp ? "rgba(242,166,0,0.12)" : "transparent",
                          border: `1px solid ${type === tp ? "rgba(242,166,0,0.5)" : "rgba(242,166,0,0.18)"}`,
                          color: type === tp ? "#F2A600" : "#94a3b8",
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
                placeholder="conte o problema, rotina manual, sistema, aplicativo ou automação que você precisa..."
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
                  background: "linear-gradient(135deg, #F2A600, #F2A600)",
                  color: "#090908",
                  borderRadius: 9999,
                  boxShadow: "0 8px 24px -8px rgba(242,166,0,0.5)",
                }}
              >
                Enviar pelo WhatsApp <span>→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Canais diretos — alternativa ao formulário */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-x-6 gap-y-3 text-sm">
          <span style={{ color: "#64748b" }}>Prefere ir direto?</span>
          <a
            href="https://wa.me/5591980242234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors"
            style={{ color: "#cbd5e1" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F2A600")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
          >
            <span>WhatsApp</span>
            <span style={{ color: "#F2A600" }}>↗</span>
          </a>
          <a
            href="https://instagram.com/at_netto.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors"
            style={{ color: "#cbd5e1" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F2A600")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
          >
            <span>Instagram</span>
            <span style={{ color: "#F2A600" }}>↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/at-netto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors"
            style={{ color: "#cbd5e1" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F2A600")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
          >
            <span>LinkedIn</span>
            <span style={{ color: "#F2A600" }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
