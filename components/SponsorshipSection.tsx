'use client'

import React from 'react'
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
  Globe
} from 'lucide-react'
import { LeadType } from '../types'

interface SponsorshipProps {
  onOpenWaitlist?: (tier?: LeadType) => void
}

export function SponsorshipSection({ onOpenWaitlist }: SponsorshipProps) {
  const deliverables = [
    {
      num: "01",
      icon: Layers,
      title: "Exhibition & Fun Activation Space",
      desc: "Set up your interactive product booth and hangout spot across all 3 days, connecting directly with attendees in a relaxed space."
    },
    {
      num: "02",
      icon: Crown,
      title: "3 All-Access Guest Passes",
      desc: "Full access across all 3 days for your leadership or creative partners to join the intimate retreat and community celebration."
    },
    {
      num: "03",
      icon: Video,
      title: "Candid On-Site Video Feature",
      desc: "A fun, high-definition spotlight video produced live by our studio crew featuring your team and brand story."
    },
    {
      num: "04",
      icon: Radio,
      title: "YouTube, Spotify & 'Led to Lead' Feature",
      desc: "Official brand credit and co-branding across all published podcast episodes and the Day 3 'Led to Lead' broadcast."
    },
    {
      num: "05",
      icon: Gift,
      title: "Welcome Bag Swag & Goodies",
      desc: "Direct placement of your physical merchandise, stickers, or product gifts inside every attendee's welcome package."
    },
    {
      num: "06",
      icon: Sparkles,
      title: "Stage & Backdrop Visibility",
      desc: "High-resolution logo placement across the live 4K studio soundstage and the Day 3 'Led to Lead' mainstage backdrops."
    }
  ]

  const mediaPartners = [
    { name: "YouTube Broadcast", icon: <Tv className="size-3.5 sm:size-4 text-[#f0ab60]" />, sub: "Day 3: Led to Lead" },
    { name: "Spotify Series", icon: <Podcast className="size-3.5 sm:size-4 text-[#f0ab60]" />, sub: "Official Podcast" },
    { name: "Lagos Creative Press", icon: <Globe className="size-3.5 sm:size-4 text-[#f0ab60]" />, sub: "Media Coverage" },
    { name: "Creator Network", icon: <Building className="size-3.5 sm:size-4 text-[#f0ab60]" />, sub: "Founders & Friends" },
  ]

  return (
    <section id="sponsorship" className="py-16 lg:py-20 px-4 sm:px-8 lg:px-10 bg-white border-t border-[#250a06]/10 font-poppins">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#FAF7F2] border border-[#250a06]/10 text-[11px] font-mono text-[#580e03] font-bold uppercase mb-3 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0ab60] animate-pulse" />
            <span>PARTNERSHIPS • GOOD PEOPLE &amp; REAL SUPPORT</span>
          </div>

          <h2 className="text-[20px] sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-[#250a06] leading-[1.05] uppercase mb-3">
            Partner with In-House <br />
            <span className="font-serif italic font-normal text-[#580e03] lowercase">with</span>{' '}
            <span className="text-[#e69842]">Aro Victor.</span>
          </h2>

          <p 
            style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
            className="text-[12px] md:text-sm text-[#6B564E] leading-relaxed font-normal"
          >
            We&apos;re not looking for boring banner sponsors. We want genuine brands and friends to partner with us across our cozy retreat and the grand Day 3 gathering: <strong className="text-[#250a06] font-semibold">&ldquo;Led to Lead&rdquo;</strong>.
          </p>
        </div>

        {/* 6 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {deliverables.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-[#FAF7F2] border border-[#250a06]/10 hover:border-[#580e03]/40 transition-all shadow-xs flex items-start gap-3.5 group"
              >
                <div className="h-9 w-9 rounded-lg bg-white border border-[#250a06]/10 flex items-center justify-center text-[#580e03] shrink-0 shadow-xs group-hover:scale-105 transition-transform mt-0.5">
                  <Icon className="size-4 text-[#f0ab60]" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-[#250a06] truncate">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[10px] font-bold text-[#580e03] ml-2">
                      //{item.num}
                    </span>
                  </div>

                  <p 
                    style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                    className="text-[11px] sm:text-xs text-[#6B564E] leading-relaxed line-clamp-2"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Media Channels Strip */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#FAF7F2]/60 border border-[#250a06]/10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#96837A] font-bold block mb-3 text-center sm:text-left">
            OFFICIAL MEDIA CHANNELS &amp; &ldquo;LED TO LEAD&rdquo; BROADCAST
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {mediaPartners.map((partner, i) => (
              <div 
                key={i} 
                className="bg-white border border-[#250a06]/10 rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-2.5 shadow-xs"
              >
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center shrink-0">
                  {partner.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[12px] lg:text-xs font-bold text-[#250a06] block leading-tight truncate">
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

        {/* Friendly, Approachable Hotline Box */}
        <div className="p-5 lg:p-7 rounded-2xl bg-[#FAF7F2] border border-[#250a06]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[#f0ab60] animate-ping" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#580e03] font-bold">
                LET&apos;S TALK PARTNERSHIPS
              </span>
            </div>

            <p className="text-[14px] lg:text-lg font-bold text-[#250a06] flex items-center gap-2 tracking-tight">
              <Phone className="size-3 lg:size-4 text-[#580e03]" />
              <span>Reach Victor Directly: +234 813 249 8253</span>
            </p>

            <p 
              style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
              className="text-[11px] sm:text-xs text-[#6B564E] mt-0.5 font-normal"
            >
              No stiff corporate red tape. Give us a quick call or message on WhatsApp to discuss ideas!
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="tel:+2348132498253"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white border border-[#250a06]/20 hover:border-[#250a06] text-[#250a06] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Phone className="size-3.5 text-[#580e03]" />
              <span>Call Phone</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenWaitlist?.('sponsor')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-linear-to-r from-[#f0ab60] to-[#e69842] text-[#250a06] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm hover:brightness-105 active:scale-95 cursor-pointer"
            >
              <span>Get Details</span>
              <ArrowUpRight className="size-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

// 'use client'

// import React from 'react'
// import { 
//   ArrowUpRight, 
//   Phone, 
//   Layers, 
//   Crown, 
//   Video, 
//   Radio, 
//   Gift, 
//   Sparkles,
//   Tv,
//   Podcast,
//   Building,
//   Globe
// } from 'lucide-react'
// import { LeadType } from '../types'

// interface SponsorshipProps {
//   onOpenWaitlist?: (tier?: LeadType) => void
// }

// export function SponsorshipSection({ onOpenWaitlist }: SponsorshipProps) {
//   const deliverables = [
//     {
//       num: "01",
//       icon: Layers,
//       title: "Exhibition & Brand Space",
//       desc: "Dedicated physical activation booth on-site for interactive product displays across all 3 days."
//     },
//     {
//       num: "02",
//       icon: Crown,
//       title: "3 Executive VIP Passes",
//       desc: "All-Access passes for your executive leadership, brand representatives, or top client delegates."
//     },
//     {
//       num: "03",
//       icon: Video,
//       title: "On-Site Video Spotlight",
//       desc: "Custom broadcast interview segment produced on-site featuring your company spokesperson."
//     },
//     {
//       num: "04",
//       icon: Radio,
//       title: "YouTube & Spotify Credit",
//       desc: "Official brand credit and co-branding features across recorded sessions and podcast episodes."
//     },
//     {
//       num: "05",
//       icon: Gift,
//       title: "Welcome Bag Insertion",
//       desc: "Direct placement of your physical brand brochures, catalogs, or merchandise in every attendee kit."
//     },
//     {
//       num: "06",
//       icon: Sparkles,
//       title: "Stage & Backdrop Placement",
//       desc: "High-resolution vector logo visibility on main stage backdrops, slide decks, and digital media."
//     }
//   ]

//   const mediaPartners = [
//     { name: "YouTube Broadcast", icon: <Tv className="size-3.5 sm:size-4 text-[#f0ab60]" />, sub: "Mainstage Stream" },
//     { name: "Spotify Series", icon: <Podcast className="size-3.5 sm:size-4 text-[#f0ab60]" />, sub: "Official Podcast" },
//     { name: "Lagos Tech & Media", icon: <Globe className="size-3.5 sm:size-4 text-[#f0ab60]" />, sub: "Press Coverage" },
//     { name: "Corporate Network", icon: <Building className="size-3.5 sm:size-4 text-[#f0ab60]" />, sub: "Executive Cohort" },
//   ]

//   return (
//     <section id="sponsorship" className="py-16 lg:py-20 px-4 sm:px-8 lg:px-10 bg-white border-t border-[#250a06]/10 font-poppins">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Block */}
//         <div className="max-w-2xl mb-10 text-center lg:text-left">
//           <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#FAF7F2] border border-[#250a06]/10 text-[11px] font-mono text-[#580e03] font-bold uppercase mb-3 shadow-xs">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#f0ab60] animate-pulse" />
//             <span>PARTNERSHIP &amp; BRAND INTEGRATION</span>
//           </div>

//           <h2 className="text-[20px] sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-[#250a06] leading-[1.05] uppercase mb-3">
//             Partner with In-House <br />
//             <span className="font-serif italic font-normal text-[#580e03] lowercase">with</span>{' '}
//             <span className="text-[#e69842]">Aro Victor.</span>
//           </h2>

//           <p 
//             style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
//             className="text-[12px] md:text-sm text-[#6B564E] leading-relaxed font-normal"
//           >
//             Position your company inside a high-yield room of founders, executives, and digital creators with on-site physical presence and long-tail digital broadcast reach.
//           </p>
//         </div>

//         {/* 6 Deliverables Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
//           {deliverables.map((item, idx) => {
//             const Icon = item.icon
//             return (
//               <div 
//                 key={idx} 
//                 className="p-4 rounded-xl bg-[#FAF7F2] border border-[#250a06]/10 hover:border-[#580e03]/40 transition-all shadow-xs flex items-start gap-3.5 group"
//               >
//                 <div className="h-9 w-9 rounded-lg bg-white border border-[#250a06]/10 flex items-center justify-center text-[#580e03] shrink-0 shadow-xs group-hover:scale-105 transition-transform mt-0.5">
//                   <Icon className="size-4 text-[#f0ab60]" />
//                 </div>

//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center justify-between mb-0.5">
//                     <h3 className="text-xs sm:text-sm font-bold text-[#250a06] truncate">
//                       {item.title}
//                     </h3>
//                     <span className="font-mono text-[10px] font-bold text-[#580e03] ml-2">
//                       //{item.num}
//                     </span>
//                   </div>

//                   <p 
//                     style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
//                     className="text-[11px] sm:text-xs text-[#6B564E] leading-relaxed line-clamp-2"
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Media Channels Strip */}
//         <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#FAF7F2]/60 border border-[#250a06]/10">
//           <span className="text-[10px] font-mono uppercase tracking-widest text-[#96837A] font-bold block mb-3 text-center sm:text-left">
//             OFFICIAL MEDIA &amp; BROADCAST CHANNELS
//           </span>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
//             {mediaPartners.map((partner, i) => (
//               <div 
//                 key={i} 
//                 className="bg-white border border-[#250a06]/10 rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-2.5 shadow-xs"
//               >
//                 <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center shrink-0">
//                   {partner.icon}
//                 </div>
//                 <div className="min-w-0">
//                   <span className="text-[10px] sm:text-[12px] lg:text-xs font-bold text-[#250a06] block leading-tight truncate">
//                     {partner.name}
//                   </span>
//                   <span className="text-[9px] sm:text-[10px] text-[#96837A] font-mono block truncate">
//                     {partner.sub}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Partnership Hotline Box */}
//         <div className="p-5 lg:p-7 rounded-2xl bg-[#FAF7F2] border border-[#250a06]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
//           <div>
//             <div className="flex items-center gap-2 mb-1">
//               <span className="h-2 w-2 rounded-full bg-[#f0ab60] animate-ping" />
//               <span className="text-[10px] font-mono uppercase tracking-widest text-[#580e03] font-bold">
//                 PARTNERSHIP DESK
//               </span>
//             </div>

//             <p className="text-[14px] lg:text-lg font-bold text-[#250a06] flex items-center gap-2 tracking-tight">
//               <Phone className="size-3 lg:size-4 text-[#580e03]" />
//               <span>Call Teniola: +234 905 754 3958</span>
//             </p>
//           </div>

//           <div className="flex items-center gap-2.5 w-full sm:w-auto">
//             <a
//               href="tel:+2349057543958"
//               className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white border border-[#250a06]/20 hover:border-[#250a06] text-[#250a06] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-xs"
//             >
//               <Phone className="size-3.5 text-[#580e03]" />
//               <span>Call</span>
//             </a>

//             <button
//               type="button"
//               onClick={() => onOpenWaitlist?.('sponsor')}
//               className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-linear-to-r from-[#f0ab60] to-[#e69842] text-[#250a06] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm hover:brightness-105 active:scale-95 cursor-pointer"
//             >
//               <span>Get Deck</span>
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }