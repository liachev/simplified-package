import Link from 'next/link'

export default function BusinessPage() {
  // Sample business solutions
  const businessSolutions = [
    {
      id: 1,
      title: "Investment Analysis",
      description: "Comprehensive analysis of real estate investment opportunities with ROI projections and risk assessment.",
      icon: "📊"
    },
    {
      id: 2,
      title: "Property Management",
      description: "End-to-end property management solutions for landlords and property investors.",
      icon: "🏢"
    },
    {
      id: 3,
      title: "Market Intelligence",
      description: "Data-driven insights into real estate market trends, pricing, and growth opportunities.",
      icon: "📈"
    },
    {
      id: 4,
      title: "Financing Solutions",
      description: "Custom financing packages for real estate acquisitions and development projects.",
      icon: "💰"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Multiverse Platform</div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/properties" className="text-gray-600 hover:text-blue-600">Properties</Link></li>
              <li><Link href="/auctions" className="text-gray-600 hover:text-blue-600">Auctions</Link></li>
              <li><Link href="/business" className="text-blue-600 hover:text-blue-800">Business Solutions</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <section className="w-full py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Business Solutions</h1>
          <p className="text-xl">Comprehensive tools and services for real estate professionals</p>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="w-full py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessSolutions.map((solution) => (
              <div key={solution.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <Link href={`/business/${solution.id}`} className="text-blue-600 hover:text-blue-800">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Urban Development Project</h3>
              <p className="text-gray-500 mb-4">New York City</p>
              <p className="text-gray-600 mb-4">
                A major urban redevelopment project that transformed an industrial area into a thriving mixed-use community.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <span className="font-semibold">ROI:</span> 32% over 5 years
              </div>
              <Link href="#" className="text-blue-600 hover:text-blue-800">Read Case Study →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Commercial Portfolio Expansion</h3>
              <p className="text-gray-500 mb-4">Chicago, Illinois</p>
              <p className="text-gray-600 mb-4">
                Strategic acquisition and management of commercial properties resulting in portfolio growth of 250%.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <span className="font-semibold">ROI:</span> 28% over 4 years
              </div>
              <Link href="#" className="text-blue-600 hover:text-blue-800">Read Case Study →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Residential Investment Strategy</h3>
              <p className="text-gray-500 mb-4">Austin, Texas</p>
              <p className="text-gray-600 mb-4">
                Data-driven approach to identifying emerging neighborhoods for residential property investment.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <span className="font-semibold">ROI:</span> 45% over 3 years
              </div>
              <Link href="#" className="text-blue-600 hover:text-blue-800">Read Case Study →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Real Estate Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you achieve your real estate business goals with our comprehensive solutions.
          </p>
          <Link href="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Multiverse Platform</h3>
              <p className="text-gray-400">Bridging the gap between virtual and physical real estate markets</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
                <li><Link href="/auctions" className="text-gray-400 hover:text-white">Auctions</Link></li>
                <li><Link href="/business" className="text-gray-400 hover:text-white">Business Solutions</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Multiverse Platform for Real Estate Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
