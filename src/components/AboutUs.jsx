import React from 'react'

const AboutUs = () => {

return ( 
    <div id='about' className="min-h-screen bg-background text-white relative overflow-hidden py-12">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-center mb-12">
                <div className="text-4xl md:text-5xl font-bold mb-4 font-abeezee">
                    Here's who we are
                </div>
                <div className="text-4xl md:text-5xl font-bold">
                    & what our project is about
                </div>
            </h1>
            <div className="flex justify-center mt-8">
                <a
                    href="#learn-more"
                    className="inline-block text-sm px-4 py-2 rounded-full border border-white/30 text-white bg-white/5 transition-transform transform hover:scale-105 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 animate-pulse"
                    aria-label="Get to know more about us"
                >
                    Get to know more about us
                </a>
            </div>
        </div>

        
        <section id="learn-more" className="bg-background text-white py-20 px-10 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Left card - text */}
                <article className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm h-full">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-abeezee">About Our Project</h2>
                    <p className="text-white/85 mb-4 leading-relaxed">
                        LiveCoach.ai is a smart coaching assistant built to help users improve performance,
                        plan goals, and get actionable feedback. We combine simple UX with powerful AI-driven
                        insights so coaching becomes accessible to everyone.
                    </p>
                    <ul className="list-disc list-inside mb-6 text-white/80 space-y-2">
                        <li><strong>Personalized guidance:</strong> Tailored plans based on your progress.</li>
                        <li><strong>Real-time feedback:</strong> Instant suggestions during practice sessions.</li>
                        <li><strong>Progress tracking:</strong> Visualize improvements over time.</li>
                    </ul>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#features"
                            className="inline-block px-5 py-2 rounded-full bg-white/6 border border-white/20 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                        >
                            See features
                        </a>
                        <a
                            href="#team"
                            className="inline-block px-5 py-2 rounded-full bg-transparent border border-white/20 text-white/90 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
                        >
                            Meet the team
                        </a>
                    </div>
                </article>

                {/* Right card - images (6 images total) */}
                <div className="grid grid-cols-3 gap-4 h-full">
                    <div className="group bg-white/4 border border-white/8 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://picsum.photos/800/520?random=1"
                            alt="Team collaborating around a laptop"
                            className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110"
                        />
                    </div>
                    <div className="group bg-white/4 border border-white/8 rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="https://picsum.photos/400/300?random=2"
                            alt="Coach giving feedback"
                            className="w-full h-40 md:h-44 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110"
                        />
                    </div>
                    <div className="group bg-white/4 border border-white/8 rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="https://picsum.photos/400/300?random=3"
                            alt="Analytics dashboard preview"
                            className="w-full h-40 md:h-44 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110"
                        />
                    </div>
                    <div className="group bg-white/4 border border-white/8 rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="https://picsum.photos/400/300?random=4"
                            alt="User practicing with guidance"
                            className="w-full h-40 md:h-44 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110"
                        />
                    </div>
                    <div className="group bg-white/4 border border-white/8 rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="https://picsum.photos/400/300?random=5"
                            alt="Session summary and metrics"
                            className="w-full h-40 md:h-44 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110"
                        />
                    </div>
                    <div className="group bg-white/4 border border-white/8 rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="https://picsum.photos/400/300?random=6"
                            alt="Mobile view of the app"
                            className="w-full h-40 md:h-44 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-110"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="details" className="bg-background text-white py-20 px-10 md:px-24">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-abeezee items-center">We are , </h2>
                <p className="text-white/85 mb-4 leading-relaxed text-xl">
                    a passionate student team dedicated to developing innovative, accessible, and impactful technology solutions for athletes. As part of the Software Development Group Project, we are building Real Time Coaching – Powered by AI, a platform designed to transform athletic training by delivering real-time, AI-driven technique analysis. Combining expertise in frontend and backend development, AI modelling, UI/UX design, and system engineering, our team collaborates to create a system that bridges the gap between athletes and high-quality coaching support.

                    <br /><br />We extend our sincere gratitude to our supervisor, Mrs. Kalhari  whose continuous guidance and constructive feedback have been invaluable throughout this project. We also thank the athletes, coaches, testers, and feedback contributors who helped refine our ideas and improve the platform’s accuracy and usability. Their support has played a key role in shaping the final outcome of our work.</p>
            </div>
        </section>

        <section id="team" className="bg-background text-white py-10 px-10 md:px-24">
            <div className="max-w-a7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-abeezee">Meet the team</h2>
                    
                </div>

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
                            <div className="flex items-center gap-4 mb-3">
                                <img src="https://picsum.photos/seed/member1/200" alt="Aisha Khan" className="w-16 h-16 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Aisha Khan</h3>
                                    <p className="text-white/75 text-sm">Product Designer</p>
                                </div>
                            </div>
                            <p className="text-sm text-white/70 mb-4 leading-relaxed">Designs inclusive interfaces for learners with dyslexia, focusing on clarity and legibility.</p>
                            <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha Twitter">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12.07 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                                </a>
                            </div>
                        </article>

                        {/* Card 2 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <img src="https://picsum.photos/seed/member1/200" alt="Aisha Khan" className="w-16 h-16 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Aisha Khan</h3>
                                    <p className="text-white/75 text-sm">Product Designer</p>
                                </div>
                            </div>
                            <p className="text-sm text-white/70 mb-4 leading-relaxed">Designs inclusive interfaces for learners with dyslexia, focusing on clarity and legibility.</p>
                            <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha Twitter">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12.07 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                                </a>
                            </div>
                        </article>

                        {/* Card 3 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <img src="https://picsum.photos/seed/member1/200" alt="Aisha Khan" className="w-16 h-16 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Aisha Khan</h3>
                                    <p className="text-white/75 text-sm">Product Designer</p>
                                </div>
                            </div>
                            <p className="text-sm text-white/70 mb-4 leading-relaxed">Designs inclusive interfaces for learners with dyslexia, focusing on clarity and legibility.</p>
                            <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha Twitter">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12.07 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                                </a>
                            </div>
                        </article>

                        {/* Card 4 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <img src="https://picsum.photos/seed/member1/200" alt="Aisha Khan" className="w-16 h-16 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Aisha Khan</h3>
                                    <p className="text-white/75 text-sm">Product Designer</p>
                                </div>
                            </div>
                            <p className="text-sm text-white/70 mb-4 leading-relaxed">Designs inclusive interfaces for learners with dyslexia, focusing on clarity and legibility.</p>
                            <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha Twitter">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12.07 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                                </a>
                            </div>
                        </article>

                        {/* Card 5 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <img src="https://picsum.photos/seed/member1/200" alt="Aisha Khan" className="w-16 h-16 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Aisha Khan</h3>
                                    <p className="text-white/75 text-sm">Product Designer</p>
                                </div>
                            </div>
                            <p className="text-sm text-white/70 mb-4 leading-relaxed">Designs inclusive interfaces for learners with dyslexia, focusing on clarity and legibility.</p>
                            <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha Twitter">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12.07 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                                </a>
                            </div>
                        </article>

                        {/* Card 6 */}
                        <article
                            id="member-1"
                            role="listitem"
                            className="snap-center flex-shrink-0 w-[78%] sm:w-80 md:w-72 lg:w-80 bg-white/5 border border-white/8 rounded-2xl p-5 shadow-lg transform transition duration-500 hover:scale-105"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <img src="https://picsum.photos/seed/member1/200" alt="Aisha Khan" className="w-16 h-16 rounded-full object-cover border-2 border-white/10 shadow-sm" />
                                <div>
                                    <h3 className="text-lg font-semibold">Aisha Khan</h3>
                                    <p className="text-white/75 text-sm">Product Designer</p>
                                </div>
                            </div>
                            <p className="text-sm text-white/70 mb-4 leading-relaxed">Designs inclusive interfaces for learners with dyslexia, focusing on clarity and legibility.</p>
                            <div className="flex gap-3">
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha LinkedIn">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.8v2.2h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z"/></svg>
                                </a>
                                <a className="text-white/80 hover:text-white transition" href="#" aria-label="Aisha Twitter">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12.07 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                                </a>
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
        </section>
        
        
    </div>
);
}

export default AboutUs