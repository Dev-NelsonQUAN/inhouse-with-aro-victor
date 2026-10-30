// types.ts

// 1. Unified Master Role Type (covers every track across all components)
export type LeadType = 'vip' | 'open' | 'attendee' | 'free' | 'volunteer' | 'sponsor'

// 2. Backward-compatible aliases (fixes all import errors across components)
export type TierType = LeadType
export type FormType = LeadType

// 3. Complete Data Submission Payload (works for both Google Sheets & Database)
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

// 4. Modal / Form Copy Structure
export interface FormCopy {
  title: string
  description: string
  button: string
}

// 5. Direct WhatsApp Registration Links
export const FORM_LINKS: Record<LeadType, string> = {
  vip: 'https://wa.me/2349057543958?text=I%20just%20registered%20for%20In-House%20with%20Aro%20Victor%20VIP',
  open: 'https://wa.me/2349057543958?text=I%20joined%20the%20Day%203%20Community%20Waitlist',
  attendee: 'https://wa.me/2349057543958?text=I%20joined%20the%20Day%203%20Community%20Waitlist',
  free: 'https://wa.me/2349057543958?text=I%20joined%20the%20Day%203%20Community%20Waitlist',
  volunteer: 'https://wa.me/2349057543958?text=I%20applied%20to%20volunteer%20as%20a%20Creator%20at%20In-House%20with%20Aro%20Victor',
  sponsor: 'https://wa.me/2349057543958?text=I%20want%20to%20request%20the%20Corporate%20Sponsorship%20Deck',
}

// 6. Form Titles & Helper Text
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
    button: 'Request Sponsorship Deck',
  },
}

// // types.ts

// export type FormType = 'vip' | 'free' | 'volunteer' | 'sponsor'

// // Alias LeadType so both old and new components work without errors:
// export type LeadType = FormType

// export interface FormCopy {
//   title: string
//   description: string
//   button: string
// }

// export const FORM_LINKS: Record<FormType, string> = {
//   vip: 'https://wa.me/2348000000000?text=I%20just%20registered%20for%20Aro%20Victor%20%26%20Friends%20VIP',
//   free: 'https://wa.me/2348000000000?text=I%20joined%20the%20Day%203%20waitlist',
//   volunteer: 'https://wa.me/2348000000000?text=I%20applied%20to%20volunteer%20at%20Aro%20Victor%20%26%20Friends',
//   sponsor: 'https://wa.me/2348000000000?text=I%20want%20to%20request%20the%20Corporate%20Sponsorship%20Deck',
// }

// export const FORM_COPY: Record<FormType, FormCopy> = {
//   vip: {
//     title: 'Reserve Your VIP Spot',
//     description: 'Days 1 & 2 are for intimate access, strategy, live media recording, and high-value connection.',
//     button: 'Proceed to Payment',
//   },
//   free: {
//     title: 'Join Day 3 Waitlist',
//     description: 'Day 3 is open to the wider creative community. Secure your spot on the waitlist now.',
//     button: 'Join Waitlist',
//   },
//   volunteer: {
//     title: 'Join the Crew',
//     description: 'Help build an unforgettable experience while gaining high-value networking exposure.',
//     button: 'Submit Application',
//   },
//   sponsor: {
//     title: 'Brand Partnership & Sponsorship',
//     description: 'Booth exhibition, on-site live media spotlight, and 3 All-Access VIP executive passes.',
//     button: 'Request Sponsorship Deck',
//   },
// }