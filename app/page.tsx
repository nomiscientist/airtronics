import Image from 'next/image'
import Link from 'next/link'
import wallpaper from '@/assets/industrial-background-1920-x-1080-c098arg81f5juqke.jpg'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src={wallpaper}
          alt="Modern industrial facility with blue and pink lighting"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Innovative Corrosion Protection for a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-lg">
            Exclusive Distributor of Heresite Protective Coatings in Pakistan
          </p>
          <Link 
            href="/products" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200 inline-block"
          >
            Learn More About Heresite Coatings
          </Link>
        </div>
      </section>

      {/* About AirTronics Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About AirTronics</h2>
          <p className="text-xl text-center mb-8">
            AirTronics is the exclusive distributor of Heresite Protective Coatings in Pakistan, 
            bringing world-class corrosion protection solutions to various industries.
          </p>
          <div className="flex justify-center">
            <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Heat and Corrosion Resistance</h3>
              <p className="text-gray-600 dark:text-gray-400">Our coatings provide exceptional protection against extreme temperatures and corrosive environments.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Long-lasting Durability</h3>
              <p className="text-gray-600 dark:text-gray-400">Heresite coatings are engineered to withstand the test of time, reducing maintenance costs.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Global Standard in Protective Coatings</h3>
              <p className="text-gray-600 dark:text-gray-400">Trusted worldwide for their superior quality and performance in various industries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

