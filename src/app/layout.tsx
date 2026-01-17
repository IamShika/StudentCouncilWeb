import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Because We Are TK - Student Council',
  description: 'เราทำได้ เพราะเราคือทีเค - สภานักเรียน เบอร์ 1',
  icons: {
    icon: '/images/wearetkicon.jpg',
    shortcut: '/images/wearetkicon.jpg',
    apple: '/images/wearetkicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" href="/images/wearetkicon.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
