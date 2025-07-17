"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [scrollY, setScrollY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating orb */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        style={{
          top: "10%",
          left: "5%",
          transform: `
            translateY(${scrollY * 0.1}px) 
            translateX(${mouseX * 0.01}px)
            rotate(${scrollY * 0.05}deg)
          `,
        }}
      />

      {/* Medium floating orb */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-br from-green-500/4 to-blue-500/4 rounded-full blur-2xl"
        style={{
          top: "60%",
          right: "10%",
          transform: `
            translateY(${scrollY * -0.15}px) 
            translateX(${mouseY * -0.01}px)
            rotate(${scrollY * -0.08}deg)
          `,
        }}
      />

      {/* Small floating orb */}
      <div
        className="absolute w-48 h-48 bg-gradient-to-br from-purple-500/3 to-pink-500/3 rounded-full blur-xl"
        style={{
          bottom: "20%",
          left: "20%",
          transform: `
            translateY(${scrollY * 0.2}px) 
            translateX(${mouseX * 0.005}px)
            scale(${1 + Math.sin(scrollY * 0.01) * 0.1})
          `,
        }}
      />

      {/* Geometric shapes */}
      <div
        className="absolute w-32 h-32 bg-gradient-to-br from-yellow-500/2 to-orange-500/2 rounded-2xl blur-lg"
        style={{
          top: "30%",
          right: "30%",
          transform: `
            translateY(${scrollY * 0.25}px) 
            translateX(${mouseY * 0.008}px)
            rotate(${scrollY * 0.1 + 45}deg)
          `,
        }}
      />

      <div
        className="absolute w-24 h-24 bg-gradient-to-br from-indigo-500/3 to-blue-500/3 rounded-full blur-md"
        style={{
          bottom: "40%",
          right: "40%",
          transform: `
            translateY(${scrollY * -0.3}px) 
            translateX(${mouseX * -0.005}px)
            rotate(${scrollY * -0.15}deg)
          `,
        }}
      />
    </div>
  )
}
