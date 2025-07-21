"use client"

import { useEffect, useState } from "react"

interface ParallaxOptions {
  speed?: number
  offset?: number
  disabled?: boolean
}

export function useParallax({ speed = 0.5, offset = 0, disabled = false }: ParallaxOptions = {}) {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    if (disabled) return;
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [disabled]);

  const transform = disabled ? "translateY(0px)" : `translateY(${(scrollY + offset) * speed}px)`

  return {
    transform,
    scrollY,
    windowHeight,
  }
}
