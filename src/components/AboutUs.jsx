import React from 'react'
import { motion } from "framer-motion";

import aboutusOne from '../assets/images/aboutus-one.png';

import udev from "../assets/images/udev.jpeg";
import kalana from "../assets/images/kalana.jpg";
import buddhima from "../assets/images/buddhima.jpeg"
import loku from "../assets/images/loku.jpeg"
import thewan from "../assets/images/thewan.jpeg"
import dinuka from "../assets/images/dinuka.jpeg"

const AboutUs = () => {

return ( 
    
    <div id='about' className="min-h-screen bg-black/40 backdrop-blur-sm text-white relative overflow-hidden py-12">
        <motion.section initial={{opacity:0, y:30}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true, amount:0.3}} id="details" className="bg-transparent text-white pb-20 px-10 md:px-24">
            {/* TITLE SECTION */}
                <div className="w-[90%] max-w-7xl mx-auto mb-6 lg:mb-10">
                    <h1 className="font-abeezee text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 lg:mb-6 text-primary text-center ">
                        MEET THE TEAM
                    </h1>
                </div>
                <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-abeezee items-center">We are , </h2>
                <p className="text-white/85 mb-4 leading-relaxed text-xl">
                    A passionate student team dedicated to developing innovative, accessible, and impactful technology solutions for athletes. As part of the Software Development Group Project, we are buildinga platform designed to transform athletic training by delivering real time technique analysis. Combining expertise in frontend and backend development, AI modelling, UI/UX design, and system engineering, our team collaborates to create a system that bridges the gap between athletes and high quality coaching support.

                    <br /><br />We extend our sincere gratitude to our supervisor, Mrs. Kalhari  whose continuous guidance and constructive feedback have been invaluable throughout this project. We also thank the athletes, coaches, testers, and feedback contributors who helped refine our ideas and improve the platform's accuracy and usability. Their support has played a key role in shaping the final outcome of our work.</p>
            </div>
        </motion.section>

        <motion.section initial={{opacity:0, y:30}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true, amount:0.3}} id="team" className="bg-transparent text-white pb-10 px-10 md:px-24">
            <div className="max-w-a7xl mx-auto">
                <div className="relative flex items-center justify-center h-100vh">
                    {/* Scrollable track */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {/* Card 1 */}
                        <motion.article 
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:1 , y:0}}
                            transition={{duration:0.2, ease:'easeOut'}}
                            viewport={{once:true, amount:0.3}}
                            whileHover={{ 
                                y: -30,
                                scale: 1.05,
                                rotateY: 8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            id="member-1"
                            role="listitem"
                            className="group relative w-full max-w-sm mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm overflow-hidden
                                     hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20
                                     transition-all duration-500 ease-out cursor-pointer min-h-[300px]"
                        >
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                            
                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <motion.div 
                                    className="relative"
                                    whileHover={{ 
                                        scale: 1.2,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >
                                    <img src={udev} alt="Udev Nuyavin" className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg group-hover:border-primary/50 transition-all duration-300" />
                                    {/* Animated ring */}
                                    <div className="absolute inset-0 rounded-full border-3 border-primary/0 group-hover:border-primary/60 group-hover:animate-pulse transition-all duration-300"></div>
                                </motion.div>
                                
                                <motion.div 
                                    className="text-center"
                                    initial={{ opacity: 1 }}
                                    whileHover={{ 
                                        scale: 1.08,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">Udev Nuyavin</h3>
                                    <p className="text-white/75 text-base group-hover:text-white/90 transition-colors duration-300">Project Manager</p>
                                </motion.div>
                                
                                <motion.div 
                                    className="flex gap-6"
                                    initial={{ opacity: 0.7, y: 10 }}
                                    whileHover={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="#" 
                                        aria-label="Udev LinkedIn"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                    </motion.a>
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="#" 
                                        aria-label="Udev Github"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                        </svg>
                                    </motion.a>
                                </motion.div>
                            </div>
                            
                            {/* Bottom gradient line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
                        </motion.article>

                        {/* Card 2 */}
                        <motion.article 
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:1 , y:0}}
                            transition={{duration:0.4, ease:'easeOut'}}
                            viewport={{once:true, amount:0.3}}
                            whileHover={{ 
                                y: -30,
                                scale: 1.05,
                                rotateY: 8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative w-full max-w-sm mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm overflow-hidden
                                     hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20
                                     transition-all duration-500 ease-out cursor-pointer min-h-[300px]"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                            
                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <motion.div 
                                    className="relative"
                                    whileHover={{ 
                                        scale: 1.2,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >
                                    <img src={kalana} alt="Kalana Jayaweera" className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg group-hover:border-primary/50 transition-all duration-300" />
                                    <div className="absolute inset-0 rounded-full border-3 border-primary/0 group-hover:border-primary/60 group-hover:animate-pulse transition-all duration-300"></div>
                                </motion.div>
                                
                                <motion.div 
                                    className="text-center"
                                    whileHover={{ scale: 1.08 }}
                                >
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">Kalana Jayaweera</h3>
                                    <p className="text-white/75 text-base group-hover:text-white/90 transition-colors duration-300">ML Developer</p>
                                </motion.div>
                                
                                <motion.div className="flex gap-6">
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="https://www.linkedin.com/in/kalanajayaweera0714/"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                    </motion.a>
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="https://github.com/KalanJayy"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                        </svg>
                                    </motion.a>
                                </motion.div>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
                        </motion.article>

                        {/* Card 3 - Kalana Malhara */}
                        <motion.article 
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:1 , y:0}}
                            transition={{duration:0.6, ease:'easeOut'}}
                            viewport={{once:true, amount:0.3}}
                            whileHover={{ 
                                y: -30,
                                scale: 1.05,
                                rotateY: 8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative w-full max-w-sm mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm overflow-hidden
                                     hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20
                                     transition-all duration-500 ease-out cursor-pointer min-h-[300px]"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                            
                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <motion.div 
                                    className="relative"
                                    whileHover={{ 
                                        scale: 1.2,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >
                                    <img src={loku} alt="Kalana Malhara" className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg group-hover:border-primary/50 transition-all duration-300" />
                                    <div className="absolute inset-0 rounded-full border-3 border-primary/0 group-hover:border-primary/60 group-hover:animate-pulse transition-all duration-300"></div>
                                </motion.div>
                                
                                <motion.div className="text-center" whileHover={{ scale: 1.08 }}>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">Kalana Malhara</h3>
                                    <p className="text-white/75 text-base group-hover:text-white/90 transition-colors duration-300">ML Developer</p>
                                </motion.div>
                                
                                <motion.div className="flex gap-6">
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="https://www.linkedin.com/in/kalana-malhara-5a24a532a/"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                    </motion.a>
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="https://github.com/kalana-03"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                        </svg>
                                    </motion.a>
                                </motion.div>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
                        </motion.article>

                        {/* Card 4 - Thewan Sewmin */}
                        <motion.article 
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:1 , y:0}}
                            transition={{duration:0.2, ease:'easeOut'}}
                            viewport={{once:true, amount:0.3}}
                            whileHover={{ 
                                y: -30,
                                scale: 1.05,
                                rotateY: 8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative w-full max-w-sm mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm overflow-hidden
                                     hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20
                                     transition-all duration-500 ease-out cursor-pointer min-h-[300px]"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                            
                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <motion.div 
                                    className="relative"
                                    whileHover={{ 
                                        scale: 1.2,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >
                                    <img src={thewan} alt="Thewan Sewmin" className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg group-hover:border-primary/50 transition-all duration-300" />
                                    <div className="absolute inset-0 rounded-full border-3 border-primary/0 group-hover:border-primary/60 group-hover:animate-pulse transition-all duration-300"></div>
                                </motion.div>
                                
                                <motion.div className="text-center" whileHover={{ scale: 1.08 }}>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">Thewan Sewmin</h3>
                                    <p className="text-white/75 text-base group-hover:text-white/90 transition-colors duration-300">ML Developer</p>
                                </motion.div>
                                
                                <motion.div className="flex gap-6">
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="https://www.linkedin.com/in/thewan-sewmin-a71687349/"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                    </motion.a>
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="https://github.com/sewmin999"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                        </svg>
                                    </motion.a>
                                </motion.div>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
                        </motion.article>

                        {/* Card 5 - Buddhima Jothiwansa */}
                        <motion.article 
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:1 , y:0}}
                            transition={{duration:0.4, ease:'easeOut'}}
                            viewport={{once:true, amount:0.3}}
                            whileHover={{ 
                                y: -30,
                                scale: 1.05,
                                rotateY: 8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative w-full max-w-sm mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm overflow-hidden
                                     hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20
                                     transition-all duration-500 ease-out cursor-pointer min-h-[300px]"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                            
                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <motion.div 
                                    className="relative"
                                    whileHover={{ 
                                        scale: 1.2,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >
                                    <img src={buddhima} alt="Buddhima Jothiwansa" className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg group-hover:border-primary/50 transition-all duration-300" />
                                    <div className="absolute inset-0 rounded-full border-3 border-primary/0 group-hover:border-primary/60 group-hover:animate-pulse transition-all duration-300"></div>
                                </motion.div>
                                
                                <motion.div className="text-center" whileHover={{ scale: 1.08 }}>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">Buddhima Jothiwansa</h3>
                                    <p className="text-white/75 text-base group-hover:text-white/90 transition-colors duration-300">Frontend & Backend Developer</p>
                                </motion.div>
                                
                                <motion.div className="flex gap-6">
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="https://www.linkedin.com/in/buddhima-jothiwansa-20b91027a/"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                    </motion.a>
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="https://github.com/Buddhima1030"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                        </svg>
                                    </motion.a>
                                </motion.div>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
                        </motion.article>

                        {/* Card 6 - Dinuka Samarasinghe */}
                        <motion.article 
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:1 , y:0}}
                            transition={{duration:0.6, ease:'easeOut'}}
                            viewport={{once:true, amount:0.3}}
                            whileHover={{ 
                                y: -30,
                                scale: 1.05,
                                rotateY: 8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            id="member-1"
                            role="listitem"
                            className="group relative w-full max-w-sm mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm overflow-hidden
                                     hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20
                                     transition-all duration-500 ease-out cursor-pointer min-h-[300px]"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                            
                            <div className="relative z-10 flex flex-col items-center gap-6">
                                <motion.div 
                                    className="relative"
                                    whileHover={{ 
                                        scale: 1.2,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >
                                    <img src={dinuka} alt="Dinuka Samarasinghe" className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg group-hover:border-primary/50 transition-all duration-300" />
                                    <div className="absolute inset-0 rounded-full border-3 border-primary/0 group-hover:border-primary/60 group-hover:animate-pulse transition-all duration-300"></div>
                                </motion.div>
                                
                                <motion.div className="text-center" whileHover={{ scale: 1.08 }}>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">Dinuka Samarasinghe</h3>
                                    <p className="text-white/75 text-base group-hover:text-white/90 transition-colors duration-300">Frontend & Backend Developer</p>
                                </motion.div>
                                
                                <motion.div className="flex gap-6">
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="www.linkedin.com/in/dinukas"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                    </motion.a>
                                    <motion.a 
                                        className="text-white/60 hover:text-primary transition-all duration-300 hover:scale-150" 
                                        href="https://github.com/DinukaS2004"
                                        whileHover={{ rotate: [0, -15, 15, 0] }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                        </svg>
                                    </motion.a>
                                </motion.div>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
                        </motion.article>    
                    </div>
                </div>
            </div>
        </motion.section>
        
        
    </div>
);
}

export default AboutUs