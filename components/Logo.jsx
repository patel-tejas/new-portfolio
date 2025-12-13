"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { Kaushan_Script } from 'next/font/google'

const MotionLink = motion(Link)
const ks = Kaushan_Script({
    weight: '400',
    subsets: ['latin']
})
const Logo = () => {
    return (
        <div className='flex items-center justify-center my-1'>
            <MotionLink className= {`w-14 h-14 bg-dark text-light flex items-center justify-center border border-solid border-transparent dark:border-light rounded-full text-[18px] font-bold`}
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