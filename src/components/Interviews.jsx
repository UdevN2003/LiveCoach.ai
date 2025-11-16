import React, { useState, useEffect, useRef } from "react";

// Import thumbnails
import thumbnailOne from "../assets/images/feature-one.png";
import thumbnailTwo from "../assets/images/feature-two.png";
import thumbnailThree from "../assets/images/feature-three.png";

// Import videos
import videoOne from "../assets/videos/Video-01.mp4";
import videoTwo from "../assets/videos/Video-02.mp4";
import videoThree from "../assets/videos/Video-03.mp4";

function Interview() {
  const [activeVideo, setActiveVideo] = useState(1);
  const [autoStarted, setAutoStarted] = useState(false);
  const [fade, setFade] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoStarted(true);
    }, 1000);
  }, []);

  // FADE EFFECT
  const Fade = () => {
    setFade(true);
    setTimeout(() => setFade(false), 500);
  };

  const handleSelectOne = () => {
    setActiveVideo(1);
    Fade();
    setAutoStarted(true);
  };

  const handleSelectTwo = () => {
    setActiveVideo(2);
    Fade();
    setAutoStarted(true);
  };

  const handleSelectThree = () => {
    setActiveVideo(3);
    Fade();
    setAutoStarted(true);
  };

  // GET VIDEO SRC
  const getCurrentVideo = () => {
    if (activeVideo === 1) 
      return videoOne;
    if (activeVideo === 2) 
      return videoTwo;
    if (activeVideo === 3) 
      return videoThree;
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center bg-background text-white p-10 relative">
      
      {/* TITLE SECTION */}
      <div className="w-[90%] max-w-7xl mx-auto mb-10">
        <p className="text-4xl md:text-2xl font-semibold font-mono mb-6 text-primary text-center">
          TRUSTED BY MANY
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white text-center">
          INTERVIEWS AND SURVEYS
        </h1>
      </div>

      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between gap-10">
        
        {/* VIDEO PLAYER */}
        <div className="relative flex-1 h-[500px] rounded-2xl overflow-hidden">
          {autoStarted && (
            <video
              ref={videoRef}
              key={activeVideo}
              className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
              src={getCurrentVideo()}
              muted
              loop
              autoPlay
            />
          )}
        </div>

        {/* THUMBNAILS */}
        <div className="flex flex-col gap-6 w-[220px] z-20">

          {/* Thumbnail One */}
          <div
            onClick={handleSelectOne}
            className={`group cursor-pointer relative rounded-xl overflow-hidden transition-all duration-300 
              ${activeVideo === 1 ? "scale-105 ring-4 ring-yellow-500": "opacity-80 hover:scale-105"}`}
            style={{ width: "250px", height: "150px" }}
          >
            <img
              src={thumbnailOne}
              alt="Interview One"
              className="w-full h-full object-cover"
            />

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-left px-3 text-xs font-semibold">
                Mr. Pemlal Fernando<br/>
                Former First-class Cricketer<br/>
                Level 2 Qualified Cricket Coach
              </p>
            </div>
          </div>

          {/* Thumbnail Two */}
          <div
            onClick={handleSelectTwo}
            className={`group cursor-pointer relative rounded-xl overflow-hidden transition-all duration-300 
              ${activeVideo === 2 ? "scale-105 ring-4 ring-yellow-500" : "opacity-80 hover:scale-105"}`}
            style={{ width: "250px", height: "150px" }}
          >
            <img
              src={thumbnailTwo}
              alt="Interview Two"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-left px-3 text-xs font-semibold">
                Mr. Sudath Munaweera<br/>
                Former First-class Cricketer<br/>
                First-class Match Refree
              </p>
            </div>
          </div>

          {/* Thumbnail Three */}
          <div
            onClick={handleSelectThree}
            className={`group cursor-pointer relative rounded-xl overflow-hidden transition-all duration-300 
              ${activeVideo === 3 ? "scale-105 ring-4 ring-yellow-500" : "opacity-80 hover:scale-105"}`}
            style={{ width: "250px", height: "150px" }}
          >
            <img
              src={thumbnailThree}
              alt="Interview Three"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-center px-3 text-sm font-medium">
                Survey Feedback – Athlete Satisfaction
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Interview;
