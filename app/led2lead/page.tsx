'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check, Crown, Loader2, MessageCircle } from 'lucide-react'

export default function Led2LeadPage() {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [brandOrHandle, setBrandOrHandle] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const CONFIG = {
    openGroup: 'https://chat.whatsapp.com/Ew8jcCAJQlN97ycW1b0UHn',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''
    const payload = {
      tier: 'open',
      fullName,
      email,
      phone,
      brandOrHandle,
    }

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        })
      }
      setStatus('success')
    } catch {
      setStatus('success')
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#250a06] font-poppins py-10 px-4 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white border border-[#250a06]/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
        
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#250a06]/10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#6B564E] hover:text-[#250a06]">
            <ArrowLeft className="size-3.5" />
            <span>Back to main site</span>
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#580e03] font-bold">
            DAY 03 FREE RSVP
          </span>
        </div>

        {status === 'success' ? (
          <div className="py-6 text-center flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-[#250a06] text-[#f0ab60] flex items-center justify-center mb-3 shadow-md">
              <Check className="size-6 text-[#f0ab60]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#250a06] uppercase mb-1">
              You&apos;re On the Day 3 List!
            </h2>
            <p className="text-xs text-[#6B564E] max-w-sm mb-5 leading-relaxed font-sans">
              Details logged and sent to <strong>{email}</strong>. Join the official Day 3 broadcast group below:
            </p>
            <a
              href={CONFIG.openGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageCircle className="size-4" />
              <span>Join Day 3 WhatsApp Group</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        ) : (
          <div>
            <div className="mb-4 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#250a06]/15 text-[#580e03] text-[8px] md:text-[10px] font-mono font-bold uppercase mb-1.5">
                <Crown className="size-3 text-[#f0ab60]" />
                <span>OPEN LEADERSHIP CONFERENCE</span>
              </div>
              <h1 className="text-[18px] min-[425px]:text-2xl sm:text-3xl font-black tracking-tight text-[#250a06] uppercase">
                Led2Lead • Day 03
              </h1>
              <p className="text-xs text-[#6B564E] mt-1 font-sans">
                For aspiring founders, leaders, and operators stepping up to lead. Mainstage keynotes, live podcasts, and the grand celebration party.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Victor Aro"
                  className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234..."
                    className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@gmail.com"
                    className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">Brand / Company / Role (Optional)</label>
                <input
                  type="text"
                  value={brandOrHandle}
                  onChange={(e) => setBrandOrHandle(e.target.value)}
                  placeholder="e.g. Lead Developer, Founder, Creative"
                  className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-2 w-full py-2.5 min-[425px]:py-3 md:py-3.5 rounded-xl bg-[#580e03] hover:bg-[#721305] text-white font-bold text-[11px] min-[425px]:text-[12px] md:text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {status === 'loading' ? <Loader2 className="size-2.5 md:size-4 animate-spin" /> : <span>Claim Free Day 3 Pass</span>}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}