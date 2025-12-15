"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import img1 from '../public/hacknuthon.jpg'

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceDot,
  ReferenceLine,
  Label
} from 'recharts'

// Generate chart data with two major peaks
// Generate chart data with two major peaks
// Generate chart data with two major peaks in 2025
const generateChartData = () => {
  const data = []
  const startDate = new Date(2023, 0, 1) // Jan 2023
  
  // Two major peaks in 2025
  const peaks = [
    { month: 26, value: 10000, name: "ECONOMIA Hackathon - 2nd Place", quarter: "Q1 2025" }, // March 2025 - $10k
    { month: 27, value: 40000, name: "HackNUthon 6.0 - Champions", quarter: "Q2 2025" }, // April 2025 - $40k
  ]
  
  // Generate data from Jan 2023 to Dec 2025 (36 months)
  for (let i = 0; i <= 36; i++) {
    const date = new Date(startDate)
    date.setMonth(date.getMonth() + i)
    
    // Base value with some noise
    let value = 2000 + Math.sin(i * 0.3) * 1500
    
    // Check if this is a peak month
    const peak = peaks.find(p => p.month === i)
    if (peak) {
      value = peak.value
    }
    
    // Add some random noise to non-peak points
    if (!peak) {
      value += (Math.random() - 0.5) * 500
    }
    
    // Keep value within bounds (0-50k)
    value = Math.max(0, Math.min(50000, Math.round(value)))
    
    const monthName = date.toLocaleDateString('en-US', { month: 'short' })
    const year = date.getFullYear()
    
    // Format quarter based on month
    const quarter = `Q${Math.floor(date.getMonth() / 3) + 1} ${year.toString().slice(-2)}`
    
    data.push({
      month: i,
      date: `${monthName} '${year.toString().slice(-2)}`,
      value,
      isPeak: !!peak,
      peakInfo: peak || null,
      quarter: peak?.quarter || quarter
    })
  }
  
  return data
}


const peakEvents = [
  {
    id: 1,
    title: "AI-POWERED FRAUD PREVENTION SYSTEM",
    desc: "Developed an AI-powered fraud prevention system with biometric identity verification, blockchain KYC, and three-factor authentication. Built for banking and fintech systems to enhance transaction security using AI-driven fraud detection.",
    timestamp: "March 2025",
    month: 4,
    performance: "+300%",
    prizePool: 10000,
    gain: "RUNNERS UP",
    color: "#00FF6A",
    type: "ECONOMIA",
    category: "AI/ML • Blockchain",
    image: {img1},
    linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:715123456789/",
    metrics: {
      participants: "300+",
      accuracy: "96.5%",
      security: "3FA System",
      track: "AI/ML/Blockchain"
    }
  },
  {
    id: 2,
    title: "FINANCIAL FRAUD DETECTION SYSTEM",
    desc: "Built an AI-based Financial Fraud Detection System for real-time fraud detection with regulatory compliance. Developed for banks and financial institutions to detect fraud in real-time while ensuring compliance with financial regulations.",
    timestamp: "April 2025",
    month: 16,
    performance: "+700%",
    prizePool: 40000,
    gain: "CHAMPIONS",
    color: "#00FF6A",
    type: "HACKNUTHON",
    category: "FinTech • AI",
    image: {img1},
    linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:715987654321/",
    metrics: {
      participants: "1000+",
      teams: "300+",
      compliance: "100%",
      detection: "Real-time"
    }
  }
]

