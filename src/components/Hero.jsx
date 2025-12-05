import React from 'react'
import HeroBg from "../assets/images/Hero-background.png"
import Navbar from './Navbar'
import hero from '../assets/images/hero-lcw.png'
import hero2 from '../assets/images/hero-2.png'

function Hero() {
  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60">
        <img 
          src={HeroBg}
          alt="Boxing background" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <Navbar></Navbar>

      <div className='flex flex-row items-center'>
          {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-start gap-10 my-56 px-32">
          {/* Main Heading */}
          <h1 className="text-left ">
            <div className="text-shadow-glow text-6xl md:text-7xl font-bold font-abeezee">
              Train Smarter With
            </div>
            <div className="text-shadow-glow text-6xl md:text-7xl font-bold">
              AI - Powered Coaching
            </div>
          </h1>

          {/* Subheading */}
          <p className="text-shadow-glow text-left text-xl text-text max-w-xl leading-relaxed">
            LiveCoach.AI analyzes your performance, gives instant feedback
            and helps you master your technique like a pro.
            <br />
            <span className="font-semibold">Anytime, Anywhere</span>
          </p>
        </div>

        <div
        className="hidden lg:block absolute top-0 right-0 h-full w-full bg-primary
        [clip-path:polygon(80%_0%,100%_0%,100%_100%,40%_100%)]">
        </div>
        <div className='relative scale-[1.5] drop-shadow-2xl'>
          <img src={hero} alt="hero image"/>
        </div>
      </div>

      


    </div>
  )
}

export default Hero