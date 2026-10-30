'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X, Sparkles, Phone } from 'lucide-react'
import { LeadType } from '../types'

interface HeaderProps {
  onOpenWaitlist: (tier?: LeadType) => void
}

export function HeaderSection({ onOpenWaitlist }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleOpen = (tier: LeadType = 'vip') => {
    setMenuOpen(false)
    if (typeof onOpenWaitlist === 'function') {
      onOpenWaitlist(tier)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#250a06] text-white border-b border-[#f0ab60]/20 shadow-md font-poppins">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-0 h-12 md:h-16 lg:h-20">
          
          <a href="#top" className="flex items-center gap-1 md:gap-3 group select-none">
            <div className="px-1 md:px-2.5 py-0.5 md:py-1 rounded bg-[#580e03] border border-[#f0ab60]/40 shadow-xs transition-transform group-hover:scale-105">
              <span className="text-[9px] md:text-xs font-black tracking-tight text-white uppercase font-poppins max-sm:flex max-sm:justify-center">
                In-House
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif italic text-xs text-[#f0ab60]">with</span>
              <span className="text-[13px] md:text-sm font-bold tracking-wider text-white uppercase group-hover:text-[#f0ab60] transition-colors font-poppins">
                Aro Victor
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-white/80 font-poppins">
            <a href="#experience" className="hover:text-[#f0ab60] transition-colors py-1">
              The Experience
            </a>
            <a href="#features" className="hover:text-[#f0ab60] transition-colors py-1">
              Agenda
            </a>
            <a href="#sponsorship" className="hover:text-[#f0ab60] transition-colors py-1">
              Sponsorships
            </a>
            <button
              type="button"
              onClick={() => handleOpen('volunteer')}
              className="flex items-center gap-1.5 text-[#f0ab60] hover:text-white transition-colors cursor-pointer font-semibold"
            >
              <Sparkles className="size-3.5 text-[#f0ab60]" />
              Volunteer Creators
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleOpen('vip')}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-linear-to-r from-[#f0ab60] to-[#e69842] text-[#250a06] hover:brightness-110 active:scale-95 transition-all shadow-md shadow-black/20 font-poppins"
            >
              Join the Waitlist
              <ArrowUpRight className="size-3.5 stroke-[2.5]" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-1 md:p-2.5 rounded-[6px] md:rounded-xl bg-[#580e03]/60 border border-[#f0ab60]/30 text-[#f0ab60] hover:text-white cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X className="size-4 md:size-6" /> : <Menu className="size-4 md:size-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#250a06] border-b border-[#f0ab60]/20 px-6 py-6 flex flex-col items-center gap-4 text-xs font-semibold uppercase tracking-wider text-white shadow-2xl font-poppins z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <a 
              href="#experience" 
              onClick={() => setMenuOpen(false)} 
              className="py-1 hover:text-[#f0ab60] transition-colors"
            >
              The Experience
            </a>
            <a 
              href="#features" 
              onClick={() => setMenuOpen(false)} 
              className="py-1 hover:text-[#f0ab60] transition-colors"
            >
              Agenda &amp; Sessions
            </a>
            <a 
              href="#sponsorship" 
              onClick={() => setMenuOpen(false)} 
              className="py-1 hover:text-[#f0ab60] transition-colors"
            >
              Sponsorships
            </a>
            <button
              type="button"
              onClick={() => handleOpen('volunteer')}
              className="text-left flex items-center gap-2 text-[#f0ab60] py-1 cursor-pointer font-bold"
            >
              <Sparkles className="size-3.5" />
              Volunteer Content Creators
            </button>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3 w-full max-w-xs">
              <button
                type="button"
                onClick={() => handleOpen('vip')}
                className="w-full py-2.5 rounded-xl bg-linear-to-r from-[#f0ab60] to-[#e69842] text-[#250a06] font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-md font-poppins"
              >
                Join the Waitlist
              </button>
              <a 
                href="tel:+2348132498253"
                className="flex items-center justify-center gap-1.5 text-[11px] text-white/60 hover:text-white font-sans"
              >
                <Phone className="size-3 text-[#f0ab60]" />
                <span>Hotline: +234 813 249 8253</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 top-12 md:top-16 lg:top-20 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
          aria-hidden="true"
        />
      )}
    </>
  )
}
