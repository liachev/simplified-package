import Link from 'next/link'

export default function ContactPage() {
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
              <li><Link href="/business" className="text-gray-600 hover:text-blue-600">Business Solutions</Link></li>
              <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <section className="w-full py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team of real estate experts</p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Property Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600">123 Real Estate Avenue, Suite 500<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@multiverseplatform.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 text-xl mr-4">🕒</div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday-Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                    <span role="img" aria-label="Facebook">📘</span>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                    <span role="img" aria-label="Twitter">🐦</span>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                    <span role="img" aria-label="Instagram">📷</span>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                    <span role="img" aria-label="LinkedIn">🔗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
          <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map would be displayed here</p>
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
