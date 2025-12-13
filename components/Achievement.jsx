"use client"
import Image from "next/image"

const memories = [
  {
    title: "Hackathon Winner — Smart Automation",
    description: "Built a full-stack automation tool under strict time constraints. Focused on clean architecture, fast execution, and real-world usability.",
    image: "/hackathon-1.jpg",
    align: "left",
    year: "2023",
    prize: "$10,000",
    position: "🥇 1st Place",
    technologies: ["React", "Node.js", "AI/ML", "MongoDB"]
  },
  {
    title: "Hackathon Winner — AI Powered Tool",
    description: "Designed and shipped an AI-based solution with live demos. Worked on system design, frontend polish, and deployment within hours.",
    image: "/hackathon-2.jpg",
    align: "right",
    year: "2024",
    prize: "$5,000",
    position: "🥈 2nd Place",
    technologies: ["Next.js", "Blockchain", "Web3", "Solidity"]
  },
]

export default function HackathonMemories() {
  return (
    <section className="relative max-w-6xl mx-auto py-24 px-6">
      {/* Section Heading */}
      <div className="mb-20 text-center">
        <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 font-mono uppercase">
          MEMORY THREAD
        </p>
        <h2 className="text-6xl font-bold text-gray-900 dark:text-white mt-4">
          <span className="text-green-600 dark:text-[#00FF6A] font-mono">HACKATHON</span> VICTORIES
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Connected through code, driven by innovation
        </p>
      </div>

      {/* Main Container with Connected Cards */}
      <div className="relative min-h-[600px] flex flex-col items-center">
        
        {/* Connecting Thread - Single SVG connecting both cards */}
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          {/* Main connecting path from first card to second card */}
          <path
            d="M250,250 Q500,150 750,350"
            fill="none"
            stroke="#00FF6A"
            strokeWidth="2"
            strokeDasharray="5,3"
          />
          
          {/* Connection points at card positions */}
          <circle cx="250" cy="250" r="6" fill="#00FF6A" />
          <circle cx="750" cy="350" r="6" fill="#3B82F6" />
        </svg>

        {/* First Card (2023) - Left aligned */}
        <div className="relative w-full max-w-lg mb-32">
          {/* Card */}
          <div className="relative bg-white dark:bg-[#0D0D0D] 
            border border-gray-200 dark:border-[#2C2C2C]
            rounded-2xl shadow-lg dark:shadow-none
            p-6 z-10 ml-0">
            
            {/* Year Badge */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2">
              <div className="font-mono font-bold text-gray-700 dark:text-gray-300 text-sm rotate-90 whitespace-nowrap">
                2023
              </div>
            </div>

            {/* Card Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  HACKATHON #1
                </div>
                <div className="text-xl font-bold text-green-600 dark:text-[#00FF6A]">
                  $10,000
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Smart Automation Tool
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🥇</span>
                <span className="font-bold text-gray-700 dark:text-gray-300">1st Place</span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              Built a full-stack automation tool under strict time constraints. Focused on clean architecture, fast execution, and real-world usability.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "AI/ML", "MongoDB"].map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Second Card (2024) - Right aligned */}
        <div className="relative w-full max-w-lg mt-32">
          {/* Card */}
          <div className="relative bg-white dark:bg-[#0D0D0D] 
            border border-gray-200 dark:border-[#2C2C2C]
            rounded-2xl shadow-lg dark:shadow-none
            p-6 z-10 ml-auto">
            
            {/* Year Badge */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2">
              <div className="font-mono font-bold text-gray-700 dark:text-gray-300 text-sm -rotate-90 whitespace-nowrap">
                2024
              </div>
            </div>

            {/* Card Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  HACKATHON #2
                </div>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  $5,000
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                AI Powered Platform
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🥈</span>
                <span className="font-bold text-gray-700 dark:text-gray-300">2nd Place</span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              Designed and shipped an AI-based solution with live demos. Worked on system design, frontend polish, and deployment within hours.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Blockchain", "Web3", "Solidity"].map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Simple Legend */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00FF6A]"></div>
            <span className="font-mono text-sm text-gray-700 dark:text-gray-300">2023 • 1st Place</span>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-[#00FF6A] to-[#3B82F6]"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
            <span className="font-mono text-sm text-gray-700 dark:text-gray-300">2024 • 2nd Place</span>
          </div>
        </div>
      </div>

      {/* Simple Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">HACKATHONS</div>
        </div>
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">1st & 2nd</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">POSITIONS</div>
        </div>
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">$15K</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">PRIZES</div>
        </div>
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">350+</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">COMPETITORS</div>
        </div>
      </div>
    </section>
  )
}