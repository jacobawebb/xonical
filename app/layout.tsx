import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Navigation from './layouts/Navigation'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XNC | Security & Digital Solutions',
  description: 'Experience Total Security & Digital Excellence with our CCTV, Alarms, Website, and Software Solutions. Trust us for Your Protection and Online Growth. Contact us now!',
}

import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='flex justify-center items-center'>
      <body className={`${figtree.className} bg-colorBackground text-colorText p-3 xl:p-12 flex flex-col gap-10 flex flex-col items-center justify-center w-full max-w-screen-2xl`}>
        <Navigation />
        <Main>{children}</Main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
