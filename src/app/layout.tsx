import Header from '@/containers/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/containers/Footer'
import { useEffect } from 'react'
import Script from 'next/script'
export const metadata: Metadata = {
  title: 'Studios Connect',
  description: 'Tecnologia para seu negócio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='bg-gradient-to-t bg-purple-700 to-Purple-700 to-100% via-violet-700 via-40% from-transparent'>
        <Header></Header>
          {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
