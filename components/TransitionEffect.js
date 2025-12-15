"use client"
import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[90] bg-gradient-to-r from-green-600 to-emerald-600 dark:from-[#00FF6A] dark:to-emerald-500' 
        initial={{x:"100%", width:"100%"}} 
        animate={{x:"0%", width: "0%"}} 
        transition={{duration: 0.8 , ease:"easeInOut"}} 
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[89] bg-gradient-to-r from-gray-200 to-gray-300 dark:from-[#1A1A1A] dark:to-[#0D0D0D]' 
        initial={{x:"100%", width:"100%"}} 
        animate={{x:"0%", width: "0%"}} 
        transition={{delay:0.2, duration: 0.8 , ease:"easeInOut"}} 
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[88] bg-gradient-to-r from-gray-900 to-black dark:from-black dark:to-[#0A0A0A]' 
        initial={{x:"100%", width:"100%"}} 
        animate={{x:"0%", width: "0%"}} 
        transition={{delay: 0.4, duration: 0.8 , ease:"easeInOut"}} 
        />
    </>
  )
}

export default TransitionEffect