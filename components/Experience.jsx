"use client";

import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, address, companyLink = "", time, work }) => {
    const ref = useRef(null)

    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]' ref={ref}>
            <LiIcon reference={ref} />
            <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.8, type:"spring"}} className='flex flex-col gap-2'>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;<a className="text-primary dark:text-secondary capitalize" target="_black" href={companyLink}>@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}
const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className='my-32'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-[100%]' ref={ref}>

                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-secondary md:w-[2px] md:left-[30px] xs:left-[20px]' ref={ref}>
                </motion.div>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-6 '>
                    <Details
                        position="SDE Intern"
                        company="Yudiz Solutions"
                        time="2023"
                        companyLink='https://www.yudiz.com/'
                        address="BSquare 2, Ahmedabad, IND"
                        work="Worked with a team responsible for creating a web-app transorming form applications. Added auto-fill features and integrated backend and frontend while developing the project on NextJs"
                    />


                    
                </ul>
            </div>
        </div>
    )
}

export default Experience