import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* left side */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Terms</a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Contact</a>
            </div>
            
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors mt-2 sm:mt-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}