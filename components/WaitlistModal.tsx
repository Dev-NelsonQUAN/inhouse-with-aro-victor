'use client'

import React, { useState, useEffect } from 'react'
import { 
  X, 
  ArrowUpRight, 
  Check, 
  Loader2, 
  Users, 
  Video, 
  MessageCircle, 
  Copy, 
  CheckCheck, 
  HeartHandshake,
  ShieldAlert,
  Sparkles,
  Globe,
  MapPin
} from 'lucide-react'
import { LeadType } from '../types'

interface WaitlistModalProps {
  isOpen: boolean
  initialTier?: LeadType
  onClose: () => void
}

export function WaitlistModal({ isOpen, initialTier = 'vip', onClose }: WaitlistModalProps) {
  const [tier, setTier] = useState<LeadType>(initialTier)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (initialTier) {
      setTier(initialTier)
    }
  }, [initialTier])

  // Form Fields
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [brandOrHandle, setBrandOrHandle] = useState('')

  // Supporter Attendance Mode: In-Person vs Supporting From Afar
  const [attendanceMode, setAttendanceMode] = useState<'in-person' | 'remote'>('in-person')

  // Supporter Tiers: 80k-100k | 100k-200k | Above 200k (No 50k)
  const [supporterLevel, setSupporterLevel] = useState<'80k-100k' | '100k-200k' | 'above-200k'>('80k-100k')

  // Volunteer Fields
  const [experience, setExperience] = useState('1 - 3 Years')
  const [portfolio, setPortfolio] = useState('')
  const [deliveryTurnaround, setDeliveryTurnaround] = useState('Within 24 - 48 Hours')

  const CONFIG = {
    groups: {
      vip: 'https://chat.whatsapp.com/LoluW303cx3LwNXneTCeat',
      open: 'https://chat.whatsapp.com/Ew8jcCAJQlN97ycW1b0UHn',
      volunteer: 'https://chat.whatsapp.com/FZCs511plsFEcdV1VfG9Nu',
    },
    bank: {
      bankName: 'United Bank For Africa (UBA)',
      accountNumber: '2081427583',
      accountName: 'Aro Victor',
    },
    hostWhatsApp: '2348132498253', // Victor's number
  }

  if (!isOpen) return null

  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''

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

    const isSupporter = tier === 'vip' || tier === 'sponsor'

    const payload = {
      tier,
      fullName,
      email,
      phone,
      brandOrHandle,
      attendance: isSupporter 
        ? (attendanceMode === 'in-person' ? 'Attending in Lagos' : 'Supporting From Afar (Non-Attending)') 
        : 'Attending Day 3 / Volunteer',
      supporterLevel: isSupporter ? getSupporterLabel() : 'N/A',
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

  const handleReset = () => {
    setStatus('idle')
    setFullName('')
    setEmail('')
    setPhone('')
    setPortfolio('')
    setBrandOrHandle('')
    onClose()
  }

  const receiptUrl = `https://wa.me/${CONFIG.hostWhatsApp}?text=${encodeURIComponent(
    `Hello Victor, I just registered ${attendanceMode === 'remote' ? 'to support from afar (Non-Attending)' : 'for Days 1 & 2'} (${fullName} - Pledge: ${getSupporterLabel()}). Here is my transfer confirmation:`
  )}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto font-poppins">
      <div className="relative w-full max-w-lg bg-white border border-[#250a06]/15 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl my-auto max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 rounded-full text-[#6B564E] hover:text-[#250a06] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
        >
          <X className="size-4 sm:size-5" />
        </button>

        {status === 'success' ? (
          <div>
            {/* SUCCESS VIEW: DAYS 1 & 2 */}
            {tier === 'vip' || tier === 'sponsor' ? (
              <div>
                <span className="px-2 py-0.5 rounded-md bg-[#580e03] text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider block w-fit mb-2">
                  {attendanceMode === 'remote' ? 'Remote Backing Confirmed' : 'Registration Confirmed'}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-[#250a06] mb-1 uppercase tracking-tight">
                  {attendanceMode === 'remote' ? 'Thank You for Backing Us!' : 'Thank You for Supporting!'}
                </h3>
                
                <p 
                  style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                  className="text-xs text-[#6B564E] mb-4 font-normal leading-relaxed"
                >
                  {attendanceMode === 'remote' ? (
                    <>
                      Your remote support is logged and details were emailed to <strong>{email}</strong>. You will receive private uncut vault recordings. Transfer details are below:
                    </>
                  ) : (
                    <>
                      Your seat for Days 1 &amp; 2 is reserved. Details were sent to <strong>{email}</strong>. To complete your transfer, bank details are below:
                    </>
                  )}
                </p>

                {/* Bank Card */}
                <div className="bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl p-3.5 sm:p-4 mb-4 space-y-2">
                  <div className="flex justify-between items-baseline border-b border-[#250a06]/10 pb-2">
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase">
                      {attendanceMode === 'remote' ? 'REMOTE PLEDGE' : 'SELECTED PLEDGE'}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#e69842]">{getSupporterLabel()}</span>
                  </div>

                  <div className="flex justify-between items-center text-[11px] sm:text-xs">
                    <span className="font-mono text-[#6B564E]">BANK</span>
                    <span className="font-bold text-[#250a06]">{CONFIG.bank.bankName}</span>
                  </div>

                  <div className="flex justify-between items-center text-[11px] sm:text-xs">
                    <span className="font-mono text-[#6B564E]">ACCOUNT NAME</span>
                    <span className="font-bold text-[#250a06] text-right">{CONFIG.bank.accountName}</span>
                  </div>

                  <div className="pt-2 border-t border-[#250a06]/10 flex justify-between items-center">
                    <div>
                      <span className="text-[9px] font-mono text-[#6B564E] block">ACCOUNT NUMBER</span>
                      <span className="text-base sm:text-lg font-mono font-black tracking-wider text-[#250a06]">
                        {CONFIG.bank.accountNumber}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyAccount}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#250a06]/15 text-[#250a06] hover:bg-[#250a06] hover:text-white transition-all text-[11px] font-mono flex items-center gap-1.5 cursor-pointer shadow-xs"
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

                {/* Actions */}
                <div className="space-y-2">
                  <a
                    href={receiptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="size-4" />
                    <span>Send Receipt Directly to Victor</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>

                  {attendanceMode === 'in-person' && (
                    <a
                      href={CONFIG.groups.vip}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Request Days 1 &amp; 2 VIP Group Entry</span>
                      <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                    </a>
                  )}
                </div>

                <div className="mt-3 flex items-start gap-1.5 p-2.5 bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl text-[10px] sm:text-[11px] text-[#6B564E]">
                  <ShieldAlert className="size-3.5 text-[#e69842] shrink-0 mt-0.5" />
                  <span>
                    {attendanceMode === 'remote' 
                      ? "As a remote backer, private video links and recordings will be delivered directly to your email."
                      : "Venue in Lagos is confidential. Exact coordinates are shared in the group and sent to your email after receipt confirmation."}
                  </span>
                </div>
              </div>
            ) : tier === 'volunteer' ? (
              /* SUCCESS: VOLUNTEER */
              <div className="py-4 text-center flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-[#580e03] text-[#f0ab60] flex items-center justify-center mb-2 shadow-md">
                  <Sparkles className="size-6 text-[#f0ab60]" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#580e03] font-bold block mb-1">
                  CREW APPLICATION LOGGED
                </span>
                <h3 className="text-xl font-black text-[#250a06] uppercase mb-1">You&apos;re in the Queue!</h3>
                <p 
                  style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                  className="text-xs text-[#6B564E] max-w-sm mb-5 leading-relaxed"
                >
                  Confirmation sent to <strong>{email}</strong>. Join the official Volunteer Crew WhatsApp group below:
                </p>
                <a
                  href={CONFIG.groups.volunteer}
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
              /* SUCCESS: DAY 3 COMMUNITY */
              <div className="py-4 text-center flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-[#250a06] text-[#f0ab60] flex items-center justify-center mb-2 shadow-md">
                  <Check className="size-6 text-[#f0ab60]" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#e69842] font-bold block mb-1">
                  REGISTRATION CONFIRMED
                </span>
                <h3 className="text-xl font-black text-[#250a06] uppercase mb-1">You&apos;re on the Day 3 List!</h3>
                <p 
                  style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
                  className="text-xs text-[#6B564E] max-w-sm mb-5 leading-relaxed"
                >
                  Details logged and sent to <strong>{email}</strong>. Join the Day 3 community group below:
                </p>
                <a
                  href={CONFIG.groups.open}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="size-4" />
                  <span>Join Day 3 WhatsApp Group</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#580e03] font-bold block mb-0.5">
                IN-HOUSE WITH ARO VICTOR
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#250a06] uppercase">
                Join the Gathering
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-1 p-1 bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl mb-3 text-[8px] sm:text-xs font-semibold">
              <button
                type="button"
                onClick={() => setTier('vip')}
                className={`py-2 px-1 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                  tier === 'vip' || tier === 'sponsor' 
                    ? 'bg-[#250a06] text-[#f0ab60] shadow-xs' 
                    : 'text-[#6B564E] hover:text-[#250a06]'
                }`}
              >
                <HeartHandshake className="size-2 md:size-3.5 shrink-0" />
                <span className="truncate">Days 1 &amp; 2</span>
              </button>

              <button
                type="button"
                onClick={() => setTier('open')}
                className={`py-2 px-1 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                  tier === 'open' || tier === 'attendee' || tier === 'free'
                    ? 'bg-[#250a06] text-[#f0ab60] shadow-xs' 
                    : 'text-[#6B564E] hover:text-[#250a06]'
                }`}
              >
                <Users className="size-3.5 shrink-0" />
                <span className="truncate">Day 3 Open</span>
              </button>

              <button
                type="button"
                onClick={() => setTier('volunteer')}
                className={`py-2 px-1 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                  tier === 'volunteer' 
                    ? 'bg-[#580e03] text-white shadow-xs' 
                    : 'text-[#6B564E] hover:text-[#250a06]'
                }`}
              >
                <Video className="size-3.5 shrink-0" />
                <span className="truncate">Volunteer</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-3">
              
              {(tier === 'vip' || tier === 'sponsor') && (
                <div className="mb-1">
                  
                  <div className="mb-2.5 p-1 bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl grid grid-cols-2 gap-1 text-[8px] sm:text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() => setAttendanceMode('in-person')}
                      className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        attendanceMode === 'in-person'
                          ? 'bg-[#250a06] text-[#f0ab60] shadow-xs'
                          : 'text-[#6B564E] hover:text-[#250a06]'
                      }`}
                    >
                      <MapPin className="size-3" />
                      <span>Attending in Lagos</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttendanceMode('remote')}
                      className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        attendanceMode === 'remote'
                          ? 'bg-[#580e03] text-white shadow-xs'
                          : 'text-[#6B564E] hover:text-[#250a06]'
                      }`}
                    >
                      <Globe className="size-3" />
                      <span>Supporting From Afar</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[7px] sm:text-[11px] font-mono text-[#250a06] uppercase font-bold">
                      {attendanceMode === 'remote' ? 'Select Support Pledge (From Afar)' : 'Support Level (Voluntary Pledge)'}
                    </label>
                    <span className="text-[9px] text-[#6B564E]">
                      {attendanceMode === 'remote' ? 'Uncut Vault Access' : 'Powers the soundstage'}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    
                    <div
                      onClick={() => setSupporterLevel('80k-100k')}
                      className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        supporterLevel === '80k-100k'
                          ? 'border-[#250a06] bg-[#FAF7F2]'
                          : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                          supporterLevel === '80k-100k' ? 'bg-[#250a06] border-[#250a06]' : 'border-[#250a06]/30'
                        }`}>
                          {supporterLevel === '80k-100k' && <Check className="size-2.5 text-white stroke-3" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#250a06]">Executive</span>
                            <span className="text-xs font-black text-[#580e03]">₦80k – ₦100k</span>
                          </div>
                          <span className="text-[10px] text-[#6B564E] block leading-tight">
                            {attendanceMode === 'remote' ? 'Digital supporter & uncut recordings' : 'Masterclasses & retreat access'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tier 2: 100k – 200k */}
                    <div
                      onClick={() => setSupporterLevel('100k-200k')}
                      className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        supporterLevel === '100k-200k'
                          ? 'border-[#250a06] bg-[#FAF7F2]'
                          : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                          supporterLevel === '100k-200k' ? 'bg-[#250a06] border-[#250a06]' : 'border-[#250a06]/30'
                        }`}>
                          {supporterLevel === '100k-200k' && <Check className="size-2.5 text-white stroke-3" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#250a06]">Patron</span>
                            <span className="text-xs font-black text-[#e69842]">₦100k – ₦200k</span>
                          </div>
                          <span className="text-[10px] text-[#6B564E] block leading-tight">
                            {attendanceMode === 'remote' ? 'Special patron shoutout + uncut 4K studio feed' : '+ On-site 4K Studio Interview cut'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tier 3: Above 200k */}
                    <div
                      onClick={() => setSupporterLevel('above-200k')}
                      className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        supporterLevel === 'above-200k'
                          ? 'border-[#580e03] bg-[#FAF7F2]'
                          : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
                          supporterLevel === 'above-200k' ? 'bg-[#580e03] border-[#580e03]' : 'border-[#250a06]/30'
                        }`}>
                          {supporterLevel === 'above-200k' && <Check className="size-2.5 text-white stroke-3" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#580e03]">Key Patron</span>
                            <span className="text-xs font-black text-[#250a06]">Above ₦200k</span>
                          </div>
                          <span className="text-[10px] text-[#6B564E] block leading-tight">Key Partner &amp; Production Backer</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Victor Aro"
                    className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-2.5 md:px-3 py-2 text-[12px] sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
                  />
                </div>
                <div>
                  <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-2.5 md:px-3 py-2 text-[12px] md:text-[13px] text-[#250a06] focus:outline-none focus:border-[#250a06]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
                  Primary Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
                />
              </div>

              {(tier === 'vip' || tier === 'sponsor') && (
                <div>
                  <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
                    Brand / Company / Handle (Optional)
                  </label>
                  <input
                    type="text"
                    value={brandOrHandle}
                    onChange={(e) => setBrandOrHandle(e.target.value)}
                    placeholder="@handle or Company"
                    className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
                  />
                </div>
              )}

              {/* Volunteer Creator Inputs */}
              {tier === 'volunteer' && (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Experience *</label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-2 py-2 text-[12px] md:text-xs text-[#250a06]"
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
                      className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06]"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-2 w-full py-3 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white font-bold text-[10px] md:text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="size-4 animate-spin text-[#f0ab60]" />
                    <span>Saving Entry...</span>
                  </>
                ) : (
                  <>
                    <span>
                      {tier === 'vip' || tier === 'sponsor' 
                        ? (attendanceMode === 'remote' ? 'Confirm Remote Backing' : 'Confirm Days 1 & 2 Support') 
                        : tier === 'volunteer' 
                        ? 'Submit Creator Application' 
                        : 'Register for Day 3 Mainstage'}
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}


// 'use client'

// import React, { useState, useEffect } from 'react'
// import { 
//   X, 
//   ArrowUpRight, 
//   Check, 
//   Loader2, 
//   Users, 
//   Video, 
//   MessageCircle, 
//   Copy, 
//   CheckCheck, 
//   HeartHandshake,
//   ShieldAlert,
//   Sparkles,
//   Globe,
//   MapPin
// } from 'lucide-react'
// import { LeadType } from '../types'

// interface WaitlistModalProps {
//   isOpen: boolean
//   initialTier?: LeadType
//   onClose: () => void
// }

// export function WaitlistModal({ isOpen, initialTier = 'vip', onClose }: WaitlistModalProps) {
//   const [tier, setTier] = useState<LeadType>(initialTier)
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
//   const [copied, setCopied] = useState(false)

//   useEffect(() => {
//     if (initialTier) {
//       setTier(initialTier)
//     }
//   }, [initialTier])

//   // Form Fields
//   const [fullName, setFullName] = useState('')
//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')
//   const [brandOrHandle, setBrandOrHandle] = useState('')

//   // Supporter Attendance Mode: In-Person vs Supporting From Afar
//   const [attendanceMode, setAttendanceMode] = useState<'in-person' | 'remote'>('in-person')

//   // Supporter Tiers (Executive updated to ₦80k)
//   const [supporterLevel, setSupporterLevel] = useState<'50k-supporter' | '80k-executive' | 'patron-plus'>('80k-executive')

//   // Volunteer Fields
//   const [experience, setExperience] = useState('1 - 3 Years')
//   const [portfolio, setPortfolio] = useState('')
//   const [deliveryTurnaround, setDeliveryTurnaround] = useState('Within 24 - 48 Hours')

//   const CONFIG = {
//     groups: {
//       vip: 'https://chat.whatsapp.com/LoluW303cx3LwNXneTCeat',
//       open: 'https://chat.whatsapp.com/Ew8jcCAJQlN97ycW1b0UHn',
//       volunteer: 'https://chat.whatsapp.com/FZCs511plsFEcdV1VfG9Nu',
//     },
//     bank: {
//       bankName: 'United Bank For Africa (UBA)',
//       accountNumber: '2081427583',
//       accountName: 'Aro Victor',
//     },
//     hostWhatsApp: '2348132498253', // Victor's number
//   }

//   if (!isOpen) return null

//   const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''

//   const getSupporterLabel = () => {
//     switch (supporterLevel) {
//       case '50k-supporter':
//         return '₦50,000 (Community Supporter)'
//       case '80k-executive':
//         return '₦80,000 (Executive Supporter)'
//       case 'patron-plus':
//         return '₦150,000+ (Key Patron & Partner)'
//     }
//   }

//   const handleCopyAccount = () => {
//     navigator.clipboard.writeText(CONFIG.bank.accountNumber)
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2500)
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setStatus('loading')

//     const isSupporter = tier === 'vip' || tier === 'sponsor'

//     const payload = {
//       tier,
//       fullName,
//       email,
//       phone,
//       brandOrHandle,
//       attendance: isSupporter 
//         ? (attendanceMode === 'in-person' ? 'Attending in Lagos' : 'Supporting From Afar (Non-Attending)') 
//         : 'Attending Day 3 / Volunteer',
//       supporterLevel: isSupporter ? getSupporterLabel() : 'N/A',
//       experience,
//       portfolio,
//       deliveryTurnaround,
//     }

//     try {
//       if (GOOGLE_SCRIPT_URL) {
//         await fetch(GOOGLE_SCRIPT_URL, {
//           method: 'POST',
//           headers: { 'Content-Type': 'text/plain;charset=utf-8' },
//           body: JSON.stringify(payload),
//         })
//       }
//       setStatus('success')
//     } catch {
//       setStatus('success')
//     }
//   }

//   const handleReset = () => {
//     setStatus('idle')
//     setFullName('')
//     setEmail('')
//     setPhone('')
//     setPortfolio('')
//     setBrandOrHandle('')
//     onClose()
//   }

//   const receiptUrl = `https://wa.me/${CONFIG.hostWhatsApp}?text=${encodeURIComponent(
//     `Hello Victor, I just registered ${attendanceMode === 'remote' ? 'to support from afar (Non-Attending)' : 'for Days 1 & 2'} (${fullName} - Pledge: ${getSupporterLabel()}). Here is my transfer confirmation:`
//   )}`

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto font-poppins">
//       <div className="relative w-full max-w-lg bg-white border border-[#250a06]/15 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl my-auto max-h-[92vh] overflow-y-auto">
        
//         {/* Close Button */}
//         <button
//           type="button"
//           onClick={handleReset}
//           className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 rounded-full text-[#6B564E] hover:text-[#250a06] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
//         >
//           <X className="size-4 sm:size-5" />
//         </button>

//         {status === 'success' ? (
//           <div>
//             {/* SUCCESS VIEW: DAYS 1 & 2 (ATTENDING OR REMOTE SUPPORTERS) */}
//             {tier === 'vip' || tier === 'sponsor' ? (
//               <div>
//                 <span className="px-2 py-0.5 rounded-md bg-[#580e03] text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider block w-fit mb-2">
//                   {attendanceMode === 'remote' ? 'Remote Backing Confirmed' : 'Registration Confirmed'}
//                 </span>

//                 <h3 className="text-xl sm:text-2xl font-black text-[#250a06] mb-1 uppercase tracking-tight">
//                   {attendanceMode === 'remote' ? 'Thank You for Backing Us!' : 'Thank You for Supporting!'}
//                 </h3>
                
//                 <p 
//                   style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
//                   className="text-xs text-[#6B564E] mb-4 font-normal leading-relaxed"
//                 >
//                   {attendanceMode === 'remote' ? (
//                     <>
//                       Your remote support is logged and details were emailed to <strong>{email}</strong>. You will receive private uncut vault recordings. Transfer details are below:
//                     </>
//                   ) : (
//                     <>
//                       Your seat for Days 1 &amp; 2 is reserved. Details were sent to <strong>{email}</strong>. To complete your transfer, bank details are below:
//                     </>
//                   )}
//                 </p>

//                 {/* Bank Card */}
//                 <div className="bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl p-3.5 sm:p-4 mb-4 space-y-2">
//                   <div className="flex justify-between items-baseline border-b border-[#250a06]/10 pb-2">
//                     <span className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase">
//                       {attendanceMode === 'remote' ? 'REMOTE PLEDGE' : 'SELECTED PLEDGE'}
//                     </span>
//                     <span className="text-sm sm:text-base font-bold text-[#e69842]">{getSupporterLabel()}</span>
//                   </div>

//                   <div className="flex justify-between items-center text-[11px] sm:text-xs">
//                     <span className="font-mono text-[#6B564E]">BANK</span>
//                     <span className="font-bold text-[#250a06]">{CONFIG.bank.bankName}</span>
//                   </div>

//                   <div className="flex justify-between items-center text-[11px] sm:text-xs">
//                     <span className="font-mono text-[#6B564E]">ACCOUNT NAME</span>
//                     <span className="font-bold text-[#250a06] text-right">{CONFIG.bank.accountName}</span>
//                   </div>

//                   <div className="pt-2 border-t border-[#250a06]/10 flex justify-between items-center">
//                     <div>
//                       <span className="text-[9px] font-mono text-[#6B564E] block">ACCOUNT NUMBER</span>
//                       <span className="text-base sm:text-lg font-mono font-black tracking-wider text-[#250a06]">
//                         {CONFIG.bank.accountNumber}
//                       </span>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={handleCopyAccount}
//                       className="px-2.5 py-1 rounded-lg bg-white border border-[#250a06]/15 text-[#250a06] hover:bg-[#250a06] hover:text-white transition-all text-[11px] font-mono flex items-center gap-1.5 cursor-pointer shadow-xs"
//                     >
//                       {copied ? (
//                         <>
//                           <CheckCheck className="size-3 text-green-600" />
//                           <span>Copied</span>
//                         </>
//                       ) : (
//                         <>
//                           <Copy className="size-3 text-[#e69842]" />
//                           <span>Copy</span>
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="space-y-2">
//                   <a
//                     href={receiptUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
//                   >
//                     <MessageCircle className="size-4" />
//                     <span>Send Receipt Directly to Victor</span>
//                     <ArrowUpRight className="size-3.5" />
//                   </a>

//                   {attendanceMode === 'in-person' && (
//                     <a
//                       href={CONFIG.groups.vip}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-full py-2.5 px-4 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
//                     >
//                       <span>Request Days 1 &amp; 2 VIP Group Entry</span>
//                       <ArrowUpRight className="size-3.5 stroke-[2.5]" />
//                     </a>
//                   )}
//                 </div>

//                 <div className="mt-3 flex items-start gap-1.5 p-2.5 bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl text-[10px] sm:text-[11px] text-[#6B564E]">
//                   <ShieldAlert className="size-3.5 text-[#e69842] shrink-0 mt-0.5" />
//                   <span>
//                     {attendanceMode === 'remote' 
//                       ? "As a remote backer, private video links and recordings will be delivered directly to your email."
//                       : "Venue in Lagos is confidential. Exact coordinates are shared in the group and sent to your email after receipt confirmation."}
//                   </span>
//                 </div>
//               </div>
//             ) : tier === 'volunteer' ? (
//               /* SUCCESS: VOLUNTEER */
//               <div className="py-4 text-center flex flex-col items-center">
//                 <div className="h-12 w-12 rounded-full bg-[#580e03] text-[#f0ab60] flex items-center justify-center mb-2 shadow-md">
//                   <Sparkles className="size-6 text-[#f0ab60]" />
//                 </div>
//                 <span className="text-[9px] font-mono uppercase tracking-widest text-[#580e03] font-bold block mb-1">
//                   CREW APPLICATION LOGGED
//                 </span>
//                 <h3 className="text-xl font-black text-[#250a06] uppercase mb-1">You&apos;re in the Queue!</h3>
//                 <p 
//                   style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
//                   className="text-xs text-[#6B564E] max-w-sm mb-5 leading-relaxed"
//                 >
//                   Confirmation sent to <strong>{email}</strong>. Join the official Volunteer Crew WhatsApp group below:
//                 </p>
//                 <a
//                   href={CONFIG.groups.volunteer}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
//                 >
//                   <MessageCircle className="size-4" />
//                   <span>Join Volunteer Crew WhatsApp</span>
//                   <ArrowUpRight className="size-4" />
//                 </a>
//               </div>
//             ) : (
//               /* SUCCESS: DAY 3 COMMUNITY */
//               <div className="py-4 text-center flex flex-col items-center">
//                 <div className="h-12 w-12 rounded-full bg-[#250a06] text-[#f0ab60] flex items-center justify-center mb-2 shadow-md">
//                   <Check className="size-6 text-[#f0ab60]" />
//                 </div>
//                 <span className="text-[9px] font-mono uppercase tracking-widest text-[#e69842] font-bold block mb-1">
//                   REGISTRATION CONFIRMED
//                 </span>
//                 <h3 className="text-xl font-black text-[#250a06] uppercase mb-1">You&apos;re on the Day 3 List!</h3>
//                 <p 
//                   style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
//                   className="text-xs text-[#6B564E] max-w-sm mb-5 leading-relaxed"
//                 >
//                   Details logged and sent to <strong>{email}</strong>. Join the Day 3 community group below:
//                 </p>
//                 <a
//                   href={CONFIG.groups.open}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
//                 >
//                   <MessageCircle className="size-4" />
//                   <span>Join Day 3 WhatsApp Group</span>
//                   <ArrowUpRight className="size-4" />
//                 </a>
//               </div>
//             )}
//           </div>
//         ) : (
//           /* FORM ENTRY */
//           <div>
//             <div className="mb-4">
//               <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#580e03] font-bold block mb-0.5">
//                 IN-HOUSE WITH ARO VICTOR
//               </span>
//               <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#250a06] uppercase">
//                 Join the Gathering
//               </h2>
//             </div>

//             {/* 3-Track Selector */}
//             <div className="grid grid-cols-3 gap-1 p-1 bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl mb-3 text-[11px] sm:text-xs font-semibold">
//               <button
//                 type="button"
//                 onClick={() => setTier('vip')}
//                 className={`py-2 px-1 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
//                   tier === 'vip' || tier === 'sponsor' 
//                     ? 'bg-[#250a06] text-[#f0ab60] shadow-xs' 
//                     : 'text-[#6B564E] hover:text-[#250a06]'
//                 }`}
//               >
//                 <HeartHandshake className="size-3.5 shrink-0" />
//                 <span className="truncate">Days 1 &amp; 2</span>
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setTier('open')}
//                 className={`py-2 px-1 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
//                   tier === 'open' || tier === 'attendee' || tier === 'free'
//                     ? 'bg-[#250a06] text-[#f0ab60] shadow-xs' 
//                     : 'text-[#6B564E] hover:text-[#250a06]'
//                 }`}
//               >
//                 <Users className="size-3.5 shrink-0" />
//                 <span className="truncate">Day 3 Open</span>
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setTier('volunteer')}
//                 className={`py-2 px-1 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
//                   tier === 'volunteer' 
//                     ? 'bg-[#580e03] text-white shadow-xs' 
//                     : 'text-[#6B564E] hover:text-[#250a06]'
//                 }`}
//               >
//                 <Video className="size-3.5 shrink-0" />
//                 <span className="truncate">Volunteer</span>
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-3">
              
//               {/* SUPPORTER SECTION: IN-PERSON vs. REMOTE TOGGLE + ₦80k TIER */}
//               {(tier === 'vip' || tier === 'sponsor') && (
//                 <div className="mb-1">
                  
//                   {/* ATTENDANCE TOGGLE (In-person vs Supporting From Afar) */}
//                   <div className="mb-2.5 p-1 bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl grid grid-cols-2 gap-1 text-[10px] sm:text-[11px] font-bold">
//                     <button
//                       type="button"
//                       onClick={() => setAttendanceMode('in-person')}
//                       className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
//                         attendanceMode === 'in-person'
//                           ? 'bg-[#250a06] text-[#f0ab60] shadow-xs'
//                           : 'text-[#6B564E] hover:text-[#250a06]'
//                       }`}
//                     >
//                       <MapPin className="size-3" />
//                       <span>Attending in Lagos</span>
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => setAttendanceMode('remote')}
//                       className={`py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
//                         attendanceMode === 'remote'
//                           ? 'bg-[#580e03] text-white shadow-xs'
//                           : 'text-[#6B564E] hover:text-[#250a06]'
//                       }`}
//                     >
//                       <Globe className="size-3" />
//                       <span>Supporting From Afar</span>
//                     </button>
//                   </div>

