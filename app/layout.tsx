import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import { ToasterProvider } from '@/components/provider/toaster-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chris Wang'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider>
        <html lang="en">
        <body className={ inter.className }>
        <ToasterProvider/>
        { children }
        </body>
        </html>
      </ClerkProvider>
  )
}
