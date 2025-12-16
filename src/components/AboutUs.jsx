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
    
    <div id='about' className="min-h-screen bg-background text-white relative overflow-hidden py-12">
        <motion.section initial={{opacity:0, y:30}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true, amount:0.3}} id="details" className="bg-background text-white pb-20 px-10 md:px-24">
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

                    <br /><br />We extend our sincere gratitude to our supervisor, Mrs. Kalhari  whose continuous guidance and constructive feedback have been invaluable throughout this project. We also thank the athletes, coaches, testers, and feedback contributors who helped refine our ideas and improve the platform’s accuracy and usability. Their support has played a key role in shaping the final outcome of our work.</p>
            </div>
        </motion.section>

        <motion.section initial={{opacity:0, y:30}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true, amount:0.3}} id="team" className="bg-background text-white pb-10 px-10 md:px-24">
            <div className="max-w-a7xl mx-auto">
                <div className="relative">
                    {/* Prev / Next */}
                    <button
                        aria-label="Previous"
                        onClick={() => {
                            const track = document.getElementById('team-scroll');
                            if (!track) return;
                            track.scrollBy({ left: -track.clientWidth * 0.6, behavior: 'smooth' });
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/6 border border-white/10 p-2 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        aria-label="Next"
                        onClick={() => {
                            const track = document.getElementById('team-scroll');
                            if (!track) return;
                            track.scrollBy({ left: track.clientWidth * 0.6, behavior: 'smooth' });
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/6 border border-white/10 p-2 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Scrollable track */}
                    <div
                        id="team-scroll"
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-8 md:px-4 scrollbar-none"
                        tabIndex={0}
                        role="list"
                        aria-label="Team members carousel"
                        onKeyDown={(e) => {
                            const track = document.getElementById('team-scroll');
                            if (!track) return;
                            if (e.key === 'ArrowRight') track.scrollBy({ left: track.clientWidth * 0.6, behavior: 'smooth' });
                            if (e.key === 'ArrowLeft') track.scrollBy({ left: -track.clientWidth * 0.6, behavior: 'smooth' });
                        }}
                    >
                        {/* Card 1 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex flex-col items-center gap-4 mb-3">
                                <img src={udev} alt="Udev Nuyavin" className="w-30 h-30 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Udev Nuyavin</h3>
                                    <p className="text-white/75 text-sm">Project Manager</p>
                                </div>
                                 <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev Github">
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        >
                                        <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                    </svg></a>
                            </div>
                            </div>
                           
                        </article>

                        {/* Card 2 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex flex-col items-center gap-4 mb-3">
                                <img src={kalana} alt="Kalana Jayaweera" className="w-30 h-30 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Kalana Jayaweera</h3>
                                    <p className="text-white/75 text-sm text-center">ML Developer</p>
                                </div>
                                 <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev Github">
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        >
                                        <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                    </svg>
                                </a>
                            </div>
                            </div>
                           
                        </article>

                        {/* Card 3 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex flex-col items-center gap-4 mb-3">
                                <img src={loku} alt="Kalana Malhara" className="w-30 h-30 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Kalana Malhara</h3>
                                    <p className="text-white/75 text-sm text-center">ML Developer</p>
                                </div>
                                 <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev Github">
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        >
                                        <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                    </svg></a>
                            </div>
                            </div>
                           
                        </article>

                        {/* Card 4 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex flex-col items-center gap-4 mb-3">
                                <img src={thewan} alt="Thewan Sewmin" className="w-30 h-30 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Thewan Sewmin</h3>
                                    <p className="text-white/75 text-sm text-center">ML Developer</p>
                                </div>
                                 <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev Github">
                                   <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        >
                                        <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                    </svg></a>
                            </div>
                            </div>
                           
                        </article>

                        {/* Card 5 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex flex-col items-center gap-4 mb-3">
                                <img src={buddhima} alt="Buddhima Jothiwansa" className="w-30 h-30 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Buddhima Jothiwansa</h3>
                                    <p className="text-white/75 text-sm text-center">Frontend & Backend Developer</p>
                                </div>
                                 <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev Github">
                                   <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        >
                                        <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                    </svg></a>
                            </div>
                            </div>
                           
                        </article>

                        {/* Card 6 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex flex-col items-center gap-4 mb-3">
                                <img src={dinuka} alt="Dinuka Samarasinghe" className="w-30 h-30 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Dinuka Samarasinghe</h3>
                                    <p className="text-white/75 text-sm text-center">Frontend & Backend Developer</p>
                                </div>
                                 <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Udev Github">
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        >
                                        <path d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63 0.3 12 0.3z"/>
                                    </svg></a>
                            </div>
                            </div>
                           
                        </article>
                        

                        
                    </div>
                    <style>{`
                                                /* Chrome, Safari, Edge, Opera */
                                                #team-scroll::-webkit-scrollbar { display: none; }
                                                /* Firefox */
                                                #team-scroll { scrollbar-width: none; -ms-overflow-style: none; }
                                            `}</style>    
                   
                </div>
            </div>
        </motion.section>
        
        
    </div>
);
}

export default AboutUs