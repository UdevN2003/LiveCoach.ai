import React from 'react'
import { motion } from "framer-motion";

import { Facebook, Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white  py-20 px-10 md:px-24">
        
      <motion.div initial={{opacity:0, y:30}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true, amount:0.3}}  className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}

        <div className="flex justify-between items-start mb-16">

          {/* Left Section - Brand */}

          <div>
            <h2 className="text-2xl font-semibold mb-4">LiveCoach.AI</h2>
            <p className="text-gray-400 text-sm">Train. Track. Transform.</p>
          </div>

        {/* Right Section - Social Media */}

                  <div>
                    <p className="text-primary text-sm mb-3 font-bold">Follow Us</p>
                    <div className="flex flex-col gap-2">
                      {/* <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                        <Facebook size={16} />
                        <span>Facebook</span>
                      </a> */}
                      
                      <a href="https://www.instagram.com/livecoach.ai?igsh=MTZpcWU1M2NyeXdseA==" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
                        <Instagram size={16} />
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Copyright and Links */}

        <div className="flex justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-xs">Copyright © 2025. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer