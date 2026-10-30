'use client'

import React, { useEffect, useState } from 'react'

export function HouseLoader() {
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setMounted(false)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }, 1100)

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      clearTimeout(timer)
    }
  }, [])

  if (!mounted) return null

  const barHeights = [40, 55, 70, 85, 100, 85, 70, 55, 40]

  return (
    <div 
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#FAF7F2] select-none pointer-events-none transition-opacity duration-300 overflow-hidden"
    >
      <div className="flex items-end gap-2 sm:gap-2.5 h-24 sm:h-28 mb-6">
        {barHeights.map((h, i) => (
          <span
            key={i}
            style={{ 
              height: `${h}%`,
              animation: `pulse 0.9s ease-in-out infinite alternate ${i * 80}ms`
            }}
            className="w-2.5 sm:w-3 rounded-t-full bg-linear-to-t from-[#580e03] via-[#f0ab60] to-[#f0ab60] shadow-xs"
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-1.5 text-center">
        <span className="font-poppins text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[#250a06]">
          In-House with Aro Victor
        </span>
        <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[#6B564E]/70">
          An Exclusive Experience • Lagos
        </span>
      </div>

    </div>
  )
}
