'use client'

import React, { useState } from 'react'
import { HouseLoader } from '@/components/HouseLoader'
import { HeaderSection } from '@/components/HeaderSection'
import { HeroSection } from '@/components/HeroSection'
import { MediaEngineSection } from '@/components/MediaEngineSection'
import { AgendaSection } from '@/components/AgendaSection'
import { SponsorshipSection } from '@/components/SponsorshipSection'
import { Footer } from '@/components/Footer'
import { WaitlistModal } from '@/components/WaitlistModal'
import { LeadType } from '@/types'

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTier, setActiveTier] = useState<LeadType>('vip')

  const handleOpenWaitlist = (tier: LeadType = 'vip') => {
    setActiveTier(tier)
    setModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-white text-[#250a06] selection:bg-[#f0ab60] selection:text-[#250a06]">
      <HouseLoader />

      <HeaderSection onOpenWaitlist={handleOpenWaitlist} />

      <HeroSection onOpenWaitlist={handleOpenWaitlist} />

      <MediaEngineSection onOpenWaitlist={handleOpenWaitlist} />

      <AgendaSection onOpenWaitlist={handleOpenWaitlist} />

      <SponsorshipSection onOpenWaitlist={handleOpenWaitlist} />

      <Footer onOpenWaitlist={handleOpenWaitlist} />

      <WaitlistModal
        isOpen={modalOpen}
        initialTier={activeTier}
        onClose={() => setModalOpen(false)}
      />
    </main>
  )
}
