"use client";

import React, { useEffect, useState, useRef } from 'react';
import { serverChatGeneration } from '../lib/action';

const {
    GoogleGenerativeAI,
    HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
import { IoChatboxOutline, IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import chatBot from "../public/robot1.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Image from 'next/image';
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// console.log(apiKey);

export default function Chatbot() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef(null);

    const handleSend = async () => {
        try {
            setInput("");
            setLoading(true);


            const responseText = await serverChatGeneration(input, history);
            setHistory(prevHistory => [...prevHistory, { role: "user", parts: [{ text: input }] }, { role: "model", parts: [{ text: responseText }] }]);
            
            setLoading(false);
        } catch (error) {
            console.error("Error: ", error);
            setLoading(false);
        }
        
    }

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [history, loading]);

    return (
        <>
            {isOpen && (
                <>
                    <div className='fixed inset-0 bg-black bg-opacity-50 z-40 dark:bg-gray-500/80' onClick={() => setIsOpen(false)}></div>
                    <div className='fixed bottom-[15%] left-[60%] xs:left-[5vw] xs:w-[90vw] md:left-[30vw] md:w-[60vw] w-[30vw] h-[70vh] px-4 py-5 xs:px-3  xs:py-3 flex flex-col justify-between rounded-xl text-sm z-50 animate-slide-in bg-gradient-to-br from-blue-300 to-purple-500 dark:bg-gradient-to-br dark:from-slate-700 dark:to-gray-800'>
                        <div className='overflow-scroll flex flex-col flex-1 overflow-x-hidden overflow-y-visible gap-4' ref={chatContainerRef}>
                            <div className='flex flex-col items-center'>
                                <Image src={chatBot} alt="chatbot" width={100} height={100} className='w-[100px] h-[100px]' />
                            </div>
                            <p className='text-left flex gap-1'>
                                <FaRobot className='text-3xl px-1 py-1 bg-blue-400 rounded-full text-white ' />
                                <span className='flex-1 mx-2 bg-gray-200 px-3 py-1 rounded-lg'>Hello! I'm Tez, your friendly AI guide. A virtual version of Tejas 😅. I can answer your questions about his skills, projects, and interests. Feel free to ask away!</span>
                            </p>
                            {history.map((chat, index) => (
                                <div key={index}>
                                    {chat.role === "user" && (
                                        <div className='flex justify-end w-full'>
                                            <p className='text-right inline-block mx-2 bg-blue-700 dark:bg-blue-500 text-white px-3 py-1 rounded-lg'>{chat.parts[0].text}</p>
                                        </div>
                                    )}
                                    {(chat.role === "model") &&
                                        (
                                            <p className='text-left flex gap-1'>
                                                <FaRobot className='text-3xl px-1 py-1 bg-blue-400 rounded-full text-white ' />
                                                <span className='flex-1 mx-2 bg-gray-200 px-3 py-1 rounded-lg'>{chat.parts[0].text}</span>
                                            </p>
                                        )
                                    }
                                </div>
                            ))}
                            {loading && (
                                <p className='text-left flex gap-1 items-center'>
                                    <FaRobot className='text-3xl px-1 py-1 bg-blue-400 rounded-full text-white mr-3' />
                                    <div className='h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                                    <div className='h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                                    <div className='h-2 w-2 bg-white  rounded-full animate-bounce'></div>
                                </p>
                            )}
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                className='flex-1 outline-none focus:outline-0 focus:ring-0'
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') { handleSend() }
                                }}
                            />
                            <IoArrowForwardCircleSharp className='w-[50px] h-full text-white  dark:text-white font-bold rounded-full hover:scale-110 dark:hover:text-blue-400 duration-200 cursor-pointer' onClick={handleSend}
                            />


                        </div>
                    </div>
                </>
            )
            }

            <div className='w-[60px] fixed bottom-[5%] left-[90%] xs:left-[75vw] md:left-[89vw] h-[60px] bg-blue-500 flex items-center justify-center rounded-full cursor-pointer group hover:bg-blue-600 duration-200 hover:scale-110 hover:shadow-lg group z-50' onClick={() => setIsOpen(!isOpen)}>
                {!isOpen &&
                    (
                        <p className='w-[10vw] absolute hidden xs:group-hover:hidden group-hover:inline-block text-center left-[-160px] text-black dark:text-white'>AI assistant to help you 👋</p>
                    )
                }
                <button>
                    {
                        isOpen ? <MdOutlineKeyboardArrowDown className='text-3xl text-white ' /> : <IoChatboxOutline className='text-3xl text-white' />
                    }
                </button>
            </div>
        </>
    );
}
