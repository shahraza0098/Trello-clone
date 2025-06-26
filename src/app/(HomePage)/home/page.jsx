


import React from 'react'
import { Award } from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Award size={16} className="text-blue-600" />
          Best Task Tracker
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Capture, organize, and tackle your to-dos from anywhere.
        </h1>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Stay organized and efficient with Inbox, Boards, and Planner. Every to-do, idea, or responsibility—no matter how small—finds its place, keeping you at the top of your game.
          </p>
        </div>

        {/* button */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          <Button className="mt-6 bg-blue-600" size="lg" asChild>
            <Link href='sign-up'>
            Get Started - It's Free
            </Link>
          </Button>
          <button className="px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
