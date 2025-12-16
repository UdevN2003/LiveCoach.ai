import React from 'react'
import HeroBg from "../assets/images/Hero-Background.png"
import Navbar from './Navbar'
import hero from '../assets/images/hero-lcw.png'
import hero2 from '../assets/images/hero-2.png'
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden">

      <motion.div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60">
        <img 
          src={HeroBg}
          alt="Boxing background" 
          className="w-full h-full object-cover opacity-5"
        />
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}>
        <Navbar></Navbar>
      </motion.div>

      {/* Mobile and Desktop Layout */}
      <div className='min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-0 pt-8 lg:pt-0'>
          
          {/* Hero Content */}
        <motion.div initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
 className="relative z-10 flex flex-col items-center lg:items-start justify-start gap-6 lg:gap-10 lg:pl-32 flex-1 order-2 lg:order-1 text-center lg:text-left">
          
          {/* Main Heading */}
          <h1 className="w-full">
            <div className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-abeezee leading-tight">
              TRAIN SMARTER WITH
            </div>
            <div className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              LIVECOACH.AI
            </div>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-text max-w-sm sm:max-w-md lg:max-w-xl leading-relaxed px-4 lg:px-0">
            LiveCoach.AI analyzes your performance, gives instant feedback
            and helps you master your technique like a pro.
            <br />
            <span className="font-semibold">Anytime, Anywhere</span>
          </p>

          {/* CTA Button for Mobile */}
          <button className="lg:hidden bg-primary text-black px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors mt-4">
            Get Started
          </button>
        </motion.div>

        {/* Hero Image Container */}
        <motion.div initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
 className="relative z-10 flex-1 w-full h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
          <img 
            src={hero} 
            alt="hero image" 
            className="h-full w-auto max-w-full object-contain lg:max-h-[80vh]"
          />
        </motion.div>

        {/* Background Shape - Desktop only */}
        <div
          className="hidden xl:block absolute top-0 right-0 h-full w-full bg-primary
          [clip-path:polygon(80%_0%,100%_0%,100%_100%,40%_100%)] pointer-events-none opacity-20 lg:opacity-100">
        </div>
      </div>
    </div>
  )
}

export default Hero