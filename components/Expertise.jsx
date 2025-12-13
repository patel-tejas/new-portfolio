// components/Expertise.js - GEN AI + TECH GRID VERSION
"use client";
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import webDevIcon from "../public/service-icon3.png";
import aiIcon from "../public/service-icon4.png"; // Using SEO icon for AI (replace with AI icon later)
import leetcodeIcon from "../public/service-icon2.png"; // Using web design icon for LeetCode (replace later)

const Expertise = () => {
    const [activeCard, setActiveCard] = useState(0);
    
    const techServices = [
        {
            id: 1,
            title: "Web Development",
            techStack: ["Next.js 14", "React 18", "TypeScript", "Node.js"],
            description: "Building high-performance, scalable web applications with modern full-stack technologies.",
            icon: webDevIcon,
            metrics: { 
                projects: "15+", 
                performance: "99.9%", 
                responseTime: "< 100ms",
                uptime: "99.99%"
            },
            chartData: [85, 88, 90, 92, 94, 96, 98, 99],
            color: "from-green-600 to-emerald-800",
            borderColor: "border-green-500/40",
            accentColor: "text-green-400",
            iconColor: "bg-green-500/20"
        },
        {
            id: 2,
            title: "Gen AI & ML",
            techStack: ["OpenAI API", "LangChain", "Vector DBs", "RAG Systems"],
            description: "Developing intelligent applications with Large Language Models and machine learning integrations.",
            icon: aiIcon,
            metrics: { 
                models: "8+", 
                accuracy: "96.2%", 
                tokensProcessed: "10M+",
                latency: "< 2s"
            },
            chartData: [70, 75, 80, 85, 88, 92, 94, 96],
            color: "from-purple-600 to-indigo-800",
            borderColor: "border-purple-500/40",
            accentColor: "text-purple-400",
            iconColor: "bg-purple-500/20"
        },
        {
            id: 3,
            title: "Problem Solving",
            techStack: ["Algorithms", "Data Structures", "Python", "System Design"],
            description: "Solving complex problems with optimized algorithms and efficient computational thinking.",
            icon: leetcodeIcon,
            metrics: { 
                problems: "250+", 
                contestRating: "1850", 
                efficiency: "99.3%",
                streak: "120 days"
            },
            chartData: [75, 78, 82, 85, 88, 90, 92, 95],
            color: "from-amber-600 to-orange-800",
            borderColor: "border-amber-500/40",
            accentColor: "text-amber-400",
            iconColor: "bg-amber-500/20"
        }
    ];

    return (
        <div className='mt-24 sm:mt-16 relative mb-24'>
            {/* Section Header */}
            <div className='text-center mb-16 sm:w-full  max-w-3xl mx-auto px-4'>
                <div className='inline-flex items-center gap-3 mb-4'>
                    <div className='flex gap-1'>
                        <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
                        <div className='w-2 h-2 rounded-full bg-purple-500 animate-pulse' style={{animationDelay: '0.2s'}}></div>
                        <div className='w-2 h-2 rounded-full bg-amber-500 animate-pulse' style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <h2 className='font-mono text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest'>
                        TECH EXPERTISE DASHBOARD
                    </h2>
                </div>
                
                <AnimatedText 
                    text="Core Competencies" 
                    className="uppercase text-5xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4" 
                />
                
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                    Specialized skills across modern development, artificial intelligence, and computational problem-solving.
                </p>
            </div>
            
            {/* Tech Grid Cards */}
            <div className='grid grid-cols-3 md:grid-cols-1 gap-6 max-w-6xl mx-auto px-4'>
                {techServices.map((service, index) => (
                    <div 
                        key={service.id}
                        className={`relative group transition-all duration-300 ${
                            activeCard === index ? 'scale-[1.02] z-10' : 'hover:scale-[1.01]'
                        }`}
                        onMouseEnter={() => setActiveCard(index)}
                    >
                        {/* Tech Card */}
                        <div className={`relative bg-gradient-to-br ${service.color} rounded-xl p-5 border-2 ${service.borderColor} backdrop-blur-sm overflow-hidden h-full`}>
                            
                            {/* Card Header */}
                            <div className='flex justify-between items-start mb-5'>
                                <div className='flex items-center gap-3'>
                                    <div className={`p-2.5 rounded-lg ${service.iconColor} backdrop-blur-sm`}>
                                        <Image 
                                            alt={service.title} 
                                            src={service.icon} 
                                            className='w-8 h-8'
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold text-white font-mono'>
                                            {service.title}
                                        </h3>
                                        <div className={`font-mono text-xs ${service.accentColor} mt-1`}>
                                            TECH_ID: {service.id.toString().padStart(3, '0')}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Status Indicator */}
                                <div className={`px-2 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-white border border-white/20`}>
                                    ACTIVE
                                </div>
                            </div>
                            
                            {/* Tech Stack Tags */}
                            <div className='flex flex-wrap gap-2 mb-5'>
                                {service.techStack.map((tech, idx) => (
                                    <span 
                                        key={idx}
                                        className='px-2.5 py-1.5 text-xs font-mono bg-white/10 text-white/90 rounded-lg border border-white/20 hover:bg-white/20 transition-colors'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Description */}
                            <p className='text-white/80 text-sm mb-5'>
                                {service.description}
                            </p>
                            
                            {/* Tech Metrics Grid */}
                            <div className='grid grid-cols-2 gap-3 mb-5'>
                                {Object.entries(service.metrics).map(([key, value], idx) => (
                                    <div key={key} className='bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10'>
                                        <div className='font-mono text-[10px] text-white/70 mb-1 uppercase tracking-wider'>
                                            {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                                        </div>
                                        <div className='font-mono text-lg font-bold text-white'>
                                            {value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Performance Trend */}
                            <div className='mb-4'>
                                <div className='flex justify-between items-center mb-2'>
                                    <span className='font-mono text-xs text-white/70'>PERFORMANCE TREND</span>
                                    <span className={`font-mono text-xs ${service.accentColor} font-bold`}>
                                        +{service.chartData[service.chartData.length - 1] - service.chartData[0]}%
                                    </span>
                                </div>
                                <div className='h-10 w-full relative'>
                                    <svg className='w-full h-full' viewBox="0 0 100 30" preserveAspectRatio="none">
                                        {/* Grid lines */}
                                        {[0, 15, 30].map((y) => (
                                            <line 
                                                key={y}
                                                x1="0" y1={y} x2="100" y2={y}
                                                stroke="rgba(255,255,255,0.1)"
                                                strokeWidth="0.5"
                                            />
                                        ))}
                                        {/* Main chart line */}
                                        <path 
                                            d={`M0,${30 - (service.chartData[0] * 0.3)} 
                                                ${service.chartData.slice(1).map((val, i) => 
                                                    `L${((i + 1) * 100) / (service.chartData.length - 1)},${30 - (val * 0.3)}`
                                                ).join(' ')}`}
                                            fill="none" 
                                            stroke="white" 
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        {/* Glow effect */}
                                        <path 
                                            d={`M0,${30 - (service.chartData[0] * 0.3)} 
                                                ${service.chartData.slice(1).map((val, i) => 
                                                    `L${((i + 1) * 100) / (service.chartData.length - 1)},${30 - (val * 0.3)}`
                                                ).join(' ')}`}
                                            fill="none" 
                                            stroke="white" 
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            opacity="0.3"
                                        />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Card Footer */}
                            <div className='flex justify-between items-center pt-3 border-t border-white/20'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></div>
                                    <span className='font-mono text-xs text-white/70'>LIVE MONITORING</span>
                                </div>
                                <div className={`font-mono text-xs ${service.accentColor}`}>
                                    <span className='opacity-70'>SKILL LEVEL:</span> EXPERT
                                </div>
                            </div>
                            
                            {/* Active Card Indicator */}
                            {activeCard === index && (
                                <div className='absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping'></div>
                            )}
                            
                            {/* Corner Accents */}
                            <div className='absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30 rounded-tl'></div>
                            <div className='absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30 rounded-tr'></div>
                            <div className='absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30 rounded-bl'></div>
                            <div className='absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30 rounded-br'></div>
                            
                            {/* Hover Glow */}
                            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Updated Technical Overview Panel */}
            
        </div>
    );
};

export default Expertise;