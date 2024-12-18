import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import hvac from '@/assets/HVAC-Coating_1.jpg'
import marine from '@/assets/Marine-Protective.jpg'
import coastal from '@/assets/powder-coating-process_1.jpg'
import specialized from '@/assets/SpecializedCoatings-retouched.jpg'
import product from '@/assets/hvac-coating-testimonial.jpg'
import PageWrapper from '@/components/PageWrapper'

// Define interface for ProductCard props
interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  link: string;
}

const ProductCard = ({ title, description, imageUrl, link }: ProductCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <Image src={imageUrl} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <Link href={link} className="text-blue-600 dark:text-blue-400 hover:underline">Learn more</Link>
    </div>
  </div>
)

// Define interface for product items
interface Product {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  link: string;
}

export default function Products() {
  const products: Product[] = [
    {
      title: "HVAC/R Coatings",
      description: "Ideal for heat exchangers, coils, and other HVAC components, providing exceptional corrosion resistance and extending equipment life.",
      imageUrl: hvac,
      link: "#hvac-coatings"
    },
    {
      title: "Marine and Industrial Coatings",
      description: "Engineered to withstand high humidity, saltwater exposure, and harsh marine environments, ensuring long-lasting protection for vessels and offshore installations.",
      imageUrl: marine,
      link: "#marine-coatings"
    },
    {
      title: "Coastal and High-Humidity Solutions",
      description: "Specially formulated to protect equipment in coastal areas and high-humidity environments, preventing corrosion and extending asset lifespan.",
      imageUrl: coastal,
      link: "#coastal-solutions"
    },
    {
      title: "Specialized Coatings",
      description: "Custom formulations for unique applications, tailored to meet specific industrial requirements and challenging environments.",
      imageUrl: specialized,
      link: "#specialized-coatings"
    }
  ]

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Products and Solutions</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Heresite Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Featured Product: HereShield</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image 
                  src={product} 
                  alt="HVAC equipment with HereShield protective coating" 
                  width={300} 
                  height={300} 
                  className="h-48 w-full object-cover md:w-48" 
                />
              </div>
              <div className="p-8">
                <h3 className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">New Product</h3>
                <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">HereShield Water-based Air-dry Coating</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">HereShield is a thin film, low-VOC, direct-to-metal coating available in WB-506 Gray and VR-514w Red Brown. It's specially formulated for marine/saltwater environments and mild to medium chemical environments.</p>
                <div className="mt-4">
                  <Link href="#hereshield" className="text-blue-600 dark:text-blue-400 hover:underline">Learn more about HereShield</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Key Features and Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Corrosion Resistance", description: "Exceptional protection against harsh chemicals and extreme weather conditions." },
              { title: "Heat Resistance", description: "Withstands temperatures up to 250°F (121°C) with excursions to higher temperatures." },
              { title: "UV Resistance", description: "Excellent weathering qualities and UV resistance for outdoor applications." },
              { title: "Versatility", description: "Good adhesion to ferrous and non-ferrous metals without complex pretreatment or primers." },
              { title: "Easy Application", description: "Single component coating that can be spray applied for efficient coverage." },
              { title: "Eco-Friendly Options", description: "Low-VOC and water-based formulations available for environmentally conscious projects." }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Industries and Applications</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our coatings are suitable for a wide range of applications across various industries, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>HVAC systems and components</li>
              <li>Marine equipment and offshore structures</li>
              <li>Oil & gas infrastructure</li>
              <li>Power generation facilities</li>
              <li>Chemical processing plants</li>
              <li>Food and beverage processing equipment</li>
              <li>Pharmaceutical manufacturing equipment</li>
              <li>Wastewater treatment plants</li>
            </ul>
            <div className="mt-6">
              <Link href="/industries" className="text-blue-600 dark:text-blue-400 hover:underline">
                Learn more about the industries we serve
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
