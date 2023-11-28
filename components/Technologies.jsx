"use client";

import AnimatedText from './AnimatedText'
import Image from 'next/image'
import tailwind from "@/public/tailwind.png"
import react from "@/public/react.png"
import nextjs from "@/public/nextjs.png"
import html from "@/public/html.png"
import node from "@/public/node.png"
import js from "@/public/javascript.png"
import github from "@/public/github.png"
import python from "@/public/python.png"
import java from "@/public/java.png"

import "@/components/technologies.module.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

const Technologies = () => {

  return (
    <div className='mt-[150px] sm:mt-[200px] xs:mt-[100px] relative mb-10 hidden sm:block'>
      <h2 className='uppercase w-full text-center text-yellow-600 font-semibold text-xl sm:text-base'>Tech i have worked on</h2>

      <AnimatedText text="My Cards" className="uppercase sm:text-4xl" />
      {/* <div className={styles.logos}>
        <div className={styles.logos_slide}>
          <Image src={tailwind} />
        </div>
      </div> */}
      {/* <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        autoplay={{
          disableOnInteraction: false,
        }}
        loop={true}
        speed={400}
        grabCursor={true}
        className='!flex !items-center !justify-center px-5 my-5'
      >
        
          <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600'>
            <Image src={tailwind} className='w-[10vh] h-auto' />
          </SwiperSlide>
          <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600'>
            <Image src={react} className='w-[10vh] h-auto' />
          </SwiperSlide>
          <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600'>
            <Image src={nextjs} className='w-[10vh] h-auto' />
          </SwiperSlide>
          <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600'>
            <Image src={html} className='w-[10vh] h-auto' />
          </SwiperSlide>
          <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600'>
            <Image src={node} className='w-[10vh] h-auto' />
          </SwiperSlide>
          <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600'>
            <Image src={js} className='w-[10vh] h-auto' />
          </SwiperSlide>
          <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600'>
            <Image src={github} className='w-[10vh] h-auto' />
          </SwiperSlide>
      </Swiper> */}

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="w-[60vw] sm:h-[33vh] mt-10 bg-transparent shadow-2xl rounded-3xl  sm:!block"
        autoplay={{
          disableOnInteraction: false,
        }}

      >
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
          <Image src={react} className='w-[10vh] h-auto' />
          <h2>React</h2>
        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-gray-800 to-black text-white'>
          <Image src={nextjs} className='w-[10vh] h-auto ' />
          <h2>Next.Js</h2>
        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-green-500 to-lime-900 text-white'>
          <Image src={node} className='w-[10vh] h-auto' />
          <h2>Node.Js</h2>
        </SwiperSlide>



        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-orange-400 to-yellow-500 text-white'>
          <Image src={js} className='w-[10vh] h-auto rounded-xl shadow-2xl' />
          <h2>JavaScript</h2>

        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
          <Image src={github} className='w-[10vh] h-auto shadow-2xl rounded-full' />
          <h2>Github</h2>
        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-pink-700 to-purple-800 text-white'>
          <Image src={tailwind} className='w-[10vh] h-auto text-white ' />
          <h2>Tailwind</h2>
        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-yellow-300 to-blue-950 text-white'>
          <Image src={python} className='w-[10vh] h-auto' />
          <h2>Python</h2>
        </SwiperSlide>
        <SwiperSlide className=' !flex !items-center !justify-center flex-col font-semibold gap-5 w-full h-full rounded-3xl bg-gradient-to-br from-purple-700 to-red-900 text-white'>
          <Image src={java} className='w-[10vh] h-auto' />
          <h2>Java</h2>
        </SwiperSlide>
      </Swiper>

    </div >
  )
}

export default Technologies