//                   <div className="flex items-center justify-between mb-1">
//                     <label className="text-[9px] sm:text-[11px] font-mono text-[#250a06] uppercase font-bold">
//                       {attendanceMode === 'remote' ? 'Select Support Pledge (From Afar)' : 'Support Level (Voluntary Pledge)'}
//                     </label>
//                     <span className="text-[9px] text-[#6B564E]">
//                       {attendanceMode === 'remote' ? 'Uncut Vault Access' : 'Powers the soundstage'}
//                     </span>
//                   </div>
                  
//                   {/* 3 TIERS (Executive is now ₦80,000) */}
//                   <div className="flex flex-col gap-1.5">
                    
//                     {/* Tier 1: 50k */}
//                     <div
//                       onClick={() => setSupporterLevel('50k-supporter')}
//                       className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
//                         supporterLevel === '50k-supporter'
//                           ? 'border-[#250a06] bg-[#FAF7F2]'
//                           : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
//                       }`}
//                     >
//                       <div className="flex items-center gap-2">
//                         <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
//                           supporterLevel === '50k-supporter' ? 'bg-[#250a06] border-[#250a06]' : 'border-[#250a06]/30'
//                         }`}>
//                           {supporterLevel === '50k-supporter' && <Check className="size-2.5 text-white stroke-3" />}
//                         </div>
//                         <div>
//                           <div className="flex items-center gap-2">
//                             <span className="text-xs font-bold text-[#250a06]">Supporter</span>
//                             <span className="text-xs font-black text-[#580e03]">₦50,000</span>
//                           </div>
//                           <span className="text-[10px] text-[#6B564E] block leading-tight">
//                             {attendanceMode === 'remote' ? 'Digital supporter & uncut recordings' : 'Masterclasses & networking access'}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Tier 2: 80k EXECUTIVE (Updated) */}
//                     <div
//                       onClick={() => setSupporterLevel('80k-executive')}
//                       className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
//                         supporterLevel === '80k-executive'
//                           ? 'border-[#250a06] bg-[#FAF7F2]'
//                           : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
//                       }`}
//                     >
//                       <div className="flex items-center gap-2">
//                         <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
//                           supporterLevel === '80k-executive' ? 'bg-[#250a06] border-[#250a06]' : 'border-[#250a06]/30'
//                         }`}>
//                           {supporterLevel === '80k-executive' && <Check className="size-2.5 text-white stroke-3" />}
//                         </div>
//                         <div>
//                           <div className="flex items-center gap-2">
//                             <span className="text-xs font-bold text-[#250a06]">Executive</span>
//                             <span className="text-xs font-black text-[#e69842]">₦80,000</span>
//                           </div>
//                           <span className="text-[10px] text-[#6B564E] block leading-tight">
//                             {attendanceMode === 'remote' ? 'Special patron shoutout + uncut 4K studio feed' : '+ On-site 4K Studio Interview cut'}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Tier 3: 150k+ Patron */}
//                     <div
//                       onClick={() => setSupporterLevel('patron-plus')}
//                       className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
//                         supporterLevel === 'patron-plus'
//                           ? 'border-[#580e03] bg-[#FAF7F2]'
//                           : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
//                       }`}
//                     >
//                       <div className="flex items-center gap-2">
//                         <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
//                           supporterLevel === 'patron-plus' ? 'bg-[#580e03] border-[#580e03]' : 'border-[#250a06]/30'
//                         }`}>
//                           {supporterLevel === 'patron-plus' && <Check className="size-2.5 text-white stroke-3" />}
//                         </div>
//                         <div>
//                           <div className="flex items-center gap-2">
//                             <span className="text-xs font-bold text-[#580e03]">Patron</span>
//                             <span className="text-xs font-black text-[#250a06]">₦150k+</span>
//                           </div>
//                           <span className="text-[10px] text-[#6B564E] block leading-tight">Key Partner &amp; Production Backer</span>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               )}

