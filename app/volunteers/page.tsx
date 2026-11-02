'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCheck, Loader2, Sparkles, MessageCircle } from 'lucide-react'

export default function VolunteersPage() {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('1 - 3 Years')
  const [deliveryTurnaround, setDeliveryTurnaround] = useState('Within 24 - 48 Hours')
  const [portfolio, setPortfolio] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const CONFIG = {
    volunteerGroup: 'https://chat.whatsapp.com/FZCs511plsFEcdV1VfG9Nu',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''
    const payload = {
      tier: 'volunteer',
      fullName,
      email,
      phone,
      experience,
      portfolio,
      deliveryTurnaround,
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
          <Link href="/" className="inline-flex items-center gap-1.5 text-[10px] md:text-xs text-[#6B564E] hover:text-[#250a06]">
            <ArrowLeft className="size-2.5 md:size-3.5" />
            <span>Back to main site</span>
          </Link>
          <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-[#580e03] font-bold">
            CREATOR CREW APPLICATION
          </span>
        </div>

        {status === 'success' ? (
          <div className="py-6 text-center flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-[#580e03] text-[#f0ab60] flex items-center justify-center mb-3 shadow-md">
              <Sparkles className="size-6 text-[#f0ab60]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#250a06] uppercase mb-1">
              You&apos;re in the Queue!
            </h2>
            <p className="text-xs text-[#6B564E] max-w-sm mb-5 leading-relaxed font-sans">
              Confirmation sent to <strong>{email}</strong>. Join the official Volunteer Crew WhatsApp group below:
            </p>
            <a
              href={CONFIG.volunteerGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageCircle className="size-4" />
              <span>Join Volunteer Crew WhatsApp</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        ) : (
          <div>
            <div className="mb-4 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#580e03] font-bold block mb-0.5">
                IN-HOUSE WITH ARO VICTOR
              </span>
              <h1 className="text-[18px] min-[425px]:text-2xl sm:text-3xl font-black tracking-tight text-[#250a06] uppercase">
                Volunteer Creator Crew
              </h1>
              <p className="text-xs text-[#6B564E] mt-1 font-sans">
                Join our on-site media &amp; production squad. Backstage camera, video editing, sound, and direct access.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Victor Aro"
                    className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
                  />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Experience *</label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-2 py-2 text-xs text-[#250a06]"
                  >
                    <option>Under 1 Year</option>
                    <option>1 - 3 Years</option>
                    <option>3 - 5 Years (Pro)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Turnaround *</label>
                  <select
                    value={deliveryTurnaround}
                    onChange={(e) => setDeliveryTurnaround(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-2 py-2 text-xs text-[#250a06]"
                  >
                    <option>Same Day</option>
                    <option>Within 24-48 Hours</option>
                    <option>Within 3-5 Days</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Portfolio Link (Instagram, Drive, YouTube) *</label>
                <input
                  type="url"
                  required
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06]"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-2 w-full py-3 md:py-3.5 rounded-xl bg-[#580e03] hover:bg-[#721305] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="size-3.5 md:size-4 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Creator Application</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}