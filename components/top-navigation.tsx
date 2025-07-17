"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink } from "lucide-react"

export function TopNavigation() {
  const { t } = useLanguage()

  return (
    <div className="bg-slate-900 text-white py-2 text-xs">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center space-x-4">
          <Link
            href="/transparencia"
            target="_blank"
            className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
          >
            <span>{t("topnav.transparency")}</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
          <Link
            href="/repositorio"
            target="_blank"
            className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
          >
            <span>{t("topnav.repository")}</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}
