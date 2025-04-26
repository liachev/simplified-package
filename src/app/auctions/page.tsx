import Link from 'next/link'

export default function AuctionsPage() {
  // Sample auction data
  const auctions = [
    {
      id: 1,
      title: "Luxury Beachfront Estate",
      location: "Malibu, California",
      startingBid: "$3,500,000",
      currentBid: "$4,200,000",
      endDate: "May 15, 2025",
      description: "Rare opportunity to acquire a stunning beachfront property with panoramic ocean views."
    },
    {
      id: 2,
      title: "Historic Downtown Building",
      location: "Chicago, Illinois",
      startingBid: "$2,800,000",
      currentBid: "$3,100,000",
      endDate: "May 20, 2025",
      description: "Iconic 1920s building in prime downtown location, ideal for mixed-use development."
    },
    {
      id: 3,
      title: "Mountain View Ranch",
      location: "Aspen, Colorado",
      startingBid: "$5,200,000",
      currentBid: "$5,750,000",
      endDate: "May 25, 2025",
      description: "Expansive 200-acre ranch with mountain views and luxury main residence."
    },
    {
      id: 4,
      title: "Waterfront Development Land",
      location: "Miami, Florida",
      startingBid: "$8,500,000",
      currentBid: "$9,200,000",
      endDate: "June 5, 2025",
      description: "Prime waterfront development opportunity in rapidly growing area."
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
              <li><Link href="/auctions" className="text-blue-600 hover:text-blue-800">Auctions</Link></li>
              <li><Link href="/business" className="text-gray-600 hover:text-blue-600">Business Solutions</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <section className="w-full py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Property Auctions</h1>
          <p className="text-xl">Exclusive real estate opportunities through our transparent auction platform</p>
        </div>
      </section>

      {/* Auction Information */}
      <section className="w-full py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">How Our Auctions Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-semibold mb-2">Register</h3>
                <p className="text-gray-600">Create an account and complete verification to participate in auctions.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-semibold mb-2">Research</h3>
                <p className="text-gray-600">Review property details, inspection reports, and legal documents.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-semibold mb-2">Bid</h3>
                <p className="text-gray-600">Place bids during the auction period and track your status in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Auctions */}
      <section className="w-full py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Current Auctions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auctions.map((auction) => (
              <div key={auction.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="h-48 bg-gray-300 relative">
                  {/* Placeholder for property image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Auction Property Image
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{auction.title}</h3>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Live Auction</span>
                  </div>
                  <p className="text-gray-700 mb-2">{auction.location}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Starting Bid</p>
                      <p className="font-semibold">{auction.startingBid}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Current Bid</p>
                      <p className="font-semibold text-blue-600">{auction.currentBid}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Ends On</p>
                      <p className="font-semibold">{auction.endDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Bids</p>
                      <p className="font-semibold">12</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{auction.description}</p>
                  <Link href={`/auctions/${auction.id}`} className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    View Auction Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Auctions */}
      <section className="w-full py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Upcoming Auctions</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting Bid</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auction Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Lakefront Estate</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">Lake Tahoe, Nevada</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">$6,500,000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">June 15, 2025</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <a href="#" className="text-blue-600 hover:text-blue-900">Register Interest</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Commercial Office Building</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">Seattle, Washington</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">$12,800,000</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">June 22, 2025</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <a href="#" className="text-blue-600 hover:text-blue-900">Register Interest</a>
                  </td>
                </tr>
              </tbody>
            </table>
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
