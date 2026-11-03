'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowUpRight, 
  Copy, 
  Check,
  CheckCheck, 
  Heart, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  ArrowLeft,
  Loader2,
  Clock
} from 'lucide-react'

export default function SupportPage() {
  const [pledgeLevel, setPledgeLevel] = useState<'80k-100k' | '100k-200k' | 'above-200k'>('80k-100k')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<'form' | 'loading' | 'success'>('form')

  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setMounted(true)
    const target = new Date('2026-11-20T23:59:59+01:00').getTime()

    const updateCountdown = () => {
      const now = Date.now()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const CONFIG = {
    bank: {
      bankName: 'United Bank For Africa (UBA)',
      accountNumber: '2081427583',
      accountName: 'Aro Victor',
    },
    hostWhatsApp: '2348132498253',
  }

  const getPledgeLabel = () => {
    switch (pledgeLevel) {
      case '80k-100k':
        return '₦80,000 - ₦100,000 (Executive)'
      case '100k-200k':
        return '₦100,000 - ₦200,000 (Patron)'
      case 'above-200k':
        return 'Above ₦200,000 (Key Patron)'
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(CONFIG.bank.accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''
    const payload = {
      tier: 'vip',
      attendance: 'Supporting From Afar (Direct Link)',
      fullName,
      email,
      phone,
      supporterLevel: getPledgeLabel(),
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

  const receiptUrl = `https://wa.me/${CONFIG.hostWhatsApp}?text=${encodeURIComponent(
    `Hello Victor, I just made a support pledge from afar (${fullName || 'Friend'} - ${getPledgeLabel()}). Here is my transfer confirmation:`
  )}`

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#250a06] font-poppins py-6 sm:py-10 px-3.5 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white border border-[#250a06]/15 rounded-3xl p-5 sm:p-8 shadow-xl">
        
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#250a06]/10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[10px] md:text-xs text-[#6B564E] hover:text-[#250a06] font-medium transition-colors">
            <ArrowLeft className="size-3.5" />
            <span>Back to main site</span>
          </Link>
          <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-[#580e03] font-bold">
            REMOTE PATRON PASS
          </span>
        </div>

        <div className="mb-5 p-2.5 sm:p-3 rounded-2xl bg-[#FAF7F2] border border-[#250a06]/10 flex flex-col min-[390px]:flex-row items-center md:items-start min-[390px]:items-center justify-between gap-2 shadow-xs">
          <div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-3 text-[#580e03]" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#580e03] font-bold">
                Pledges Close Nov 20
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-[#6B564E] font-sans block">
              Soundstage &amp; Vault Allocation
            </span>
          </div>

          <div className="flex items-center gap-1 font-mono font-bold text-[11px] sm:text-xs self-center min-[390px]:self-auto">
            <span className="px-1.5 py-0.5 bg-white border border-[#250a06]/10 rounded-md text-[#250a06]">
              {mounted ? timeLeft.days : '0'}d
            </span>
            <span className="text-[#250a06]/30">:</span>
            <span className="px-1.5 py-0.5 bg-white border border-[#250a06]/10 rounded-md text-[#250a06]">
              {mounted ? String(timeLeft.hours).padStart(2, '0') : '00'}h
            </span>
            <span className="text-[#250a06]/30">:</span>
            <span className="px-1.5 py-0.5 bg-white border border-[#250a06]/10 rounded-md text-[#250a06]">
              {mounted ? String(timeLeft.minutes).padStart(2, '0') : '00'}m
            </span>
            <span className="text-[#250a06]/30">:</span>
            <span className="px-1.5 py-0.5 bg-[#580e03] text-white rounded-md shadow-xs animate-pulse">
              {mounted ? String(timeLeft.seconds).padStart(2, '0') : '00'}s
            </span>
          </div>
        </div>

        {/* Title Lockup */}
        <div className="mb-5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#580e03] text-[#f0ab60] text-[10px] font-mono font-bold uppercase mb-2">
            <Heart className="size-3 fill-[#f0ab60]" />
            <span>SUPPORT FROM AFAR</span>
          </div>
          <h1 className="text-[20px] min-[425px]:text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#250a06]">
            Fuel the Gathering
          </h1>
          <p 
            style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
            className="text-xs text-[#6B564E] mt-1 leading-relaxed"
          >
            Can&apos;t be physically present in Lagos? You can still be part of the heartbeat. Support the soundstage, uncut media production, and our Day 3 open conference <strong className="text-[#250a06]">Led2Lead</strong>.
          </p>
        </div>

        {status === 'success' ? (
          <div>
            <div className="py-2 text-center flex flex-col items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#250a06] text-[#f0ab60] flex items-center justify-center mb-2 shadow-md">
                <Sparkles className="size-6 text-[#f0ab60]" />
              </div>
              <h3 className="text-xl font-black text-[#250a06] uppercase">Pledge Received!</h3>
              <p className="text-xs text-[#6B564E] mt-0.5">Transfer details for your pledge are below:</p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#250a06]/10 rounded-2xl p-4 mb-4 space-y-2.5">
              <div className="flex justify-between items-baseline border-b border-[#250a06]/10 pb-2">
                <span className="text-[10px] font-mono text-[#6B564E] uppercase">SELECTED PLEDGE</span>
                <span className="text-sm font-bold text-[#e69842]">{getPledgeLabel()}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-[#6B564E]">BANK</span>
                <span className="font-bold text-[#250a06]">{CONFIG.bank.bankName}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-[#6B564E]">ACCOUNT NAME</span>
                <span className="font-bold text-[#250a06] text-right">{CONFIG.bank.accountName}</span>
              </div>

              <div className="pt-2 border-t border-[#250a06]/10 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-mono text-[#6B564E] block">ACCOUNT NUMBER</span>
                  <span className="text-lg font-mono font-black tracking-wider text-[#250a06]">
                    {CONFIG.bank.accountNumber}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#250a06]/15 text-[#250a06] hover:bg-[#250a06] hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="size-3 text-green-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3 text-[#e69842]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={receiptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="size-4" />
                <span>Send Confirmation on WhatsApp</span>
                <ArrowUpRight className="size-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setStatus('form')}
                className="w-full py-2.5 text-xs text-[#6B564E] hover:text-[#250a06] font-medium cursor-pointer"
              >
                Edit Pledge Details
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#250a06] font-bold">
                SELECT YOUR SUPPORT PLEDGE:
              </span>

              <div
                onClick={() => setPledgeLevel('80k-100k')}
                className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  pledgeLevel === '80k-100k'
                    ? 'border-[#250a06] bg-[#FAF7F2]'
                    : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
                }`}
              >
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-bold text-[#250a06]">Executive</span>
                    <span className="text-[#250a06]/40 text-xs">•</span>
                    <span className="text-xs font-black text-[#580e03]">₦80,000 - ₦100,000</span>
                  </div>
                  <span className="text-[10px] text-[#6B564E] block leading-tight mt-0.5">
                    Masterclasses &amp; retreat access
                  </span>
                </div>
                {pledgeLevel === '80k-100k' && (
                  <Check className="size-3.5 text-[#250a06] stroke-[2.5] shrink-0" />
                )}
              </div>

              <div
                onClick={() => setPledgeLevel('100k-200k')}
                className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  pledgeLevel === '100k-200k'
                    ? 'border-[#250a06] bg-[#FAF7F2]'
                    : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
                }`}
              >
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-bold text-[#250a06]">Patron</span>
                    <span className="text-[#250a06]/40 text-xs">•</span>
                    <span className="text-xs font-black text-[#e69842]">₦100,000 - ₦200,000</span>
                  </div>
                  <span className="text-[10px] text-[#6B564E] block leading-tight mt-0.5">
                    + On-site 4K Studio Interview cut
                  </span>
                </div>
                {pledgeLevel === '100k-200k' && (
                  <Check className="size-3.5 text-[#250a06] stroke-[2.5] shrink-0" />
                )}
              </div>

              <div
                onClick={() => setPledgeLevel('above-200k')}
                className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  pledgeLevel === 'above-200k'
                    ? 'border-[#580e03] bg-[#FAF7F2]'
                    : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
                }`}
              >
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-bold text-[#580e03]">Key Patron</span>
                    <span className="text-[#250a06]/40 text-xs">•</span>
                    <span className="text-xs font-black text-[#250a06]">Above ₦200,000</span>
                  </div>
                  <span className="text-[10px] text-[#6B564E] block leading-tight mt-0.5">
                    Key Partner &amp; Production Backer
                  </span>
                </div>
                {pledgeLevel === 'above-200k' && (
                  <Check className="size-3.5 text-[#580e03] stroke-[2.5] shrink-0" />
                )}
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-1">YOUR NAME *</label>
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
              <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-1">WHATSAPP PHONE *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+234..."
                className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-1">EMAIL *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@gmail.com"
                className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-2 w-full py-2.5 min-[425px]:py-3 md:py-3.5 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white font-bold text-[11px] min-[425px]:text-[12px] md:text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="size-3.5 animate-spin text-[#f0ab60]" />
                  <span>Logging Support...</span>
                </>
              ) : (
                <>
                  <span>Proceed to Bank Transfer Details</span>
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-4 pt-3 border-t border-[#250a06]/10 flex items-center justify-between text-[10px] font-mono text-[#96837A]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="size-3 text-[#580e03]" />
            Direct to Aro Victor
          </span>
          <span>Lagos • Dec 2026</span>
        </div>

      </div>
    </main>
  )
}
