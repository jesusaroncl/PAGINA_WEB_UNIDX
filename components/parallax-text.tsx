"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

interface ParallaxTextProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxText({ children, speed = 0.5, className = "" }: ParallaxTextProps) {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </div>
  )
}
