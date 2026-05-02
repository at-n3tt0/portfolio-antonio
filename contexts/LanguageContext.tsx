"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { translations, Language } from "@/lib/translations";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") return "pt";
    const stored = localStorage.getItem("netto-lang") as Language | null;
    if (stored && (stored === "pt" || stored === "en")) {
      return stored;
    }
    return "pt";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("netto-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