// Custom tooltip for peaks - FIXED POSITIONING
const CustomTooltip = ({ active, payload, label }) => {
  const tooltipRef = useRef(null)
  
  useEffect(() => {
    if (tooltipRef.current) {
      const tooltip = tooltipRef.current
      const rect = tooltip.getBoundingClientRect()
      const chartContainer = tooltip.closest('.chart-container')
      
      if (chartContainer) {
        const containerRect = chartContainer.getBoundingClientRect()
        
        // Check if tooltip overflows right side
        if (rect.right > containerRect.right - 20) {
          tooltip.style.left = 'auto'
          tooltip.style.right = '20px'
        }
        
        // Check if tooltip overflows left side
        if (rect.left < containerContainer.left + 20) {
          tooltip.style.left = '20px'
          tooltip.style.right = 'auto'
        }
      }
    }
  }, [active, payload, label])

  if (active && payload && payload.length) {
    const data = payload[0].payload
    if (data.isPeak && data.peakInfo) {
      const event = peakEvents.find(e => e.month === data.month)
      return (
        <div 
          ref={tooltipRef}
          className="absolute z-50 bg-white dark:bg-[#0D0D0D] p-4 rounded-xl border border-gray-300 dark:border-[#2C2C2C] shadow-2xl min-w-[300px] max-w-[350px] sm:min-w-[280px] sm:max-w-[300px] xs:min-w-[260px] xs:max-w-[280px]"
          style={{ 
            top: '50%',
            transform: 'translateY(-50%)',
            right: '20px',
            left: 'auto'
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse"></div>
            <span className="font-mono text-sm font-bold text-gray-900 dark:text-white uppercase">
              {event?.type || "PEAK EVENT"}
            </span>
          </div>
          <h4 className="text-lg sm:text-base font-bold text-gray-900 dark:text-white mb-2">
            {event?.title || data.peakInfo.name}
          </h4>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="text-center p-2 rounded-lg bg-green-500/5 border border-green-500/10">
              <div className="font-mono text-xs text-gray-500 dark:text-gray-400">PRIZE POOL</div>
              <div className="text-xl sm:text-lg font-bold text-green-600 dark:text-[#00FF6A]">
                ${data.value.toLocaleString()}
              </div>
            </div>
            <div className="text-center p-2 rounded-lg bg-amber-500/5 border border-amber-500/10">
              <div className="font-mono text-xs text-gray-500 dark:text-gray-400">ACHIEVEMENT</div>
              <div className="text-xl sm:text-lg font-bold text-amber-600 dark:text-amber-400">
                {event?.gain || "2ND PLACE"}
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
            {event?.desc || "Major hackathon achievement"}
          </p>
          {event?.linkedinPost && (
            <a
              href={event.linkedinPost}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-bold
                bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 
                border border-blue-500/20 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              View on LinkedIn
            </a>
          )}
        </div>
      )
    }
    
    return (
      <div className="bg-white dark:bg-[#0D0D0D] p-3 rounded-lg border border-gray-300 dark:border-[#2C2C2C]">
        <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-1">{label}</p>
        <p className="font-mono font-bold text-gray-900 dark:text-white">
          ${payload[0].value?.toLocaleString() || '0'}
        </p>
      </div>
    )
  }
  return null
}

// Blinking dot component for peaks
// Fixed BlinkingDot component
const BlinkingDot = (props) => {
  const { cx, cy, payload } = props
  if (!payload.isPeak) return null
  
  return (
    <g>
      {/* Outer glow - fixed positioning */}
      <circle
        cx={cx}
        cy={cy}
        r="12"
        fill="rgba(0, 255, 106, 0.2)"
        className="animate-ping"
        style={{ 
          animationDuration: '1.5s',
          transformOrigin: `${cx}px ${cy}px`
        }}
      />
      {/* Middle pulse */}
      <circle
        cx={cx}
        cy={cy}
        r="8"
        fill="rgba(0, 255, 106, 0.4)"
      />
      {/* Inner dot */}
      <circle
        cx={cx}
        cy={cy}
        r="5"
        fill="#00FF6A"
        stroke="white"
        strokeWidth="2"
      />
      {/* Star icon for peak */}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dy="0.3em"
        className="text-[10px] font-bold fill-white"
      >
        ★
      </text>
    </g>
  )
}

// Main Chart Component
export const HackathonChart = () => {
  const [chartData, setChartData] = useState([])
  const [timeframe, setTimeframe] = useState("ALL")

  useEffect(() => {
    const data = generateChartData()
    setChartData(data)
  }, [])

  const getFilteredData = () => {
    if (!chartData.length) return []
    
    let visibleMonths = 24
    switch(timeframe) {
      case "1M": visibleMonths = 1; break
      case "3M": visibleMonths = 3; break
      case "6M": visibleMonths = 6; break
      case "1Y": visibleMonths = 12; break
      case "ALL": visibleMonths = 24; break
      default: visibleMonths = 24
    }
    
    return chartData.slice(-visibleMonths)
  }

  const filteredData = getFilteredData()

  return (
    <section className="relative max-w-6xl mx-auto sm:py-2 px-4 sm:px-4 xs:px-3">
      {/* Chart Header */}
      <div className="mb-8 sm:mb-6">
        {/* <div className="inline-flex items-center gap-3 mb-3 sm:mb-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          <h2 className="font-mono text-sm sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            PERFORMANCE TRACKER
          </h2>
        </div>
        
        <div className="text-4xl sm:text-3xl xs:text-2xl font-bold mb-3">
          <span className="block text-gray-900 dark:text-white">HACKATHON</span>
          <span className="block">
            <span className="text-green-600 dark:text-[#00FF6A] font-mono">PERFORMANCE CHART</span>
          </span>
        </div> */}
        
        <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-sm xs:text-xs font-light">
          Visualizing hackathon achievements and prize progression
        </p>
      </div>

      {/* Trading Terminal Container */}
      <div className="relative border-2 border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden 
        bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        
        {/* Terminal Top Bar */}
        <div className="flex sm:flex-col sm:items-start items-center justify-between p-4 sm:p-3 border-b border-gray-300 dark:border-gray-800 
          bg-white/50 dark:bg-black/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm sm:text-xs font-bold text-gray-900 dark:text-gray-300">
              HACKATHON_TRACKER
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-mono text-xs sm:text-[10px] text-gray-600 dark:text-gray-400">STATIC</span>
            </div>
            <div className="font-mono text-xs sm:text-[10px] text-gray-500 dark:text-gray-500">
              PEAKS: <span className="text-green-600 dark:text-[#00FF6A] font-bold">{peakEvents.length}</span>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="p-6 sm:p-4 xs:p-3">
          {/* Chart Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-4">
            <div className="flex flex-wrap gap-2">
              {['3M', '6M', '1Y', 'ALL'].map((period) => (
                <button 
                  key={period}
                  onClick={() => setTimeframe(period)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-sm sm:text-xs transition-all duration-300 ${
                    timeframe === period 
                      ? 'bg-green-500/20 dark:bg-[#00FF6A]/20 text-green-600 dark:text-[#00FF6A] border border-green-500/30 dark:border-[#00FF6A]/30 shadow-lg shadow-green-500/10' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300/50 dark:border-gray-700/50 hover:scale-105'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
            <div className="font-mono text-sm sm:text-xs text-gray-500 dark:text-gray-400">
              TOTAL WINS: <span className="text-green-600 dark:text-[#00FF6A] font-bold">{peakEvents.length}</span>
            </div>
          </div>

          {/* Recharts Chart */}
          <div className="h-96 sm:h-64 xs:h-56 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={filteredData}
                margin={{ top: 100, right: 30, left: 20, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00FF6A" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#00FF6A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                
                {/* Grid */}
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="rgba(255,255,255,0.1)" 
                  vertical={false}
                />
                
                {/* X Axis */}
                <XAxis 
                  dataKey="quarter"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12, fontFamily: 'monospace' }}
                  tickMargin={10}
                  interval="preserveStartEnd"
                  minTickGap={20}
                />
                
                {/* Y Axis - Updated for 0-50k range */}
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12, fontFamily: 'monospace' }}
                  tickFormatter={(value) => `₹${value.toLocaleString()}`}
                  domain={[0, 50000]}
                  tickMargin={10}
                />
                
                {/* Area Chart */}
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#00FF6A"
                  strokeWidth={2}
                  fill="url(#colorValue)"
                  dot={(props) => <BlinkingDot {...props} />}
                  activeDot={false}
                />
                
                {/* Peak Labels using ReferenceLine with Label */}
                {peakEvents.map((event) => {
                  const peakData = filteredData.find(d => d.month === event.month)
                  if (!peakData) return null
                  
                  return (
                    <g key={event.id}>
                      {/* Vertical reference line */}
                      <ReferenceLine
                        x={peakData.quarter}
                        stroke="#00FF6A"
                        strokeWidth={1}
                        strokeDasharray="3 3"
                        opacity={0.3}
                      />
                      
                      {/* Custom label above the peak */}
                      <ReferenceDot
                        x={peakData.quarter}
                        y={peakData.value}
                        r={0}
                      >
                        <g>
                          {/* Label background */}
                          <rect
                            x={-60}
                            y={-85}
                            width={120}
                            height={60}
                            rx="6"
                            fill="rgba(0, 0, 0, 0.85)"
                            stroke="#00FF6A"
                            strokeWidth="1"
                            className="backdrop-blur-sm"
                          />
                          
                          {/* Event type */}
                          <text
                            x={0}
                            y={-65}
                            textAnchor="middle"
                            fill="#00FF6A"
                            fontSize="10"
                            fontFamily="monospace"
                            fontWeight="bold"
                            className="pointer-events-none"
                          >
                            {event.type === "ECONOMIA" ? "🏆 ECONOMIA" : "🏆 HACKNUTHON"}
                          </text>
                          
                          {/* Prize value */}
                          <text
                            x={0}
                            y={-50}
                            textAnchor="middle"
                            fill="white"
                            fontSize="12"
                            fontFamily="monospace"
                            fontWeight="bold"
                            className="pointer-events-none"
                          >
                            ${peakData.value.toLocaleString()}
                          </text>
                          
                          {/* Achievement */}
                          <text
                            x={0}
                            y={-35}
                            textAnchor="middle"
                            fill="#FFD700"
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight="bold"
                            className="pointer-events-none"
                          >
                            {event.gain}
                          </text>
                        </g>
                      </ReferenceDot>
                    </g>
                  )
                })}
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-8 mt-6">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-3 h-3 rounded-full bg-[#00FF6A]"></div>
              <span className="font-mono text-sm sm:text-xs text-gray-600 dark:text-gray-400">Prize Pool Trend</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-[#00FF6A] animate-pulse"></div>
                <div className="absolute inset-0 animate-ping rounded-full bg-[#00FF6A]/40"></div>
              </div>
              <span className="font-mono text-sm sm:text-xs text-gray-600 dark:text-gray-400">Major Victories</span>
            </div>
          </div>
          
          {/* Peak Events Summary */}
          
        </div>

        {/* Terminal Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-3 border-t border-gray-300 dark:border-gray-800
          bg-white/50 dark:bg-black/50 backdrop-blur-sm text-sm sm:text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="font-mono text-gray-600 dark:text-gray-400">PEAKS DISPLAYED</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="hidden sm:block font-mono text-gray-500 dark:text-gray-500">
              CURRENCY: <span className="text-gray-900 dark:text-white font-bold">INR (₹)</span>
            </div>
          </div>
          <div className="font-mono text-xs sm:text-[10px] text-gray-500 dark:text-gray-500">
            DATA: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </section>
  )
}

// Hackathon Memories Component
export const HackathonMemories = () => {
  const [activeMemory, setActiveMemory] = useState(0)

  const memories = [
    
    {
      id: 1,
      title: "FINANCIAL FRAUD DETECTION SYSTEM",
      subtitle: "HackNUthon 6.0 - Champions",
      date: "MAY 2024",
      prize: "₹40,000",
      duration: "72 Hours",
      location: "Nirma University • National",
      team: "Team Software Sigmas",
      teamMembers: ["Prajinraj Ranawat", "Smit Joshi", "Shreyash Shukla", "Tejas Patel"],
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "FastAPI", "XGBoost", "Linear Regression", "Random Forest", "GNN", "MongoDB"],
      challenge: "Financial fraud is a growing threat with evolving tactics. Traditional detection methods struggle with real-time analysis, high false positives, and compliance requirements.",
      solution: "Developed PROTRACT - an AI-based Financial Fraud Detection System with compliance checks, multi-model AI analysis (XGBoost, Linear Regression, Random Forest, GNNs), and real-time risk scoring.",
      impact: "Helps banks detect fraud in real-time, reduces financial losses, ensures regulatory compliance, and provides actionable insights for security teams.",
      keyFeatures: [
        "Automated regulatory compliance verification",
        "XGBoost, Linear Regression, Random Forest models",
        "Graph Neural Networks for pattern detection",
        "Real-time risk scoring & alerts",
        "RAG-based fraud explanations"
      ],
      metrics: [
        { label: "Participants", value: "1000+", icon: "👥" },
        { label: "Teams", value: "300+", icon: "🤝" },
        { label: "Compliance", value: "100%", icon: "✅" },
        { label: "Detection", value: "Real-time", icon: "⚡" },
      ],
      image: "/hacknuthon.jpg",
      linkedin: "https://www.linkedin.com/posts/pateltejas2005_hacknuthon-ai-frauddetection-activity-7312763904642748416-lp40?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzrHxkBTyTv0EW0y2ghgzZ_-IHIFlFtKfM",
      projectLink: "https://lnkd.in/dv8aYxT6",
      tags: ["CHAMPIONS", "FINANCE", "AI", "COMPLIANCE"]
    },
    {
      id: 2,
      title: "AI-POWERED FRAUD PREVENTION SYSTEM",
      subtitle: "ECONOMIA Hackathon - Runners Up",
      date: "MAY 2023",
      prize: "₹10,000",
      duration: "48 Hours",
      location: "Virtual • Global",
      team: "Team ChatGPTters",
      teamMembers: ["Prajinraj Ranawat", "Shreyash Shukla", "Dhwani Vyas", "Dhwani Bhut", "Tejas Patel"],
      tech: ["React.js", "Tailwind CSS", "Next.js", "FastAPI", "Scikit-learn", "DeepFace", "Thirdweb", "MongoDB", "Ethereum"],
      challenge: "Financial fraud, identity theft, and scams pose serious threats to banking systems. Traditional methods struggle with real-time detection and evolving fraud patterns.",
      solution: "Built an AI-powered fraud prevention system with biometric identity verification (Face Recognition), blockchain-powered KYC, three-factor authentication, and ML models for suspicious transaction detection.",
      impact: "Enhanced transaction security for banks and fintech companies with real-time fraud detection, biometric authentication, and decentralized identity verification.",
      keyFeatures: [
        "Biometric Identity Verification using Face Recognition",
        "Blockchain-powered KYC for tamper-proof verification",
        "Three-Factor Authentication (3FA)",
        "Machine Learning fraud detection models",
        "Real-time transaction monitoring"
      ],
      metrics: [
        { label: "Participants", value: "300+", icon: "👥" },
        { label: "Accuracy", value: "96.5%", icon: "🎯" },
        { label: "Security", value: "3FA System", icon: "🛡️" },
        { label: "Track", value: "AI/ML/Blockchain", icon: "🏆" },
      ],
      image: "/breach.jpg",
      linkedin: "https://www.linkedin.com/posts/pateltejas2005_hackathon-economia-ai-activity-7311288992904192000-gA0I?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzrHxkBTyTv0EW0y2ghgzZ_-IHIFlFtKfM",
      projectLink: "#",
      tags: ["RUNNERS UP", "AI/ML", "BLOCKCHAIN", "SECURITY"]
    }
  ]

  return (
    <section className="relative max-w-6xl mx-auto py-12 sm:py-8 px-4 sm:px-4 xs:px-3">
      {/* Terminal Header */}
      <div className="mb-8 sm:mb-6 text-center">
        <div className="inline-flex items-center gap-3 mb-3 sm:mb-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          <h2 className="font-mono text-sm sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            VICTORY ARCHIVES
          </h2>
        </div>
        
        <div className="text-4xl sm:text-3xl xs:text-2xl font-bold mb-3">
          <span className="block text-gray-900 dark:text-white">HACKATHON</span>
          <span className="block">
            <span className="text-green-600 dark:text-[#00FF6A] font-mono">PROOF OF WORK (PoW)</span>
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-sm xs:text-xs font-light">
          Detailed breakdown of major victories, technologies used, and impact created
        </p>
      </div>

      {/* Timeline Navigation */}
      <div className="relative mb-8 sm:mb-6">
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800 z-0"></div>
        
        <div className="relative flex justify-between max-w-2xl mx-auto px-4 sm:px-2">
          {memories.map((memory, index) => (
            <button
              key={memory.id}
              onClick={() => setActiveMemory(index)}
              className={`relative z-10 flex flex-col items-center transition-all duration-300 ${
                activeMemory === index ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                activeMemory === index 
                  ? 'bg-green-500 dark:bg-[#00FF6A] shadow-lg shadow-green-500/30' 
                  : 'bg-gray-200 dark:bg-gray-800'
              }`}>
                <span className={`font-mono font-bold text-sm sm:text-xs ${
                  activeMemory === index 
                    ? 'text-white' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  0{index + 1}
                </span>
              </div>
              <span className={`font-mono text-sm sm:text-xs font-bold transition-colors ${
                activeMemory === index 
                  ? 'text-green-600 dark:text-[#00FF6A]' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {memory.date}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Memory Display */}
      <div className="relative">
        {/* Memory Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5 
          dark:from-[#00FF6A]/10 dark:via-transparent dark:to-blue-500/10 rounded-3xl blur-3xl"></div>
        
        {/* Memory Container */}
        <div className="relative border-2 border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden 
          bg-white/80 dark:bg-[#0D0D0D]/80 backdrop-blur-sm">
          
          {/* Memory Header */}
          <div className="p-6 sm:p-4 border-b border-gray-300 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse"></div>
                  <span className="font-mono text-sm sm:text-xs font-bold text-gray-900 dark:text-white uppercase">
                    {memories[activeMemory].tags[0]}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-xl xs:text-lg font-bold text-gray-900 dark:text-white">
                  {memories[activeMemory].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-xs">
                  {memories[activeMemory].subtitle}
                </p>
              </div>
              
              {/* <div className="text-left sm:text-right">
                <div className="text-3xl sm:text-2xl xs:text-xl font-mono font-bold text-green-600 dark:text-[#00FF6A]">
                  {memories[activeMemory].prize}
                </div>
                <div className="font-mono text-sm sm:text-xs text-gray-500 dark:text-gray-400 mt-1">
                  PRIZE POOL
                </div>
              </div> */}
            </div>
          </div>

          {/* Memory Content */}
          <div className="p-6 sm:p-4 xs:p-3">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 sm:gap-6">
              {/* Left Column: Details & Metrics */}
              <div className="space-y-6 sm:space-y-4">
                {/* Basic Info */}
                <div className="grid grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-3">
                  <div className="p-3 sm:p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/50">
                    <div className="font-mono text-xs sm:text-[10px] text-gray-500 dark:text-gray-400 uppercase">DURATION</div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-xs">{memories[activeMemory].duration}</div>
                  </div>
                  <div className="p-3 sm:p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/50">
                    <div className="font-mono text-xs sm:text-[10px] text-gray-500 dark:text-gray-400 uppercase">LOCATION</div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-xs">{memories[activeMemory].location}</div>
                  </div>
                  <div className="p-3 sm:p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/50">
                    <div className="font-mono text-xs sm:text-[10px] text-gray-500 dark:text-gray-400 uppercase">TEAM</div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-xs">{memories[activeMemory].team}</div>
                  </div>
                  <div className="p-3 sm:p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/50">
                    <div className="font-mono text-xs sm:text-[10px] text-gray-500 dark:text-gray-400 uppercase">DATE</div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-xs">{memories[activeMemory].date}</div>
                  </div>
                </div>

                {/* Team Members */}
                {/* <div>
                  <h4 className="font-mono text-sm sm:text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase">
                    TEAM MEMBERS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {memories[activeMemory].teamMembers.map((member, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 sm:px-2 sm:py-1 rounded-full font-mono text-sm sm:text-xs border border-blue-500/20 
                          bg-blue-500/5 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 
                          transition-colors duration-300 cursor-default"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div> */}

                {/* Key Features */}
                <div>
                  <h4 className="font-mono text-sm sm:text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase">
                    KEY FEATURES
                  </h4>
                  <ul className="space-y-2">
                    {memories[activeMemory].keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 dark:text-[#00FF6A] mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-mono text-sm sm:text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase">
                    TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {memories[activeMemory].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 sm:px-2 sm:py-1 rounded-full font-mono text-sm sm:text-xs border border-green-500/20 
                          bg-green-500/5 text-green-600 dark:text-[#00FF6A] hover:bg-green-500/10 
                          transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Image & Metrics */}
              <div className="space-y-6 sm:space-y-4">
                {/* Image Container */}
                <div className="relative aspect-video sm:aspect-square rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 
                    flex items-center justify-center">
                    {/* Replace with your actual image */}
                    {/* <div className="text-center p-8 sm:p-4">
                      <div className="text-5xl sm:text-4xl mb-4">🏆</div>
                      <p className="font-mono text-gray-500 dark:text-gray-400 text-sm sm:text-xs">
                        {memories[activeMemory].team} - {memories[activeMemory].date}
                      </p>
                      <p className="text-xs sm:text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                        (Winning moment from {memories[activeMemory].subtitle})
                      </p>
                    </div> */}

                    <Image src={memories[activeMemory].image} alt="Achievement Image" height={1000} width={1000} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Image Tags */}
                  <div className="absolute top-3 left-3 sm:top-2 sm:left-2 flex flex-wrap gap-1">
                    {memories[activeMemory].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded font-mono text-xs sm:text-[10px] font-bold 
                          bg-white/90 dark:bg-black/90 backdrop-blur-sm
                          border border-gray-300 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-3">
                  {memories[activeMemory].metrics.map((metric, index) => (
                    <div 
                      key={index}
                      className="p-4 sm:p-3 rounded-xl border border-gray-300 dark:border-gray-700 
                        bg-white/50 dark:bg-black/50 backdrop-blur-sm 
                        hover:border-green-500/30 dark:hover:border-[#00FF6A]/30 
                        transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl sm:text-xl xs:text-base group-hover:scale-110 transition-transform duration-300">
                          {metric.icon}
                        </span>
                        <span className="font-mono text-xs sm:text-[10px] text-gray-500 dark:text-gray-400 uppercase">
                          {metric.label}
                        </span>
                      </div>
                      <div className="text-xl sm:text-lg xs:text-[12px] font-bold font-mono text-gray-900 dark:text-white ">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={memories[activeMemory].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-3 sm:px-4 sm:py-2 rounded-xl 
                      font-mono font-bold text-white dark:text-white text-sm sm:text-xs
                      bg-gradient-to-r from-blue-600 to-blue-700 
                      dark:from-blue-600 dark:to-blue-700
                      hover:from-blue-700 hover:to-blue-800 
                      dark:hover:from-blue-700 dark:hover:to-blue-800
                      transition-all duration-300 hover:scale-[1.02] active:scale-95
                      border border-blue-500/30 dark:border-blue-500/30
                      shadow-lg shadow-blue-500/20 dark:shadow-blue-500/20"
                  >
                    <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LINKEDIN POST
                  </a>
                  
                  {/* {memories[activeMemory].projectLink && (
                    <a
                      href={memories[activeMemory].projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-6 py-3 sm:px-4 sm:py-2 rounded-xl 
                        font-mono font-bold text-white dark:text-black text-sm sm:text-xs
                        bg-gradient-to-r from-green-600 to-emerald-600 
                        dark:from-[#00FF6A] dark:to-emerald-500
                        hover:from-green-700 hover:to-emerald-700 
                        dark:hover:from-[#00FF6A] dark:hover:to-emerald-600
                        transition-all duration-300 hover:scale-[1.02] active:scale-95
                        border border-green-500/30 dark:border-[#00FF6A]/30
                        shadow-lg shadow-green-500/20 dark:shadow-[#00FF6A]/20"
                    >
                      <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      PROJECT LINK
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          </div>

          {/* Memory Footer */}
          <div className="p-4 sm:p-3 border-t border-gray-300 dark:border-gray-800 
            bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="font-mono text-sm sm:text-xs text-gray-500 dark:text-gray-400">
                VICTORY #{activeMemory + 1} OF {memories.length}
              </div>
              
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={() => setActiveMemory((activeMemory - 1 + memories.length) % memories.length)}
                  disabled={activeMemory === 0}
                  className="px-4 py-2 sm:px-3 sm:py-1.5 rounded-lg font-mono text-sm sm:text-xs border border-gray-300 dark:border-gray-700 
                    hover:border-green-500 dark:hover:border-[#00FF6A] 
                    disabled:opacity-50 disabled:cursor-not-allowed 
                    transition-all duration-300 hover:scale-105"
                >
                  ← PREV
                </button>
                
                <button
                  onClick={() => setActiveMemory((activeMemory + 1) % memories.length)}
                  className="px-4 py-2 sm:px-3 sm:py-1.5 rounded-lg font-mono text-sm sm:text-xs 
                    bg-green-500/10 dark:bg-[#00FF6A]/10 
                    text-green-600 dark:text-[#00FF6A]
                    border border-green-500/20 dark:border-[#00FF6A]/20
                    hover:bg-green-500/20 dark:hover:bg-[#00FF6A]/20
                    transition-all duration-300 hover:scale-105"
                >
                  NEXT →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-4">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveMemory(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeMemory === index 
                  ? 'w-8 bg-green-500 dark:bg-[#00FF6A]' 
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Main Wrapper Component
export default function HackathonSection() {
  return (
    <>
      <HackathonMemories />
      <HackathonChart />
    </>
  )
}