import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

function Platformlayout({children}) {
  return (
    
      <ClerkProvider>
        {children}
      </ClerkProvider>
    
  )
}

export default Platformlayout
