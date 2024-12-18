import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AirTronics - Innovative Corrosion Protection',
  description: 'Exclusive Distributor of Heresite Protective Coatings in Pakistan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative`}>
        <div className="page-overlay" />
        
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen">
            <div className="fade-in opacity-0">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

