import type { Metadata, Viewport } from 'next'
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#250a06',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://inhouse.arovictor.com'),
  
  title: {
    default: 'In-House with Aro Victor | Connect. Create. Celebrate.',
    template: '%s | In-House with Aro Victor',
  },
  
  description: 
    'An exclusive 3-day gathering pairing closed-door founder masterclasses with live on-site broadcast production in Lagos, giving you months of studio-grade media for your brand.',
  
  keywords: [
    'Aro Victor',
    'In-House with Aro Victor',
    'Lagos Founders Event',
    'Digital Creators Lagos',
    'Nigeria Tech Networking',
    'Media Studio Lagos',
    'Masterclass Nigeria',
    'Lagos Business Summit',
  ],
  
  authors: [{ name: 'Aro Victor', url: 'https://arovictor.com' }],
  creator: 'Aro Victor & Team',
  publisher: 'In-House Experience',
  
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://inhouse.arovictor.com',
    siteName: 'In-House with Aro Victor',
    title: 'In-House with Aro Victor - Connect. Create. Celebrate.',
    description: 
      'An exclusive 3-day Lagos gathering for founders and creators to build high-value relationships and record months of studio-grade personal media.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'In-House with Aro Victor - Lagos 2026',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'In-House with Aro Victor - Connect. Create. Celebrate.',
    description: 
      '3-Day hybrid gathering for founders & creators in Lagos. Strategy masterclasses + live on-site media studio production.',
    creator: '@arovictor',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${poppins.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body 
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}