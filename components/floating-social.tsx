"use client"

import { useState, useEffect } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingSocial() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/unid",
      color: "hover:bg-blue-600 hover:text-white",
      delay: "0ms",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/unid",
      color: "hover:bg-sky-500 hover:text-white",
      delay: "100ms",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/unid",
      color: "hover:bg-pink-600 hover:text-white",
      delay: "200ms",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/school/unid",
      color: "hover:bg-blue-700 hover:text-white",
      delay: "300ms",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/unid",
      color: "hover:bg-red-600 hover:text-white",
      delay: "400ms",
    },
  ]

  return (
    <div
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
      }`}
    >
      <div className="flex flex-col items-center space-y-3">
        {/* Main Toggle Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative w-14 h-14 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-900/20 dark:to-blue-800/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <MessageCircle className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors duration-300 relative z-10" />
        </Button>

        {/* Social Links */}
        <div className="flex flex-col space-y-2">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/40 dark:border-slate-700/40 flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-md hover:shadow-lg ${social.color} ${
                  isExpanded
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
                style={{
                  transitionDelay: isExpanded ? social.delay : "0ms",
                }}
              >
                <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300" />
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 relative z-10" />
              </a>
            )
          })}
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/5215512345678"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl mt-4"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
        </a>
      </div>
    </div>
  )
}