//               {/* Contact Inputs */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
//                 <div>
//                   <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     placeholder="Victor Aro"
//                     className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-2.5 md:px-3 py-2 text-[12px] sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
//                     WhatsApp Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     placeholder="+234 800 000 0000"
//                     className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-2.5 md:px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
//                   Primary Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="name@company.com"
//                   className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-2.5 md:px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
//                 />
//               </div>

//               {(tier === 'vip' || tier === 'sponsor') && (
//                 <div>
//                   <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
//                     Brand / Company / Handle (Optional)
//                   </label>
//                   <input
//                     type="text"
//                     value={brandOrHandle}
//                     onChange={(e) => setBrandOrHandle(e.target.value)}
//                     placeholder="@handle or Company"
//                     className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-2.5 md:px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
//                   />
//                 </div>
//               )}

//               {/* Volunteer Creator Inputs */}
//               {tier === 'volunteer' && (
//                 <>
//                   <div className="grid grid-cols-2 gap-2">
//                     <div>
//                       <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Experience *</label>
//                       <select
//                         value={experience}
//                         onChange={(e) => setExperience(e.target.value)}
//                         className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-2 py-2 text-[12px] md:text-xs text-[#250a06]"
//                       >
//                         <option>Under 1 Year</option>
//                         <option>1 - 3 Years</option>
//                         <option>3 - 5 Years (Pro)</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Turnaround *</label>
//                       <select
//                         value={deliveryTurnaround}
//                         onChange={(e) => setDeliveryTurnaround(e.target.value)}
//                         className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-2 py-2 text-xs text-[#250a06]"
//                       >
//                         <option>Same Day</option>
//                         <option>Within 24-48 Hours</option>
//                         <option>Within 3-5 Days</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Portfolio Link (Instagram, Drive, YouTube) *</label>
//                     <input
//                       type="url"
//                       required
//                       value={portfolio}
//                       onChange={(e) => setPortfolio(e.target.value)}
//                       placeholder="https://..."
//                       className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06]"
//                     />
//                   </div>
//                 </>
//               )}

