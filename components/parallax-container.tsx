"use client"

import type { ReactNode } from "react"

interface ParallaxContainerProps {
  children: ReactNode
}

export function ParallaxContainer({ children }: ParallaxContainerProps) {
  return <div className="relative">{children}</div>
}
