import React from 'react'

const Benefits = () => {
  return (
    <section className="bg-background text-white py-20 px-10 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        {/* Left Column - Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why Choose <span className="text-white">LiveCoach.AI?</span>
          </h2>
        </div>

        {/* Card 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Accessible Anytime</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Train from anywhere with just your <br />phone camera or webcam – no sensors needed.
          </p>
          <a href="#" className="text-primary text-sm font-medium flex items-center gap-2 hover:underline">
            More Info <span className="text-primary">→</span>
          </a>
        </div>

        {/* Card 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Instant AI Feedback</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Get real-time analysis on your movements, posture, and <br /> techniques.
          </p>
          <a href="#" className="text-primary text-sm font-medium flex items-center gap-2 hover:underline">
            More Info <span className="text-primary">→</span>
          </a>
        </div>

        {/* Card 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Personalized Coaching Plans</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Receive tailor-made drills and improvements based on your performance data.
          </p>
          <a href="#" className="text-primary text-sm font-medium flex items-center gap-2 hover:underline">
            More Info <span className="text-primary">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Benefits