//               <button
//                 type="submit"
//                 disabled={status === 'loading'}
//                 className="mt-2 w-full py-3 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white font-bold text-[10px] md:text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
//               >
//                 {status === 'loading' ? (
//                   <>
//                     <Loader2 className="size-4 animate-spin text-[#f0ab60]" />
//                     <span>Saving Entry...</span>
//                   </>
//                 ) : (
//                   <>
//                     <span>
//                       {tier === 'vip' || tier === 'sponsor' 
//                         ? (attendanceMode === 'remote' ? 'Confirm Remote Backing' : 'Confirm Days 1 & 2 Support') 
//                         : tier === 'volunteer' 
//                         ? 'Submit Creator Application' 
//                         : 'Register for Day 3 Mainstage'}
//                     </span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         )}

//       </div>
//     </div>
//   )
// }

// // 'use client'

// // import React, { useState, useEffect } from 'react'
// // import { 
// //   X, 
// //   ArrowUpRight, 
// //   Check, 
// //   Loader2, 
// //   Users, 
// //   Video, 
// //   MessageCircle, 
// //   Copy, 
// //   CheckCheck, 
// //   HeartHandshake,
// //   ShieldAlert,
// //   Sparkles
// // } from 'lucide-react'
// // import { LeadType } from '../types'

// // interface WaitlistModalProps {
// //   isOpen: boolean
// //   initialTier?: LeadType
// //   onClose: () => void
// // }

// // export function WaitlistModal({ isOpen, initialTier = 'vip', onClose }: WaitlistModalProps) {
// //   const [tier, setTier] = useState<LeadType>(initialTier)
// //   const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
// //   const [copied, setCopied] = useState(false)

// //   useEffect(() => {
// //     if (initialTier) {
// //       setTier(initialTier)
// //     }
// //   }, [initialTier])

// //   const [fullName, setFullName] = useState('')
// //   const [email, setEmail] = useState('')
// //   const [phone, setPhone] = useState('')
// //   const [brandOrHandle, setBrandOrHandle] = useState('')

// //   const [supporterLevel, setSupporterLevel] = useState<'50k-100k' | '100k-200k' | 'above-200k'>('50k-100k')

// //   const [experience, setExperience] = useState('1 - 3 Years')
// //   const [portfolio, setPortfolio] = useState('')
// //   const [deliveryTurnaround, setDeliveryTurnaround] = useState('Within 24 - 48 Hours')

// //   const CONFIG = {
// //     groups: {
// //       vip: 'https://chat.whatsapp.com/LoluW303cx3LwNXneTCeat',
// //       open: 'https://chat.whatsapp.com/Ew8jcCAJQlN97ycW1b0UHn',
// //       volunteer: 'https://chat.whatsapp.com/FZCs511plsFEcdV1VfG9Nu',
// //     },
// //     bank: {
// //       bankName: 'United Bank For Africa (UBA)',
// //       accountNumber: '2081427583',
// //       accountName: 'Aro Victor',
// //     },
// //     hostWhatsApp: '2348132498253',
// //   }

// //   if (!isOpen) return null

// //   const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''

// //   const getSupporterLabel = () => {
// //     switch (supporterLevel) {
// //       case '50k-100k':
// //         return '₦50,000 - ₦100,000'
// //       case '100k-200k':
// //         return '₦100,000 - ₦200,000'
// //       case 'above-200k':
// //         return 'Above ₦200,000 (Patron)'
// //     }
// //   }

// //   const handleCopyAccount = () => {
// //     navigator.clipboard.writeText(CONFIG.bank.accountNumber)
// //     setCopied(true)
// //     setTimeout(() => setCopied(false), 2500)
// //   }

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setStatus('loading')

// //     const payload = {
// //       tier,
// //       fullName,
// //       email,
// //       phone,
// //       brandOrHandle,
// //       supporterLevel: tier === 'vip' || tier === 'sponsor' ? getSupporterLabel() : 'N/A',
// //       experience,
// //       portfolio,
// //       deliveryTurnaround,
// //     }

// //     try {
// //       if (GOOGLE_SCRIPT_URL) {
// //         await fetch(GOOGLE_SCRIPT_URL, {
// //           method: 'POST',
// //           headers: { 'Content-Type': 'text/plain;charset=utf-8' },
// //           body: JSON.stringify(payload),
// //         })
// //       }
// //       setStatus('success')
// //     } catch {
// //       setStatus('success')
// //     }
// //   }

// //   const handleReset = () => {
// //     setStatus('idle')
// //     setFullName('')
// //     setEmail('')
// //     setPhone('')
// //     setPortfolio('')
// //     setBrandOrHandle('')
// //     onClose()
// //   }

// //   const receiptUrl = `https://wa.me/${CONFIG.hostWhatsApp}?text=${encodeURIComponent(
// //     `Hello Aro Victor Team, I just registered for Days 1 & 2 (${fullName} - Voluntary Support: ${getSupporterLabel()}). Here is my confirmation:`
// //   )}`

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto font-poppins">
// //       <div className="relative w-full max-w-lg bg-white border border-[#250a06]/15 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl my-auto max-h-[92vh] overflow-y-auto">
        
// //         <button
// //           type="button"
// //           onClick={handleReset}
// //           className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 rounded-full text-[#6B564E] hover:text-[#250a06] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
// //         >
// //           <X className="size-4 sm:size-5" />
// //         </button>

// //         {status === 'success' ? (
// //           <div>
// //             {tier === 'vip' || tier === 'sponsor' ? (
// //               <div>
// //                 <span className="px-2 py-0.5 rounded-md bg-[#580e03] text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider block w-fit mb-2">
// //                   Registration Confirmed
// //                 </span>

// //                 <h3 className="text-xl sm:text-2xl font-black text-[#250a06] mb-1 uppercase tracking-tight">
// //                   Thank You for Supporting!
// //                 </h3>
                
// //                 <p 
// //                   style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
// //                   className="text-xs text-[#6B564E] mb-4 font-normal leading-relaxed"
// //                 >
// //                   Your seat for Days 1 &amp; 2 is reserved. An email was sent to <strong>{email}</strong>. If making your voluntary transfer, details are below:
// //                 </p>

// //                 <div className="bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl p-3.5 sm:p-4 mb-4 space-y-2">
// //                   <div className="flex justify-between items-baseline border-b border-[#250a06]/10 pb-2">
// //                     <span className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase">SELECTED LEVEL</span>
// //                     <span className="text-sm sm:text-base font-bold text-[#e69842]">{getSupporterLabel()}</span>
// //                   </div>

// //                   <div className="flex justify-between items-center text-[11px] sm:text-xs">
// //                     <span className="font-mono text-[#6B564E]">BANK</span>
// //                     <span className="font-bold text-[#250a06]">{CONFIG.bank.bankName}</span>
// //                   </div>

// //                   <div className="flex justify-between items-center text-[11px] sm:text-xs">
// //                     <span className="font-mono text-[#6B564E]">ACCOUNT NAME</span>
// //                     <span className="font-bold text-[#250a06] text-right">{CONFIG.bank.accountName}</span>
// //                   </div>

// //                   <div className="pt-2 border-t border-[#250a06]/10 flex justify-between items-center">
// //                     <div>
// //                       <span className="text-[9px] font-mono text-[#6B564E] block">ACCOUNT NUMBER</span>
// //                       <span className="text-base sm:text-lg font-mono font-black tracking-wider text-[#250a06]">
// //                         {CONFIG.bank.accountNumber}
// //                       </span>
// //                     </div>

