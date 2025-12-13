"use client";

import { useState } from 'react';
import Image from 'next/image';
import { CometCard } from "@/components/ui/comet-card";
import tailwind from "../public/tailwind.png";
import react from "../public/react.png";
import nextjs from "../public/nextjs.png";
import html from "../public/html.png";
import node from "../public/node.png";
import js from "../public/javascript.png";
import github from "../public/github.png";
import python from "../public/python.png";
import java from "../public/java.png";

const MobileTechnologies = () => {
  const [activeTech, setActiveTech] = useState(0);
  
  const techAssets = [
    { 
      id: 1,
      icon: react, 
      name: "React", 
      ticker: "RCT", 
      description: "Frontend library for building user interfaces",
      level: "Expert",
      experience: "3+ years",
      category: "Frontend",
      trend: "+24.5%",
      performance: "98.7%",
      color: "#61DAFB",
      cardGradient: "linear-gradient(135deg, #0a192f 0%, #112240 50%, #1d3a5f 100%)",
      accentColor: "#61DAFB",
      chipColor: "from-blue-400 to-cyan-300",
      hologram: "radial-gradient(circle at 30% 30%, rgba(97, 218, 251, 0.15) 0%, transparent 60%)"
    },
    { 
      id: 2,
      icon: nextjs, 
      name: "Next.js", 
      ticker: "NXT", 
      description: "Full-stack React framework for production",
      level: "Advanced",
      experience: "2+ years",
      category: "Full-Stack",
      trend: "+31.2%",
      performance: "99.2%",
      color: "#FFFFFF",
      cardGradient: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%)",
      accentColor: "#FFFFFF",
      chipColor: "from-gray-300 to-gray-100",
      hologram: "radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)"
    },
    { 
      id: 3,
      icon: node, 
      name: "Node.js", 
      ticker: "NOD", 
      description: "JavaScript runtime for server-side applications",
      level: "Advanced",
      experience: "3+ years",
      category: "Backend",
      trend: "+18.7%",
      performance: "97.5%",
      color: "#339933",
      cardGradient: "linear-gradient(135deg, #0a290a 0%, #113311 50%, #1d4d1d 100%)",
      accentColor: "#339933",
      chipColor: "from-green-400 to-emerald-300",
      hologram: "radial-gradient(circle at 50% 50%, rgba(51, 153, 51, 0.15) 0%, transparent 60%)"
    },
    { 
      id: 4,
      icon: js, 
      name: "JavaScript", 
      ticker: "JS", 
      description: "Programming language of the web",
      level: "Expert",
      experience: "4+ years",
      category: "Language",
      trend: "+12.3%",
      performance: "99.8%",
      color: "#F7DF1E",
      cardGradient: "linear-gradient(135deg, #2a2400 0%, #3d3400 50%, #514500 100%)",
      accentColor: "#F7DF1E",
      chipColor: "from-yellow-400 to-amber-300",
      hologram: "radial-gradient(circle at 20% 70%, rgba(247, 223, 30, 0.15) 0%, transparent 60%)"
    },
    { 
      id: 5,
      icon: tailwind, 
      name: "Tailwind CSS", 
      ticker: "TWD", 
      description: "Utility-first CSS framework",
      level: "Expert",
      experience: "2+ years",
      category: "Styling",
      trend: "+42.1%",
      performance: "98.9%",
      color: "#06B6D4",
      cardGradient: "linear-gradient(135deg, #001a1f 0%, #002b33 50%, #00414d 100%)",
      accentColor: "#06B6D4",
      chipColor: "from-cyan-400 to-teal-300",
      hologram: "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)"
    },
    { 
      id: 6,
      icon: github, 
      name: "GitHub", 
      ticker: "GH", 
      description: "Version control and collaboration platform",
      level: "Advanced",
      experience: "4+ years",
      category: "DevOps",
      trend: "+15.6%",
      performance: "100%",
      color: "#181717",
      cardGradient: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%)",
      accentColor: "#F0F6FC",
      chipColor: "from-purple-400 to-violet-300",
      hologram: "radial-gradient(circle at 40% 40%, rgba(240, 246, 252, 0.1) 0%, transparent 60%)"
    },
    { 
      id: 7,
      icon: python, 
      name: "Python", 
      ticker: "PY", 
      description: "High-level programming language",
      level: "Intermediate",
      experience: "2+ years",
      category: "Language",
      trend: "+28.9%",
      performance: "95.4%",
      color: "#3776AB",
      cardGradient: "linear-gradient(135deg, #0a1f33 0%, #112e4d 50%, #1d3e66 100%)",
      accentColor: "#3776AB",
      chipColor: "from-blue-500 to-sky-400",
      hologram: "radial-gradient(circle at 60% 30%, rgba(55, 118, 171, 0.15) 0%, transparent 60%)"
    },
    { 
      id: 8,
      icon: java, 
      name: "Java", 
      ticker: "JV", 
      description: "Object-oriented programming language",
      level: "Intermediate",
      experience: "2+ years",
      category: "Language",
      trend: "+8.7%",
      performance: "92.3%",
      color: "#007396",
      cardGradient: "linear-gradient(135deg, #001f29 0%, #00303d 50%, #004152 100%)",
      accentColor: "#007396",
      chipColor: "from-indigo-400 to-blue-300",
      hologram: "radial-gradient(circle at 30% 60%, rgba(0, 115, 150, 0.15) 0%, transparent 60%)"
    },
    { 
      id: 9,
      icon: html, 
      name: "HTML/CSS", 
      ticker: "WEB", 
      description: "Core technologies for web pages",
      level: "Expert",
      experience: "5+ years",
      category: "Web",
      trend: "+5.4%",
      performance: "99.9%",
      color: "#E34F26",
      cardGradient: "linear-gradient(135deg, #290a00 0%, #3d1300 50%, #521d00 100%)",
      accentColor: "#E34F26",
      chipColor: "from-orange-500 to-red-400",
      hologram: "radial-gradient(circle at 70% 70%, rgba(227, 79, 38, 0.15) 0%, transparent 60%)"
    }
  ];

  return (
    <div className='mt-24 mb-24 px-4'>
      {/* Header - Matching your page theme */}
      <div className='text-center mb-12'>
        <div className='inline-flex items-center gap-3 mb-4'>
          <div className='flex gap-1'>
            <div className='w-2 h-2 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse'></div>
            <div className='w-2 h-2 rounded-full bg-blue-500 animate-pulse' style={{animationDelay: '0.2s'}}></div>
            <div className='w-2 h-2 rounded-full bg-purple-500 animate-pulse' style={{animationDelay: '0.4s'}}></div>
          </div>
          <h2 className='font-mono text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest'>
            PREMIUM TECH CARDS
          </h2>
        </div>
        
        <div className='text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl font-bold mb-4'>
          <span className='block text-gray-900 dark:text-white'>TECHNOLOGY</span>
          <span className='block'>
            <span className='text-green-600 dark:text-[#00FF6A] font-mono'>{"CREDIT CARDS"}</span>
            
          </span>
        </div>
        
        <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light'>
          Exclusive premium technology cards with verified expertise and unlimited potential.
        </p>
      </div>

      {/* Cards Grid */}
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10'>
          {techAssets.map((tech, index) => (
            <div
              key={tech.id}
              className='relative'
              onClick={() => setActiveTech(index)}
              onMouseEnter={() => setActiveTech(index)}
            >
              <CometCard
                rotateDepth={12}
                translateDepth={15}
                className="w-full h-full"
              >
                {/* Premium Credit Card Container */}
                <div className={`relative rounded-2xl overflow-hidden h-full min-h-[300px] transition-all duration-300 ${
                  activeTech === index ? 'ring-2 ring-green-500/30 dark:ring-[#00FF6A]/30' : ''
                }`}>
                  
                  {/* Card Background with Gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{ background: tech.cardGradient }}
                  />
                  
                  {/* Holographic Overlay */}
                  <div 
                    className="absolute inset-0 mix-blend-overlay opacity-30"
                    style={{ background: tech.hologram }}
                  />
                  
                  {/* Subtle Pattern */}
                  <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.3)_50%,transparent_55%)]"></div>
                  
                  {/* Card Content */}
                  <div className="relative h-full p-6 flex flex-col">
                    
                    {/* Card Header - American Express Style */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        {/* Tech Logo in Card Style */}
                        <div className="relative">
                          <div className="p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20">
                            <div className="relative w-10 h-10">
                              <Image 
                                src={tech.icon} 
                                alt={tech.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Card Title */}
                        <div>
                          <div className="text-xs font-mono text-gray-400 tracking-widest">
                            {tech.ticker}
                          </div>
                          <div className="text-2xl font-bold text-white mt-1">
                            {tech.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {tech.category}
                          </div>
                        </div>
                      </div>
                      
                      {/* Premium Chip */}
                      <div className="relative">
                        <div className={`w-10 h-7 rounded-lg bg-gradient-to-br ${tech.chipColor} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/40"></div>
                          <div className="absolute top-0 left-1/2 h-full w-px bg-white/40"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Performance Section */}
                    <div className="flex-1 flex items-center justify-between mb-6">
                      {/* Performance Badge */}
                      <div className="relative">
                        <div className="px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20">
                          <div className="text-xs text-gray-400 font-mono mb-1">PERFORMANCE</div>
                          <div className={`text-2xl font-bold ${
                            parseInt(tech.performance) >= 98 
                              ? 'text-green-400' 
                              : 'text-amber-400'
                          }`}>
                            {tech.performance}
                          </div>
                        </div>
                        
                        {/* Level Badge */}
                        <div className="absolute -bottom-2 -right-2">
                          <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20">
                            <span className="text-xs font-bold text-white">{tech.level}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Trend Indicator */}
                      <div className="text-right">
                        <div className="text-xs text-gray-400 font-mono mb-1">GROWTH</div>
                        <div className={`text-2xl font-bold ${
                          tech.trend.startsWith('+') 
                            ? 'text-green-400' 
                            : 'text-red-400'
                        }`}>
                          {tech.trend}
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Details Section */}
                    <div className="pt-4 border-t border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-400 font-mono mb-1">EXPERIENCE</div>
                          <div className="text-lg font-semibold text-white">{tech.experience}</div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-xs text-gray-400 font-mono mb-1">VALID THRU</div>
                          <div className="text-lg font-semibold text-white">12/29</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Number - American Express Style */}
                    <div className="mt-4">
                      <div className="font-mono text-sm tracking-[0.2em] text-white/80">
                         ••••  ••••  ••••  {tech.ticker.padStart(4, '0')}
                      </div>
                    </div>
                    
                    {/* Active Indicator */}
                    {activeTech === index && (
                      <div className="absolute top-4 right-4">
                        <div className="relative">
                          <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-[#00FF6A]"></div>
                          <div className="absolute inset-0 animate-ping rounded-full bg-green-500/40 dark:bg-[#00FF6A]/40"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Metallic Accent Lines */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  </div>
                </div>
              </CometCard>
            </div>
          ))}
        </div>

        {/* Selected Card Details */}
        

        {/* Status Bar */}
       
      </div>
    </div>
  );
};

export default MobileTechnologies;