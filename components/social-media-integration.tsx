"use client"

import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Share2, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialMediaIntegrationProps {
  url?: string
  title?: string
  description?: string
}

export function SocialMediaIntegration({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "UNID - Facultad de Ciencias de la Salud",
  description = "Excelencia en educación e investigación en salud",
}: SocialMediaIntegrationProps) {
  const [isSharing, setIsSharing] = useState(false)
  const [liked, setLiked] = useState(false)

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: "hover:text-sky-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
      color: "hover:text-red-600",
    },
  ]

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      setIsSharing(!isSharing)
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-4">
        {/* Share Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleShare}
          data-cursor-hover
          className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
        >
          <Share2 className="h-4 w-4 text-slate-600 dark:text-slate-400" />
        </Button>

        {/* Social Links */}
        <div
          className={`flex flex-col space-y-2 transition-all duration-500 ${isSharing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className={`w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg ${social.color}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>

        {/* Engagement Buttons */}
        <div className="flex flex-col space-y-2 mt-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLiked(!liked)}
            data-cursor-hover
            className={`w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl ${
              liked ? "text-red-500" : "text-slate-600 dark:text-slate-400"
            }`}
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            data-cursor-hover
            className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-4 w-4 text-slate-600 dark:text-slate-400" />
          </Button>
        </div>
      </div>
    </div>
  )
}
