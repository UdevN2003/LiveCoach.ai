import React from 'react'
import Navbar from './Navbar'
import herobg from '../assets/videos/herobg.mov'
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/* Navbar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20"
      >
        <Navbar />
      </motion.div>

      {/* Centered Hero Content */}
      <div className='relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-8 md:px-16'>
        
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          
          {/* Main Heading with Glow Effect */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <motion.div 
              whileHover={{ scale: 1.02, textShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}
              transition={{ duration: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-abeezee leading-tight mb-4"
            >
              <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">
                TRAIN SMARTER
              </span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02, textShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}
              transition={{ duration: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-abeezee leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                WITH <br />
              </span>
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                LIVECOACH.AI
              </span>
              
            </motion.div>
          </motion.h1>

          {/* Subheading with Animation */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Experience the future of sports training with{' '} <br />
            <motion.span 
              whileHover={{ color: "#FFD700" }}
              className="font-semibold text-white cursor-default"
            >
              LiveCoach.AI
            </motion.span>
            {' '}Real-time analysis, instant feedback, and professional coaching at your fingertips.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)",
                backgroundColor: "#FFD700"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              Start Training Now
            </motion.button>
            
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                borderColor: "#FFD700",
                color: "#FFD700"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute top-1/2 left-10 hidden lg:block"
          >
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 bg-primary/20 rounded-full backdrop-blur-sm"
            ></motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute top-1/4 right-10 hidden lg:block"
          >
            <motion.div 
              animate={{ 
                y: [0, 30, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero