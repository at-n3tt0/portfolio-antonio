"use client";

import { motion } from "framer-motion";
import {
  Folders,
  MessageCircleOff,
  RotateCw,
  FileSpreadsheet,
  MessageCircle,
  EyeOff,
} from "lucide-react";
import { colors } from "@/lib/colors";

type Pain = {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>;
  title: string;
  desc: string;
};

const pains: Pain[] = [
  {
    icon: Folders,
    title: "Informação espalhada",
    desc: "Cadastros, pedidos e contatos em pastas diferentes — sem ninguém saber qual é a versão certa.",
  },
  {
    icon: MessageCircleOff,
    title: "Atendimento sem rastreio",
    desc: "Mensagem que se perde, pedido sem confirmação, cliente cobrando duas vezes.",
  },
  {
    icon: RotateCw,
    title: "Retrabalho diário",
    desc: "A mesma informação digitada três vezes, em três lugares diferentes.",
  },
  {
    icon: FileSpreadsheet,
    title: "Planilha no limite",
    desc: "Aquela planilha que era para ser temporária virou a base inteira da operação.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp bagunçado",
    desc: "Três pessoas respondendo ao mesmo cliente, ninguém sabendo o que já foi combinado.",
  },
  {
    icon: EyeOff,
    title: "Falta de visão da operação",
    desc: "Decisão sendo tomada no achismo porque o dado não está em lugar nenhum visível.",
  },
];

export default function Pain() {
  return (
    <section
      id="pain"
      className="relative py-24 md:py-32 px-4 md:px-6"
      style={{
        background: colors.light.bg,
        color: colors.light.text,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div
            className="text-xs mb-3 flex items-center gap-2 uppercase tracking-widest"
            style={{ color: colors.brand.orange, letterSpacing: "0.18em" }}
          >
            <span>/</span>
            <span>A realidade da maioria das empresas pequenas</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: colors.light.text,
              letterSpacing: "-0.02em",
            }}
          >
            Você não precisa de mais uma planilha. Precisa de um sistema.
          </h2>
          <p
            className="mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: colors.light.textMuted }}
          >
            Quase toda empresa pequena começa do mesmo jeito: planilha para cadastro, WhatsApp para
            atendimento, papel para controle. Funciona até deixar de funcionar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {pains.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className="p-6"
                style={{
                  background: colors.light.surface,
                  border: `1px solid ${colors.light.border}`,
                  borderRadius: 12,
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center mb-4"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(242,166,0,0.10)",
                    border: "1px solid rgba(242,166,0,0.25)",
                    borderRadius: 10,
                  }}
                >
                  <Icon size={20} strokeWidth={2} color={colors.brand.orange} />
                </div>
                <h3
                  className="text-lg md:text-xl font-extrabold mb-2"
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    color: colors.light.text,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm md:text-[15px] leading-relaxed"
                  style={{ color: colors.light.textMuted }}
                >
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
