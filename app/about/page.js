import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import pfp from "@/public/pfp2.png"
import { Montserrat } from 'next/font/google'
import AnimatedNumbers from './AnimatedNumbers'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
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
      <main className={`dark:text-light w-full flex-col items-center justify-center ${montserrat.className}`}>
        <Layout className="pt-16 min-h-screen">
          <AnimatedText text="Passion fuels Purpose !" className="mb-16 text-6xl md:text-5xl xs:text-4xl sm:mb-8" />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-3 flex flex-col items-start justify-start mt-5 xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='text-lg font-bold uppercase dark:text-light/75 text-dark/75 mb-4'>Biography</h2>
              <p>
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
              <div className='flex flex-col items-end justify-center'>
                <span className='text-7xl font-bold  inline-block md:text-6xl sm:text-5xl xs:text-3xl'>
                  <AnimatedNumbers value={10} />
                </span>
                <h2 className='text-xl font-medium dark:text-light/75 capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>projects Completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='text-7xl font-bold  inline-block md:text-6xl sm:text-5xl xs:text-3xl'>
                  <AnimatedNumbers value={1.5} decimal={1}/>
                </span>
                <h2 className='text-xl font-medium dark:text-light/75 capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm '>Years of Expierence</h2>
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