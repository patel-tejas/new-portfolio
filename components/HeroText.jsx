"use client";

import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const HeroText = () => {
  return (
    <TypewriterComponent
            options={{
                strings: [
                    '"Turning ideas into reality, one line at a time."',
                    '"Elevating Digital ideas with Creative Code"',
                    '"Bridging the gap between imagination and reality.'
                ],
                autoStart: true,
                loop: true,
                delay: (70),
                deleteSpeed: (40)
            
            }} 
            
            />
  )
}

export default HeroText