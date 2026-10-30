'use client'

import React from 'react'
import { Phone, ShieldCheck } from 'lucide-react'
import { LeadType } from '../types'

interface FooterProps {
  onOpenWaitlist?: (tier?: LeadType) => void
}

export function Footer({ onOpenWaitlist }: FooterProps) {
  return (
    <footer className="bg-[#250a06] text-white pt-12 md:pt-20 pb-4 md:pb-12 px-6 sm:px-10 border-t border-[#f0ab60]/20 font-poppins">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 pb-6 md:pb-16 border-b border-white/10">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-1 md:gap-2.5 mb-4 select-none">
              <div className="px-1 md:px-2.5 py-0.9 md:py-1 rounded bg-[#580e03] border border-[#f0ab60]/40 shadow-xs">
                <span className="text-[9px] md:text-xs font-black tracking-tight text-white uppercase font-poppins max-sm:flex max-sm:justify-center">
                  In-House
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif italic text-xs text-[#f0ab60]">with</span>
                <span className="text-sm font-bold tracking-wider text-white uppercase font-poppins">
                  Aro Victor
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm mb-4 md:mb-6 font-normal">
              An exclusive in-house experience for friends, entrepreneurs, and leaders. Live broadcast studio production, tactical founder masterclasses, and curated networking.
            </p>

            <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-[#f0ab60] font-semibold">
              <ShieldCheck className="size-3 md:size-4 text-[#f0ab60]" />
              <span>Venue: Undisclosed (Only Paid Attendees)</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-3 gap-8 text-[12px] md:text-xs">
            
            <div>
              <span className="font-poppins text-[#f0ab60] uppercase tracking-wider font-bold block mb-1.5 md:mb-3">
                Experience
              </span>
              <ul className="font-sans space-y-2.5 text-white/70 font-normal">
                <li><a href="#experience" className="hover:text-white transition-colors">Podcast Interviews</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Executive Roundtables</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Business Planning</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Prayers &amp; Games</a></li>
              </ul>
            </div>

            <div>
              <span className="font-poppins text-[#f0ab60] uppercase tracking-wider font-bold block mb-1.5 md:mb-3">
                Access Tracks
              </span>
              <ul className="font-sans space-y-2.5 text-white/70 font-normal">
                <li>
                  <button 
                    type="button" 
                    onClick={() => onOpenWaitlist?.('vip')} 
                    className="hover:text-[#f0ab60] text-left cursor-pointer transition-colors"
                  >
                    VIP Pass (Days 1 &amp; 2)
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => onOpenWaitlist?.('open')} 
                    className="hover:text-[#f0ab60] text-left cursor-pointer transition-colors"
                  >
                    Day 3 Community Waitlist
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => onOpenWaitlist?.('volunteer')} 
                    className="text-[#f0ab60] hover:text-white text-left cursor-pointer font-semibold transition-colors"
                  >
                    Volunteer Creators
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-poppins text-[#f0ab60] uppercase tracking-wider font-bold block mb-1.5 md:mb-3">
              uiDirect Desk
              </span>
              <ul className="font-sans space-y-2.5 text-white/70 font-normal">
                <li className="flex items-center gap-1.5 font-bold text-white font-poppins">
                  <Phone className="size-3.5 text-[#f0ab60]" />
                  <a href="tel:+2349057543958" className="hover:text-[#f0ab60] transition-colors">
                    +234 813 249 8253
                  </a>
                </li>
                <li><span>Victor (Sponsorships)</span></li>
                <li className="pt-0.5 md:pt-2 text-white/40 font-mono text-[11px]"><span>Lagos, Nigeria</span></li>
              </ul>
            </div>

          </div>

        </div>

        <div className="pt-4 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[8px] md:text-xs font-sans text-white/40">
          <div>
            <span>© {new Date().getFullYear()} IN-HOUSE WITH ARO VICTOR • ALL RIGHTS RESERVED</span>
          </div>
        </div>

      </div>
    </footer>
  )
}