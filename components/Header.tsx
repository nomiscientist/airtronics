'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Why Heresite', href: '/why-heresite' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg' 
        : 'bg-white dark:bg-gray-800'}`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition-colors duration-300"
          >
            AirTronics Engineering Ltd.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md transition-all duration-200
                  ${pathname === item.href 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-700' 
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
                text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
                text-gray-700 dark:text-gray-200 mr-2"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
                text-gray-700 dark:text-gray-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 dark:border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md transition-all duration-200 mb-1
                  ${pathname === item.href 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-700' 
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

