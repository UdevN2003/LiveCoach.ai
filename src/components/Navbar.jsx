import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  const [showContactModal, setShowContactModal] = useState(false);

  const contact = () => {
    setShowContactModal(true);
  };

  const closeModal = () => {
    setShowContactModal(false);
  };

  return (
    <>
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-8 md:px-16 lg:pr-32 pt-4 sm:pt-6 w-full top-0 left-0 bg-transparent h-16 sm:h-20">
          {/* Logo Container - Responsive */}
          <div className='flex items-center'>
              <img 
                src={logo} 
                alt="LiveCoach.ai Logo" 
                className="h-32 sm:h-14 md:h-16 lg:h-32 xl:h-44 w-auto object-contain" 
              />
          </div>
          
          {/* Navigation Links */}
          <div className="flex gap-4 sm:gap-6 lg:gap-8 items-center">
            <a href="#about" className="hover:text-gray-300 transition-colors text-white sm:text-[#141414] text-sm sm:text-base hidden sm:block">
              About Us
            </a>
            <button 
              onClick={contact} 
              className="bg-black text-primary px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2 rounded-md font-semibold hover:bg-primary hover:text-black transition-colors text-xs sm:text-sm lg:text-base"
            >
              Contact
            </button>
          </div> 
      </nav>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-background rounded-lg p-6 sm:p-8 max-w-sm sm:max-w-md w-full mx-4 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#ff0000] text-xl font-bold"
            >
              ×
            </button>
            
            <h2 className="text-xl text-primary sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Contact Us</h2>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="font-semibold text-text-default-700 text-sm sm:text-base">Email:</h3>
                <p className="text-text-muted text-sm sm:text-base">livecoachai@gmail.com</p>
              </div>
            </div>
            
            <button 
              onClick={closeModal}
              className="mt-4 sm:mt-6 w-full bg-black text-white px-4 sm:px-6 py-2 rounded-md font-semibold hover:text-[#ff0000] transition-colors text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar