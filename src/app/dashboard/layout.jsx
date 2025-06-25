import React from 'react'
import Navbar from '../dashboard/_components/navbar'


export default function HomeLayout({children}) {
  return (
    <div>
        <Navbar />
        
        <main>
            {children}
        </main>
      
      {/* <Footer /> */}
    </div>
  )
}


