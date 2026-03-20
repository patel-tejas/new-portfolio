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

const FeaturedProjects = ({ type, link, title, summary, img, github }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      className='w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark/10 dark:border-light/10 bg-light/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(182,62,150,0.2)] dark:hover:shadow-[0_8px_30px_rgb(88,230,217,0.2)] hover:border-primary/50 dark:hover:border-secondary/50 transition-all duration-500 p-8 dark:bg-dark/40 dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4'
    >
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-2xl lg:w-full relative group'>
        <div className="absolute inset-0 bg-primary/20 dark:bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl pointer-events-none"></div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
          <Image
            src={img}
            alt={title}
            className="w-full h-auto"
          />
        </motion.div>
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-10 lg:w-full lg:pl-0 lg:pt-8'>
        <span className='text-primary dark:text-secondary font-bold text-sm tracking-[0.2em] uppercase'>{type}</span>
        <Link href={link} target='_blank' >
          <h2 className='my-3 w-full text-left text-5xl font-extrabold hover:text-primary dark:hover:text-secondary transition-colors duration-300 sm:text-3xl'>{title}</h2>
        </Link>

        <p className='my-3 font-medium text-dark/80 dark:text-light/80 text-lg xs:text-base leading-relaxed'>{summary}</p>
        <div className='flex gap-6 mt-6 items-center'>
          {github && (
            <Link href={github} target='_blank' className='w-12 h-12 flex items-center justify-center bg-dark text-light dark:bg-light dark:text-dark rounded-full hover:scale-110 transition-transform duration-300 shadow-md'>
              <GithubIcon className="w-6 h-6" />
            </Link>
          )}
          <Link href={link} target='_blank' className='flex items-center bg-transparent text-dark dark:text-light p-3 px-8 rounded-full text-lg font-bold border-2 border-dark dark:border-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-300 sm:px-6 sm:text-base shadow-sm'>
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      className='w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark/10 dark:border-light/10 shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(182,62,150,0.2)] dark:hover:shadow-[0_8px_30px_rgb(88,230,217,0.2)] bg-light/40 backdrop-blur-xl hover:border-primary/50 dark:hover:border-secondary/50 dark:bg-dark/40 dark:text-light transition-all duration-500 gap-4 p-6 relative xs:p-4'
    >
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-2xl relative group'>
        <div className="absolute inset-0 bg-primary/20 dark:bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl pointer-events-none"></div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
          <Image
            src={img}
            alt={title}
            className="w-full h-auto"
          />
        </motion.div>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4 px-2'>
        <span className='text-primary dark:text-secondary font-bold text-xs tracking-[0.2em] uppercase'>{type}</span>
        <Link href={link} target='_blank' >
          <h2 className='my-2 w-full text-left text-3xl font-extrabold hover:text-primary dark:hover:text-secondary transition-colors duration-300 lg:text-2xl sm:text-xl'>{title}</h2>
        </Link>

        <div className='w-full justify-between flex gap-4 mt-6 items-center'>
          <Link href={link} target='_blank' className='font-bold text-lg hover:underline underline-offset-8 decoration-2 hover:text-primary dark:hover:text-secondary transition-all duration-300'>Visit Project ↗</Link>
          {github && (
            <Link href={github} target='_blank' className='hover:scale-110 transition-transform duration-300 text-dark/70 hover:text-dark dark:text-light/70 dark:hover:text-light'>
              <GithubIcon className="w-8 h-8" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className='w-full flex flex-col items-center justify-center'>
        <Layout className="pt-16 md:pt-8 sm:pd-4 xs:pt-2">
          <AnimatedText className="lg:text-7xl  sm:text-6xl xs:text-4xl py-8" text="Imagination trumphs Knowledge !" />

          <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0 md:gap-y-16 mb-10'>
            <div className='col-span-12'>
              <FeaturedProjects
                title="Hisaab"
                summary="Built a trading analytics platform to help users track trades and improve consistency. Focused on transforming raw trading data into actionable insights for better decision-making."
                link="https://hisab-delta.vercel.app/"
                type="Featured Project"
                img={hisaab}
                github="https://github.com/patel-tejas/Hisab"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProjects
                title="Sarthi Foundation"
                summary="Created a website for Sarthi Foundation, a registered NGO dedicated to uplifting underprivileged communities in Ahmedabad. The organization provides daily nutritious meals, supports widows with essential groceries, and offers educational resources to children through seasonal drives and ongoing programs."
                link="https://sarthifoundationngo.org/"
                type="A Client Project"
                img={sarthi}
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
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Usability Hub- Clone"
                link="https://techno-tez.github.io/Usability-Clone-1/"
                type="Featured Project"
                img={usability}
                github="https://github.com/patel-tejas/Usability-Clone-1"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Cleaning Service Website"
                link="https://primeonecleaning.netlify.app/"
                type="Featured Project"
                img={prime}
                github="https://github.com/patel-tejas/Prime-One-Cleaning"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Old Portfolio"
                link="https://tejaspatel-portfolio.netlify.app/"
                type="Featured Project"
                img={portfolio}
                github="https://github.com/patel-tejas/My-Portfolio"
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Expense Tracker"
                link="https://github.com/patel-tejas/Expense-Tracker"
                type="Featured Project"
                img={expenseTrack}
                github="https://github.com/patel-tejas/Expense-Tracker"
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProjects
                title="SparkX Generative AI"
                summary="A Web App used to generate text, images, videos, and audio using AI. Have used OpenAI's API services to generate text, code and image services. While for audio and video used Replicate AI's APIs."
                link="https://spark-x-ai.vercel.app/"
                type="Featured Project" e
                img={sparkX}
                github="https://github.com/patel-tejas/SparkX-AI"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProjects
                title="URL Shortener"
                summary="Your URL shortener web app lets users quickly shorten long URLs into compact, shareable links. Built with Next.js and MongoDB."
                link="https://squeezeurl.vercel.app/"
                type="Featured Project" e
                img={urlshortener}
                github="https://github.com/patel-tejas/URLShortener"
              />
            </div>
          </div>
        </Layout>
      </main>

      <ArticlesPage />
    </>
  )
}

export default page