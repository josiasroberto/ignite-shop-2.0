import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | IgniteShop 2.0',
    default: 'IgniteShop 2.0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={roboto.variable} lang="pt">
      <body className="bg-background text-text">{children}</body>
    </html>
  )
}
