"use client";

import React from "react";
import {
  Video,
  Users,
  Compass,
  Flame,
  ArrowUpRight,
  Heart,
  Globe,
  Sparkles,
  Crown,
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
      badge: "UNFILTERED MIC",
      title: "Candid Studio & Real Talk",
      desc: "No stiff PR answers or practiced scripts. Hop on the mic with Victor and friends to share honest life stories, laugh out loud, and capture 4K media that feels genuinely you.",
      tag: "Raw 4K Cuts & Moments",
    },
    {
      icon: Users,
      pillar: "02",
      badge: "ZERO-EGO CIRCLE",
      title: "Vulnerable Masterminds",
      desc: "Drop the executive armor. An unscripted, safe room where friends open up about real failures, real breakthroughs, and private lessons without judgment.",
      tag: "Unfiltered Safe Space",
    },
    {
      icon: Compass,
      pillar: "03",
      badge: "SHARED DREAMS",
      title: "Playground for Big Ideas",
      desc: "Creative sparring with zero boardroom boredom. Brainstorm bold moves, hatch collaborations, and bounce ideas off friends who genuinely want to see you win.",
      tag: "Co-Creation & Backing",
    },
    {
      icon: Flame,
      pillar: "04",
      badge: "CHILDLIKE JOY",
      title: "Prayers, Games & Pure Fun",
      desc: "Heartfelt gratitude and soul-deep prayers mixed with ridiculous party games, delicious food, music, and laughter that reminds you what it felt like to be a kid.",
      tag: "Soul, Games & Feast",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-12 lg:py-16 px-6 sm:px-10 bg-[#FAF7F2] border-t border-[#250a06]/10 overflow-hidden font-poppins"
    >
      <div className="absolute top-1/2 left-0 w-112.5 h-75 bg-linear-to-r from-[#f0ab60]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-2.5xl mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-[#250a06]/10 text-[8px] min-[425px]:text-[11px] md:text-[11px] font-mono text-[#580e03] mb-2.5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0ab60] animate-pulse" />
            <span>DAYS 1 &amp; 2: INTIMATE RETREAT • DAY 3: LED2LEAD</span>
          </div>

          <h2 className="text-[19px] min-[425px]:text-2xl sm:text-4xl lg:text-[50px] font-black tracking-[-0.035em] text-[#250a06] leading-[1.08] uppercase">
            Drop the Corporate Mask. <br />
            <span className="font-serif italic font-normal text-[#580e03] lowercase">
              come be a
            </span>{" "}
            <span className="text-[#e69842]">Child again.</span>
          </h2>

          <p
            style={{
              fontFamily:
                "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
            }}
            className="text-xs sm:text-sm text-[#6B564E] mt-2.5 font-normal leading-relaxed  lg:w-2xl"
          >
            This isn&apos;t a stiff networking seminar. It&apos;s an unfiltered
            sanctuary where friends laugh until their ribs ache, share
            vulnerable truths, and climax into Day 3&apos;s open community
            gathering:{" "}
            <strong className="text-[#250a06] font-semibold">
              &ldquo;Led2Lead&rdquo;
            </strong>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {sessions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#250a06]/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#580e03]/40 transition-all shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-4 lg:h-8 w-4 lg:w-8 rounded-[6px] lg:rounded-lg bg-[#FAF7F2] border border-[#250a06]/10 flex items-center justify-center text-[#580e03] group-hover:scale-105 transition-transform">
                      <Icon className="size-4 lg:size-4 text-[#f0ab60]" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[#580e03]">
                      PILLAR {item.pillar}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#e69842] uppercase tracking-wider block mb-1">
                    {item.badge}
                  </span>

                  <h3 className="text-sm sm:text-base font-bold text-[#250a06] tracking-tight mb-0.5 lg:mb-1.5">
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily:
                        "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                    }}
                    className="text-[11px] lg:text-xs text-[#6B564E] leading-relaxed mb-1.5 lg:mb-3"
                  >
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 lg:pt-2.5 border-t border-[#250a06]/10 flex items-center justify-between text-[10px] font-mono text-[#96837A]">
                  <span>VIBE CHECK</span>
                  <span className="text-[#250a06] font-semibold">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 rounded-2xl bg-[#250a06] text-white p-5 sm:p-6 border border-[#f0ab60]/30 flex flex-col justify-between shadow-md">
            <div className="text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-[#580e03] border border-[#f0ab60]/40 text-[9px] font-mono font-bold tracking-wider text-[#f0ab60]">
                  DAYS 1 &amp; 2 RETREAT
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono tracking-wider text-white">
                  DAY 3: LED2LEAD CONFERENCE
                </span>
              </div>

              <h3 className="text-[16px] md:text-lg sm:text-xl font-black uppercase tracking-tight text-white mb-1.5">
                The In-Person Gathering
              </h3>

              <p
                style={{
                  fontFamily:
                    "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                }}
                className="text-xs text-white/75 leading-relaxed font-normal mb-3"
              >
                Experience both worlds in Lagos. <strong>Days 1 &amp; 2</strong>{" "}
                is our unscripted retreat to unwind, record 4K studio sessions,
                and bond. Climaxing into <strong>Day 3: Led2Lead</strong>, our
                open community leadership conference for current, rising and
                aspiring leaders.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[10px] font-mono text-[#f0ab60]">
                LIMITED COHORT SEATS
              </span>

              <button
                type="button"
                onClick={() => onOpenWaitlist?.("vip")}
                className="cursor-pointer w-full sm:w-auto px-5 py-2.5 rounded-xl bg-linear-to-r from-[#f0ab60] to-[#e69842] text-[#250a06] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:brightness-110 active:scale-95 flex items-center justify-center gap-1.5"
              >
                <span>Reserve Your Seat</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-white border border-[#250a06]/15 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-[#580e03]/40 transition-all">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#250a06]/10 text-[9px] font-mono font-bold text-[#580e03] uppercase">
                  <Globe className="size-1.5 md:size-2.5 text-[#f0ab60]" />
                  CAN&apos;T BE IN ROOM PHYSICALLY?
                </span>
              </div>

              <h3 className="text-[16px] md:text-lg sm:text-xl font-black uppercase tracking-tight text-[#250a06] mb-1.5 flex items-center justify-center md:justify-start gap-1.5">
                <span>Support From Afar</span>
                <Heart className="size-2 md:size-3.5 text-[#580e03] fill-[#580e03]" />
              </h3>

              <p
                style={{
                  fontFamily:
                    "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                }}
                className="text-xs text-[#6B564E] leading-relaxed mb-3 font-normal"
              >
                Cheering from outside Lagos? You can still fuel the soundstage
                and back the open <strong>Led2Lead</strong> conference. Receive
                private uncut 4K vault recordings and a personal patron
                shoutout.
              </p>
            </div>

            <div className="pt-3 border-t border-[#250a06]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[10px] font-mono text-[#580e03] font-semibold ">
                UNCUT VAULT ACCESS
              </span>

              <button
                type="button"
                onClick={() => onOpenWaitlist?.("vip")}
                className="cursor-pointer w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#250a06] text-[#250a06] hover:text-[#f0ab60] border border-[#250a06]/15 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Sparkles className="size-3 text-[#f0ab60]" />
                <span>Support As Patron</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaEngineSection;