'use client'

import React, { useState } from 'react'
import { Clock, Video, Users, Flame, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { LeadType } from '../types'

interface AgendaProps {
  onOpenWaitlist?: (tier?: LeadType) => void
}

export function AgendaSection({ onOpenWaitlist }: AgendaProps) {
  const [activeTrack, setActiveTrack] = useState<'vip' | 'community'>('vip')

  const handleCtaClick = (tier: LeadType) => {
    if (typeof onOpenWaitlist === 'function') {
      onOpenWaitlist(tier)
    }
  }

  return (
    <section id="features" className="relative py-16 lg:py-20 px-6 sm:px-10 bg-[#FAF7F2] border-t border-[#250a06]/10 font-poppins">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-2xl mb-10 text-center lg:text-left">
            {/* text-center lg:text-left */}
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-[#250a06]/10 text-[11px] font-mono text-[#580e03] font-bold uppercase mb-3 shadow-xs ">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0ab60] animate-pulse" />
            <span>EVENT TIMELINE & AGENDA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-[#250a06] leading-[1.05] uppercase mb-3">
            The 3-Day Breakdown.
          </h2>

          <p 
            style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
            className="text-sm text-[#6B564E] leading-relaxed font-normal"
          >
            Switch between the closed-door VIP soundstage days and the public community mainstage festival below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 p-1.5 bg-white border border-[#250a06]/15 rounded-2xl lg:max-w-xl mb-8 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTrack('vip')}
            className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center gap-2 ${
              activeTrack === 'vip'
                ? 'bg-[#250a06] text-[#f0ab60] shadow-md scale-[1.01]'
                : 'text-[#6B564E] hover:text-[#250a06] hover:bg-[#FAF7F2]'
            }`}
          >
            <Users className="size-4" />
            <span>Days 01 & 02 • VIP Studio</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTrack('community')}
            className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center gap-2 ${
              activeTrack === 'community'
                ? 'bg-[#580e03] text-white shadow-md scale-[1.01]'
                : 'text-[#6B564E] hover:text-[#250a06] hover:bg-[#FAF7F2]'
            }`}
          >
            <Flame className="size-4" />
            <span>Day 03 • Community Stage</span>
          </button>
        </div>

        {activeTrack === 'vip' && (
          <div className="bg-white border border-[#250a06]/10 rounded-3xl p-6 sm:p-10 shadow-xs flex flex-col lg:flex-row items-center md:items-center lg:items-start justify-between gap-8 animate-in fade-in duration-150">
            <div className="max-w-2x">
              <div className="flex flex-col md:flex-row items-center gap-2 mb-3 ">
                <span className="px-2.5 py-0.5 rounded-full bg-[#250a06] text-[#f0ab60] text-[8px] md:text-[10px] font-mono font-bold tracking-wider uppercase">
                  DAYS 01 & 02 • ALL-ACCESS VIP PASS
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-[#6B564E]">
                  <Clock className="size-3 text-[#f0ab60]" />
                  9:00 AM - 6:00 PM WAT DAILY
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#250a06] uppercase tracking-tight mb-3 text-center md:text-left">
                VIP Masterclasses & Live 4K Media Soundstage
              </h3>

              <p 
                style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                className="text-xs sm:text-sm text-[#6B564E] leading-relaxed mb-6 text-center md:text-left"
              >
                An intimate closed-door cohort of founders, executives, and top creators. You sit through tactical business scaling masterclasses and rotate through the live multi-cam soundstage with Aro Victor for personal 4K media production.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#250a06]/10">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    4K multi-cam podcast interviews & personal vertical reels
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Closed-door Chatham House founder deal-flow sessions
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    High-definition brand headshots & audio mastering
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Private executive networking dinners in Lagos
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto p-6 rounded-2xl bg-[#FAF7F2] border border-[#250a06]/10 flex flex-col items-center gap-3 shrink-0 text-center">
              <div className="h-10 w-10 rounded-xl bg-white border border-[#250a06]/10 flex items-center justify-center text-[#580e03]">
                <Video className="size-5 text-[#f0ab60]" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-[#96837A] block">ACCESS LEVEL</span>
                <span className="text-xs font-bold text-[#250a06]">PAID VIP TICKET ONLY</span>
              </div>

              <button
                type="button"
                onClick={() => handleCtaClick('vip')}
                className="w-full px-6 py-3 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Get VIP Pass</span>
              </button>
            </div>
          </div>
        )}

        {activeTrack === 'community' && (
          <div className="bg-white border border-[#250a06]/10 rounded-3xl p-6 sm:p-10 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 animate-in fade-in duration-150">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#580e03] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                  DAY 03 • OPEN COMMUNITY REGISTRATION
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-[#6B564E]">
                  <Clock className="size-3 text-[#f0ab60]" />
                  12:00 PM - 9:00 PM WAT
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#250a06] uppercase tracking-tight mb-3">
                Community Mainstage, Demos & Creator Celebration
              </h3>

              <p 
                style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                className="text-xs sm:text-sm text-[#6B564E] leading-relaxed mb-6"
              >
                The wider Nigerian tech, creative, and builder ecosystem convenes. Live keynotes, partner exhibition booths, live podcast broadcasts, games, and an open networking after-party.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#250a06]/10">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Mainstage keynotes & live podcast recordings
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Partner brand booth activations & product demos
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Creator spotlight collisions & peer mixers
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Celebration mixer: music, curated games & food
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto p-6 rounded-2xl bg-[#FAF7F2] border border-[#250a06]/10 flex flex-col items-center gap-3 shrink-0 text-center">
              <div className="h-10 w-10 rounded-xl bg-white border border-[#250a06]/10 flex items-center justify-center text-[#580e03]">
                <Flame className="size-5 text-[#f0ab60]" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-[#96837A] block">ACCESS LEVEL</span>
                <span className="text-xs font-bold text-[#250a06]">COMMUNITY WAITLIST</span>
              </div>

              <button
                type="button"
                onClick={() => handleCtaClick('open')}
                className="w-full px-6 py-3 rounded-xl bg-[#580e03] hover:bg-[#721305] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Join Day 3 Waitlist</span>
                <ArrowUpRight className="size-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
