'use client'

import { Video, Mic, Radio, Award } from 'lucide-react'

export function BadgesSection() {
  return (
    <section className="border-y border-[#3E2421]/10 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="text-center text-[11px] font-mono uppercase tracking-widest text-[#1A1817]/40">
          Broadcast &amp; Content Distribution Networks
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#2C1A1D]">
            <Video className="size-4 text-[#D97706]" /> YouTube Distribution
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#2C1A1D]">
            <Mic className="size-4 text-[#D97706]" /> Spotify Podcast Network
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#2C1A1D]">
            <Radio className="size-4 text-[#D97706]" /> Live Media Studio
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#2C1A1D]">
            <Award className="size-4 text-[#D97706]" /> Visionary Creators
          </div>
        </div>
      </div>
    </section>
  )
}