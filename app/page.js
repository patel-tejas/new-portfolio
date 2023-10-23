import Layout from '@/components/Layout'
import Image from 'next/image'
// import profilePic from "../public/pfp.png"
import profilePic from "../public/developer-pic-1.webp"
import HeroText from '@/components/HeroText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
export default function Home() {
  return (
    <>
    <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen font-mont dark:text-light'>
        <Layout className="pt-0 md:pt-16">
          <div className='flex md:flex-col lg:flex-col sm:flex-col items-center justify-between w-full h-full'>
            <div className='w-3/4 md:w-full h-full'>
              <Image alt="Yeah, it's me here" src={profilePic} className='w-full h-auto lg:hidden md:inline-block md:w-full' />
            </div>
            <div className='w-full h-[50vh] lg:h-[80vh] md:h-[50vh] sm:h-[60vh] mx-5 flex flex-col gap-6'>
              <div className='text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl h-1/2 md:h-1/3 sm:h-1/2 font-bold capitalize flex items-center justify-start lg:w-full '>
                <HeroText />
              </div>

              <div className='flex h-1/2 items-start  text-base font-medium flex-col font-mont lg:text-center w-full'>
                <p className='w-full text-base md:text-sm sm:text-xs'>As a skilled software engineer working towards development of web-apps through the use of modern framework- NextJS. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>
                <div className='flex gap-5 mt-4 lg:self-center sm:gap-4 sm:mt-6'>
                  <Link href="/Tejas Patel Resume.pdf" target='_black' className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-dark dark:border-light dark:bg-light dark:text-dark dark:hover:text-light md:p-2 md:px-4 md:text-base sm:text-sm'>
                    Resume <LinkArrow className="w-6 ml-2" />
                  </Link>
                  <Link href="mailto:techtezofficial@gmail.com" className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-dark dark:border-light dark:bg-light dark:text-dark dark:hover:text-light md:p-2 md:px-4 md:text-base sm:text-sm'>Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
