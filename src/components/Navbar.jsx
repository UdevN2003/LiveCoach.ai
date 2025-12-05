import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  const [showContactModel, setShowContactModel] = useState(false);

  const contact = () => {
    setShowContactModel(true);
  };

  const closeModal = () => {
    setShowContactModel(false);
  };

  return (
    <>
      <nav className="relative z-10 flex items-center justify-between pr-32 pt-6 w-full top-0 left-0 bg-transparent h-20">
          <div className='scale-50'>
              <img src={logo} alt="LiveCoach.ai Logo" className="h-auto max-h-96" />
          </div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="hover:text-gray-900 transition-colors text-[#141414]">About Us</a>
            <button onClick={contact} className="bg-black text-primary px-6 py-2 rounded-md font-semibold hover:bg-primary hover:text-black transition-colors">
              Contact
            </button>
          </div> 
      </nav>

      {/* Contact Modal */}
      {showContactModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#141414] rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-text-muted hover:text-[#ff0000] text-xl font-bold"
            >
              ×
            </button>
            
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text-muted-700">Email:</h3>
                <p className="text-text-muted-600">livecoachai@gmail.com</p>
              </div>
            </div>
            
            <button 
              onClick={closeModal}
              className="mt-6 w-full bg-black text-white px-6 py-2 rounded-md font-semibold hover:text-[#ff0000] transition-colors"
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