import React from 'react';
import featureOne from "../assets/images/feature-one.png"
import featureTwo from "../assets/images/feature-two.png"
import featureThree from "../assets/images/feature-three.png"
import { motion } from "framer-motion";

function Features() {
  return (
    <div className="relative bg-black/40 backdrop-blur-sm pt-20">

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Powerful <span className="bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">Features</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Advanced AI technology meets athletic training to deliver unprecedented insights and improvements
        </p>
      </motion.div>

      {/* Feature 1: Camera-Based Motion Tracking */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-8 mb-32"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1 relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-yellow-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <motion.img 
              src={featureOne} 
              alt="Camera-Based Motion Tracking" 
              className="w-full rounded-2xl relative z-10 shadow-2xl group-hover:shadow-primary/25 transition-all duration-500"
              whileHover={{ y: -10 }}
            />
          </motion.div>
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              whileHover={{ scale: 1.02, color: "#FFD700" }}
              transition={{ duration: 0.3 }}
            >
              Camera-Based<br />
              <span className="bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
                Motion Tracking
              </span>
            </motion.h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our AI-powered vision system analyzes your movements using your device's camera, 
              no extra sensors or wearables required. It identifies key body positions, motion 
              patterns, and technique errors in real time, giving you instant visual feedback 
              and helping you refine your performance with precision.
            </p>
            <motion.a 
              href="#" 
              className="inline-flex items-center text-primary hover:text-yellow-300 font-semibold text-lg transition-all duration-300 group"
              whileHover={{ x: 10 }}
            >
              Learn More
              <motion.svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Feature 2: Performance Analytics Dashboard */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-8 mb-32"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-1 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              whileHover={{ scale: 1.02, color: "#FFD700" }}
              transition={{ duration: 0.3 }}
            >
              Performance<br />
              <span className="bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
                Analytics Dashboard
              </span>
            </motion.h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Track your growth through an interactive analytics dashboard that displays your 
              key metrics including accuracy, speed, endurance, and consistency. View performance 
              trends over time, compare sessions, and uncover data-driven insights to fine-tune 
              your training.
            </p>
            <motion.a 
              href="#" 
              className="inline-flex items-center text-primary hover:text-yellow-300 font-semibold text-lg transition-all duration-300 group"
              whileHover={{ x: 10 }}
            >
              Explore Dashboard
              <motion.svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
          <motion.div 
            className="order-2 md:order-2 relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <motion.img 
              src={featureTwo} 
              alt="Performance Analytics Dashboard" 
              className="w-full rounded-2xl relative z-10 shadow-2xl group-hover:shadow-blue-400/25 transition-all duration-500"
              whileHover={{ y: -10 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Feature 3: AI-Powered Training Recommendations */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-8 mb-32"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1 relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <motion.img 
              src={featureThree} 
              alt="AI-Powered Training Recommendations" 
              className="w-full rounded-2xl relative z-10 shadow-2xl group-hover:shadow-green-400/25 transition-all duration-500"
              whileHover={{ y: -10 }}
            />
          </motion.div>
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              whileHover={{ scale: 1.02, color: "#FFD700" }}
              transition={{ duration: 0.3 }}
            >
              AI-Powered<br />
              <span className="bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
                Training Recommendations
              </span>
            </motion.h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Receive personalized training plans tailored to your skill level, goals, and progress. 
              Our AI coach analyzes your performance data to suggest specific drills, exercises, 
              and techniques that will help you improve faster and more efficiently than ever before.
            </p>
            <motion.a 
              href="#" 
              className="inline-flex items-center text-primary hover:text-yellow-300 font-semibold text-lg transition-all duration-300 group"
              whileHover={{ x: 10 }}
            >
              Get Recommendations
              <motion.svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ scale: 1.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}

export default Features;
