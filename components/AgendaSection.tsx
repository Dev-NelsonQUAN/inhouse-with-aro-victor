'use client'

import React, { useState } from 'react'
import { Clock, Video, Users, Flame, ArrowUpRight, CheckCircle2, Crown } from 'lucide-react'
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
    <section 
      id="features" 
      className="relative py-13 md:py-16 lg:py-20 px-6 sm:px-10 bg-[#F5EADB] border-t border-[#e69842]/25 font-poppins overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-112.5 h-75 bg-linear-to-l from-[#f0ab60]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-2xl mb-6 md:mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/90 border border-[#250a06]/10 text-[7px] min-[425px]:text-[9px] md:text-[11px] font-mono text-[#580e03] font-bold uppercase mb-3 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0ab60] animate-pulse" />
            <span>OUR 3-DAY PLAYBOOK • DAYS 1 &amp; 2 RETREAT + DAY 3 LED2LEAD</span>
          </div>

          <h2 className="text-[26px] sm:text-4xl lg:text-[50px] font-black tracking-[-0.035em] text-[#250a06] leading-[1.05] uppercase mb-3">
            The 3-Day Breakdown.
          </h2>

          <p 
            style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
            className="text-[13px] md:text-sm text-[#6B564E] leading-relaxed font-normal px-5 md:px-0"
          >
            Switch between our cozy, unscripted retreat for leaders and Day 3&apos;s open community leadership conference: <strong className="text-[#250a06] font-semibold">&ldquo;Led2Lead&rdquo;</strong>.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 p-1.5 bg-white border border-[#250a06]/15 rounded-2xl lg:max-w-xl mb-8 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTrack('vip')}
            className={`py-2.5 px-3 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center gap-2 ${
              activeTrack === 'vip'
                ? 'bg-[#250a06] text-[#f0ab60] shadow-md scale-[1.01]'
                : 'text-[#6B564E] hover:text-[#250a06] hover:bg-[#F5EADB]'
            }`}
          >
            <Users className="size-3 md:size-4" />
            <span>Days 01 &amp; 02 • The Intimate Room</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTrack('community')}
            className={`py-2.5 px-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center gap-2 ${
              activeTrack === 'community'
                ? 'bg-[#580e03] text-white shadow-md scale-[1.01]'
                : 'text-[#6B564E] hover:text-[#250a06] hover:bg-[#F5EADB]'
            }`}
          >
            <Crown className="size-3 md:size-4 text-[#f0ab60]" />
            <span>Day 03 • Led2Lead Conference</span>
          </button>
        </div>

        {activeTrack === 'vip' && (
          <div className="bg-white border border-[#250a06]/10 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-10 animate-in fade-in duration-150">
            <div className="max-w-3.5xl">
              <div className="flex flex-col md:flex-row items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#250a06] text-[#f0ab60] text-[8px] md:text-[10px] font-mono font-bold tracking-wider uppercase">
                  DAYS 01 &amp; 02 • THE INTIMATE RETREAT
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-[#6B564E]">
                  <Clock className="size-3 text-[#f0ab60]" />
                  9:00 AM - 6:00 PM WAT DAILY
                </span>
              </div>

              <h3 className="text-[18px] min-[425px]:text-xl sm:text-2xl lg:text-[28px] font-black text-[#250a06] uppercase tracking-tight mb-1 text-center md:text-left">
                Deep Talks, Big Laughs &amp; Live 4K Studio
              </h3>

              <p 
                style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                className="text-[12px] min-[425px]:text-xs sm:text-sm text-[#6B564E] leading-relaxed mb-3 text-center md:text-left"
              >
                Leadership is heavy when you feel like you must always have all the answers. This is a private sanctuary where leaders, builders, and creators drop the mask, speak raw truths, play games, and record unscripted 4K podcasts with Victor that highlight your authentic voice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#250a06]/10">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Raw, unscripted 4K studio podcast chats &amp; personal video reels
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Safe-circle conversations for leaders without corporate posturing
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    High-end studio portraits &amp; creative asset review
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Family-style dinners, late-night laughs &amp; lifelong alliances
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto p-6 rounded-2xl bg-[#F5EADB] border border-[#250a06]/10 flex flex-col items-center gap-3 shrink-0 text-center">
              <div className="h-7 md:h-10 w-7 md:w-10 rounded-xl bg-white border border-[#250a06]/10 flex items-center justify-center text-[#580e03]">
                <Video className="size-3 md:size-5 text-[#f0ab60]" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-[#96837A] block">SEATING</span>
                <span className="text-[10px] md:text-xs font-bold text-[#250a06]">INTIMATE ROOM • LIMITED SEATS</span>
              </div>

              <button
                type="button"
                onClick={() => handleCtaClick('vip')}
                className="w-full px-3 md:px-6 py-3 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Reserve Your Seat</span>
              </button>
            </div>
          </div>
        )}

        {activeTrack === 'community' && (
          <div className="bg-white border border-[#250a06]/10 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10 animate-in fade-in duration-150">
            <div className="max-w-3.5xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#580e03] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                  DAY 03 • LED2LEAD LEADERSHIP CONFERENCE
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-[#6B564E]">
                  <Clock className="size-3 text-[#f0ab60]" />
                  12:00 PM - 9:00 PM WAT
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#250a06] uppercase tracking-tight mb-1">
                Day 3: Led2Lead (Open community Leadership Conference).
              </h3>

              <p 
                style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                className="text-xs sm:text-sm text-[#6B564E] leading-relaxed mb-3"
              >
                Created for people stepping up to lead, whether you&apos;re building a venture, leading a team, or steering a community. High-energy keynotes, real stories of leadership grit, live podcasts, creator demo zones, and a joyful celebration after-party.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#250a06]/10">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Unfiltered mainstage talks on practical leadership &amp; vision
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Partner brand booth activations &amp; interactive creator playgrounds
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    Real networking collisions with leaders across different industries
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-[#f0ab60] shrink-0 mt-0.5" />
                  <span 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xs text-[#250a06]"
                  >
                    The grand Led2Lead mixer: games, live sounds, food &amp; celebration
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto p-6 rounded-2xl bg-[#F5EADB] border border-[#250a06]/10 flex flex-col items-center gap-3 shrink-0 text-center">
              <div className="h-10 w-10 rounded-xl bg-white border border-[#250a06]/10 flex items-center justify-center text-[#580e03]">
                <Flame className="size-5 text-[#f0ab60]" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-[#96837A] block">ACCESS LEVEL</span>
                <span className="text-xs font-bold text-[#250a06]">OPEN COMMUNITY • FREE RSVP</span>
              </div>

              <button
                type="button"
                onClick={() => handleCtaClick('open')}
                className="w-full px-6 py-3 rounded-xl bg-[#580e03] hover:bg-[#721305] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Join Led2Lead Waitlist</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}