// //                     <button
// //                       type="button"
// //                       onClick={handleCopyAccount}
// //                       className="px-2.5 py-1 rounded-lg bg-white border border-[#250a06]/15 text-[#250a06] hover:bg-[#250a06] hover:text-white transition-all text-[11px] font-mono flex items-center gap-1.5 cursor-pointer shadow-xs"
// //                     >
// //                       {copied ? (
// //                         <>
// //                           <CheckCheck className="size-3 text-green-600" />
// //                           <span>Copied</span>
// //                         </>
// //                       ) : (
// //                         <>
// //                           <Copy className="size-3 text-[#e69842]" />
// //                           <span>Copy</span>
// //                         </>
// //                       )}
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="space-y-2">
// //                   <a
// //                     href={CONFIG.groups.vip}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="w-full py-3 px-4 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
// //                   >
// //                     <span>Request Days 1 &amp; 2 VIP Group</span>
// //                     <ArrowUpRight className="size-3.5 stroke-[2.5]" />
// //                   </a>

// //                   <a
// //                     href={receiptUrl}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
// //                   >
// //                     <MessageCircle className="size-3.5" />
// //                     <span>Drop Confirmation on WhatsApp</span>
// //                     <ArrowUpRight className="size-3.5" />
// //                   </a>
// //                 </div>

// //                 <div className="mt-3 flex items-start gap-1.5 p-2.5 bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl text-[10px] sm:text-[11px] text-[#6B564E]">
// //                   <ShieldAlert className="size-3.5 text-[#e69842] shrink-0 mt-0.5" />
// //                   <span>
// //                     Venue in Lagos is private. Exact coordinates are shared in the VIP group and sent directly to your registered email.
// //                   </span>
// //                 </div>
// //               </div>
// //             ) : tier === 'volunteer' ? (
// //               /* SUCCESS: VOLUNTEERS */
// //               <div className="py-4 text-center flex flex-col items-center">
// //                 <div className="h-12 w-12 rounded-full bg-[#580e03] text-[#f0ab60] flex items-center justify-center mb-2 shadow-md">
// //                   <Sparkles className="size-6 text-[#f0ab60]" />
// //                 </div>
                
// //                 <span className="text-[9px] font-mono uppercase tracking-widest text-[#580e03] font-bold block mb-1">
// //                   CREW APPLICATION LOGGED
// //                 </span>
// //                 <h3 className="text-xl font-black text-[#250a06] uppercase mb-1">
// //                   You&apos;re in the Crew Queue!
// //                 </h3>
                
// //                 <p 
// //                   style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
// //                   className="text-xs text-[#6B564E] max-w-sm mb-5 leading-relaxed"
// //                 >
// //                   Confirmation dispatched to <strong>{email}</strong>. Join the official Volunteer Crew WhatsApp group below:
// //                 </p>

// //                 <a
// //                   href={CONFIG.groups.volunteer}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
// //                 >
// //                   <MessageCircle className="size-4" />
// //                   <span>Join Volunteer Crew WhatsApp</span>
// //                   <ArrowUpRight className="size-4" />
// //                 </a>

// //                 <button
// //                   type="button"
// //                   onClick={handleReset}
// //                   className="mt-3 text-[11px] font-mono text-[#6B564E] hover:text-[#250a06] underline cursor-pointer"
// //                 >
// //                   Close Window
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="py-4 text-center flex flex-col items-center">
// //                 <div className="h-12 w-12 rounded-full bg-[#250a06] text-[#f0ab60] flex items-center justify-center mb-2 shadow-md">
// //                   <Check className="size-6 text-[#f0ab60]" />
// //                 </div>
                
// //                 <span className="text-[9px] font-mono uppercase tracking-widest text-[#e69842] font-bold block mb-1">
// //                   REGISTRATION CONFIRMED
// //                 </span>
// //                 <h3 className="text-xl font-black text-[#250a06] uppercase mb-1">
// //                   You&apos;re On the Day 3 List!
// //                 </h3>
                
// //                 <p 
// //                   style={{ fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif" }}
// //                   className="text-xs text-[#6B564E] max-w-sm mb-5 leading-relaxed"
// //                 >
// //                   Details logged and sent to <strong>{email}</strong>. Join the Day 3 community broadcast group below:
// //                 </p>

// //                 <a
// //                   href={CONFIG.groups.open}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
// //                 >
// //                   <MessageCircle className="size-4" />
// //                   <span>Join Day 3 WhatsApp Group</span>
// //                   <ArrowUpRight className="size-4" />
// //                 </a>

