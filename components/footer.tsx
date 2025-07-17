"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-slate-900 dark:bg-white rounded flex items-center justify-center">
              <span className="text-white dark:text-slate-900 font-medium text-xs">CS</span>
            </div>
            <span className="font-light text-slate-600 dark:text-slate-400">Facultad de Ciencias de la Salud</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/transparencia"
              className="text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              Transparencia
            </Link>
            <Link
              href="/repositorio"
              className="text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              Repositorio
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-400 font-light">{t("footer.copyright")}</p>
            </div>
            
            {/* Sección Desarrollado por */}
            <Link 
              href="https://www.tu-sitio-web.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors group"
            >
              <span className="font-light">Desarrollado por</span>
              <div className="flex items-center space-x-1">
                <Image
                  src="/developer-logo.png"
                  alt="Developer Logo"
                  width={16}
                  height={16}
                  className="h-4 w-4 group-hover:scale-110 transition-transform"
                />
                <span className="font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">TuNombre</span>
              </div>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
