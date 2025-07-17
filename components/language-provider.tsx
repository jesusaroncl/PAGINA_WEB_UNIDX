"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    "nav.inicio": "Inicio",
    "nav.nosotros": "Nosotros",
    "nav.recursos": "Recursos",
    "nav.facultad": "Facultad",
    "nav.admisiones": "Admisiones 2025",
    "topnav.egresados": "Egresados",
    "topnav.investigacion": "Investigación",
    "topnav.biblioteca": "Biblioteca",
    "topnav.repositorio": "Repositorio",
    "topnav.transparencia": "Transparencia",
    "topnav.bolsa": "Bolsa de trabajo",
    "topnav.aplicaciones": "Aplicaciones",
    "topnav.defensoria": "Defensoría",
    "hero.title": "Formamos líderes en Ciencias de la Salud",
    "hero.subtitle": "Más de dos décadas impulsando la excelencia académica y la investigación científica",
    "hero.cta": "Conoce nuestras carreras",
  },
  en: {
    "nav.inicio": "Home",
    "nav.nosotros": "About Us",
    "nav.recursos": "Resources",
    "nav.facultad": "Faculty",
    "nav.admisiones": "Admissions 2025",
    "topnav.egresados": "Alumni",
    "topnav.investigacion": "Research",
    "topnav.biblioteca": "Library",
    "topnav.repositorio": "Repository",
    "topnav.transparencia": "Transparency",
    "topnav.bolsa": "Job Board",
    "topnav.aplicaciones": "Applications",
    "topnav.defensoria": "Ombudsman",
    "hero.title": "We train leaders in Health Sciences",
    "hero.subtitle": "More than two decades promoting academic excellence and scientific research",
    "hero.cta": "Discover our programs",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("es")

  const t = (key: string): string => {
    const currentTranslations = translations[language as keyof typeof translations] || translations.es
    return currentTranslations[key as keyof typeof currentTranslations] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
