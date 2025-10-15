"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont"
})

const MotionLink = motion(Link);

const CustomMobileLink = ({ href, title, className = "", toggle }) => {

    const router = useRouter()


    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (

        <button href={href} className={`${className} relative group`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block absolute left-0 -bottom-0.5  bg-light group-hover:w-full transition-[width] ${router.asPath === href ? "w-full" : "w-0"} ease duration-500 dark:bg-dark`}>&nbsp;</span>
        </button>

    )
}


const CustomLink = ({ href, title, className = "" }) => {
    return (

        <Link href={href} className={`${className} relative group `}>
            {title}
            <span className={`h-[1px] inline-block w-0 absolute left-0 -bottom-0.5  bg-dark group-hover:w-full transition-[width] ease duration-300 dark:bg-light`}>&nbsp;</span>
        </Link>

    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [mode, setMode] = useThemeSwitcher();

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={`w-full h-max px-32 py-8 font-medium flex items-center justify-between dark:text-light relative ${montserrat.className} z-10 lg:px-16 md:px-12 sm:px-8`} onClick={() => isOpen ? setIsOpen(false) : ""}>

            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav className='flex gap-4'>
                    <CustomLink href={"/"} title="Home" />
                    <CustomLink href="/about" title="About" />
                    <CustomLink href="/projects" title="Projects" />
                    <CustomLink href="/contact" title="Contact" />
                </nav>

                <nav className='flex items-center justify-end flex-1 gap-3'>
                    <MotionLink href="https://twitter.com/tejaspatel1532" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} target='_blank'>
                        <TwitterIcon />
                    </MotionLink>
                    <MotionLink href="https://github.com/patel-tejas" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} target='_blank'>
                        <GithubIcon />
                    </MotionLink>
                    <MotionLink href="https://www.linkedin.com/in/techtez/" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} target='_blank'>
                        <LinkedInIcon />
                    </MotionLink>
                    <MotionLink href="https://www.instagram.com/_me.tez_/" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} target='_blank'>
                        <InstagramIcon />
                    </MotionLink>

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                        {
                            mode === "dark" ?
                                <SunIcon className="fill-dark" /> :
                                <MoonIcon className="fill-dark" />
                        }
                    </button>

                </nav>
            </div>

            {isOpen && (
                <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1, transition: { duration: "0.2" } }} className='min-w-[80vw] flex justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 gap-10'>
                    <nav className='flex gap-4 items-center flex-col'>
                        <CustomMobileLink toggle={handleClick} href={"/"} title="Home" className='text-light dark:text-dark' />
                        <CustomMobileLink toggle={handleClick} href="/about" title="About" className='text-light dark:text-dark' />
                        <CustomMobileLink toggle={handleClick} href="/projects" title="Projects" className='text-light dark:text-dark' />
                        <CustomMobileLink toggle={handleClick} href="/contact" title="Contact" className='text-light dark:text-dark' />
                    </nav>

                    <nav className='flex items-center justify-end flex-1 gap-3 sm:gap-3  '>
                        <MotionLink href="https://twitter.com/tejaspatel1532" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} target='_blank'>
                            <TwitterIcon />
                        </MotionLink>
                        <MotionLink href="https://github.com/patel-tejas" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} target='_blank' className='bg-light dark:bg-dark rounded-full '>
                            <GithubIcon />
                        </MotionLink>
                        <MotionLink href="https://www.linkedin.com/in/techtez/" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} target='_blank'>
                            <LinkedInIcon />
                        </MotionLink>
                        <MotionLink href="https://www.instagram.com/_pateltejas_/" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} target='_blank' className='bg-dark  rounded-full'>
                            <InstagramIcon />
                        </MotionLink>



                    </nav>
                </motion.div>
            )}


            <div>
                <nav className='absolute left-[50%] translate-x-[-50%] top-2'>
                    <Logo />
                </nav>
            </div>
            <div className='hidden lg:block'>
                <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                    {
                        mode === "dark" ?
                            <SunIcon className="fill-dark" /> :
                            <MoonIcon className="fill-dark" />
                    }
                </button>
            </div>
        </header>
    )
}

export default Navbar