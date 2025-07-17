"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-700/20 shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group" data-cursor-hover>
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image src="/images/unid-logo.png" alt="UNID Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <div className="font-light text-xl text-slate-900 dark:text-white transition-colors">UNID</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 -mt-1 font-light">Ciencias de la Salud</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { key: "nav.home", href: "/" },
              { key: "nav.about", href: "/nosotros" },
              { key: "nav.resources", href: "/recursos" },
              { key: "nav.faculty", href: "/facultad" },
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                data-cursor-hover
                className="relative text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              data-cursor-hover
              className="h-10 px-3 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-cursor-hover
              className="h-10 w-10 p-0 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-10 w-10 p-0 text-slate-600 dark:text-slate-400 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-cursor-hover
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 space-y-4 border-t border-slate-200/20 dark:border-slate-700/20">
            {[
              { key: "nav.home", href: "/" },
              { key: "nav.about", href: "/nosotros" },
              { key: "nav.resources", href: "/recursos" },
              { key: "nav.faculty", href: "/facultad" },
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50"
                onClick={() => setIsMenuOpen(false)}
                data-cursor-hover
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
