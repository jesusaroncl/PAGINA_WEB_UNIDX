"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "slideUp"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fadeUp", delay = 0 }: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    switch (animation) {
      case "fadeUp":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
      case "fadeLeft":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`
      case "fadeRight":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`
      case "scale":
        return `${baseClasses} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`
      case "slideUp":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`
      default:
        return baseClasses
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
