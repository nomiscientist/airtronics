// d:\nomi\clones\v0\my-app\components\Clients.tsx
import Image from 'next/image'

// Import all logos
import lgLogo from '@/assets/lg-logo.png'
import haierLogo from '@/assets/haier-logo.png'
import sabroLogo from '@/assets/sabro-logo.png'
import hitachiLogo from '@/assets/hitachi-logo.png'
import shipyardLogo from '@/assets/shipyard-logo.png'
import indusHospitalLogo from '@/assets/indus-hospital-logo.png'
import theHiveLogo from '@/assets/the-hive-logo.png'
import saptLogo from '@/assets/sapt-logo.png'

const clientsList = [
  {
    name: "LG",
    logo: lgLogo,
  },
  {
    name: "Haier",
    logo: haierLogo,
  },
  {
    name: "Sabro",
    logo: sabroLogo,
  },
  {
    name: "Hitachi",
    logo: hitachiLogo,
  },
  {
    name: "Shipyard",
    logo: shipyardLogo,
  },
  {
    name: "Indus Hospital",
    logo: indusHospitalLogo,
  },
  {
    name: "The Hive",
    logo: theHiveLogo,
  },
  {
    name: "SAPT",
    logo: saptLogo,
  },
];

export default function Clients() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Our Esteemed Clientele
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
          We are proud to work with industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clientsList.map((client) => (
            <div key={client.name} className="client-card">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={200}
                height={100}
                className="w-full h-full object-contain transition-transform duration-300"
              />
              <div className="client-name">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}