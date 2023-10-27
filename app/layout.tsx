import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../assets/scss/tailwind.scss'
import '../assets/scss/style.scss'
import ImgFavicon from "./favicon.svg"
import Player from '@/components/Player'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nosense Collective',
  description: 'Website resmi dari Nosense Collective, dapatkan info terbaru hanya melalui website dan instagram kami.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={ImgFavicon.src} />
      <body className={inter.className}>
        <Player />
        {children}</body>
    </html>
  )
}
