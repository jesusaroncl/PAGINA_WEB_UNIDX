"use client"

import { useEffect, useState } from "react"

export function DynamicBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    const updateScrollY = () => {
      setScrollY(window.scrollY)
    }

    document.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("scroll", updateScrollY)

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("scroll", updateScrollY)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(147, 197, 253, 0.1) 25%, 
            rgba(219, 234, 254, 0.05) 50%, 
            transparent 70%)`,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/20 to-blue-200/10 dark:from-blue-900/10 dark:to-blue-800/5 blur-3xl"
          style={{
            top: "10%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translateY(${scrollY * 0.05}px)`,
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-slate-100/20 to-slate-200/10 dark:from-slate-800/10 dark:to-slate-700/5 blur-2xl"
          style={{
            top: "60%",
            right: "15%",
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px) translateY(${scrollY * 0.08}px)`,
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-50/30 to-blue-100/20 dark:from-blue-900/5 dark:to-blue-800/3 blur-xl"
          style={{
            bottom: "20%",
            left: "20%",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) translateY(${scrollY * 0.03}px)`,
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />
    </div>
  )
}
