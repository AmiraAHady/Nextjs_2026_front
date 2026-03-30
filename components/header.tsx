import React from 'react'
import Navigation from './navigation'
import Logo from './logo'

export default function Header() {
  return (
    <header className='bg-white shadow-md'>
        <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
            {/* logo */}
            <Logo/>
            <Navigation />
        </div>
    </header>
  )
}
