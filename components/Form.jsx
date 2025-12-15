"use client"

import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from 'react-toastify';
import { RiTwitterXFill } from 'react-icons/ri';
import { GrLinkedinOption } from 'react-icons/gr';
import { BiLogoInstagram } from 'react-icons/bi';
import Link from 'next/link';

const Form = ({ className }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            toast.info('SENDING MESSAGE...', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            
            const formData = await axios.post("/api/contact", data)
            
            toast.success('MESSAGE SENT SUCCESSFULLY', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        catch (error) {
            toast.error('SERVER MAINTENANCE IN PROGRESS', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log("Internal server error");
        }
    }

    return (
        <section className="relative max-w-6xl mx-auto py-12 sm:py-8 px-4 sm:px-4 xs:px-3">
            {/* Terminal Header */}
            <div className="mb-8 sm:mb-6 text-center">
                <div className="inline-flex items-center gap-3 mb-3 sm:mb-2">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <h2 className="font-mono text-sm sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        CONTACT TERMINAL
                    </h2>
                </div>
                
                <div className="text-4xl sm:text-3xl xs:text-2xl font-bold mb-3">
                    <span className="block text-gray-900 dark:text-white">GET IN TOUCH</span>
                    <span className="block">
                        <span className="text-green-600 dark:text-[#00FF6A] font-mono">CONNECT WITH ME</span>
                    </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-sm xs:text-xs font-light">
                    Send a message or connect with me on social platforms
                </p>
            </div>

            {/* Terminal Container */}
            <div className="relative border-2 border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden 
                bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
                
                {/* Terminal Top Bar */}
                <div className="flex items-center justify-between p-4 sm:p-3 border-b border-gray-300 dark:border-gray-800 
                    bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                            <div className="w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500"></div>
                            <div className="w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="font-mono text-sm sm:text-xs font-bold text-gray-900 dark:text-gray-300">
                            MESSAGE_TERMINAL
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-mono text-xs sm:text-[10px] text-gray-600 dark:text-gray-400">READY</span>
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-6 sm:p-4 xs:p-3">
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
                        {/* Left Column: Contact Form */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse"></div>
                                    <h3 className="font-mono text-sm font-bold text-gray-900 dark:text-white uppercase">
                                        SEND MESSAGE
                                    </h3>
                                </div>
                                
                                <form className="space-y-4">
                                    {/* Name Field */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label htmlFor="name" className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase">
                                                NAME
                                            </label>
                                            {errors.name && (
                                                <span className="font-mono text-xs text-red-500">REQUIRED</span>
                                            )}
                                        </div>
                                        <input 
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            {...register("name", { required: true })}
                                            className="w-full px-4 py-3 rounded-lg font-mono text-sm
                                                bg-white/80 dark:bg-[#0D0D0D]/80
                                                border border-gray-300 dark:border-gray-700
                                                focus:border-green-500 dark:focus:border-[#00FF6A]
                                                focus:outline-none focus:ring-2 focus:ring-green-500/20
                                                transition-all duration-300
                                                placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label htmlFor="email" className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase">
                                                EMAIL
                                            </label>
                                            {errors.email && (
                                                <span className="font-mono text-xs text-red-500">REQUIRED</span>
                                            )}
                                        </div>
                                        <input 
                                            id="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            {...register("email", { required: true })}
                                            className="w-full px-4 py-3 rounded-lg font-mono text-sm
                                                bg-white/80 dark:bg-[#0D0D0D]/80
                                                border border-gray-300 dark:border-gray-700
                                                focus:border-green-500 dark:focus:border-[#00FF6A]
                                                focus:outline-none focus:ring-2 focus:ring-green-500/20
                                                transition-all duration-300
                                                placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label htmlFor="message" className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase">
                                                MESSAGE
                                            </label>
                                            {errors.message && (
                                                <span className="font-mono text-xs text-red-500">REQUIRED</span>
                                            )}
                                        </div>
                                        <textarea 
                                            id="message"
                                            rows={4}
                                            placeholder="Type your message here..."
                                            {...register("message", { required: true })}
                                            className="w-full px-4 py-3 rounded-lg font-mono text-sm
                                                bg-white/80 dark:bg-[#0D0D0D]/80
                                                border border-gray-300 dark:border-gray-700
                                                focus:border-green-500 dark:focus:border-[#00FF6A]
                                                focus:outline-none focus:ring-2 focus:ring-green-500/20
                                                transition-all duration-300
                                                placeholder:text-gray-400 dark:placeholder:text-gray-600
                                                resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={handleSubmit(onSubmit)}
                                        type="button"
                                        className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl 
                                            font-mono font-bold text-white dark:text-black text-sm
                                            bg-gradient-to-r from-green-600 to-emerald-600 
                                            dark:from-[#00FF6A] dark:to-emerald-500
                                            hover:from-green-700 hover:to-emerald-700 
                                            dark:hover:from-[#00FF6A] dark:hover:to-emerald-600
                                            transition-all duration-300 hover:scale-[1.02] active:scale-95
                                            border border-green-500/30 dark:border-[#00FF6A]/30
                                            shadow-lg shadow-green-500/20 dark:shadow-[#00FF6A]/20
                                            group"
                                    >
                                        <span>SEND MESSAGE</span>
                                        <svg 
                                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right Column: Social Links */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                                    <h3 className="font-mono text-sm font-bold text-gray-900 dark:text-white uppercase">
                                        SOCIAL CONNECTIONS
                                    </h3>
                                </div>
                                
                                <div className="space-y-3">
                                    {/* LinkedIn */}
                                    <Link 
                                        href="https://www.linkedin.com/in/pateltejas2005/" 
                                        target='_blank'
                                        className="flex items-center gap-4 p-4 rounded-xl
                                            bg-white/50 dark:bg-[#0D0D0D]/50 backdrop-blur-sm
                                            border border-gray-300 dark:border-gray-700
                                            hover:border-blue-500/50 dark:hover:border-blue-500/50
                                            hover:bg-blue-50/50 dark:hover:bg-blue-900/10
                                            transition-all duration-300 hover:scale-[1.02] group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                                            <GrLinkedinOption className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">
                                                LINKEDIN
                                            </div>
                                            <div className="font-mono text-xs text-gray-500 dark:text-gray-400">
                                                Professional Network
                                            </div>
                                        </div>
                                        <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                                            →
                                        </div>
                                    </Link>

                                    {/* Twitter */}
                                    <Link 
                                        href="https://twitter.com/tejaspatel1532" 
                                        target='_blank'
                                        className="flex items-center gap-4 p-4 rounded-xl
                                            bg-white/50 dark:bg-[#0D0D0D]/50 backdrop-blur-sm
                                            border border-gray-300 dark:border-gray-700
                                            hover:border-gray-500/50 dark:hover:border-gray-500/50
                                            hover:bg-gray-50/50 dark:hover:bg-gray-900/10
                                            transition-all duration-300 hover:scale-[1.02] group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                                            <RiTwitterXFill className="w-6 h-6 text-white dark:text-black" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">
                                                TWITTER/X
                                            </div>
                                            <div className="font-mono text-xs text-gray-500 dark:text-gray-400">
                                                Tech Updates & Thoughts
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400 group-hover:translate-x-1 transition-transform duration-300">
                                            →
                                        </div>
                                    </Link>

                                    {/* Instagram */}
                                    <Link 
                                        href="https://www.instagram.com/_me.tez_/" 
                                        target='_blank'
                                        className="flex items-center gap-4 p-4 rounded-xl
                                            bg-white/50 dark:bg-[#0D0D0D]/50 backdrop-blur-sm
                                            border border-gray-300 dark:border-gray-700
                                            hover:border-pink-500/50 dark:hover:border-pink-500/50
                                            hover:bg-pink-50/50 dark:hover:bg-pink-900/10
                                            transition-all duration-300 hover:scale-[1.02] group"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                                            <BiLogoInstagram className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">
                                                INSTAGRAM
                                            </div>
                                            <div className="font-mono text-xs text-gray-500 dark:text-gray-400">
                                                Personal Life & Projects
                                            </div>
                                        </div>
                                        <div className="text-pink-600 dark:text-pink-400 group-hover:translate-x-1 transition-transform duration-300">
                                            →
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Email Direct Link */}
                            <div className="p-4 rounded-xl border border-amber-500/20 
                                bg-amber-500/5 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                    </svg>
                                    <h4 className="font-mono text-sm font-bold text-amber-600 dark:text-amber-400">
                                        DIRECT EMAIL
                                    </h4>
                                </div>
                                <Link 
                                    href="mailto:techtezofficial@gmail.com"
                                    className="font-mono text-sm text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 
                                        transition-colors duration-300 block break-all"
                                >
                                    techtezofficial@gmail.com
                                </Link>
                                <p className="font-mono text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    Click to open your default mail client
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terminal Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-3 border-t border-gray-300 dark:border-gray-800
                    bg-white/50 dark:bg-black/50 backdrop-blur-sm text-sm sm:text-xs">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="font-mono text-gray-600 dark:text-gray-400">FORM READY</span>
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
                        <div className="hidden sm:block font-mono text-gray-500 dark:text-gray-500">
                            STATUS: <span className="text-gray-900 dark:text-white font-bold">ACTIVE</span>
                        </div>
                    </div>
                    <div className="font-mono text-xs sm:text-[10px] text-gray-500 dark:text-gray-500">
                        ENCRYPTION: <span className="text-green-600 dark:text-[#00FF6A]">TLS 1.3</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form