"use client"

import { useEffect, useState } from "react"

interface InteractiveCursorProps {
  enabled?: boolean
}

export function InteractiveCursor({ enabled = false }: InteractiveCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isInteracting, setIsInteracting] = useState(false)
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "click">("default")

  useEffect(() => {
    if (!enabled) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setCursorVariant("click")
    const handleMouseUp = () => setCursorVariant(isInteracting ? "hover" : "default")

    const handleInteractionStart = () => {
      setIsInteracting(true)
      setCursorVariant("hover")
    }

    const handleInteractionEnd = () => {
      setIsInteracting(false)
      setCursorVariant("default")
    }

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor-interactive], input, textarea, select",
    )

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractionStart)
      el.addEventListener("mouseleave", handleInteractionEnd)
    })

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractionStart)
        el.removeEventListener("mouseleave", handleInteractionEnd)
      })
    }
  }, [enabled, isInteracting])

  if (!enabled) return null

  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 0.6,
      mixBlendMode: "normal" as const,
    },
    hover: {
      scale: 1.5,
      opacity: 0.8,
      mixBlendMode: "difference" as const,
    },
    click: {
      scale: 0.8,
      opacity: 1,
      mixBlendMode: "difference" as const,
    },
  }

  const currentVariant = cursorVariants[cursorVariant]

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${currentVariant.scale})`,
          opacity: currentVariant.opacity,
          mixBlendMode: currentVariant.mixBlendMode,
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-blue-600 dark:border-blue-400 bg-blue-600/20 dark:bg-blue-400/20" />
      </div>

      {/* Dot cursor */}
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 2}px, ${mousePosition.y - 2}px)`,
        }}
      />
    </>
  )
}
