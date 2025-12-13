"use client"
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

const MarketTicker = () => {
    const [tickerData, setTickerData] = useState([])
    const [isPaused, setIsPaused] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Fetch data only once when component mounts
        fetchTickerData()
        
        // Removed the interval for periodic fetching
        // return () => clearInterval(interval) // No longer needed
    }, []) // Empty dependency array means it runs only once on mount

    const fetchTickerData = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('/api/market-ticker')
            const data = await response.json()
            if (data.success) {
                setTickerData(data.data)
            }
        } catch (error) {
            console.error('Failed to fetch ticker data:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const formatSymbol = (symbol) => {
        const parts = symbol.split(':')
        if (parts.length === 2) {
            return parts[1].replace('1!', '').replace('USD', '').replace('NIFTY', 'NIFTY 50')
        }
        return symbol
    }

    if (isLoading) {
        return (
            <div className="w-full bg-white dark:bg-[#0D0D0D] border-y border-gray-200 dark:border-[#2C2C2C] py-2.5">
                <div className="flex items-center justify-center gap-4">
                    <div className="w-2 h-2 bg-green-500 dark:bg-[#00FF6A] rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
                        Loading market data...
                    </span>
                </div>
            </div>
        )
    }

    if (!tickerData.length) return null

    return (
        <div 
            className="w-full bg-white dark:bg-[#0D0D0D] border-y border-gray-200 dark:border-[#2C2C2C] overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Retro terminal scan line */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500 dark:via-[#00FF6A] to-transparent animate-pulse"></div>
            </div>
            
            {/* Blinking cursor effect */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-green-500 dark:bg-[#00FF6A] animate-pulse z-20"></div>
            
            <motion.div 
                className="flex whitespace-nowrap py-2.5"
                animate={{ x: isPaused ? 0 : '-100%' }}
                transition={{ 
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity 
                }}
                style={{ width: '200%' }}
            >
                {/* First set */}
                <div className="flex items-center gap-5 px-8">
                    {tickerData.map((item, index) => (
                        <TickerItem key={index} item={item} formatSymbol={formatSymbol} />
                    ))}
                </div>
                
                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-5 px-8">
                    {tickerData.map((item, index) => (
                        <TickerItem key={`dup-${index}`} item={item} formatSymbol={formatSymbol} />
                    ))}
                </div>
            </motion.div>
            
            {/* Live indicator - Changed to "STATIC" or "MARKET DATA" */}
            {/* <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 z-20">
                <div className="w-2 h-2 bg-green-500 dark:bg-[#00FF6A] rounded-full"></div>
                <span className="font-mono text-xs font-bold text-gray-500 dark:text-gray-400">
                    MARKET DATA
                </span>
            </div> */}
        </div>
    )
}

const TickerItem = ({ item, formatSymbol }) => (
    <div className="flex items-center gap-3 group">
        {/* Symbol with trading badge effect */}
        <div className="relative">
            <span className="font-mono font-bold text-sm text-gray-900 dark:text-gray-100 tracking-tighter px-2 py-0.5 
                bg-gray-100 dark:bg-[#1A1A1A] rounded border border-gray-300 dark:border-[#2C2C2C]">
                {formatSymbol(item.symbol)}
            </span>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 
                dark:from-[#00FF6A]/0 dark:via-[#00FF6A]/20 dark:to-[#00FF6A]/0 rounded blur-sm opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Price */}
        <span className="font-mono text-sm text-gray-700 dark:text-gray-300 font-semibold tabular-nums">
            {item.symbol.includes('MCX') || item.symbol.includes('CRYPTO') 
                ? item.price.toLocaleString('en-US', { 
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'USD'
                  }).replace('$', '$')
                : item.price.toLocaleString('en-IN', { 
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2 
                  })
            }
        </span>
        
        {/* Change indicator */}
        <div className={`flex items-center gap-1 px-2 py-0.5 rounded border ${
            item.change >= 0 
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/50' 
                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/50'
        }`}>
            <span className={`font-mono text-xs font-bold ${
                item.change >= 0 
                    ? 'text-green-600 dark:text-[#00FF6A]' 
                    : 'text-red-500 dark:text-[#FF4D4D]'
            }`}>
                {item.change >= 0 ? '▲' : '▼'}
            </span>
            <span className={`font-mono text-xs font-bold tabular-nums ${
                item.change >= 0 
                    ? 'text-green-600 dark:text-[#00FF6A]' 
                    : 'text-red-500 dark:text-[#FF4D4D]'
            }`}>
                {Math.abs(item.change).toFixed(2)}
            </span>
            <span className={`font-mono text-xs font-bold tabular-nums ${
                item.change >= 0 
                    ? 'text-green-600 dark:text-[#00FF6A]' 
                    : 'text-red-500 dark:text-[#FF4D4D]'
            }`}>
                ({item.change >= 0 ? '+' : ''}{item.percent.toFixed(2)}%)
            </span>
        </div>
        
        {/* Retro separator */}
        <span className="text-gray-300 dark:text-gray-700 text-lg font-bold mx-2">|</span>
    </div>
)

export default MarketTicker