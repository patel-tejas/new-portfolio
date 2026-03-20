"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const MotionLink = motion(Link)

const Logo = ({ isScrolled = false }) => {
    return (
        <div className='flex items-center justify-center my-0'>
            <MotionLink 
                className= {`bg-dark text-light flex items-center justify-center border border-solid border-transparent dark:border-light rounded-full font-bold transition-all duration-300
                    ${isScrolled ? 'w-10 h-10 text-[14px]' : 'w-14 h-14 text-[18px]'}`}
            whileHover={{
                backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                transition: {duration: 1, repeat: Infinity}
            }}
            href="/"
            >
            TEZ.
            </MotionLink>
        </div>
    )
}

export default Logo