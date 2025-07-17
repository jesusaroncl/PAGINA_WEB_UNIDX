"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function AdvancedNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.about", href: "/nosotros" },
    { key: "nav.programs", href: "/programas" },
    { key: "nav.resources", href: "/recursos" },
    { key: "nav.contact", href: "/contacto" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/30 dark:border-slate-700/30 shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-4 group relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
              <div className="relative w-14 h-14 p-2 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/unid-logo.png"
                  alt="UNID Logo"
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-2xl bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent transition-all duration-300">
                UNID
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 -mt-1 font-medium tracking-wide">
                Ciencias de la Salud
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
              >
                {t(item.key)}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 px-3 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/30 dark:border-slate-700/30"
              >
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("es")}
                  className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/30 dark:border-slate-700/30"
              >
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden h-10 w-10 p-0 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 space-y-2 border-t border-slate-200/30 dark:border-slate-700/30">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
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
