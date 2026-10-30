'use server'

import { WaitlistFormData } from '@/types'

export async function submitRegistration(payload: WaitlistFormData) {
  try {
    const GOOGLE_SHEET_WEBHOOK_URL = process.env.SHEET_WEBHOOK_URL

    // Safe fallback so TypeScript knows this is never undefined
    const role = (payload.leadType || payload.tier || payload.role || 'vip').toUpperCase()

    if (GOOGLE_SHEET_WEBHOOK_URL) {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Timestamp: new Date().toISOString(),
          Email: payload.email,
          Role: role,
          Name: payload.fullName || payload.name || 'N/A',
          Phone: payload.phone || 'N/A',
          CompanyOrHandle: payload.brandOrHandle || payload.companyOrHandle || 'N/A',
        }),
      })
    }

    return { success: true }
  } catch (error) {
    console.error('Registration error:', error)
    return { success: false, error: 'Could not record entry' }
  }
}

// // app/actions/register.ts
// 'use server'

// import { WaitlistFormData } from '@/types'

// export async function submitRegistration(payload: WaitlistFormData) {
//   try {
//     const GOOGLE_SHEET_WEBHOOK_URL = process.env.SHEET_WEBHOOK_URL

//     if (GOOGLE_SHEET_WEBHOOK_URL) {
//       await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Timestamp: new Date().toISOString(),
//           Email: payload.email,
//           Role: payload.leadType.toUpperCase(),
//           Name: payload.name || 'N/A',
//           CompanyOrHandle: payload.companyOrHandle || 'N/A',
//         }),
//       })
//     }

//     return { success: true }
//   } catch (error) {
//     console.error('Registration error:', error)
//     return { success: false, error: 'Could not record entry' }
//   }
// }