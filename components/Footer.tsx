import Link from 'next/link'
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Industries', href: '/industries' },
        { name: 'Why Heresite', href: '/why-heresite' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Technical Support', href: '/support' },
        { name: 'Documentation', href: '/docs' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      text: '+92 335 2869956 / +92 300 2241481',
      href: 'tel:+923352869956',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: 'info@airtronics.com.pk',
      href: 'mailto:info@airtronics.com.pk',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: 'Karachi, Pakistan',
      href: 'https://maps.google.com',
    },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      href: '#',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: '#',
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 pt-12 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">AirTronics Engineering Ltd</h2>
            <p className="mb-6 text-gray-400">
              Innovative Corrosion Protection for a Sustainable Future
            </p>
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.values(footerSections).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
              <span>© {currentYear} AirTronics Engineering Ltd. All rights reserved.</span>
              <span className="md:ml-2 text-gray-600 text-xs">
                • Powered by{' '}
                <a 
                  href="https://seedinov.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  Seedinov
                </a>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

