import React from 'react';
import featureOne from "../assets/images/feature-one.png"
import featureTwo from "../assets/images/feature-two.png"
import featureThree from "../assets/images/feature-three.png"


function Features() {
  return (
    <div className="relative bg-background">

      {/* Feature 1: Camera-Based Motion Tracking */}
      <div className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>
            <img 
              src={featureOne} 
              alt="Camera-Based Motion Tracking" 
              className="w-full rounded-lg relative z-10 shadow-2xl shadow-yellow-500/30"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Camera-Based<br />Motion Tracking
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our AI-powered vision system analyzes your movements using your device's camera, 
              no extra sensors or wearables required. It identifies key body positions, motion 
              patterns, and technique errors in real time, giving you instant visual feedback 
              and helping you refine your performance with precision.
            </p>
            <a href="#" className="inline-flex items-center text-primary hover:underline font-semibold text-lg transition-colors">
              More Info
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Feature 2: Performance Analytics Dashboard */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Performance<br />Analytics Dashboard
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Track your growth through an interactive analytics dashboard that displays your 
              key metrics including accuracy, speed, endurance, and consistency. View performance 
              trends over time, compare sessions, and uncover data-driven insights to fine-tune 
              your training.
            </p>
            <a href="#" className="inline-flex items-center text-primary hover:underline font-semibold text-lg transition-colors">
              More Info
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div>
            <img 
              src={featureTwo} 
              alt="Performance Analytics Dashboard" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Feature 3: Coach Athlete Connection */}
      <div className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>
            <img 
              src={featureThree} 
              alt="Coach athlete connection" 
              className="w-full rounded-lg relative z-10 shadow-2xl shadow-yellow-500/30"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Coach-Athlete<br />Connection
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Bridge the gap between athletes and expert coaches through our integrated platform. 
              You can share your performance reports, receive personalized guidance, and even schedule virtual sessions. 
              Coaches can monitor your progress remotely and offer AI-backed recommendations to accelerate your development.
            </p>
            <a href="#" className="inline-flex items-center text-primary hover:underline font-semibold text-lg transition-colors">
              More Info
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Features;