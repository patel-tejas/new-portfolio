import Layout from '@/components/Layout'
import Image from 'next/image'
// import profilePic from "../public/pfp.png"
// import profilePic from "../public/developer-pic-1.webp"
import profilePic from "../public/pfp3.png"
import HeroText from '@/components/HeroText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import Expertise from '@/components/Expertise'

import img1 from "@/public/half-circle.png"
import img2 from "@/public/half-circle-right-icon.png"
import img3 from "@/public/triangle-icon.png"
import Form from '@/components/Form'


export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen font-mont dark:text-light'>
        <Layout className="pt-0 md:pt-16 xs:px-4">
          <div className='flex md:flex-col lg:flex-col sm:flex-col items-center justify-between w-full min-h-[80vh] relative'>
            <div className='w-3/4 md:w-full h-full lg:flex justify-center relative '>
              <Image alt="Yeah, it's me here" src={profilePic} className='w-full h-auto lg:h-[50vh] lg:w-auto lg:mb-5 md:inline-block  md:h-[40vh] md:w-auto md:mb-1' />
              <Image src={img3} className='absolute h-[35px] sm:h-[30px] bottom-0 left-10 lg:left-5  w-auto sm:bottom-0 sm:left-3 animate-moverfast' />
            </div>
            <div className='w-full h-[60vh] lg:h-[80vh] md:h-[80vh] sm:h-[60vh] mx-5 flex flex-col md:mt-5'>
              <div className='text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl h-1/2 md:h-1/3 sm:h-1/2 xs:h-[26vh] font-bold flex  lg:w-full flex-col gap-2'>
                <span >Hello!</span>
                <span>I'm <span className='text-orange-500 duration-200 '>Tejas Patel</span>.</span>

                <span className='text-xl'><HeroText /></span>
              </div>

              <div className='flex h-1/2 justify-end lg:justify-start items-start text-base font-medium flex-col font-mont lg:text-center w-full'>
                <p className='w-full text-[18px] md:text-sm sm:text-xs font-light'>As a skilled software engineer working towards development of web-apps through the use of modern framework- NextJS. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>
                <div className='flex gap-5 mt-10 lg:self-center sm:gap-4 sm:mt-6'>
                  <Link href="/Tejas Patel Resume.pdf" target='_black' className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-dark dark:border-light dark:bg-light dark:text-dark dark:hover:text-light md:p-2 md:px-4 md:text-base sm:text-sm'>
                    Resume <LinkArrow className="w-6 ml-2" />
                  </Link>
                  <Link href="mailto:techtezofficial@gmail.com" className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-dark dark:border-light dark:bg-light dark:text-dark dark:hover:text-light md:p-2 md:px-4 md:text-base sm:text-sm'>Mail</Link>
                </div>
              </div>
            </div>

            <Image src={img1} className='absolute h-[60px] w-auto top-10 right-10 sm:right-5 sm:h-[40px] sm:top-5 animate-mover' />
            {/* <Image src={img2} className='absolute h-[40px] w-auto top-10 left-10  sm:top-5 sm:left-7 animate-moverfastfast'/> */}

          </div>

          <Expertise />
          <Form className="px-0 mb-0 pb-10 !justify-start sm:!min-h-max"/>
        </Layout>
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="techtez" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FD0" data-position="Right" data-x_margin="18" data-y_margin="18" defer></script>
      </main>
    </>
  )
}
