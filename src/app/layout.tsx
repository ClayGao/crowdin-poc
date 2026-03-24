import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Positive Grid',
  description: 'Professional guitar amps, effects, and music creation tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
