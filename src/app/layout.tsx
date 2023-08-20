import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Script from 'next/script'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
      <Script src="https://accounts.google.com/gsi/client" />
    </html>
  )
}
