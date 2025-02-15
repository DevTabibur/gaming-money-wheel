import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Providers from '@/lib/Providers'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900', // Make sure you're using weights in this range
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} bg-gradient-to-r from-[#4A0004] from-10% via-[#6A000A] via-30% to-[#5C000D] to-90% antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
