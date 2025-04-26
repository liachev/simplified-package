import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Multiverse Platform</div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
              <li><Link href="/properties" className="text-gray-600 hover:text-blue-600">Properties</Link></li>
              <li><Link href="/auctions" className="text-gray-600 hover:text-blue-600">Auctions</Link></li>
              <li><Link href="/business" className="text-gray-600 hover:text-blue-600">Business Solutions</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Multiverse Platform for Real Estate Solutions</h1>
          <p className="text-xl mb-8">Bridging the gap between virtual and physical real estate markets</p>
          <div className="flex justify-center space-x-4">
            <Link href="/properties" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Browse Properties
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Real Estate Marketplace</h3>
              <p className="text-gray-600 mb-4">Discover properties in both physical and virtual worlds with our comprehensive marketplace.</p>
              <Link href="/properties" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Property Auctions</h3>
              <p className="text-gray-600 mb-4">Participate in transparent and competitive auctions for exclusive real estate opportunities.</p>
              <Link href="/auctions" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Business Solutions</h3>
              <p className="text-gray-600 mb-4">Comprehensive tools for real estate professionals, investors, and businesses.</p>
              <Link href="/business" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="w-full py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-300 relative">
                  {/* Placeholder for property image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Property Image {item}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Modern Property {item}</h3>
                  <p className="text-gray-700 mb-2">123 Example Street, City</p>
                  <p className="text-blue-600 font-bold mb-4">$499,000</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>3 Beds</span>
                    <span>2 Baths</span>
                    <span>1,500 sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/properties" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking for property, financing, construction services, or business solutions, we're here to help.
          </p>
          <Link href="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
            Contact Us Today
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
