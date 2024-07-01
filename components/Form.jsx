"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import AnimatedText from '../components/AnimatedText'
import axios from "axios";
import { toast } from 'react-toastify';
import { InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons';
import { RiTwitterXFill } from 'react-icons/ri';
import { GrLinkedinOption } from 'react-icons/gr';
import { BiLogoInstagram } from 'react-icons/bi';
import Link from 'next/link';
import Layout from '../components/Layout'

const Form = ({ className }) => {

    const deleteProduct = async () => {

    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {toast.info('Sending', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
            const formData = await axios.post("/api/contact", data)
            toast.success('Message Sent Successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        catch (error) {
            toast.error('Oops! We are on maintenance', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log("Internal server error");
        }
    }
    return (
        <Layout className={`pt-16 min-h-screen flex justify-center ${className} w-full`}>
            <form className='w-[60%] lg:w-[80%] sm:w-full'>
                <AnimatedText className="text-7xl lg:text-5xl xs:text-3xl py-5 text-left" text="Let's Talk!! 🤝" />
                <div className='flex flex-col gap-5 xs:text-[13px] dark:text-white'>
                    <div className='grid items-center justify-center grid-cols-2 gap-3 md:grid-cols-1'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name" className='uppercase'>Name</label>
                            <input name="name" id='name' placeholder="Your Name" {...register("name")} className='' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='uppercase'>Email</label>
                            <input name="email" id='email' placeholder="Your email" {...register("email", { required: true })} />
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="message" className='uppercase'>Message</label>
                            <textarea name="message" rows={5} id='message' {...register("message")} placeholder="Your Message" className='w-full' />
                        </div>
                    </div>
                    {errors.name && <span>This field is required</span>}
                    {errors.email && <span>This field is required</span>}
                    {errors.message && <span>This field is required</span>}
                    <div className='flex justify-center items-center w-full mt-5 sm:mt-0'>
                        <button onClick={handleSubmit(onSubmit)} type="submit" className='w-[60%] md:w-[80%] sm:w-full flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-dark dark:border-light dark:bg-light dark:text-dark dark:hover:text-light md:p-2 md:px-4 md:text-base sm:text-sm cursor-pointer' >
                            <div className='flex gap-2 justify-center items-center w-full '>
                                <span>Just Send</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>

                        </button>
                    </div>
                </div>
                {!className && (

                    <div className='flex flex-col gap-4 mt-10 items-center justify-center text-[18px] sm:text-[14px]'>

                        <Link href="https://www.linkedin.com/in/techtez/" target='_blank' className='w-[60%] md:w-[80%] sm:w-full py-2 rounded-lg text-white bg-blue-400 flex items-center justify-center gap-2 hover:scale-105 duration-300 hover:shadow-2xl'>
                            <span > Connect on LinkedIn </span>
                            <span ><GrLinkedinOption /></span>
                        </Link>
                        <Link href="https://twitter.com/tejaspatel1532" target='_blank' className='w-[60%] md:w-[80%] sm:w-full py-2 rounded-lg text-white bg-dark/80 flex items-center justify-center gap-2 hover:scale-105 duration-300 hover:shadow-2xl dark:border border-white dark:bg-dark/20'>
                            <span> Connect on Twitter</span>
                            <span><RiTwitterXFill /></span>
                        </Link>
                        <Link href="https://www.instagram.com/_pateltejas_/" target='_blank' className='w-[60%] md:w-[80%] sm:w-full py-2 rounded-lg text-white bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center gap-2 hover:scale-105 duration-300 hover:shadow-2xl'>
                            <span> Connect on Instagram </span>
                            <span className=''><BiLogoInstagram /></span>
                        </Link>


                    </div>
                )}
            </form>

        </Layout >
    )
}

export default Form