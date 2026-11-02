'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check, CheckCheck, Copy, Loader2, MapPin, Globe, MessageCircle } from 'lucide-react'

export default function Days1And2Page() {
  const [attendanceMode, setAttendanceMode] = useState<'in-person' | 'remote'>('in-person')
  const [supporterLevel, setSupporterLevel] = useState<'80k-100k' | '100k-200k' | 'above-200k'>('80k-100k')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [brandOrHandle, setBrandOrHandle] = useState('')
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const CONFIG = {
    bank: {
      bankName: 'United Bank For Africa (UBA)',
      accountNumber: '2081427583',
      accountName: 'Aro Victor',
    },
    hostWhatsApp: '2348132498253',
    vipGroup: 'https://chat.whatsapp.com/LoluW303cx3LwNXneTCeat',
  }

  const getSupporterLabel = () => {
    switch (supporterLevel) {
      case '80k-100k':
        return '₦80,000 – ₦100,000 (Executive)'
      case '100k-200k':
        return '₦100,000 – ₦200,000'
      case 'above-200k':
        return 'Above ₦200,000 (Patron)'
    }
  }

  const handleCopyAccount = () => {
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
      attendance: attendanceMode === 'in-person' ? 'Attending in Lagos' : 'Supporting From Afar (Non-Attending)',
      fullName,
      email,
      phone,
      brandOrHandle,
      supporterLevel: getSupporterLabel(),
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
    `Hello Victor, I just registered for Days 1 & 2 (${fullName} - ${getSupporterLabel()}). Here is my transfer confirmation:`
  )}`

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#250a06] font-poppins py-10 px-4 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white border border-[#250a06]/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
        
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#250a06]/10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[12px] md:text-xs text-[#6B564E] hover:text-[#250a06]">
            <ArrowLeft className="size-2.5 md:size-3.5" />
            <span>Back to main site</span>
          </Link>
          <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-[#580e03] font-bold">
            DAYS 01 &amp; 02 ACCESS
          </span>
        </div>

        {status === 'success' ? (
          <div>
            <span className="px-2 py-0.5 rounded-md bg-[#580e03] text-white text-[10px] font-mono font-bold uppercase tracking-wider block w-fit mb-2">
              Registration Logged
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#250a06] mb-1 uppercase">
              Thank You for Supporting!
            </h2>
            <p className="text-xs text-[#6B564E] mb-4 font-sans">
              Details were dispatched to <strong>{email}</strong>. Complete your transfer to secure your soundstage and retreat access:
            </p>

            <div className="bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl p-3.5 mb-4 space-y-2">
              <div className="flex justify-between items-baseline border-b border-[#250a06]/10 pb-2">
                <span className="text-[11px] font-mono text-[#6B564E] uppercase">LEVEL</span>
                <span className="text-sm font-bold text-[#e69842]">{getSupporterLabel()}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-[#6B564E]">BANK</span>
                <span className="font-bold text-[#250a06]">{CONFIG.bank.bankName}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-[#6B564E]">ACCOUNT NAME</span>
                <span className="font-bold text-[#250a06]">{CONFIG.bank.accountName}</span>
              </div>
              <div className="pt-2 border-t border-[#250a06]/10 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-mono text-[#6B564E] block">ACCOUNT NUMBER</span>
                  <span className="text-base font-mono font-black text-[#250a06]">{CONFIG.bank.accountNumber}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAccount}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#250a06]/15 text-xs font-mono flex items-center gap-1.5"
                >
                  {copied ? <CheckCheck className="size-3 text-green-600" /> : <Copy className="size-3 text-[#e69842]" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={receiptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="size-4" />
                <span>Send Receipt Directly to Victor</span>
                <ArrowUpRight className="size-3.5" />
              </a>
              {attendanceMode === 'in-person' && (
                <a
                  href={CONFIG.vipGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#250a06] text-[#f0ab60] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Request Days 1 &amp; 2 VIP Group Entry</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#580e03] font-bold block mb-1.5 md:mb-0.5">
                INTIMATE RETREAT &amp; 4K SOUNDSTAGE
              </span>
              <h1 className="text-[22px] min-[425px]:text-2xl sm:text-3xl font-black tracking-tight text-[#250a06] uppercase">
                Days 01 &amp; 02 Support
              </h1>
              <p className="text-xs text-[#6B564E] mt-1 font-sans">
                An intimate room where friends &amp; leaders let their guards down, record 4K studio sessions, and unwind.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="p-1 bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl grid md:grid-cols-2 gap-1 text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setAttendanceMode('in-person')}
                  className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 ${
                    attendanceMode === 'in-person' ? 'bg-[#250a06] text-[#f0ab60]' : 'text-[#6B564E]'
                  }`}
                >
                  <MapPin className="size-2 md:size-3" />
                  <span>Attending in Lagos</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAttendanceMode('remote')}
                  className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 ${
                    attendanceMode === 'remote' ? 'bg-[#580e03] text-white' : 'text-[#6B564E]'
                  }`}
                >
                  <Globe className="size-2 md:size-3" />
                  <span>Supporting From Afar</span>
                </button>
              </div>

              <div className="flex flex-col gap-1.5">
                <div
                  onClick={() => setSupporterLevel('80k-100k')}
                  className={`py-2 px-3 rounded-xl border cursor-pointer flex items-center justify-between ${
                    supporterLevel === '80k-100k' ? 'border-[#250a06] bg-[#FAF7F2]' : 'border-[#250a06]/15'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-[#250a06] block">Executive • ₦80,000 – ₦100,000</span>
                    <span className="text-[10px] text-[#6B564E] block">Masterclasses &amp; retreat access</span>
                  </div>
                  {supporterLevel === '80k-100k' && <Check className="size-3 text-[#250a06] stroke-3" />}
                </div>

                <div
                  onClick={() => setSupporterLevel('100k-200k')}
                  className={`py-2 px-3 rounded-xl border cursor-pointer flex items-center justify-between ${
                    supporterLevel === '100k-200k' ? 'border-[#250a06] bg-[#FAF7F2]' : 'border-[#250a06]/15'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-[#250a06] block">Patron • ₦100,000 – ₦200,000</span>
                    <span className="text-[10px] text-[#6B564E] block">+ On-site 4K Studio Interview cut</span>
                  </div>
                  {supporterLevel === '100k-200k' && <Check className="size-3 text-[#250a06] stroke-3" />}
                </div>

                <div
                  onClick={() => setSupporterLevel('above-200k')}
                  className={`py-2 px-3 rounded-xl border cursor-pointer flex items-center justify-between ${
                    supporterLevel === 'above-200k' ? 'border-[#580e03] bg-[#FAF7F2]' : 'border-[#250a06]/15'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-[#580e03] block">Key Patron • Above ₦200,000</span>
                    <span className="text-[10px] text-[#6B564E] block">Key Partner &amp; Production Backer</span>
                  </div>
                  {supporterLevel === 'above-200k' && <Check className="size-3 text-[#580e03] stroke-3" />}
                </div>
              </div>

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
                <label className="text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">Brand / Handle (Optional)</label>
                <input
                  type="text"
                  value={brandOrHandle}
                  onChange={(e) => setBrandOrHandle(e.target.value)}
                  placeholder="@handle or company"
                  className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-sm text-[#250a06] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-2 w-full py-2.5 md:py-3.5 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white font-bold text-[12px] md:text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                {status === 'loading' ? <Loader2 className="size-3 md:size-4 animate-spin" /> : <span>Confirm Support &amp; View Bank</span>}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}