// //                 <button
// //                   type="button"
// //                   onClick={handleReset}
// //                   className="mt-3 text-[11px] font-mono text-[#6B564E] hover:text-[#250a06] underline cursor-pointer"
// //                 >
// //                   Close Window
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         ) : (
// //           <div>
// //             <div className="mb-4">
// //               <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#580e03] font-bold block mb-0.5">
// //                 IN-HOUSE WITH ARO VICTOR
// //               </span>
// //               <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#250a06] uppercase">
// //                 Join the Gathering
// //               </h2>
// //             </div>

// //             <div className="grid md:grid-cols-3 gap-1 p-1 bg-[#FAF7F2] border border-[#250a06]/10 rounded-xl mb-4 text-[11px] sm:text-xs font-semibold">
// //               <button
// //                 type="button"
// //                 onClick={() => setTier('vip')}
// //                 className={`py-2 px-1 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
// //                   tier === 'vip' || tier === 'sponsor' 
// //                     ? 'bg-[#250a06] text-[#f0ab60] shadow-xs' 
// //                     : 'text-[#6B564E] hover:text-[#250a06]'
// //                 }`}
// //               >
// //                 <HeartHandshake className="size-3.5 shrink-0" />
// //                 <span className="truncate">Days 1 &amp; 2</span>
// //               </button>

// //               <button
// //                 type="button"
// //                 onClick={() => setTier('open')}
// //                 className={`py-2 px-1 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
// //                   tier === 'open' || tier === 'attendee' || tier === 'free'
// //                     ? 'bg-[#250a06] text-[#f0ab60] shadow-xs' 
// //                     : 'text-[#6B564E] hover:text-[#250a06]'
// //                 }`}
// //               >
// //                 <Users className="size-3.5 shrink-0" />
// //                 <span className="truncate">Day 3 Open</span>
// //               </button>

// //               <button
// //                 type="button"
// //                 onClick={() => setTier('volunteer')}
// //                 className={`py-2 px-1 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
// //                   tier === 'volunteer' 
// //                     ? 'bg-[#580e03] text-white shadow-xs' 
// //                     : 'text-[#6B564E] hover:text-[#250a06]'
// //                 }`}
// //               >
// //                 <Video className="size-3.5 shrink-0" />
// //                 <span className="truncate">Volunteer</span>
// //               </button>
// //             </div>

// //             <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-3">
              
// //               {(tier === 'vip' || tier === 'sponsor') && (
// //                 <div className="mb-1">
// //                   <div className="flex items-center justify-between mb-1">
// //                     <label className="text-[8px] sm:text-[11px] font-mono text-[#250a06] uppercase font-bold">
// //                       Support Level (Voluntary Pledge)
// //                     </label>
// //                     <span className="text-[9px] text-[#6B564E]">Powers the soundstage</span>
// //                   </div>
                  
// //                   <div className="flex flex-col gap-1.5">
                    
// //                     <div
// //                       onClick={() => setSupporterLevel('50k-100k')}
// //                       className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
// //                         supporterLevel === '50k-100k'
// //                           ? 'border-[#250a06] bg-[#FAF7F2]'
// //                           : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
// //                       }`}
// //                     >
// //                       <div className="flex items-center gap-2">
// //                         <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
// //                           supporterLevel === '50k-100k' ? 'bg-[#250a06] border-[#250a06]' : 'border-[#250a06]/30'
// //                         }`}>
// //                           {supporterLevel === '50k-100k' && <Check className="size-2.5 text-white stroke-3" />}
// //                         </div>
// //                         <div>
// //                           <div className="flex items-center gap-2">
// //                             <span className="text-xs font-bold text-[#250a06]">Supporter</span>
// //                             <span className="text-xs font-black text-[#580e03]">₦50k – ₦100k</span>
// //                           </div>
// //                           <span className="text-[10px] text-[#6B564E] block leading-tight">Masterclasses &amp; networking access</span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div
// //                       onClick={() => setSupporterLevel('100k-200k')}
// //                       className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
// //                         supporterLevel === '100k-200k'
// //                           ? 'border-[#250a06] bg-[#FAF7F2]'
// //                           : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
// //                       }`}
// //                     >
// //                       <div className="flex items-center gap-2">
// //                         <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
// //                           supporterLevel === '100k-200k' ? 'bg-[#250a06] border-[#250a06]' : 'border-[#250a06]/30'
// //                         }`}>
// //                           {supporterLevel === '100k-200k' && <Check className="size-2.5 text-white stroke-3" />}
// //                         </div>
// //                         <div>
// //                           <div className="flex items-center gap-2">
// //                             <span className="text-xs font-bold text-[#250a06]">Executive</span>
// //                             <span className="text-xs font-black text-[#e69842]">₦100k - ₦200k</span>
// //                           </div>
// //                           <span className="text-[10px] text-[#6B564E] block leading-tight">+ On-site 4K Studio Interview cut</span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div
// //                       onClick={() => setSupporterLevel('above-200k')}
// //                       className={`py-2 px-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
// //                         supporterLevel === 'above-200k'
// //                           ? 'border-[#580e03] bg-[#FAF7F2]'
// //                           : 'border-[#250a06]/15 hover:border-[#250a06]/30 bg-white'
// //                       }`}
// //                     >
// //                       <div className="flex items-center gap-2">
// //                         <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ${
// //                           supporterLevel === 'above-200k' ? 'bg-[#580e03] border-[#580e03]' : 'border-[#250a06]/30'
// //                         }`}>
// //                           {supporterLevel === 'above-200k' && <Check className="size-2.5 text-white stroke-3" />}
// //                         </div>
// //                         <div>
// //                           <div className="flex items-center gap-2">
// //                             <span className="text-xs font-bold text-[#580e03]">Patron</span>
// //                             <span className="text-xs font-black text-[#250a06]">Above ₦200k</span>
// //                           </div>
// //                           <span className="text-[10px] text-[#6B564E] block leading-tight">Key Patron &amp; Partner Recognition</span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                   </div>
// //                 </div>
// //               )}

// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
// //                 <div>
// //                   <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
// //                     Full Name *
// //                   </label>
// //                   <input
// //                     type="text"
// //                     required
// //                     value={fullName}
// //                     onChange={(e) => setFullName(e.target.value)}
// //                     placeholder="Victor Aro"
// //                     className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-2.5 md:px-3 py-2 text-[12px] sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
// //                     WhatsApp Phone Number *
// //                   </label>
// //                   <input
// //                     type="tel"
// //                     required
// //                     value={phone}
// //                     onChange={(e) => setPhone(e.target.value)}
// //                     placeholder="+234 800 000 0000"
// //                     className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-2.5 md:px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
// //                   Primary Email Address *
// //                 </label>
// //                 <input
// //                   type="email"
// //                   required
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   placeholder="name@company.com"
// //                   className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
// //                 />
// //               </div>

// //               {(tier === 'vip' || tier === 'sponsor') && (
// //                 <div>
// //                   <label className="text-[10px] sm:text-[11px] font-mono text-[#6B564E] uppercase block mb-0.5">
// //                     Brand / Company / Handle (Optional)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     value={brandOrHandle}
// //                     onChange={(e) => setBrandOrHandle(e.target.value)}
// //                     placeholder="@handle or Company"
// //                     className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-[6px] md:rounded-xl px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06] focus:outline-none focus:border-[#250a06]"
// //                   />
// //                 </div>
// //               )}

// //               {tier === 'volunteer' && (
// //                 <>
// //                   <div className="grid grid-cols-2 gap-2">
// //                     <div>
// //                       <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Experience *</label>
// //                       <select
// //                         value={experience}
// //                         onChange={(e) => setExperience(e.target.value)}
// //                         className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-2 py-2 text-[12px] md:text-xs text-[#250a06]"
// //                       >
// //                         <option>Under 1 Year</option>
// //                         <option>1 - 3 Years</option>
// //                         <option>3 - 5 Years (Pro)</option>
// //                       </select>
// //                     </div>
// //                     <div>
// //                       <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Turnaround *</label>
// //                       <select
// //                         value={deliveryTurnaround}
// //                         onChange={(e) => setDeliveryTurnaround(e.target.value)}
// //                         className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-2 py-2 text-xs text-[#250a06]"
// //                       >
// //                         <option>Same Day</option>
// //                         <option>Within 24-48 Hours</option>
// //                         <option>Within 3-5 Days</option>
// //                       </select>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="text-[10px] font-mono text-[#6B564E] uppercase block mb-0.5">Portfolio Link (Instagram, Drive, YouTube) *</label>
// //                     <input
// //                       type="url"
// //                       required
// //                       value={portfolio}
// //                       onChange={(e) => setPortfolio(e.target.value)}
// //                       placeholder="https://..."
// //                       className="w-full bg-[#FAF7F2] border border-[#250a06]/15 rounded-xl px-3 py-2 text-[12px] md:text-base sm:text-sm text-[#250a06]"
// //                     />
// //                   </div>
// //                 </>
// //               )}

// //               <button
// //                 type="submit"
// //                 disabled={status === 'loading'}
// //                 className="mt-2 w-full py-3 rounded-xl bg-[#250a06] hover:bg-[#580e03] text-[#f0ab60] hover:text-white font-bold text-[10px] md:text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
// //               >
// //                 {status === 'loading' ? (
// //                   <>
// //                     <Loader2 className="size-4 animate-spin text-[#f0ab60]" />
// //                     <span>Saving Entry...</span>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <span>
// //                       {tier === 'vip' || tier === 'sponsor' 
// //                         ? 'Confirm Days 1 & 2 Registration' 
// //                         : tier === 'volunteer' 
// //                         ? 'Submit Creator Application' 
// //                         : 'Register for Day 3 Mainstage'}
// //                     </span>
// //                   </>
// //                 )}
// //               </button>
// //             </form>
// //           </div>
// //         )}

// //       </div>
// //     </div>
// //   )
// // }