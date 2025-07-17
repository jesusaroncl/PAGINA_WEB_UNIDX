"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  offset?: number
}

export function ParallaxSection({ children, className = "", speed = 0.5, offset = 0 }: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const onScroll = () => {
      setScrollY(window.scrollY)
    }

    const onResize = () => {
      if (element) {
        setElementTop(element.offsetTop)
        setClientHeight(window.innerHeight)
      }
    }

    onResize()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const isVisible = scrollY + clientHeight >= elementTop && scrollY <= elementTop + clientHeight
  const parallaxOffset = isVisible ? (scrollY - elementTop + offset) * speed : 0

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${parallaxOffset}px)`,
      }}
    >
      {children}
    </div>
  )
}
