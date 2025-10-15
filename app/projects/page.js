import AnimatedText from '../../components/AnimatedText'
import { GithubIcon } from '../../components/Icons'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
export const metadata = {
  title: 'Tejas Patel | Projects',
  description: 'This page contains all the projects created by Tejas Patel.',
}

const FeaturedProjects = ({ type, link, title, summary, img, github }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 duration-300"
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-secondary font-medium text-xl xs:text-base'>{type}</span>
        <Link href={link} target='_blank' >
          <h2 className='my-2 w-full text-left text-3xl font-bold hover:underline duration-300 underline-offset-2 sm:text-base '>{title}</h2>
        </Link>

        <p className='my-2 font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{summary}</p>
        <div className='flex gap-6 mt-2 items-center'>
          <Link href={github} target='_blank' className='w-10 h-10 flex items-center justify-center hover:border border-dark/75 dark:border-light/75 border-solid rounded-full '><GithubIcon /></Link>
          <Link href={link} target='_blank' className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-dark dark:border-light dark:bg-light dark:text-dark dark:hover:text-light sm:px-4 sm:text-base'>Visit Project</Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-dark shadow-2xl bg-light dark:bg-dark dark:border-light dark:text-light gap-4 p-4 relative xs:p-4'>
      <div className='absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%]  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 duration-300"
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between  '>
        <span className='text-primary dark:text-secondary font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' >
          <h2 className='my-2 w-full text-left text-3xl font-bold hover:underline duration-300 underline-offset-2 lg:text-2xl sm:text-xl'>{title}</h2>
        </Link>

        <div className='w-full justify-between flex gap-4 mt-2 items-center'>
          <Link href={link} target='_blank' className='rounded-lg font-semibold text-dark/75 hover:underline underline-offset-4 hover:text-dark dark:text-light/75 md:text-base text-lg'>Visit</Link>
          <Link href={github} target='_blank' className='w-10'><GithubIcon className="w-10 h-10 md:w-6" /></Link>
        </div>
      </div>
    </article>
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
                link="https://zenlect.com"
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
                type="Featured Project"e
                img={sparkX}
                github="https://github.com/patel-tejas/SparkX-AI"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProjects
                title="URL Shortener"
                summary="Your URL shortener web app lets users quickly shorten long URLs into compact, shareable links. Built with Next.js and MongoDB."
                link="https://squeezeurl.vercel.app/"
                type="Featured Project"e
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