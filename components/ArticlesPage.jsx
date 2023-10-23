"use client"

import React, { useRef } from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from "@/public/art1.webp"
import article2 from "@/public/art2.webp"
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
        <motion.li initial={{y:200}} whileInView={{y:0, transition:{duration: 0.5, ease: "easeInOut" }}} viewport={{once: true}}className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between text-dark bg-light first:mt-0 border border-dark border-solid border-r-4 border-b-4 dark:bg-dark dark:text-white dark:border-white sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary dark:text-secondary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{readTime}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light dark:text-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-full  cursor-pointer overflow-hidden rounded-lg relative'>
                <Image
                    src={img}
                    alt={title}
                    className="w-full rounded-lg hover:scale-105 duration-300"
                />
            </Link>

            <Link href={link} target='_blank' className='flex flex-col gap-2'>
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline underline-offset-2 xs:text-lg'>{title}</h2>

                <p className='text-sm mb-2dark:text-white/75'>{summary}</p>
                <span className='text-primary dark:text-secondary font-semibold'>{time}</span>
            </Link>
        </li>
    )
}

const ArticlesPage = () => {
    return (
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-white'>
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
                        title="Redux: Mastering State Management for Seamless Development"
                        time="5 min read"
                        img={article1}
                        link="https://medium.com/@pateltejas.2005/redux-mastering-state-management-for-seamless-development-468e6c88926b"
                        summary="Article on managing state management in React using Redux which is widely used by professional devs these days."
                    />
                </ul>

                <h2 className='font-bold text-4xl text-center w-full my-10'>All Articles</h2>

                <ul>
                    <Article
                        title="Unleashing the Power of Swiper: The Versatile Slider"
                        link="https://medium.com/@pateltejas.2005/unleashing-the-power-of-swiper-the-versatile-slider-bd8d97186abd"
                        readTime="2 min read"
                        img={article2}
                    />
                    
                    <Article
                        title="Unleashing the Power of Swiper: The Versatile Slider"
                        link="https://medium.com/@pateltejas.2005/unleashing-the-power-of-swiper-the-versatile-slider-bd8d97186abd"
                        readTime="2 min read"
                        img={article2}
                    />

                    <Article
                        title="Unleashing the Power of Swiper: The Versatile Slider"
                        link="https://medium.com/@pateltejas.2005/unleashing-the-power-of-swiper-the-versatile-slider-bd8d97186abd"
                        readTime="2 min read"
                        img={article2}
                    />

                    <Article
                        title="Unleashing the Power of Swiper: The Versatile Slider"
                        link="https://medium.com/@pateltejas.2005/unleashing-the-power-of-swiper-the-versatile-slider-bd8d97186abd"
                        readTime="2 min read"
                        img={article2}
                    />
                </ul>
            </Layout>
        </main>
    )
}

export default ArticlesPage