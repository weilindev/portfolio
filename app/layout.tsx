import type { Metadata } from 'next'
import { Noto_Sans_TC} from 'next/font/google'
import './globals.css'

const notoTC = Noto_Sans_TC({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'weilin-portfolio',
  description: 'This is my personal portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh-TW' className={notoTC.className}>
      <body className='bg-primary-200'>
        {children}
      </body>
    </html>
  )
}
