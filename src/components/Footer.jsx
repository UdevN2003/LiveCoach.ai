import React from 'react'
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/100 to-white/10 backdrop-blur-md text-white py-20 px-10 md:px-24 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary/20 rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}  
        className="max-w-7xl mx-auto relative z-10"
      >
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Brand Section */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              LiveCoach.AI
            </motion.h2>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Revolutionizing sports training through AI-powered motion analysis and personalized coaching.
            </p>
            <motion.p 
              className="text-primary text-sm font-semibold"
              whileHover={{ scale: 1.05, color: "#FFD700" }}
            >
              Train. Track. Transform.
            </motion.p>
          </motion.div>

         

          {/* Contact Info */}
          <div className='justify-items-end'>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          className='col-span-1'>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3 text-gray-300"
                whileHover={{ x: 5, color: "#FFD700" }}
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">livecoachai@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-300"
                whileHover={{ x: 5, color: "#FFD700" }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm">Colombo, Sri Lanka</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-300"
                whileHover={{ x: 5, color: "#FFD700" }}
              >
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm mr-4">Follow us:</span>
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/livecoach.ai?igsh=MTZpcWU1M2NyeXdseA==", label: "Instagram" },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Icon 
                    size={16}
                    />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <motion.p 
              className="text-gray-400 text-sm text-center md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              © 2026 LiveCoach.AI. All rights reserved.
            </motion.p>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}

export default Footer;
