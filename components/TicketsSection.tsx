'use client'

import { ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FormType } from '../types'

interface TicketsSectionProps {
  onOpenForm: (type: FormType) => void
}

export function TicketsSection({ onOpenForm }: TicketsSectionProps) {
  return (
    <section id="tickets" className="bg-[#FAF6F0] px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col justify-between gap-4 border-b border-[#3E2421]/10 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D97706]">Choose Your Room</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#2C1A1D] sm:text-4xl">Three days. Tailored access.</h2>
          </div>
          <button
            onClick={() => onOpenForm('volunteer')}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D97706] transition-colors hover:text-[#C25E00]"
          >
            Want to help shape it? <ArrowUpRight className="size-4" />
          </button>
        </div>

        <div className="grid gap-6 pt-10 lg:grid-cols-3">
          
          <Card className="relative overflow-hidden rounded-3xl border-none bg-[#2C1A1D] text-[#FAF6F0] shadow-xl p-2 flex flex-col justify-between">
            <CardHeader className="p-6">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#D97706]">
                <span>Days 1 &amp; 2 Exclusive</span>
                <span className="rounded-full bg-[#D97706]/20 px-2.5 py-0.5 text-[#D97706]">VIP Room</span>
              </div>
              <CardTitle className="mt-5 font-serif text-2xl font-bold">The Inner Room</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="min-h-12 text-xs leading-relaxed text-[#FAF6F0]/75">
                Paid, intimate access for leaders ready to connect deeply, execute live media assets, and build key relationships.
              </p>
              
              <ul className="my-5 space-y-2 text-xs text-[#FAF6F0]/70">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-[#D97706]" /> Live Media Studio Recording</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-[#D97706]" /> Days 1 &amp; 2 Intimate Masterminds</li>
              </ul>

              <div className="border-t border-white/10 pt-5">
                <p className="text-lg font-bold text-white">₦50,000 — ₦100,000</p>
                <Button
                  onClick={() => onOpenForm('vip')}
                  className="mt-3.5 w-full rounded-full bg-[#D97706] py-5 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-[#C25E00]"
                >
                  Get VIP Ticket <ChevronRight className="ml-1 size-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-[#3E2421]/15 bg-white text-[#2C1A1D] shadow-md p-2 flex flex-col justify-between">
            <CardHeader className="p-6">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#D97706]">
                <span>Day 3 Open Access</span>
                <span className="rounded-full bg-[#3E2421]/5 px-2.5 py-0.5 text-[#2C1A1D]">Community</span>
              </div>
              <CardTitle className="mt-5 font-serif text-2xl font-bold">The Open Room</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="min-h-12 text-xs leading-relaxed text-[#1A1817]/70">
                A free community day featuring discussions, broad networking, and visionary keynote speeches.
              </p>

              <ul className="my-5 space-y-2 text-xs text-[#1A1817]/65">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-[#D97706]" /> Open Community Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-[#D97706]" /> Keynote Panels &amp; Sessions</li>
              </ul>

              <div className="border-t border-[#3E2421]/10 pt-5">
                <p className="text-lg font-bold text-[#2C1A1D]">Free <span className="text-[11px] font-normal text-gray-500">(Limited)</span></p>
                <Button
                  onClick={() => onOpenForm('free')}
                  variant="outline"
                  className="mt-3.5 w-full rounded-full border-[#3E2421]/20 py-5 text-xs font-semibold uppercase tracking-wider text-[#2C1A1D] hover:bg-[#FAF6F0]"
                >
                  Join Waitlist <ChevronRight className="ml-1 size-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-[#3E2421]/15 bg-[#FAF6F0] text-[#2C1A1D] shadow-sm p-2 flex flex-col justify-between">
            <CardHeader className="p-6">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#D97706]">
                <span>Event Crew</span>
                <span className="rounded-full bg-[#D97706]/10 px-2.5 py-0.5 text-[#D97706]">Volunteer</span>
              </div>
              <CardTitle className="mt-5 font-serif text-2xl font-bold">Make It Happen</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="min-h-12 text-xs leading-relaxed text-[#1A1817]/70">
                Volunteer your skills in media, logistics, ushering, or content, and gain direct access behind the scenes.
              </p>

              <ul className="my-5 space-y-2 text-xs text-[#1A1817]/65">
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-[#D97706]" /> Behind-the-Scenes Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-[#D97706]" /> Practical Crew Experience</li>
              </ul>

              <div className="border-t border-[#3E2421]/10 pt-5">
                <p className="text-lg font-bold text-[#2C1A1D]">Exchange Energy</p>
                <Button
                  onClick={() => onOpenForm('volunteer')}
                  variant="outline"
                  className="mt-3.5 w-full rounded-full border-[#3E2421]/20 py-5 text-xs font-semibold uppercase tracking-wider text-[#2C1A1D] hover:bg-white"
                >
                  Apply to Volunteer <ChevronRight className="ml-1 size-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}