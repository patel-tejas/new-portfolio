// app/page.js - UPDATED VERSION
"use client";

import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic from "../public/pfp3.png";
import HeroText from '../components/HeroText';
import Link from 'next/link';
import { LinkArrow } from '../components/Icons'; // Using existing LinkArrow, you can add new icons later
import TransitionEffect from '../components/TransitionEffect';
import Expertise from '../components/Expertise';
import Form from '../components/Form';
import MobileTechnologies from '../components/Mobile_Technologies';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import MarketTicker from '../components/MarketTicker';
import ClientOnly from '../components/ClientOnly';

// --- NEW: Terminal Background Component ---
const TerminalBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30 px-0">
    {/* Subtle animated grid */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 255, 106, 0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 255, 106, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />
    {/* Floating "data point" orbs */}
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/10 rounded-full animate-pulse" />
    <div
      className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-amber-500/5 rounded-full animate-ping"
      style={{ animationDuration: '3s' }}
    />
  </div>
);

export default function Home() {
  return (
    <>
      <ClientOnly>
        <MarketTicker />
      </ClientOnly>
      <TransitionEffect />

      <main className='flex text-dark w-full min-h-screen font-mont dark:text-light relative mx-0'>
        {/* Apply the terminal background */}
        <TerminalBackground />

        <Layout className="pt-0 md:pt-16 sm:pt-0">
          {/* Hero Section as a Trading Dashboard Card */}
          <div className='flex md:flex-col lg:flex-col sm:flex-col items-center justify-between w-full min-h-[80vh] relative mb-40 sm:mb-60'>

            {/* Left Column: Profile as an "Asset" */}
            <div className='w-2/5 sm:w-full md:w-full h-full lg:flex justify-center relative p-6'>
              <div className='relative border-2 border-gray-700 dark:border-[#00FF6A]/30 rounded-xl p-4 bg-white/5 dark:bg-[#0D0D0D]/80 backdrop-blur-sm'>
                {/* Asset Header */}
                <div className='flex justify-between items-center mb-4'>
                  <span className='font-mono text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider'>
                    PERSONAL ASSET
                  </span>
                  <span className='font-mono text-xs px-1 py-1 rounded bg-green-500/20 text-green-600 dark:text-[#00FF6A] border border-green-500/30'>
                    ▲ ALWAYS
                  </span>
                </div>

                {/* Profile Image */}
                <div className='relative mb-4'>
                  <Image
                    alt="Tejas Patel - Developer Asset"
                    src={profilePic}
                    className='w-full h-auto rounded-lg border border-gray-600'
                    width={500}
                    height={500}
                  />
                  {/* Chart line overlay for trading feel */}
                  <svg className='absolute bottom-0 left-0 w-full h-12 opacity-70' viewBox="0 0 100 20">
                    <path
                      d="M0,15 Q25,5 50,10 T100,5"
                      fill="none"
                      stroke="#00FF6A"
                      strokeWidth="2"
                      strokeDasharray="3,2"
                    />
                  </svg>
                </div>

                {/* Asset Metrics */}
                <div className='grid grid-cols-2 gap-3 font-mono'>
                  <div className='text-center p-2 bg-gray-100 dark:bg-[#1A1A1A] rounded border border-gray-300 dark:border-gray-700'>
                    <div className='text-xs text-gray-500 dark:text-gray-400'>RELIABILITY</div>
                    <div className='text-lg font-bold text-green-600 dark:text-[#00FF6A]'>99.8%</div>
                  </div>
                  <div className='text-center p-2 bg-gray-100 dark:bg-[#1A1A1A] rounded border border-gray-300 dark:border-gray-700'>
                    <div className='text-xs text-gray-500 dark:text-gray-400'>UPTIME</div>
                    <div className='text-lg font-bold text-amber-600 dark:text-amber-400'>24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Personal Metrics & CTA */}
            <div className='w-3/5 md:w-full h-[60vh] lg:h-[80vh] md:h-[80vh] sm:h-[60vh] mx-5 flex flex-col md:mt-5 md:px-3'>
              <div className='mb-8'>
                {/* Terminal-style header */}
                <div className='flex items-center gap-3 mb-2'>
                  <div className='w-3 h-3 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse' />
                  <span className='font-mono text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                    PORTFOLIO OVERVIEW
                  </span>
                </div>

                <h1 className='text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl font-bold'>
                  <span className='block'>HELLO,</span>
                  <span className='block'>
                    I'M <span className='text-green-600 dark:text-[#00FF6A] font-mono'>TEJAS</span>.
                  </span>
                </h1>

                <div className='mt-4 pl-1 border-l-4 border-amber-500 dark:border-amber-400 h-[50px]'>
                  <div className='italic text-gray-700 dark:text-gray-300'>
                    <HeroText />
                  </div>
                </div>
              </div>

              {/* Performance Stats */}
              <div className='flex-grow mb-8'>
                <p className='text-[18px] md:text-sm sm:text-xs font-light mb-6 text-gray-700 dark:text-gray-300'>
                  As a skilled software engineer working towards development of web-apps through the use of modern framework- NextJS. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>

                {/* Metric Cards */}
                <div className='grid grid-cols-3 gap-4 mb-6'>
                  <div className='text-center p-3 bg-white dark:bg-[#1A1A1A] rounded-lg border border-gray-300 dark:border-gray-700'>
                    <div className='text-2xl font-bold font-mono text-green-600 dark:text-[#00FF6A]'>100%</div>
                    <div className='text-xs text-gray-500 dark:text-gray-400 mt-1'>PROJECT SUCCESS</div>
                  </div>
                  <div className='text-center p-3 bg-white dark:bg-[#1A1A1A] rounded-lg border border-gray-300 dark:border-gray-700'>
                    <div className='text-2xl font-bold font-mono text-amber-600 dark:text-amber-400'>24/7</div>
                    <div className='text-xs text-gray-500 dark:text-gray-400 mt-1'>DEV UPTIME</div>
                  </div>
                  <div className='text-center p-3 bg-white dark:bg-[#1A1A1A] rounded-lg border border-gray-300 dark:border-gray-700'>
                    <div className='text-2xl font-bold font-mono text-blue-600 dark:text-blue-400'>∞</div>
                    <div className='text-xs text-gray-500 dark:text-gray-400 mt-1'>INNOVATION</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons as Trading Orders */}
              <div className='flex flex-wrap gap-4 md:gap-3 sm:gap-3 sm:mt-0 mt-10 w-full justify-center md:justify-center sm:justify-center'>
                {/* Resume Button */}
                <Link
                  href="/Tejas Patel Resume.pdf"
                  target='_blank'
                  className='
      flex items-center justify-center 
      bg-green-600 dark:bg-[#00FF6A] 
      hover:bg-green-700 dark:hover:bg-[#00FF6A]/90 
      text-white 
      py-3 px-6 
      md:py-2.5 md:px-5 
      sm:py-2 sm:px-4 
      xs:py-2 xs:px-4 
      text-lg md:text-base sm:text-sm xs:text-sm 
      font-semibold 
      border-0 
      rounded-lg 
      font-mono 
      group 
      transition-all duration-300 
      hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/30 
      active:scale-95
      w-full max-w-xs 
      md:max-w-[180px] 
      sm:max-w-[160px] 
      xs:max-w-[190px]
      text-center
    '
                >
                  {/* Up arrow icon */}
                  <svg
                    className="
        w-5 h-5 
        md:w-4 md:h-4 
        sm:w-4 sm:h-4 
        xs:w-3.5 xs:h-3.5 
        mr-3 
        flex-shrink-0
      "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  <span className="truncate">[ VIEW RESUME ]</span>
                </Link>

                {/* Mail Button */}
                <Link
                  href="mailto:techtezofficial@gmail.com"
                  className='
      flex items-center justify-center 
      bg-transparent 
      hover:bg-gray-100 dark:hover:bg-[#2C2C2C] 
      text-gray-800 dark:text-gray-300 
      hover:text-gray-900 dark:hover:text-white 
      py-3 px-6 
      md:py-2.5 md:px-5 
      sm:py-2 sm:px-4 
      xs:py-2 xs:px-4 
      text-lg md:text-base sm:text-sm xs:text-sm 
      font-semibold 
      border-2 border-gray-400 dark:border-gray-600 
      hover:border-gray-500 dark:hover:border-gray-500 
      rounded-lg 
      font-mono 
      group 
      transition-all duration-300 
      hover:scale-[1.02] 
      active:scale-95
      w-full max-w-xs 
      md:max-w-[180px] 
      sm:max-w-[160px] 
      xs:max-w-[190px]
      text-center
    '
                >
                  {/* Mail/envelope icon */}
                  <svg
                    className="
        w-5 h-5 
        md:w-4 md:h-4 
        sm:w-4 sm:h-4 
        xs:w-3.5 xs:h-3.5 
        mr-3 
        flex-shrink-0
      "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="truncate">[ SEND MAIL ]</span>
                </Link>
              </div>

            </div>
          </div>

          <Expertise />

          <ClientOnly>
            <MobileTechnologies className="hidden sm:block" />
          </ClientOnly>
          <div className="mt-20">
            <Form className="px-0 mb-0 pb-10 xs:pb-0 !hidden sm:!block sm:!min-h-max" />
          </div>
        </Layout>

        <ClientOnly>
          <SpeedInsights />
          <Analytics />
        </ClientOnly>
      </main>
    </>
  );
}