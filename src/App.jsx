import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import herobg from './assets/videos/herobg.mov';

import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Interviews from "./components/Interviews";
import AboutUs from "./components/AboutUs";

gsap.registerPlugin(useGSAP);

function App() {
  const appRef = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);

  useGSAP(
    () => {
      xTo.current = gsap.quickTo(".flair", "x", {
        duration: 0.8,
        ease: "power3",
      });

      yTo.current = gsap.quickTo(".flair", "y", {
        duration: 0.8,
        ease: "power3",
      });
    },
    { scope: appRef }
  );

  const handleMouseMove = (e) => {
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  };

  return (
    <div ref={appRef} onMouseMove={handleMouseMove} className="relative min-h-screen">
      
      {/* Global Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        >
          <source src={herobg} type="video/mp4" />
        </video>
        {/* Global overlay for better content readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* GSAP element */}
        <div className="flair" />

        <Hero />
        <Benefits />
        <Features />
        <Interviews />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
