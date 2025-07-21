"use client"

import { useEffect, useState } from "react"

export function SophisticatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const updateScrollY = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateScrollY);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary gradient layer */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59, 130, 246, 0.08) 0%, 
              rgba(147, 197, 253, 0.04) 30%, 
              transparent 60%),
            linear-gradient(135deg, 
              rgba(59, 130, 246, 0.02) 0%, 
              rgba(147, 197, 253, 0.01) 50%, 
              transparent 100%)
          `,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Secondary gradient layer */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-15"
        style={{
          background: `
            radial-gradient(ellipse at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
              rgba(99, 102, 241, 0.06) 0%, 
              rgba(165, 180, 252, 0.03) 40%, 
              transparent 70%)
          `,
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />

      {/* Floating geometric elements */}
      <div className="absolute inset-0">
        {/* Large floating circle */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-50/30 to-blue-100/20 dark:from-blue-900/10 dark:to-blue-800/5 blur-3xl"
          style={{
            top: "15%",
            left: "10%",
            transform: `
              translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) 
              translateY(${scrollY * 0.03}px)
            `,
          }}
        />

        {/* Medium floating circle */}
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-slate-50/40 to-slate-100/20 dark:from-slate-800/15 dark:to-slate-700/8 blur-2xl"
          style={{
            top: "60%",
            right: "15%",
            transform: `
              translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px) 
              translateY(${scrollY * 0.06}px)
            `,
          }}
        />

        {/* Small floating circle */}
        <div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-100/25 to-blue-200/15 dark:from-blue-900/8 dark:to-blue-800/4 blur-xl"
          style={{
            bottom: "25%",
            left: "25%",
            transform: `
              translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px) 
              translateY(${scrollY * 0.02}px)
            `,
          }}
        />

        {/* Additional accent elements */}
        <div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-100/20 to-indigo-200/10 dark:from-indigo-900/6 dark:to-indigo-800/3 blur-lg"
          style={{
            top: "40%",
            right: "40%",
            transform: `
              translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) 
              translateY(${scrollY * 0.04}px)
            `,
          }}
        />
      </div>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.2) 1px, transparent 0)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.01}px)`,
        }}
      />

      {/* Noise texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.008] dark:opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
