// types/index.ts or types.ts

export type LeadType = 'attendee' | 'sponsor' | 'volunteer' | 'vip'

// Keep your existing FormType if other components use it:
export type FormType = LeadType

export interface WaitlistFormData {
  email: string
  leadType: LeadType
  name?: string
  companyOrHandle?: string
}