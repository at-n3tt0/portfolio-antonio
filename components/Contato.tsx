"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AtSign, BriefcaseBusiness, Code2, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackEvent, whatsappUrl } from "@/lib/tracking";

const socialLinks = [
  {
    icon: MessageCircle,
    href: "https://wa.me/5591980242234?text=Ola%2C%20vim%20pelo%20site%20da%20atnetto.tech%20e%20quero%20um%20diagnostico.",
  },
  { icon: AtSign, href: "https://instagram.com/at_netto.tech" },
  { icon: Code2, href: "https://github.com/at-n3tt0" },
  { icon: BriefcaseBusiness, href: "https://linkedin.com/in/at-netto" },
];

export default function Contato() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    company: "",
    contact: "",
    need: "",
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackEvent("form_submit", {
      form_name: "lead_diagnosis",
      lead_service: form.need,
    });

    const message = [
      "Ola, vim pelo site da atnetto.tech e quero um diagnostico.",
      `Nome: ${form.name}`,
      `Empresa: ${form.company}`,
      `Contato: ${form.contact}`,
      `Necessidade: ${form.need}`,
    ].join("\n");

    window.location.href = whatsappUrl(message);
  };

  const trackSocial = (label: string, href: string) => {
    if (href.includes("wa.me")) trackEvent("click_whatsapp", { link_text: label });
    if (href.includes("mailto:")) trackEvent("click_email", { link_text: label });
    if (href.includes("tel:")) trackEvent("click_phone", { link_text: label });
  };

  return (
    <section id="contato" className="px-6 py-32">
      <div
        className="mx-auto mb-16 h-px max-w-6xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(251,191,36,0.2), transparent)",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: "#f59e0b", opacity: 0.7 }}
          >
            {t.contato.label}
          </span>
          <h2
            className="mt-4 text-3xl font-bold md:text-4xl"
            style={{
              color: "#f8fafc",
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
          >
            {t.contato.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: "#94a3b8" }}>
            {t.contato.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm" style={{ color: "#64748b" }}>
            <MapPin size={14} style={{ color: "#f59e0b" }} />
            <span>{t.contato.location}</span>
            <span>-</span>
            <span>{t.contato.locationSub}</span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.contato.links.map((link, index) => {
              const Icon = socialLinks[index].icon;
              const href = socialLinks[index].href;
              return (
                <a
                  key={link.label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocial(link.label, href)}
                  className="flex items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "rgba(15,23,42,0.65)",
                    border: "1px solid rgba(251,191,36,0.1)",
                  }}
                >
                  <Icon size={20} style={{ color: "#f59e0b" }} />
                  <span>
                    <strong className="block text-sm" style={{ color: "#f8fafc" }}>
                      {link.label}
                    </strong>
                    <span className="block break-all font-mono text-xs" style={{ color: "#f59e0b" }}>
                      {link.sub}
                    </span>
                    <span className="mt-1 block text-xs" style={{ color: "#64748b" }}>
                      {link.desc}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4 p-6"
          style={{
            background: "rgba(15,23,42,0.8)",
            border: "1px solid rgba(251,191,36,0.14)",
          }}
        >
          <h3 className="text-xl font-bold" style={{ color: "#f8fafc" }}>
            {t.contato.formTitle}
          </h3>

          <input
            required
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder={t.contato.formName}
            className="w-full px-4 py-3 outline-none"
          />
          <input
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
            placeholder={t.contato.formCompany}
            className="w-full px-4 py-3 outline-none"
          />
          <input
            required
            value={form.contact}
            onChange={(event) => update("contact", event.target.value)}
            placeholder={t.contato.formContact}
            className="w-full px-4 py-3 outline-none"
          />
          <textarea
            required
            value={form.need}
            onChange={(event) => update("need", event.target.value)}
            placeholder={t.contato.formNeed}
            rows={5}
            className="w-full resize-none px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 px-6 py-3 font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #f59e0b, #fb923c)", color: "#030712" }}
          >
            <Mail size={18} />
            {t.contato.formSubmit}
          </button>

          <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
            {t.contato.privacy}{" "}
            <Link href="/privacidade" style={{ color: "#f59e0b" }}>
              Politica de privacidade
            </Link>
          </p>
        </motion.form>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl text-center">
        <p className="font-mono text-xs" style={{ color: "#334155" }}>
          {t.contato.footer}
        </p>
      </footer>
    </section>
  );
}
