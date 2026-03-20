import AnimatedText from '../../components/AnimatedText'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import pfp from "../../public/pfp2.png"
import { Teko } from 'next/font/google'
import AnimatedNumbers from './AnimatedNumbers'
import Experience from '../../components/Experience'
import Education from '../../components/Education'
import TransitionEffect from '../../components/TransitionEffect'

const hindiFont = Teko({
  subsets: ["devanagari"],
  weight: ["500", "600", "700"]
})

export const metadata = {
  title: 'Tejas Patel | About',
  description: 'Contains Biography, Experience and Education of Tejas Patel',
}
const page = () => {
  return (
    <>
      <TransitionEffect />
      <Head>
        <title>TechTez | About Page</title>
        <meta name="description" content="Tejas Patel- Web Developer" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center font-mont text-dark dark:text-light relative mx-0 min-h-screen">
        <Layout className="pt-16 min-h-screen">
          <div className="flex flex-col items-center justify-center mb-16 sm:mb-8 text-center w-full">
            <AnimatedText text="Passion fuels Purpose !" className="text-6xl md:text-5xl xs:text-4xl" />
            <h2 className={`mt-2 text-5xl md:text-4xl sm:text-3xl font-bold dark:text-gray-300 text-gray-700 tracking-wide ${hindiFont.className}`}>
              <span className="dark:text-[#00FF6A] text-green-600">जुनून</span> उद्देश्य को <span className="dark:text-amber-400 text-amber-600">ईंधन</span> देता है
            </h2>
          </div>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-3 flex flex-col items-start justify-start mt-5 xl:col-span-4 md:order-2 md:col-span-8'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-3 h-3 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse' />
                <span className='font-mono text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                  BIOGRAPHY
                </span>
              </div>
              <p className='font-mont'>
                I'm Tejas Patel, a passionate web developer with a knack for turning ideas into stunning online realities. Over the years, I've honed my skills and embraced the ever-evolving landscape of technology.
              </p>
              <p className='my-4'>
                Throughout my career, I've had the privilege of collaborating on a diverse array of web projects, each presenting unique challenges. From responsive designs that adapt to any device to optimizing site performance, I'm committed to crafting user-friendly and elegant web solutions.
              </p>
              <p>
                Beyond coding, I'm a perpetual learner, always exploring new tech and design trends. Collaboration is at the core of my work philosophy. Thanks for visiting my portfolio, and let's create some web magic together.
              </p>
            </div>

            <div className='col-span-3 h-max rounded-2xl border border-solid border-dark bg-light p-8 relative border-r-[6px] border-b-[6px] dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
              <Image src={pfp} alt='pfp' className='w-full h-auto rounded-2xl' />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-evenly xl:col-span-8 xl:flex-row xl:items-center md:order-3 '>
              {/* <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='text-7xl font-bold  inline-block md:text-6xl sm:text-5xl xs:text-3xl'>
                  <AnimatedNumbers value={50} />
                </span>
                <h2 className='text-xl font-medium dark:text-light/75 capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>Satisfied Clients</h2>
              </div> */}
              <div className='flex flex-col items-center justify-center'>
                <span className='text-7xl font-bold font-mono dark:text-[#00FF6A] text-green-600 inline-block md:text-6xl sm:text-5xl xs:text-3xl'>
                  <AnimatedNumbers value={10} />
                </span>
                <span className='text-xs font-mont text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-tight text-center'>Projects Completed</span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='text-7xl font-bold font-mono dark:text-amber-400 text-amber-600 inline-block md:text-6xl sm:text-5xl xs:text-3xl'>
                  <AnimatedNumbers value={2} decimal={0} />
                </span>
                <span className='text-xs font-mont text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-tight text-center'>Years of Experience</span>
              </div>
            </div>

          </div>

          <Experience />
          <Education />
        </Layout>

      </main>
    </>
  )
}

export default page