'use client'

import React from 'react'

export function TopTicker() {
  return (
    <div className="w-full bg-[#121115] border-b border-white/5 py-2 px-6 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-white/50">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-red-500 font-semibold">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> REC ● 4K 24FPS
        </span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span className="hidden sm:inline">SOUNDSTAGE 01 — LAGOS, NIGERIA</span>
      </div>
      <div className="flex items-center gap-4">
        <span>DAYS 1-2: VIP STUDIO</span>
        <span className="text-white/20">/</span>
        <span className="text-[#F59E0B]">DAY 3: MAINSTAGE</span>
      </div>
    </div>
  )
}