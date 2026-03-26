import React, { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/images/nav-logo.svg'

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
      <nav className="relative z-30 flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 pt-4 pb-4 sm:pt-6 w-full backdrop-blur-md bg-black/10 border-b border-white/10">
          {/* Logo Container - Modern with Hover Effect */}
          <motion.div 
            className='flex items-center'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
              <motion.img 
                src={logo} 
                alt="LiveCoach.ai Logo" 
                className="h-12 w-auto object-contain filter drop-shadow-lg" 
                whileHover={{ 
                  filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
                  transition: { duration: 0.3 }
                }}
              />
          </motion.div>
          
          {/* Navigation Links with Modern Styling */}
          <div className="flex gap-4 sm:gap-6 lg:gap-8 items-center">
            <motion.a 
              href="#about" 
              className="relative text-white text-sm sm:text-base font-medium hidden sm:block group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              About Us
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              ></motion.span>
            </motion.a>
            
            <motion.button 
              onClick={contact} 
              className="relative bg-gradient-to-r from-primary to-yellow-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm lg:text-base overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(255, 215, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">Contact</span>
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              ></motion.div>
            </motion.button>
          </div> 
      </nav>

      {/* Modern Contact Modal */}
      {showContactModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 relative border border-gray-600 shadow-2xl"
          >
            <motion.button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.h2>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Email:</h3>
                  <p className="text-gray-300 text-sm">livecoach94@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Location:</h3>
                  <p className="text-gray-300 text-sm">Colombo, Sri Lanka</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Response Time:</h3>
                  <p className="text-gray-300 text-sm">Within 24 hours</p>
                </div>
              </motion.div>
            </div>
            
            <motion.button 
              onClick={closeModal}
              className="mt-8 w-full bg-gradient-to-r from-primary to-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
