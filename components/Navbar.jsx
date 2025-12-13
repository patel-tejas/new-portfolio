"use client"

import Link from "next/link"
import React, { useState, useEffect } from "react"
import Logo from "./Logo"
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons"
import { motion, AnimatePresence } from "framer-motion"
import { Montserrat } from "next/font/google"
import { usePathname, useRouter } from "next/navigation"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

const MotionLink = motion(Link)

/* ------------------ Custom Links ------------------ */

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = pathname === href

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group font-medium text-left py-3`}
    >
      <span className={`text-2xl font-medium transition-colors duration-300
        ${isActive 
          ? "text-green-500 dark:text-[#00FF6A]" 
          : "text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-[#00FF6A]"
        }`}
      >
        {title}
      </span>
      <span
        className={`h-[2px] inline-block absolute left-0 -bottom-0.5
        transition-all duration-300 ease-out
        ${isActive 
          ? "w-full bg-green-500 dark:bg-[#00FF6A]" 
          : "w-0 bg-gray-800 dark:bg-gray-200"
        }
        group-hover:w-full`}
      />
    </button>
  )
}

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`${className} relative group font-medium`}>
      {title}
      <span
        className={`h-[2px] inline-block absolute left-0 -bottom-0.5
        transition-all duration-300 ease-out
        ${isActive ? "w-full bg-green-500 dark:bg-[#00FF6A]" : "w-0 bg-gray-800 dark:bg-gray-200"}
        group-hover:w-full group-hover:bg-green-500 dark:group-hover:bg-[#00FF6A]`}
      />
    </Link>
  )
}

/* ------------------ Navbar ------------------ */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState('light')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    
    // Get initial theme from localStorage or system preference
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setMode(storedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark')
    }
  }, [])

  // Apply theme when mode changes
  useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    
    // Remove both classes
    root.classList.remove('light', 'dark')
    
    // Add current mode class
    root.classList.add(mode)
    
    // Store in localStorage
    localStorage.setItem('theme', mode)
    
    console.log('Theme set to:', mode) // Debug
  }, [mode, mounted])

  /* Hide / Show navbar on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY && currentY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  /* Lock body scroll when menu open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  // Direct theme toggle function
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className={`fixed top-0 left-0 w-full z-50
        bg-white/95 dark:bg-[#0D0D0D]/95
        border-b border-gray-200 dark:border-[#2C2C2C]
        backdrop-blur-sm
        px-20 py-6 flex items-center justify-between
        ${montserrat.className}
        lg:px-12 md:px-8 sm:px-6`}
      >
        {/* Loading skeleton */}
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-6">
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </header>
    )
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50
        bg-white/95 dark:bg-[#0D0D0D]/95
        border-b border-gray-200 dark:border-[#2C2C2C]
        backdrop-blur-sm
        px-20 py-6 flex items-center justify-between
        ${montserrat.className}
        lg:px-12 md:px-8 sm:px-6`}
      >
        {/* Mobile Menu Button */}
        <button
          className="hidden lg:flex flex-col justify-center items-center z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
            ${isOpen 
              ? "rotate-45 translate-y-1 bg-green-500 dark:bg-[#00FF6A]" 
              : "bg-gray-800 dark:bg-gray-200"
            }`}
          />
          <span
            className={`block h-0.5 w-6 my-1 transition-all duration-300 ease-out
            ${isOpen ? "opacity-0" : "opacity-100 bg-gray-800 dark:bg-gray-200"}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
            ${isOpen 
              ? "-rotate-45 -translate-y-1 bg-green-500 dark:bg-[#00FF6A]" 
              : "bg-gray-800 dark:bg-gray-200"
            }`}
          />
        </button>

        {/* Desktop Nav */}
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav className="flex gap-6">
            <CustomLink 
              href="/" 
              title="Home" 
              className="text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-[#00FF6A] transition-colors" 
            />
            <CustomLink 
              href="/about" 
              title="About" 
              className="text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-[#00FF6A] transition-colors" 
            />
            <CustomLink 
              href="/projects" 
              title="Projects" 
              className="text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-[#00FF6A] transition-colors" 
            />
            <CustomLink 
              href="/contact" 
              title="Contact" 
              className="text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-[#00FF6A] transition-colors" 
            />
          </nav>

          <nav className="flex items-center gap-4">
            <MotionLink 
              href="https://twitter.com/tejaspatel1532" 
              target="_blank"
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-colors group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <TwitterIcon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-green-500 dark:group-hover:text-[#00FF6A] transition-colors" />
            </MotionLink>
            <MotionLink 
              href="https://github.com/patel-tejas" 
              target="_blank"
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-colors group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-green-500 dark:group-hover:text-[#00FF6A] transition-colors" />
            </MotionLink>
            <MotionLink 
              href="https://www.linkedin.com/in/pateltejas2005/" 
              target="_blank"
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-colors group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedInIcon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-green-500 dark:group-hover:text-[#00FF6A] transition-colors" />
            </MotionLink>
            <MotionLink 
              href="https://www.instagram.com/_me.tez_/" 
              target="_blank"
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-colors group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramIcon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-green-500 dark:group-hover:text-[#00FF6A] transition-colors" />
            </MotionLink>

            <button
              onClick={toggleTheme}
              className="ml-2 flex items-center justify-center rounded-full p-2
                bg-gray-100 dark:bg-[#1A1A1A] 
                border border-gray-300 dark:border-[#2C2C2C]
                hover:border-green-500 dark:hover:border-[#00FF6A]
                hover:shadow-lg hover:shadow-green-500/10 dark:hover:shadow-[#00FF6A]/10
                transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              {mode === "dark" ? (
                <SunIcon className="w-3.5 h-3.5 text-yellow-500 group-hover:rotate-12 transition-transform" />
              ) : (
                <MoonIcon className="w-3.5 h-3.5 text-indigo-500 group-hover:rotate-12 transition-transform" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Theme Toggle */}
        <div className='hidden lg:block'>
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-full p-2
                bg-gray-100 dark:bg-[#1A1A1A] 
                border border-gray-300 dark:border-[#2C2C2C]
                hover:border-green-500 dark:hover:border-[#00FF6A]
                hover:shadow-lg hover:shadow-green-500/10 dark:hover:shadow-[#00FF6A]/10
                transition-all duration-300"
            aria-label="Toggle theme"
          >
            {mode === "dark" ? (
              <SunIcon className="w-3.5 h-3.5 text-yellow-500" />
            ) : (
              <MoonIcon className="w-3.5 h-3.5 text-indigo-500" />
            )}
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:flex hidden"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut",
                type: "tween"
              }}
              className="fixed top-0 left-0 h-screen w-full max-w-sm sm:max-w-md
              bg-white dark:bg-[#0D0D0D]
              border-r border-gray-300 dark:border-[#2C2C2C]
              z-[100] shadow-2xl overflow-y-auto"
            >
              {/* Header with Logo and Close */}
              <div className="p-6 flex justify-between items-center border-b border-gray-200 dark:border-[#2C2C2C]">
                <Logo />
                <button 
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1A1A1A] 
                    transition-all duration-300"
                  aria-label="Close menu"
                >
                  <svg 
                    className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-8">
                <nav className="flex flex-col gap-2 mb-12">
                  <CustomMobileLink 
                    toggle={closeMenu} 
                    href="/" 
                    title="Home" 
                  />
                  <CustomMobileLink 
                    toggle={closeMenu} 
                    href="/about" 
                    title="About" 
                  />
                  <CustomMobileLink 
                    toggle={closeMenu} 
                    href="/projects" 
                    title="Projects" 
                  />
                  <CustomMobileLink 
                    toggle={closeMenu} 
                    href="/contact" 
                    title="Contact" 
                  />
                </nav>

                {/* Social Links */}
                <div className="border-t border-gray-200 dark:border-[#2C2C2C] pt-8 mb-8">
                  <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">
                    Connect with me
                  </h3>
                  <nav className='flex items-center justify-start flex-wrap gap-4'>
                    <MotionLink 
                      href="https://twitter.com/tejaspatel1532" 
                      target="_blank"
                      onClick={closeMenu}
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] 
                        hover:bg-green-500/10 dark:hover:bg-[#00FF6A]/10 
                        group transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TwitterIcon className="w-5 h-5 text-gray-600 dark:text-gray-400 
                        group-hover:text-green-500 dark:group-hover:text-[#00FF6A] 
                        transition-colors" />
                    </MotionLink>
                    <MotionLink 
                      href="https://github.com/patel-tejas" 
                      target="_blank"
                      onClick={closeMenu}
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] 
                        hover:bg-green-500/10 dark:hover:bg-[#00FF6A]/10 
                        group transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <GithubIcon className="w-5 h-5 text-gray-600 dark:text-gray-400 
                        group-hover:text-green-500 dark:group-hover:text-[#00FF6A] 
                        transition-colors" />
                    </MotionLink>
                    <MotionLink 
                      href="https://www.linkedin.com/in/pateltejas2005/" 
                      target="_blank"
                      onClick={closeMenu}
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] 
                        hover:bg-green-500/10 dark:hover:bg-[#00FF6A]/10 
                        group transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LinkedInIcon className="w-5 h-5 text-gray-600 dark:text-gray-400 
                        group-hover:text-green-500 dark:group-hover:text-[#00FF6A] 
                        transition-colors" />
                    </MotionLink>
                    <MotionLink 
                      href="https://www.instagram.com/_me.tez_/" 
                      target="_blank"
                      onClick={closeMenu}
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] 
                        hover:bg-green-500/10 dark:hover:bg-[#00FF6A]/10 
                        group transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <InstagramIcon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-green-500 dark:group-hover:text-[#00FF6A] transition-colors" />
                    </MotionLink>
                  </nav>
                </div>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="w-full px-5 py-3.5 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] 
                    border border-gray-300 dark:border-[#2C2C2C]
                    hover:border-green-500 dark:hover:border-[#00FF6A]
                    transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  {mode === "dark" ? (
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                        <SunIcon className="w-4.5 h-4.5 text-yellow-500 group-hover:rotate-12 transition-transform" />
                        </div>
                      <div className="flex-2 font-medium text-gray-800 dark:text-gray-200">
                        Light Mode
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                      <MoonIcon className="w-4.5 h-4.5 text-indigo-500 group-hover:rotate-12 transition-transform" />
                        </div>
                      <div className="flex-2 font-medium text-gray-800 dark:text-gray-200">
                        Dark Mode
                      </div>
                    </div>
                  )}
                </button>
              </div>

              {/* Footer with Close Button */}
              <div className="p-6 border-t border-gray-200 dark:border-[#2C2C2C] mt-auto">
                <button 
                  onClick={closeMenu}
                  className="w-full px-5 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 
                    hover:text-gray-800 dark:hover:text-gray-200 
                    hover:bg-gray-100 dark:hover:bg-[#1A1A1A] 
                    transition-all duration-300 text-base font-medium"
                >
                  Close Menu
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar