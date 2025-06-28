import React from 'react'
import { Award, ArrowRight, PlayCircle } from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Badge lucide*/}
        <div className="inline-flex items-center gap-x-2 bg-indigo-100/80 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-shadow">
          <Award size={16} className="text-indigo-600" />
          <span className="tracking-wide">Best Task Tracker</span>
        </div>

        {/* Heading  */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">Capture, organize, and tackle</span><br />
           your to-dos from anywhere.
        </h1>

        {/* Description  */}
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Stay organized and <span className="font-medium text-indigo-700">efficient</span> with Inbox, Boards, and Planner. Every to-do, idea, or  <span className="font-medium text-pink-600">responsibility</span> —no matter how small—finds its place, keeping you at the top of your game.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button className="mt-2 group" size="lg" asChild>
            <Link href='sign-up' className="flex items-center gap-2">
              <span>Get Started - It's Free</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button variant="outline" className="mt-2 group" size="lg">
            <Link href="#" className="flex items-center gap-2">
              <PlayCircle size={18} className="text-indigo-600" />
              <span>See how it works</span>
            </Link>
          </Button>
        </div>

        
      </div>
    </div>
  )
}