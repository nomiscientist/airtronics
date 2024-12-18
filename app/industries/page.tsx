import PageWrapper from '@/components/PageWrapper'
import Image from 'next/image'
import hvac from '@/assets/HVAC-units.jpg'
import container from '@/assets/shipping-1.jpg'
import oil from '@/assets/oil-refining-facility-with-pipes-in-the-foreground.webp'
import pipeline from '@/assets/Oil-1.webp'


export default function Industries() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Industries We Serve</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image 
              src={hvac} alt="Industrial HVAC units installed on a rooftop"
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">HVAC</h2>
              <p className="text-gray-600 dark:text-gray-400">Extending the life and efficiency of heating, ventilation, and air conditioning systems with our advanced protective coatings.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image 
              src={container}
              alt="Large container port with cargo ships and loading cranes"
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Marine</h2>
              <p className="text-gray-600 dark:text-gray-400">Protecting vessels, docks, and offshore structures from corrosion and environmental stress with our specialized marine coatings.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image 
              src={oil}
              alt="Complex network of industrial pipes at an oil refinery"
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Oil & Gas</h2>
              <p className="text-gray-600 dark:text-gray-400">Ensuring the integrity and reliability of pipelines, storage tanks, and other critical infrastructure in the oil and gas sector.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image 
              src={pipeline}
              alt="Illuminated power generation facility at night with dramatic sky"
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Power Generation</h2>
              <p className="text-gray-600 dark:text-gray-400">Enhancing the durability and performance of equipment in power plants and renewable energy systems with our protective coatings.</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

