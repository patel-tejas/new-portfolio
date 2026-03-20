"use client"
import AnimatedText from '../../components/AnimatedText'
import { GithubIcon } from '../../components/Icons'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import project1 from "../../public/Project1.png"
import zenlect from "../../public/zenlect.png"
import sparkX from "../../public/sparkx.png"
import prime from "../../public/prime.png"
import expenseTrack from "../../public/Expense.png"
import usability from "../../public/Usability.png"
import portfolio from "../../public/portfolio.png"
import ArticlesPage from '../../components/ArticlesPage'
import TransitionEffect from '../../components/TransitionEffect'
import urlshortener from "../../public/urlshortener.png"
import hisaab from "../../public/hisaab.png"
import sarthi from "../../public/sarthi.png"
import hacknuthon from "../../public/hacknuthon.png"

const PolkaDotBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none text-gray-300 dark:text-gray-700 opacity-50">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)',
        backgroundSize: '32px 32px',
      }}
    />
  </div>
);

// Vibrant pop-art colors for the Neo-Brutalist theme
const colors = [
  "bg-[#FF90E8]", // Pink
  "bg-[#FFC900]", // Yellow
  "bg-[#00E5FF]", // Cyan
  "bg-[#00FF6A]", // Green
  "bg-[#B388FF]", // Purple
  "bg-[#FF5252]", // Red
];

