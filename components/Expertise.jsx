import React from 'react'
import HeroText from './HeroText'
import AnimatedText from './AnimatedText'
import Image from 'next/image'
import heroImg from "@/public/heroImg3.png"
import webDev from "@/public/web.jpg"
const Expertise = () => {
    return (
        <div className='mt-[80px] sm:mt-[30px] xs:mt-[20px]'>
            <h2 className='uppercase w-full text-center text-yellow-600 font-semibold text-xl'>What I do</h2>
            <AnimatedText text="My Expertise" className="uppercase sm:text-4xl" />
            <div className='flex gap-2 justify-between sm:flex-col-reverse sm:justify-center items-center'>
                <div className='flex flex-col items-center justify-center w-[50%] gap-4'>
                    <div className=' h-[20vh]  flex items-center justify-center text-center  w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light dark:text-light'>
                        <div className='absolute top-1 -right-2 -z-10 w-[101%] h-[101%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-2xl rounded-tr-2xl' />
                        <h1>Web Development </h1>


                    </div>
                    <div className=' h-[20vh] flex items-center justify-center text-center l w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light dark:text-light'>
                        <div className='absolute top-1 -right-2 -z-10 w-[101%] h-[101%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-2xl rounded-tr-2xl' />
                        Branding
                    </div>
                </div>
                <div className='h-[60vh] w-auto relative'>
                    {/* <Image src={heroImg} width={1000} height={1000} className='absolute'/>
                 */}
                    <Image alt="Yeah, it's me here" src={heroImg} className='w-auto h-full sm:h-[50vh] xs:h-[40vh] inline-block' />

                </div>
            </div>
        </div>
    )
}

export default Expertise