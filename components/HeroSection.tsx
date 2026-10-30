"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { TierType } from "../types";

interface HeroSectionProps {
  onOpenWaitlist: (tier?: TierType) => void;
}

export function HeroSection({ onOpenWaitlist }: HeroSectionProps) {
  const [imgSrc, setImgSrc] = useState("/aroVictor.png");

  const houseBars = [
    { mobile: "120px", tablet: "160px", desktop: "210px", className: "h-[120px] md:h-[160px] lg:h-[210px]" },
    { mobile: "160px", tablet: "215px", desktop: "280px", className: "h-[160px] md:h-[215px] lg:h-[280px]" },
    { mobile: "200px", tablet: "270px", desktop: "350px", className: "h-[200px] md:h-[270px] lg:h-[350px]" },
    { mobile: "245px", tablet: "325px", desktop: "425px", className: "h-[245px] md:h-[325px] lg:h-[425px]" },
    { mobile: "290px", tablet: "380px", desktop: "500px", className: "h-[290px] md:h-[380px] lg:h-[500px]" }, 
    { mobile: "245px", tablet: "325px", desktop: "425px", className: "h-[245px] md:h-[325px] lg:h-[425px]" },
    { mobile: "200px", tablet: "270px", desktop: "350px", className: "h-[200px] md:h-[270px] lg:h-[350px]" },
    { mobile: "160px", tablet: "215px", desktop: "280px", className: "h-[160px] md:h-[215px] lg:h-[280px]" },
    { mobile: "120px", tablet: "160px", desktop: "210px", className: "h-[120px] md:h-[160px] lg:h-[210px]" },
  ];

  return (
    <section className="relative bg-white pb-8 md:pb-14 lg:pb-6 pt-10 md:pt-10 lg:pt-2 px-6 sm:px-10 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start z-10">
            <div className="inline-flex items-center gap-2 px-1.5 md:px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#250a06]/10 text-[10px] md:text-xs font-mono text-[#250a06] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#580e03]" />
              <span>3-DAY HYBRID GATHERING • LAGOS</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[84px] font-black tracking-[-0.04em] text-[#250a06] leading-[0.94] uppercase mb-4 md:mb-6 font-poppins text-center lg:text-left">
              Connect.
              <br />
              <span className="text-[#e69842]">Create.</span> <br />
              <span className="text-[#580e03]">Celebrate.</span>
            </h1>

            <p
              style={{
                fontFamily:
                  "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
              }}
              className="text-[14px] md:text-[15px] lg:text-lg text-[#6B564E] leading-relaxed max-w-xl mb-4 md:mb-8 font-normal tracking-[-0.01em] text-center lg:text-left"
            >
              An exclusive gathering pairing closed-door founder masterclasses
              with live on-site broadcast production, giving you months of
              studio-grade media for your brand.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-4 w-full sm:w-auto font-poppins">
              <button
                type="button"
                onClick={() => onOpenWaitlist("vip")}
                className="px-6 lg:px-6 py-3.5 md:py-4 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#250a06]/15 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Join the Waitlist</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenWaitlist("volunteer")}
                className="px-6 md:px-6 py-3 md:py-3.5 lg:py-3.5 rounded-xl bg-[#f0ab60] border-2 border-[#250a06]/20 hover:border-[#250a06] text-[#250a06] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <Sparkles className="size-2.5 md:size-3.5 text-[#250a06]" />
                <span>Volunteer Creators</span>
              </button>
            </div>

            <div className="mt-8 flex items-center gap-3 text-[8px] md:text-xs font-mono text-[#96837A] text-center lg:text-left">
              <span>DECEMBER 2026</span>
              <span>•</span>
              <span className="text-[#580e03] font-semibold">
                UNDISCLOSED VENUE (PAID ATTENDEES ONLY)
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-end relative">
            <div className="relative w-full max-w-[320px] sm:max-w-105 md:max-w-115 lg:max-w-135 h-85 sm:h-110 md:h-105 lg:h-155 flex items-end justify-center">
              
              <div className="absolute inset-x-0 bottom-5 lg:bottom-14 flex items-end justify-center gap-1.5 sm:gap-2 md:gap-2 lg:gap-3 z-0 select-none pointer-events-none">
                {houseBars.map((bar, i) => (
                  <div
                    key={i}
                    className={`w-5 sm:w-7 md:w-8 lg:w-10 rounded-t-full bg-linear-to-t from-[#580e03] via-[#f0ab60] to-[#f0ab60] shadow-sm transition-all duration-300 ${bar.className}`}
                  />
                ))}
              </div>

              <div className="relative w-65 sm:w-85 md:w-95 lg:w-112.5 h-75 sm:h-97.5 md:h-107.5 lg:h-142.5 bottom-5 lg:bottom-14 z-10 flex items-end justify-center">
                <Image
                  src={imgSrc}
                  alt="Aro Victor"
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, (max-width: 768px) 340px, (max-width: 1024px) 380px, 450px"
                  className="object-contain object-bottom drop-shadow-2xl"
                  onError={() => {
                    setImgSrc(
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
                    );
                  }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
