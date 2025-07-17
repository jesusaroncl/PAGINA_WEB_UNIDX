"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export function SimpleFooter() {
  const { t } = useLanguage()

  const links = {
    academic: [
      { name: "Programas", href: "/programas" },
      { name: "Admisiones", href: "/admisiones" },
      { name: "Investigación", href: "/investigacion" },
      { name: "Biblioteca", href: "/biblioteca" },
    ],
    university: [
      { name: "Nosotros", href: "/nosotros" },
      { name: "Noticias", href: "/noticias" },
      { name: "Eventos", href: "/eventos" },
      { name: "Contacto", href: "/contacto" },
    ],
    resources: [
      { name: "Portal Estudiantes", href: "/portal" },
      { name: "Transparencia", href: "/transparencia" },
      { name: "Repositorio", href: "/repositorio" },
      { name: "Bolsa de Trabajo", href: "/empleos" },
    ],
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image src="/images/unid-logo.png" alt="UNID" fill className="object-contain" />
              </div>
              <div>
                <div className="text-xl font-bold">UNID</div>
                <div className="text-sm text-slate-400">Ciencias de la Salud</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Universidad Interamericana para el Desarrollo, comprometida con la excelencia académica en ciencias de la
              salud.
            </p>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="font-semibold mb-4">Académico</h3>
            <ul className="space-y-2">
              {links.academic.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* University Links */}
          <div>
            <h3 className="font-semibold mb-4">Universidad</h3>
            <ul className="space-y-2">
              {links.university.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Universidad Interamericana para el Desarrollo. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-slate-400 hover:text-white text-sm">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-slate-400 hover:text-white text-sm">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
