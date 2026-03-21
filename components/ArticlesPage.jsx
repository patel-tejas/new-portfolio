"use client"

import React, { useRef } from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from "../public/art1.webp"
import article2 from "../public/art2.webp"
import neetArticle from "../public/neet-blog.webp"
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const ref = useRef(null)

    function handleMouse (event) {
        ref.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave (event) {
        ref.current.style.display = "none"
        x.set(0)
        y.set(0)
    }
    return (
        <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline sm:text-lg'>{title}</h2>

            <FramerImage style={{x: x, y: y}} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.2}}} ref={ref} src={img} alt={title} className='md:!hidden w-96 z-10 h-auto hidden absolute rounded-lg' />
        </Link>
    )
}

const Article = ({ title, img, link, readTime }) => {
    return (
        <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-50px" }}
            className='relative w-full p-6 py-8 my-6 rounded-2xl flex items-center justify-between first:mt-0 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 sm:flex-col z-10'
        >
            <MovingImg title={title} img={img} link={link} />
            <span className='font-mono font-bold text-sm border-2 border-black dark:border-white px-3 py-1 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] sm:self-start sm:mt-4 uppercase'>{readTime}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-50px" }}
            className='col-span-1 w-full flex flex-col items-center justify-between relative rounded-2xl border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 gap-4 p-6 xs:p-5 z-10'
        >
            <div className='w-full flex justify-between items-center mb-0'>
                <div className='flex items-center border-2 border-black dark:border-white px-2 py-1 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]'>
                    <span className='font-mono text-[10px] sm:text-[8px] font-black uppercase tracking-widest'>
                        ARTICLE
                    </span>
                </div>
                <span className='font-mono text-[10px] sm:text-[8px] font-bold uppercase tracking-widest'>{time}</span>
            </div>

            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-xl relative border-4 border-black dark:border-white'>
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
                    <h2 className='my-2 w-full text-left text-3xl sm:text-2xl font-black font-mont hover:underline decoration-4 underline-offset-4'>{title}</h2>
                </Link>
                <div className='w-full border-b-4 border-black dark:border-white my-2'></div>
                
                <p className='text-sm sm:text-base font-bold border-l-4 border-black dark:border-white pl-4 leading-relaxed mb-4'>{summary}</p>

                <div className='w-full justify-between flex gap-4 mt-auto items-center'>
                    <Link href={link} target='_blank' className='
                        text-sm sm:text-base font-black border-2 border-black dark:border-white px-4 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
                        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] 
                        active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200 w-full text-center
                    '>
                        READ MORE ↗
                    </Link>
                </div>
            </div>
        </motion.li>
    )
}

const ArticlesPage = () => {
    return (
        <main className='w-full flex flex-col overflow-hidden dark:text-white'>
            <Layout className="pt-16">
                <AnimatedText text="Words can change the World! " className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl" />
                <ul className='grid grid-cols-2 gap-16 mb-16 md:grid-cols-1 lg:gap-8 lg:mb-8 md:gap-y-16'>
                    <FeaturedArticle
                        title="Redux: Mastering State Management for Seamless Development"
                        time="5 min read"
                        img={article1}
                        link="https://medium.com/@pateltejas.2005/redux-mastering-state-management-for-seamless-development-468e6c88926b"
                        summary="Article on managing state management in React using Redux which is widely used by professional devs these days."
                    />

                    <FeaturedArticle
                        title="Scraping NEET 2024 Results (DOS attack on NEET website)"
                        time="7 min read"
                        img={neetArticle}
                        link="https://medium.com/@pateltejas.2005/scraping-neet-2024-results-dos-attack-on-neet-result-website-78f2a578b321"
                        summary="Article on how to scrape data from websites through nodejs."
                    />
                </ul>

                {/* <h2 className='font-bold text-4xl text-center w-full my-10'>All Articles</h2>

                <ul className='mb-0 text-black'>
                    <Article
                        title="Unleashing the Power of Swiper: The Versatile Slider"
                        link="https://medium.com/@pateltejas.2005/unleashing-the-power-of-swiper-the-versatile-slider-bd8d97186abd"
                        readTime="2 min read"
                        img={article2}
                    />
                    
                    <Article
                        title="Scraping NEET 2024 Results (DOS attack on NEET website)r"
                        link="https://medium.com/@pateltejas.2005/unleashing-the-power-of-swiper-the-versatile-slider-bd8d97186abd"
                        readTime="2 min read"
                        img={article2}
                    />

                   
                </ul> */}
            </Layout>
        </main>
    )
}

export default ArticlesPage