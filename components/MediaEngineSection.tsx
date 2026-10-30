"use client";

import React from "react";
import {
  Video,
  Users,
  Compass,
  Flame,
  ArrowUpRight,
  Radio,
} from "lucide-react";
import { LeadType } from "../types";

interface MediaEngineProps {
  onOpenWaitlist?: (tier?: LeadType) => void;
}

export function MediaEngineSection({ onOpenWaitlist }: MediaEngineProps) {
  const sessions = [
    {
      icon: Video,
      pillar: "01",
      badge: "LIVE RECORDING",
      title: "Podcast & 4K Studio",
      desc: "Live soundstage recordings with Aro Victor. Walk away with 4K master cuts, vertical reels, and podcast audio.",
      tag: "4K Master + 12 Reels",
    },
    {
      icon: Users,
      pillar: "02",
      badge: "DEAL ROOM",
      title: "Executive Roundtables",
      desc: "Closed-door, unscripted masterminds with vetted founders and operators running high-yield businesses in Africa.",
      tag: "Chatham House Rule",
    },
    {
      icon: Compass,
      pillar: "03",
      badge: "EXECUTION",
      title: "Business Planning",
      desc: "Actionable frameworks on audience leverage, product expansion, distribution engines, and cash-flow mechanics.",
      tag: "2027 Growth Matrix",
    },
    {
      icon: Flame,
      pillar: "04",
      badge: "CELEBRATION",
      title: "Prayers & Celebration",
      desc: "Spiritual alignment meets intense strategy, curated games, delicious food, and high-energy community celebration.",
      tag: "VIP Mixer & Party",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 lg:py-20 px-6 sm:px-10 bg-[#FAF7F2] border-t border-[#250a06]/10 overflow-hidden font-poppins"
    >
      <div className="absolute top-1/2 left-0 w-112.5 h-75 bg-linear-to-r from-[#f0ab60]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-[#250a06]/10 text-[11px] font-mono text-[#580e03] mb-3 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0ab60] animate-pulse" />
            <span>THE 3-DAY PRODUCTION ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-[#250a06] leading-[1.05] uppercase">
            Designed for Real Depth, <br />
            <span className="font-serif italic font-normal text-[#580e03] lowercase">
              not
            </span>{" "}
            <span className="text-[#e69842]">small talk.</span>
          </h2>

          <p
            style={{
              fontFamily:
                "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
            }}
            className="text-sm sm:text-base text-[#6B564E] mt-3 font-normal leading-relaxed"
          >
            We don&apos;t do passive lectures. We put you inside a live studio
            engine that shoots, edits, and delivers your brand leverage for
            months.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {sessions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#250a06]/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#580e03]/40 transition-all shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-9 w-9 rounded-lg bg-[#FAF7F2] border border-[#250a06]/10 flex items-center justify-center text-[#580e03] group-hover:scale-105 transition-transform">
                      <Icon className="size-4 text-[#f0ab60]" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[#580e03]">
                      PILLAR {item.pillar}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#e69842] uppercase tracking-wider block mb-1">
                    {item.badge}
                  </span>

                  <h3 className="text-base font-bold text-[#250a06] tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily:
                        "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                    }}
                    className="text-xs text-[#6B564E] leading-relaxed mb-4"
                  >
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#250a06]/10 flex items-center justify-between text-[10px] font-mono text-[#96837A]">
                  <span>DELIVERABLE</span>
                  <span className="text-[#250a06] font-semibold">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-[#250a06] text-white p-6 sm:p-8 border border-[#f0ab60]/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-[#580e03] border border-[#f0ab60]/40 text-[10px] font-mono font-bold tracking-wider text-[#f0ab60]">
                DAYS 1 &amp; 2: VIP SOUNDSTAGE
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white/10 text-[10px] font-mono tracking-wider text-white/80">
                DAY 3: COMMUNITY MAINSTAGE
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-1">
              Strictly Limited Capacity. Undisclosed Venue.
            </h3>

            <p
              style={{
                fontFamily:
                  "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
              }}
              className="text-xs text-white/70 leading-relaxed font-normal"
            >
              To maintain the highest level of privacy and media focus, the
              venue location in Lagos is confidential and provided strictly to
              confirmed, paid attendees.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenWaitlist?.("vip")}
            className="cursor-pointer px-6 py-3 rounded-xl bg-linear-to-r from-[#f0ab60] to-[#e69842] text-[#250a06] font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md hover:brightness-110 active:scale-95 flex items-center gap-1.5"
          >
            <span>Reserve VIP Seat</span>
            <ArrowUpRight className="size-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
