"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AnimatedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { key: "nav.home", href: "/" },
    {
      key: "nav.about",
      href: "/nosotros",
      dropdown: [
        { name: "Historia", href: "/nosotros/historia" },
        { name: "Misión y Visión", href: "/nosotros/mision" },
        { name: "Directorio", href: "/nosotros/directorio" },
      ],
    },
    {
      key: "nav.programs",
      href: "/programas",
      dropdown: [
        { name: "Enfermería", href: "/programas/enfermeria" },
        { name: "Farmacia y Bioquímica", href: "/programas/farmacia" },
        { name: "Posgrados", href: "/programas/posgrados" },
      ],
    },
    { key: "nav.admissions", href: "/admisiones" },
    { key: "nav.research", href: "/investigacion" },
    { key: "nav.contact", href: "/contacto" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-900/5"
            : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo con animación */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                <div className="relative w-12 h-12 p-2 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/unid-logo.png"
                    alt="UNID"
                    fill
                    className="object-contain drop-shadow-sm"
                    priority
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  UNID
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 -mt-1 font-medium tracking-wide">
                  Ciencias de la Salud
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl group relative ${
                      pathname === item.href
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    {t(item.key)}
                    {item.dropdown && (
                      <ChevronDown
                        className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 transition-all duration-300 ${
                        activeDropdown === item.key
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {item.dropdown.map((dropItem, index) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="h-10 px-3 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language.toUpperCase()}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="h-10 w-10 p-0 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-10 w-10 p-0 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute top-20 left-4 right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-500 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <nav className="p-6 space-y-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.key}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
