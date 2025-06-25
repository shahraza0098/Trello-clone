

import React from 'react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo placeholder - replace with your actual logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">Logo</span>
          </div>
          
          <div className="flex space-x-4">
            
            <Button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors" asChild>
                <Link href="sign-in">Login</Link>
            </Button>
            
            <Button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors" asChild>
                <Link href="sign-up">Signup for free</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}