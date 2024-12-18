import Image from 'next/image'
import heresite from '@/assets/heresite-facebook-og-image.jpg'


export default function WhyHeresite() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Why Choose Heresite?</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Unparalleled Protection</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Heresite has been at the forefront of protective coating technology since 1935. With over 85 years of 
            experience, Heresite has continuously innovated to provide the best possible protection against corrosion, 
            chemicals, and extreme temperatures.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Our coatings are specifically designed to withstand the harshest environments, from coastal areas with high 
            salt content to industrial settings with aggressive chemicals. When you choose Heresite, you&apos;re choosing a 
            legacy of excellence and proven performance.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image 
            src={heresite}
            alt="Heresite Protective Coatings LLC corporate branding"
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Comparison with Traditional Coatings</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-800 dark:text-gray-200">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-800 dark:text-gray-200">Heresite Coatings</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2 text-gray-800 dark:text-gray-200">Traditional Coatings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Corrosion Resistance</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Excellent (15,000+ hours salt spray)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Good (2,000-5,000 hours salt spray)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Heat Resistance</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Up to 250°F (121°C) continuous</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Typically up to 180°F (82°C)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Chemical Resistance</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">High (wide range of chemicals)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Moderate (limited range)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Durability</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Long-lasting (10+ years)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Variable (3-7 years)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Application</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Specialized (ensures optimal performance)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2 text-gray-600 dark:text-gray-400">Standard (may vary in quality)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Extended Equipment Life", description: "Heresite coatings significantly extend the life of your equipment, reducing replacement costs." },
            { title: "Reduced Maintenance", description: "Our durable coatings minimize the need for frequent maintenance and repairs." },
            { title: "Energy Efficiency", description: "Heresite coatings maintain heat transfer efficiency, ensuring optimal equipment performance." },
            { title: "Versatility", description: "Suitable for a wide range of applications across various industries." },
            { title: "Eco-Friendly Options", description: "We offer low-VOC and water-based coatings for environmentally conscious projects." },
            { title: "Cost-Effective", description: "While initially more expensive, Heresite coatings provide long-term cost savings." }
          ].map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Technical Specifications and Certifications</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>ASTM B117 Salt Spray Resistance: 15,000+ hours</li>
            <li>ISO 12944-9 Cyclic Offshore Testing: 25 weeks (4,200 hours)</li>
            <li>ASTM D4587 QUV Resistance: 2,000 hours</li>
            <li>Dry Film Thickness (DFT): 0.8-1.2 mils (20-30 microns)</li>
            <li>ASTM D522 Bend Test: 1/8-inch (3.0 mm) mandrel with no cracks or delamination</li>
            <li>Heat Transfer Reduction: &lt;1% as applied for heat transfer components</li>
            <li>UV-C Resistance: 1,500 hours</li>
            <li>ASTM D4585 Humidity Resistance: 5,000 hours</li>
            <li>ASTM D3363 Pencil Hardness: 2B</li>
          </ul>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            These specifications demonstrate Heresite&apos;s commitment to providing high-performance coatings that meet and exceed industry standards.
          </p>
        </div>
      </section>
    </div>
  )
}

