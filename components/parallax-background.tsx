"use client"

import type React from "react"

import { useParallax } from "@/hooks/use-parallax"

interface ParallaxBackgroundProps {
  children?: React.ReactNode
  className?: string
  speed?: number
  offset?: number
}

export function ParallaxBackground({ children, className = "", speed = 0.5, offset = 0 }: ParallaxBackgroundProps) {
  const { transform } = useParallax({ speed, offset })

  return (
    <div className={`relative ${className}`} style={{ transform }}>
      {children}
    </div>
  )
}
