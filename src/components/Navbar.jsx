import React from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between pr-32 pt-6 w-full top-0 left-0 bg-transparent h-20">
        <div className='scale-50'>
            <img src={logo} alt="LiveCoach.ai Logo" className="h-auto max-h-96" />
        </div>
        <div className="flex gap-8 items-center">
          <a href="#about" className="hover:text-gray-900 transition-colors text-[#141414]">About Us</a>
          <button className="bg-black text-primary px-6 py-2 rounded-md font-semibold hover:bg-primary hover:text-black transition-colors">
            Contact
          </button>
        </div> 
    </nav>
  )
}

export default Navbar