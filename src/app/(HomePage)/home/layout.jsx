import React from 'react'
import Navbar from '../_components/navbar'
import Footer from '../_components/footer'

export default function HomeLayout({children}) {
  return (
    <div>
        <Navbar />
        
        <main>
            {children}
        </main>
      
      <Footer />
    </div>
  )
}


