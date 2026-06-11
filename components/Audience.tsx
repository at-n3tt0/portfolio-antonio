"use client";

import { motion } from "framer-motion";
import { colors } from "@/lib/colors";

const fits = [
  "Você controla **clientes, pedidos ou estoque em planilhas** e está chegando no limite.",
  "Seu **atendimento no WhatsApp** virou bagunça com mais de uma pessoa respondendo o mesmo cliente.",
  "Você precisa de **site, sistema, aplicativo ou automação sob medida** — não um produto de prateleira.",
  "Sua rotina envolve **cadastro, pedido, agendamento ou relatório** que hoje é manual e poderia ser sistema.",
  "Sua operação **integra várias ferramentas** (planilha + WhatsApp + e-mail + sistema de gestão) e ninguém conversa direito.",
  "Você prefere **falar direto com quem desenvolve**, em vez de passar por vários intermediários.",
];

function highlight(text: string) {
  // Renderiza **bold** em laranja sem libs extras
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} style={{ color: colors.light.text, fontWeight: 700 }}>
        {p}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function Audience() {
  return (
    <section
      id="audience"
      className="relative py-24 md:py-32 px-4 md:px-6"
      style={{
        background: colors.light.bg,
        color: colors.light.text,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div
            className="text-xs mb-3 flex items-center gap-2 uppercase tracking-widest"
            style={{ color: colors.brand.orange, letterSpacing: "0.18em" }}
          >
            <span>/</span>
            <span>Para quem é</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: colors.light.text,
              letterSpacing: "-0.02em",
            }}
          >
            Esse trabalho é para você se…
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-14 md:mb-16">
          {fits.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
              className="flex items-start gap-3"
            >
              <span
                aria-hidden
                className="mt-1 inline-flex items-center justify-center flex-shrink-0"
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 9999,
                  background: "rgba(242,166,0,0.12)",
                  border: `1px solid ${colors.brand.orange}`,
                  color: colors.brand.orange,
                  fontSize: 12,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                ✓
              </span>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: colors.light.textMuted }}
              >
                {highlight(f)}
              </p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="p-5 md:p-6 max-w-3xl"
          style={{
            background: "rgba(0,0,0,0.03)",
            border: `1px solid ${colors.light.border}`,
            borderRadius: 12,
          }}
        >
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: colors.light.textMuted }}
          >
            <span style={{ color: colors.light.text, fontWeight: 600 }}>
              Talvez ainda não seja o melhor momento
            </span>{" "}
            se você procura apenas um layout pronto, ainda está validando a ideia ou precisa de uma
            estrutura corporativa grande com atendimento 24/7. Nesses casos, vale conversar antes de
            fechar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
