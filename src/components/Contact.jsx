import React, { useState } from 'react';

const Contact = () => {

const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
    // Handle subscription logic here
  };

return (
    <div className="min-h-[85vh] bg-zinc-900 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl text-center">
            <h1 className="text-white text-4xl md:text-5xl font-light tracking-wider mb-12">
                SUBSCRIBE FOR LATEST UPDATES
            </h1>
            
            <div className="flex items-center gap-0 max-w-xl mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-l-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-primary hover:bg-primary text-black font-semibold px-6 py-4 rounded-r-full flex items-center gap-2 transition-colors"
                >
                    <span className="text-xl">⊕</span>
                    <span className="uppercase text-sm tracking-wide">Subscribe</span>
                </button>
            </div>
        </div>
    </div>
);
}

export default Contact