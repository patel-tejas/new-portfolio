"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import AnimatedText from '@/components/AnimatedText'
import axios from "axios";
import { toast } from 'react-toastify';

const Form = () => {

    const deleteProduct = async () => {

    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
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
        <div className='flex justify-center min-h-screen px-6'>
            <form className='w-[60vw] lg:w-[80vw] sm:w-full'>
                <AnimatedText className="text-7xl lg:text-5xl xs:text-3xl py-8 text-left" text="Hit me Up!! 👋" />
                <div className='flex flex-col gap-5 xs:text-[13px]'>
                    <div className='grid items-center justify-center grid-cols-2 gap-3 md:grid-cols-1'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <input name="name" id='name' defaultValue="Tejas Patel" {...register("name")} className='' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input name="email" id='email' defaultValue="abc@gmail.com" {...register("email", { required: true })} />
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id='message' {...register("message")} placeholder="Your Message" className='w-full' />
                        </div>
                    </div>
                    {errors.name && <span>This field is required</span>}
                    {errors.email && <span>This field is required</span>}
                    {errors.message && <span>This field is required</span>}
                    <div className='flex justify-center items-center '>
                        <button onClick={handleSubmit(onSubmit)} type="submit" className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-dark hover:border-dark duration-200 dark:hover:bg-dark dark:border-light dark:bg-light dark:text-dark dark:hover:text-light md:p-2 md:px-4 md:text-base sm:text-sm cursor-pointer' >
                            <div className='flex gap-2 justify-center items-center'>
                                <span>Just Send</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>

                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Form