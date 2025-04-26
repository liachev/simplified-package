import Link from 'next/link'

export default function PropertiesPage() {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      address: "123 Oceanview Drive, Malibu",
      price: "$4,250,000",
      beds: 5,
      baths: 4,
      sqft: 3800,
      description: "Stunning oceanfront property with panoramic views and modern amenities."
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      address: "456 Central Avenue, New York",
      price: "$2,750,000",
      beds: 3,
      baths: 3,
      sqft: 2200,
      description: "Luxurious penthouse in the heart of downtown with private terrace."
    },
    {
      id: 3,
      title: "Suburban Family Home",
      address: "789 Maple Street, Austin",
      price: "$850,000",
      beds: 4,
      baths: 3,
      sqft: 2800,
      description: "Spacious family home in a quiet neighborhood with excellent schools."
    },
    {
      id: 4,
      title: "Mountain Retreat",
      address: "101 Pine Ridge, Aspen",
      price: "$1,950,000",
      beds: 4,
      baths: 3,
      sqft: 3200,
      description: "Beautiful mountain home with stunning views and access to hiking trails."
    },
    {
      id: 5,
      title: "Beachfront Condo",
      address: "202 Shoreline Drive, Miami",
      price: "$1,250,000",
      beds: 2,
      baths: 2,
      sqft: 1500,
      description: "Modern beachfront condo with direct access to the beach and resort amenities."
    },
    {
      id: 6,
      title: "Historic Brownstone",
      address: "303 Heritage Lane, Boston",
      price: "$1,850,000",
      beds: 4,
      baths: 3,
      sqft: 3000,
      description: "Beautifully restored historic brownstone with original details and modern updates."
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
              <li><Link href="/properties" className="text-blue-600 hover:text-blue-800">Properties</Link></li>
              <li><Link href="/auctions" className="text-gray-600 hover:text-blue-600">Auctions</Link></li>
              <li><Link href="/business" className="text-gray-600 hover:text-blue-600">Business Solutions</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <section className="w-full py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Our Properties</h1>
          <p className="text-xl">Find your perfect property in our extensive listings</p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="w-full py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Search Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Location</label>
                <input type="text" placeholder="City, State, or ZIP" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Price Range</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Any Price</option>
                  <option>$100k - $500k</option>
                  <option>$500k - $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Property Type</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Condo</option>
                  <option>Apartment</option>
                  <option>Land</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="w-full py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Available Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-300 relative">
                  {/* Placeholder for property image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Property Image
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-gray-700 mb-2">{property.address}</p>
                  <p className="text-blue-600 font-bold mb-4">{property.price}</p>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <Link href={`/properties/${property.id}`} className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
