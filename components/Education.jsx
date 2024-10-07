"use client";

import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)

    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]' ref={ref}>
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 0.8, type: "spring" }} className='flex flex-col gap-2'>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}&nbsp;
                </h3>
                <span className='dark:text-light/75 capitalize font-medium text-dark/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full  md:text-sm dark:text-gray-400'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}
const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className='my-10'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>

            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-[100%]' ref={ref}>

                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-secondary md:w-[2px] md:left-[30px] xs:left-[20px]' ref={ref}>
                </motion.div>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-6 '>
                    <Details
                        type="High School Education"
                        time="2012 - 2021"
                        place="Kalorex Future School"
                        info="Underwent a comprehensive high school education that formed the basis for both my academic and personal development. The diverse curriculum and supportive learning environment offered me a well-rounded education, covering various subjects and extracurricular activities."
                    />

                    <Details
                        type="Diploma in Information Technology"
                        time="2021-2024"
                        place="R.C Technical Institute"
                        info="Currently enrolled in the Diploma in Information Technology program spanning from 2021 to 2024. This course is equipping me with comprehensive knowledge and practical skills in the dynamic field of Information Technology, preparing me for a successful career in the rapidly evolving tech landscape."
                    />
                    <Details
                        type="Bachelor of Technology in Computer Science & Engineering (B.Tech. CSE)"
                        time="2024-2027"
                        place="Pandit Deendayal Energy University (PDPU)"
                        info="I am currently pursuing my B.Tech in Computer Science & Engineering at Pandit Deendayal Energy University, with a focus on building a solid foundation in the latest technologies and innovations within the tech industry. This program is providing me with in-depth knowledge of computer systems, programming, data structures, and emerging fields like AI and ML, preparing me to thrive in a constantly evolving technological environment. I’m excited to continue growing my expertise in software development, algorithms, and other key areas that are shaping the future of the tech landscape."
                    />


                </ul>
            </div>
        </div>
    )
}

export default Education