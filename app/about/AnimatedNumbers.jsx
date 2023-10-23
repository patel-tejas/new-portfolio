"use client";

import { useInView, useMotionValue, useSpring,  } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const AnimatedNumbers = ({value, decimal=0}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000})
    const isInView = useInView(ref)

    useEffect(() => {
      if (isInView){
        motionValue.set(value)
      }
    
    }, [isInView, value, motionValue])

    useEffect(() => {
      springValue.on("change", (latest)=>{
        if (ref.current && latest.toFixed(decimal) <= value){
            ref.current.textContent = `${latest.toFixed(decimal)}+`
        }
      })
    
    }, [springValue, value])
    
  return (
    <span ref={ref}>

    </span>
  )
}

export default AnimatedNumbers