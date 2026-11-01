// types.ts

export type LeadType = 'vip' | 'open' | 'attendee' | 'free' | 'volunteer' | 'sponsor'

export type TierType = LeadType
export type FormType = LeadType

export interface WaitlistFormData {
  email: string
  tier?: LeadType
  leadType?: LeadType
  role?: LeadType
  name?: string
  fullName?: string
  phone?: string
  companyOrHandle?: string
  brandOrHandle?: string
  budget?: string
  experience?: string
  portfolio?: string
  availability?: string
  deliveryTurnaround?: string
}

export interface FormCopy {
  title: string
  description: string
  button: string
}

export const FORM_LINKS: Record<LeadType, string> = {
  vip: 'https://wa.me/2349057543958?text=I%20just%20registered%20for%20In-House%20with%20Aro%20Victor%20VIP',
  open: 'https://wa.me/2349057543958?text=I%20joined%20the%20Day%203%20Community%20Waitlist',
  attendee: 'https://wa.me/2349057543958?text=I%20joined%20the%20Day%203%20Community%20Waitlist',
  free: 'https://wa.me/2349057543958?text=I%20joined%20the%20Day%203%20Community%20Waitlist',
  volunteer: 'https://wa.me/2349057543958?text=I%20applied%20to%20volunteer%20as%20a%20Creator%20at%20In-House%20with%20Aro%20Victor',
  sponsor: 'https://wa.me/2349057543958?text=I%20want%20to%20request%20the%20Corporate%20Sponsorship%20Deck',
}

export const FORM_COPY: Record<LeadType, FormCopy> = {
  vip: {
    title: 'Reserve Your VIP Spot',
    description: 'Days 1 & 2 are for intimate access, strategy, live media recording, and high-value connection.',
    button: 'Proceed to Payment Details',
  },
  open: {
    title: 'Join Day 3 Waitlist',
    description: 'Day 3 is open to the wider creative and tech community in Lagos. Secure your spot now.',
    button: 'Join Waitlist',
  },
  attendee: {
    title: 'Join Day 3 Waitlist',
    description: 'Day 3 is open to the wider creative and tech community in Lagos. Secure your spot now.',
    button: 'Join Waitlist',
  },
  free: {
    title: 'Join Day 3 Waitlist',
    description: 'Day 3 is open to the wider creative and tech community in Lagos. Secure your spot now.',
    button: 'Join Waitlist',
  },
  volunteer: {
    title: 'Join the Experience Crew',
    description: 'Help build an unforgettable experience while gaining backstage media, camera, and networking access.',
    button: 'Submit Application',
  },
  sponsor: {
    title: 'Brand Partnership & Sponsorship',
    description: 'Exhibition booth space, on-site live media spotlight, and 3 All-Access VIP executive passes.',
    button: 'Request Sponsorship Proposal',
  },
}
