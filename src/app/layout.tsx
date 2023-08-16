import type { Metadata } from 'next'
import { Courier_Prime, Faustina, Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'
import Stargazer from './components/Stargazer'


const inter = Inter({ subsets: ['latin'] })
const faustina = Faustina({ subsets: ['latin']})
const courier =Courier_Prime({ subsets: ['latin'], weight:'400'})

export const metadata: Metadata = {
  title: 'Focal',
  description: 'See The Stars - A new way to explore Nostr content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={faustina.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
