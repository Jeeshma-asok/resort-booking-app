import React from 'react'

function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-lg">Seaside Serenity Resort</h4>
          <p className="mt-2 text-sm text-gray-400">123 Ocean Drive, Bayview — Open daily 8:00 AM – 8:00 PM</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Contact</h4>
          <p className="mt-2 text-sm text-gray-400">Phone: +91 123-456-7890</p>
          <p className="mt-1 text-sm text-gray-400">Email: hello@seasideserenity.example</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="facebook" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" aria-label="instagram" className="text-gray-300 hover:text-white">Instagram</a>
            <a href="#" aria-label="twitter" className="text-gray-300 hover:text-white">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Seaside Serenity Resort — All rights reserved</div>
    </footer>
  )
}

export default Footer;