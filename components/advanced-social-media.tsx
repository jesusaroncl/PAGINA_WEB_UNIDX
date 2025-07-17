"use client"

import { useState, useEffect } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Share2, Heart, MessageCircle, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvancedSocialMediaProps {
  url?: string
  title?: string
  description?: string
}

export function AdvancedSocialMedia({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "UNID - Facultad de Ciencias de la Salud",
  description = "Universidad Interamericana para el Desarrollo - Excelencia en educación e investigación en salud",
}: AdvancedSocialMediaProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [interactions, setInteractions] = useState({
    liked: false,
    bookmarked: false,
    shared: false,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
      delay: "0ms",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: "hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/20",
      delay: "50ms",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20",
      delay: "100ms",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20",
      delay: "150ms",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
      color: "hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20",
      delay: "200ms",
    },
  ]

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: description, url })
        setInteractions((prev) => ({ ...prev, shared: true }))
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      setIsExpanded(!isExpanded)
    }
  }

  const handleInteraction = (type: keyof typeof interactions) => {
    setInteractions((prev) => ({ ...prev, [type]: !prev[type] }))
  }

  return (
    <div
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
    >
      <div className="flex flex-col items-center space-y-3">
        {/* Main Share Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleShare}
          data-cursor-interactive
          className="group relative w-14 h-14 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-900/20 dark:to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Share2 className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
        </Button>

        {/* Social Platform Links */}
        <div className="flex flex-col space-y-2">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-interactive
                className={`group relative w-12 h-12 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border border-slate-200/40 dark:border-slate-700/40 flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-md hover:shadow-lg overflow-hidden ${platform.color} ${
                  isExpanded
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
                style={{
                  transitionDelay: isExpanded ? platform.delay : "0ms",
                }}
              >
                <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 relative z-10" />
              </a>
            )
          })}
        </div>

        {/* Interaction Buttons */}
        <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200/30 dark:border-slate-700/30">
          {/* Like Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleInteraction("liked")}
            data-cursor-interactive
            className={`group relative w-12 h-12 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border border-slate-200/40 dark:border-slate-700/40 transition-all duration-500 hover:scale-110 shadow-md hover:shadow-lg overflow-hidden ${
              interactions.liked
                ? "text-red-500 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                : "text-slate-600 dark:text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
            }`}
          >
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Heart
              className={`h-4 w-4 transition-all duration-300 group-hover:scale-110 relative z-10 ${interactions.liked ? "fill-current" : ""}`}
            />
          </Button>

          {/* Bookmark Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleInteraction("bookmarked")}
            data-cursor-interactive
            className={`group relative w-12 h-12 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border border-slate-200/40 dark:border-slate-700/40 transition-all duration-500 hover:scale-110 shadow-md hover:shadow-lg overflow-hidden ${
              interactions.bookmarked
                ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                : "text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            }`}
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Bookmark
              className={`h-4 w-4 transition-all duration-300 group-hover:scale-110 relative z-10 ${interactions.bookmarked ? "fill-current" : ""}`}
            />
          </Button>

          {/* Comment Button */}
          <Button
            variant="ghost"
            size="sm"
            data-cursor-interactive
            className="group relative w-12 h-12 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border border-slate-200/40 dark:border-slate-700/40 text-slate-600 dark:text-slate-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-500 hover:scale-110 shadow-md hover:shadow-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <MessageCircle className="h-4 w-4 transition-all duration-300 group-hover:scale-110 relative z-10" />
          </Button>
        </div>
      </div>
    </div>
  )
}
