import './globals.css'
import type { Metadata } from 'next'
import { Inter , Faustina, Courier_Prime} from 'next/font/google'
import Navbar from './components/Navbar'
import Stargazer from './components/Stargazer'
import { Canvas } from '@react-three/fiber'


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
        <Stargazer/>
        {children}
      </body>
    </html>
  )
}
