import React from 'react'
import HeroBg from "../assets/images/Hero-background.png"

function Hero() {
  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60">
        <img 
          src={HeroBg}
          alt="Boxing background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-12 py-6">
        <div className="text-2xl font-roboto">LiveCoach.AI</div>
        <div className="flex gap-8 items-center">
          <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          <button className="bg-primary text-black px-6 py-2 rounded-md font-semibold hover:bg-primary transition-colors">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 pt-32 pb-20">
        {/* Main Heading */}
        <h1 className="text-center mb-12">
          <div className="text-6xl md:text-7xl font-bold mb-4">
            Train Smarter With
          </div>
          <div className="text-6xl md:text-7xl font-bold">
            AI - Powered Coaching
          </div>
        </h1>

        {/* Subheading */}
        <p className="text-center text-xl text-text max-w-xl leading-relaxed">
          LiveCoach.AI analyzes your performance, gives instant feedback
          and helps you master your technique like a pro.
          <br />
          <span className="font-semibold">Anytime, Anywhere</span>
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero