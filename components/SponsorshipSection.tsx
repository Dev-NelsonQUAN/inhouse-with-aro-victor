"use client";

import React from "react";
import {
  ArrowUpRight,
  Phone,
  Layers,
  Crown,
  Video,
  Radio,
  Gift,
  Sparkles,
  Tv,
  Podcast,
  Building,
  Globe,
} from "lucide-react";
import { LeadType } from "../types";

interface SponsorshipProps {
  onOpenWaitlist?: (tier?: LeadType) => void;
}

export function SponsorshipSection({ onOpenWaitlist }: SponsorshipProps) {
  const deliverables = [
    {
      num: "01",
      icon: Layers,
      title: "Exhibition & Fun Activation Space",
      desc: "Interactive product demo booth and creative hangout space on-site across all 3 days.",
    },
    {
      num: "02",
      icon: Crown,
      title: "3 All-Access Guest Passes",
      desc: "Full 3-day access for your leadership team or partners to join the retreat and festival.",
    },
    {
      num: "03",
      icon: Video,
      title: "Candid On-Site Video Feature",
      desc: "A broadcast-grade spotlight interview produced live by our studio crew featuring your brand.",
    },
    {
      num: "04",
      icon: Radio,
      title: "YouTube, Spotify & Led2Lead Feature",
      desc: "Brand co-credit across all published studio podcasts and the Day 3 (Led2Lead) conference stream.",
    },
    {
      num: "05",
      icon: Gift,
      title: "Welcome Bag Swag & Goodies",
      desc: "Direct placement of your physical merchandise, stickers, or product gifts inside every attendee kit.",
    },
    {
      num: "06",
      icon: Sparkles,
      title: "Stage & Backdrop Visibility",
      desc: "Prominent vector logo display across the live 4K soundstage and Day 3 Led2Lead mainstage.",
    },
  ];

  const mediaPartners = [
    {
      name: "YouTube Broadcast",
      icon: <Tv className="size-3.5 sm:size-4 text-[#f0ab60]" />,
      sub: "Day 3: Led2Lead",
    },
    {
      name: "Spotify Series",
      icon: <Podcast className="size-3.5 sm:size-4 text-[#f0ab60]" />,
      sub: "Official Podcast",
    },
    {
      name: "Lagos Creative Press",
      icon: <Globe className="size-3.5 sm:size-4 text-[#f0ab60]" />,
      sub: "Media Coverage",
    },
    {
      name: "Leadership Network",
      icon: <Building className="size-3.5 sm:size-4 text-[#f0ab60]" />,
      sub: "Visionaries & Leaders",
    },
  ];

  return (
    <section
      id="sponsorship"
      className="py-16 lg:py-20 px-4 sm:px-8 lg:px-10 bg-white border-t border-[#250a06]/10 font-poppins"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#FAF7F2] border border-[#250a06]/10 text-[11px] font-mono text-[#580e03] font-bold uppercase mb-3 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0ab60] animate-pulse" />
            <span>PARTNERSHIPS • GOOD PEOPLE &amp; REAL SUPPORT</span>
          </div>

          <h2 className="text-[20px] sm:text-4xl lg:text-[50px] font-black tracking-[-0.035em] text-[#250a06] leading-[1.05] uppercase mb-3">
            Partner with In-House <br />
            <span className="font-serif italic font-normal text-[#580e03] lowercase">
              with
            </span>{" "}
            <span className="text-[#e69842]">Aro Victor.</span>
          </h2>

          <p
            style={{
              fontFamily:
                "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
            }}
            className="text-[12px] md:text-sm text-[#6B564E] leading-relaxed font-normal"
          >
            We&apos;re not looking for boring banner sponsors. We want genuine
            brands and partners to back our intimate retreat and Day 3&apos;s
            open community leadership conference:
            <strong className="text-[#250a06] font-semibold">
              &ldquo;Led2Lead&rdquo;
            </strong>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-2.5 lg:p-4 rounded-xl bg-[#FAF7F2] border border-[#250a06]/10 hover:border-[#580e03]/40 transition-all shadow-xs flex items-start gap-2.5 lg:gap-3.5 group"
              >
                <div className="h-5 lg:h-9 w-5 lg:w-9 rounded-[6px] lg:rounded-lg bg-white border border-[#250a06]/10 flex items-center justify-center text-[#580e03] shrink-0 shadow-xs group-hover:scale-105 transition-transform mt-0.5">
                  <Icon className="size-3 lg:size-4 text-[#f0ab60]" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5 lg:mb-1">
                    <h3 className="text-xs lg:text-sm font-bold text-[#250a06]">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[10px] font-bold text-[#580e03] ml-2 shrink-0">
                      //{item.num}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily:
                        "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                    }}
                    className="text-[11px] lg:text-xs text-[#6B564E] leading-snug"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#FAF7F2]/60 border border-[#250a06]/10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#96837A] font-bold block mb-3 text-center sm:text-left">
            OFFICIAL MEDIA CHANNELS &amp; &ldquo;LED2LEAD&rdquo; BROADCAST
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {mediaPartners.map((partner, i) => (
              <div
                key={i}
                className="bg-white border border-[#250a06]/10 rounded-[6px] lg:rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-2.5 shadow-xs"
              >
                <div className="h-3 md:h-6 w-3 md:w-6 lg:h-8 lg:w-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center shrink-0">
                  {partner.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[10px] lg:text-xs font-bold text-[#250a06] block leading-tight truncate">
                    {partner.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#96837A] font-mono block truncate">
                    {partner.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 md:p-5 lg:p-5 rounded-2xl bg-[#FAF7F2] border border-[#250a06]/15 flex flex-col sm:flex-row items-center justify-between gap-3 lg:gap-4 shadow-xs text-center md:text-left">
          <div className="">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[#f0ab60] animate-ping" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#580e03] font-bold">
                LET&apos;S TALK PARTNERSHIPS
              </span>
            </div>

            <p className="text-[12px] md:text-[14px] lg:text-lg font-bold text-[#250a06] flex items-center justify-center md:justify-start gap-2 tracking-tight">
              <Phone className="size-3 lg:size-4 text-[#580e03]" />
              <span>Reach Victor Directly: +234 813 249 8253</span>
            </p>

            <p
              style={{
                fontFamily:
                  "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
              }}
              className="text-[11px] sm:text-xs text-[#6B564E] mt-0.5 font-norma "
            >
              No stiff corporate red tape. Give us a quick call or message on
              WhatsApp to discuss ideas!
            </p>
          </div>

{/* flex-col min-[425px]:flex-row md:flex-row */}

          <div className="flex  items-center gap-2.5 w-full sm:w-xs lg:w-auto ">
            <a
              href="tel:+2348132498253"
              className="flex-1 sm:flex-none px-3 md:px-4 py-2.5 rounded-xl bg-white border border-[#250a06]/20 hover:border-[#250a06] text-[#250a06] text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 md:gap-1.5 shadow-xs"
            >
              <Phone className="size-2 md:size-3.5 text-[#580e03]" />
              <span>Call Phone</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenWaitlist?.("sponsor")}
              className="flex-1 sm:flex-none px-3 md:px-5 py-2.5 rounded-xl bg-linear-to-r from-[#f0ab60] to-[#e69842] text-[#250a06] text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm hover:brightness-105 active:scale-95 cursor-pointer"
            >
              <span>Get Details</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
