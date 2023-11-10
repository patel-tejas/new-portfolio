"use client";

import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const HeroText = () => {
  return (
    <TypewriterComponent
            options={{
                strings: [
                    'Hey👋 Welcome to my web world !',
                    '"Elevating Digital ideas with Creative Code ..."',
                ],
                autoStart: true,
                loop: true,
                delay: (70),
                deleteSpeed: (60)
            
            }} />
  )
}

export default HeroText