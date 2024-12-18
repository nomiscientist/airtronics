import PageWrapper from '@/components/PageWrapper'
import Image from 'next/image'
import team from '@/assets/1.webp'

export default function About() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">About AirTronics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Story</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              AirTronics was founded in 2024 with a vision to revolutionize the protective coatings industry in Pakistan. 
              Our journey began when we recognized the growing need for high-quality, durable coatings in various sectors 
              of our rapidly developing economy.
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Through extensive research and a commitment to excellence, we forged a partnership with Heresite, 
              a renowned US-based leader in protective coating technology. This collaboration has enabled us to bring 
              world-class corrosion protection solutions to Pakistan, setting new standards in the industry.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Today, as the exclusive distributor of Heresite Protective Coatings in Pakistan, we are proud to offer 
              innovative solutions that ensure durability, efficiency, and cost-effectiveness for our clients across 
              various industries.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image 
              src={team}
              alt="Industrial professionals reviewing documentation at an oil field site"
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Mission</h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 italic text-gray-600 dark:text-gray-400">
            &ldquo;To deliver premium corrosion protection solutions, ensuring durability and reliability in every sector we serve.&rdquo;
          </blockquote>
          <p className="text-gray-600 dark:text-gray-400">
            At AirTronics, we are committed to providing cutting-edge protective coating solutions that not only meet but exceed 
            our clients&apos; expectations. We strive to be at the forefront of innovation, continuously improving our products and 
            services to address the evolving needs of industries in Pakistan and beyond.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Excellence", description: "We strive for the highest standards in product quality and customer service." },
              { title: "Innovation", description: "We embrace advanced technology to provide cutting-edge solutions." },
              { title: "Sustainability", description: "We promote eco-friendly practices to protect the environment." },
              { title: "Reliability", description: "We build trust through consistent and dependable service." }
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