const FeaturedProjects = ({ type, link, title, summary, img, github, colorIndex = 0, hideVisit = false }) => {
  const cardColor = colors[colorIndex % colors.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`w-full flex items-center justify-between relative rounded-2xl border-4 border-black dark:border-white ${cardColor} shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 p-8 lg:flex-col lg:p-6 xs:p-4 text-black group z-10`}
    >
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-xl lg:w-full relative border-4 border-black h-full bg-white'>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-full">
          <Image
            src={img}
            alt={title}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-10 lg:w-full lg:pl-0 lg:pt-8'>
        <div className='flex items-center gap-3 mb-2 border-2 border-black bg-white px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
          <div className='w-3 h-3 rounded-full bg-red-500 animate-pulse border border-black'></div>
          <span className='font-mono text-xs font-black uppercase tracking-widest text-black'>
            {type}
          </span>
        </div>

        <Link href={link} target='_blank' >
          <h2 className='my-3 w-full text-left text-5xl sm:text-4xl font-black hover:underline decoration-4 underline-offset-4 transition-colors duration-300 font-mont text-black'>
            {title}
          </h2>
        </Link>

        <p className='my-3 text-lg font-bold text-black border-l-4 border-black pl-4 leading-relaxed bg-white/40 rounded-r-lg py-2'>
          {summary}
        </p>

        <div className='flex flex-wrap gap-4 mt-6 items-center w-full'>
          {!hideVisit && (
            <Link href={link} target='_blank' className='
              flex items-center justify-center 
              bg-white
              text-black 
              py-3 px-8 
              text-lg
              font-black 
              rounded-xl 
              border-4 border-black
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-200 
              hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
              active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
            '>
              VISIT NOW
            </Link>
          )}

          {github && (
            <Link href={github} target='_blank' className='
              flex items-center justify-center 
              bg-black 
              text-light
              py-3 px-6 
              text-lg
              font-black 
              rounded-xl 
              border-4 border-black
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-200 
              hover:bg-gray-800
              hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
              active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
            '>
              <GithubIcon className="w-6 h-6 mr-2 text-light" />
              CODE
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}

const Project = ({ title, type, img, link, github, colorIndex = 0 }) => {
  const cardColor = colors[colorIndex % colors.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`w-full flex flex-col items-center justify-center relative rounded-2xl border-4 border-black dark:border-white ${cardColor} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 gap-4 p-6 xs:p-5 text-black z-10`}
    >
      <div className='w-full flex justify-between items-center mb-2'>
        <div className='flex items-center border-2 border-black bg-white px-2 py-1 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
          <span className='font-mono text-[10px] sm:text-[8px] font-black uppercase tracking-widest text-black'>
            {type}
          </span>
        </div>
        {github && (
          <Link href={github} target='_blank' className='
              bg-white text-black p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full
              hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] 
              active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200
            '>
            <GithubIcon className="w-5 h-5 text-black" />
          </Link>
        )}
      </div>

      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-xl relative border-4 border-black bg-white'>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
          <Image
            src={img}
            alt={title}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-2'>
        <Link href={link} target='_blank' className="w-full">
          <h2 className='my-2 w-full text-left text-3xl sm:text-2xl font-black font-mont text-black hover:underline decoration-4 underline-offset-4'>{title}</h2>
        </Link>
        <div className='w-full border-b-4 border-black my-2'></div>

        <div className='w-full justify-between flex gap-4 mt-2 items-center'>
          <Link href={link} target='_blank' className='
            text-sm sm:text-base font-black border-2 border-black bg-white px-4 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
            active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200 w-full text-center
          '>
            EXECUTE LINK ↗
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className='w-full flex flex-col items-center justify-center font-mont dark:text-light text-dark relative mx-0 min-h-screen overflow-hidden'>
        <PolkaDotBackground />

        <Layout className="pt-16 md:pt-8 sm:pd-4 xs:pt-2 relative z-10 w-full">

          <div className="w-full text-center">
            <AnimatedText className="lg:text-7xl sm:text-5xl xs:text-4xl pb-8" text="Explore My Project Registry!" />
          </div>

          <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0 md:gap-y-16 mb-20'>
            <div className='col-span-12'>
              <FeaturedProjects
                title="PROTRACT"
                summary="An AI-powered real-time financial fraud detection system combining GNNs, XGBoost, and RAG-based explainability. Crowned Champions (1st Place) at HackNUthon 6.0 out of 300+ teams!"
                link="https://www.linkedin.com/posts/pateltejas2005_hacknuthon-ai-frauddetection-ugcPost-7312763903006990338-bmey?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzrHxkBTyTv0EW0y2ghgzZ_-IHIFlFtKfM"
                type="🏆 Hackathon Winner"
                img={hacknuthon}
                github="https://github.com/patel-tejas/hacknuthon-aubergine"
                colorIndex={5}
                hideVisit={true}
              />
            </div>
            {/* Using arbitrary colored indexes so they rotate nicely */}
            <div className='col-span-12'>
              <FeaturedProjects
                title="Hisaab"
                summary="Built a trading analytics platform to help users track trades and improve consistency. Focused on transforming raw trading data into actionable insights for better decision-making."
                link="https://hisab-delta.vercel.app/"
                type="Featured Project"
                img={hisaab}
                github="https://github.com/patel-tejas/Hisab"
                colorIndex={0}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProjects
                title="Sarthi Foundation"
                summary="Created a website for Sarthi Foundation, a registered NGO dedicated to uplifting underprivileged communities in Ahmedabad. The organization provides daily nutritious meals, supports widows with essential groceries, and offers educational resources to children through seasonal drives and ongoing programs."
                link="https://sarthifoundationngo.org/"
                type="A Client Project"
                img={sarthi}
                colorIndex={2}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProjects
                title="URL Shortener"
                summary="Your URL shortener web app lets users quickly shorten long URLs into compact, shareable links. Built with Next.js and MongoDB."
                link="https://squeezeurl.vercel.app/"
                type="Featured Project"
                img={urlshortener}
                github="https://github.com/patel-tejas/URLShortener"
                colorIndex={4}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProjects
                title="Zenlect"
                summary="Worked with Zenlect to create a web-app for their company."
                link="https://zenlect.vercel.app"
                type="A Client Project"
                img={zenlect}
                github="https://github.com/patel-tejas/Zenlect"
                colorIndex={1}
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Usability Hub- Clone"
                link="https://techno-tez.github.io/Usability-Clone-1/"
                type="Featured Project"
                img={usability}
                github="https://github.com/patel-tejas/Usability-Clone-1"
                colorIndex={3}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Cleaning Service Website"
                link="https://primeonecleaning.netlify.app/"
                type="Featured Project"
                img={prime}
                github="https://github.com/patel-tejas/Prime-One-Cleaning"
                colorIndex={5}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Old Portfolio"
                link="https://tejaspatel-portfolio.netlify.app/"
                type="Featured Project"
                img={portfolio}
                github="https://github.com/patel-tejas/My-Portfolio"
                colorIndex={2}
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Expense Tracker"
                link="https://github.com/patel-tejas/Expense-Tracker"
                type="Featured Project"
                img={expenseTrack}
                github="https://github.com/patel-tejas/Expense-Tracker"
                colorIndex={0}
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProjects
                title="SparkX Generative AI"
                summary="A Web App used to generate text, images, videos, and audio using AI. Have used OpenAI's API services to generate text, code and image services. While for audio and video used Replicate AI's APIs."
                link="https://spark-x-ai.vercel.app/"
                type="Featured Project"
                img={sparkX}
                github="https://github.com/patel-tejas/SparkX-AI"
                colorIndex={4}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProjects
                title="OpenVerse - Blog App"
                summary="A platform to share your views, knowledge, opinions and emotions with people, freely and openly."
                link="https://openverse-blog.vercel.app/"
                type="Featured Project"
                img={project1}
                github="https://github.com/patel-tejas/openverse-blog"
                colorIndex={1}
              />
            </div>
          </div>
        </Layout>
      </main>

      <div className="relative z-10 bg-light dark:bg-dark border-t-8 border-black">
        <ArticlesPage />
      </div>
    </>
  )
}

export default page