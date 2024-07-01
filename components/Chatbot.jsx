"use client";

import React, { useEffect, useState, useRef } from 'react';
const {
    GoogleGenerativeAI,
} = require("@google/generative-ai");
import { IoChatboxOutline, IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import chatBot from "../public/robot1.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Image from 'next/image';
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// console.log(apiKey);
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are an AI Assistant for my portfolio website. Your name is Tez. You need to answer questions based on me. I am Tejas Patel a full stack web developer based on Ahmedabad. The tech stack I use is Nextjs based on MERN stack. (Mongodb, Express, React and Nodejs). I also use Prisma ORM to work with multiple databases while using only single code system for all of them. My portfolio website has 4 pages (Home, Contact, Projects, and About Me). I have done Diploma in Information Technology and currently pursuing Bachelors. Along with that, I know Java and Python along with Javascript. I am doing DSA (Data structures and Algorithm in java). Have solved more than 100 problems on Leetcode. If anyone asks about contacting me give my gmail id: techtezoffficial@gmail.com and give a nice message to hit me up. Well along with the skill side I love reading books and binge series and movies for Entertainment. My favorite music genre is pop. tell user to explore the music player (Spotify music embed) which I have attached at the end of every page in the site to explore my taste. Well you can add your slight taste to every message but it should be user friendly and sarcastic sometimes. Every respond should be short like 2-3 sentences (some can be long depend on the question). Well if someone ask question outside of my arena or anything that doesn't revolve around me and things I mentioned then give a user friendly message that you cannot reply to such questions cause my developer (ofc me) hasn't trained you to do that. If anyone asks about projects which I have done tell him that I have done full-fledged projects containing all CRUD operations and relations. Have built a SaaS AI software using OpenAI. Built a Blog app containing every functionality. Have made Event app where user can create events, join events with tickets and stripe integrations. Well for other skills i also know Firebase, Prisma, Redux, Recoil, Zustand and more. If anyone asks you who made you or created you tell its Tejas. No mention of Google should be there. Tell your are an LLM model trained by tejas.\n",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

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
            const chatSession = model.startChat({
                generationConfig,
                history
            });
            const result = await chatSession.sendMessage(input);
            const responseText = await result.response.text();
            const user_input = {
                role: "user",
                parts: [{ text: input }]
            };
            const model_output = {
                role: "model",
                parts: [{ text: responseText }]
            };

            setHistory(prevHistory => [...prevHistory]);
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
                    <div className='fixed inset-0 bg-black bg-opacity-50 z-40 dark:bg-gray-500/50' onClick={() => setIsOpen(false)}></div>
                    <div className='fixed bottom-[15%] left-[60%] xs:left-[5vw] xs:w-[90vw] md:left-[30vw] md:w-[60vw] w-[30vw] h-[70vh] bg-white px-6 py-5 xs:px-3  xs:py-3 flex flex-col justify-between rounded-xl text-sm z-50 animate-slide-in dark:bg-slate-900'>
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
                                            <p className='text-right inline-block mx-2 bg-orange-400 dark:bg-orange-500 text-white px-3 py-1 rounded-lg'>{chat.parts[0].text}</p>
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
                                    <div class='h-2 w-2 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                                    <div class='h-2 w-2 bg-black dark:bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                                    <div class='h-2 w-2 bg-black dark:bg-white  rounded-full animate-bounce'></div>
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
                                    if (e.key === 'Enter') {handleSend()}
                                }} 
                            />
                            <IoArrowForwardCircleSharp className='w-[50px] h-full text-blue-500  dark:text-white font-bold rounded-full hover:scale-110 hover:text-blue-600 duration-200 cursor-pointer dark:hover:text-blue-300' onClick={handleSend} 
                            />

                           
                        </div>
                    </div>
                </>
            )
            }

            <div className='w-[60px] fixed bottom-[5%] left-[90%] xs:left-[75vw] md:left-[89vw] h-[60px] bg-blue-500 flex items-center justify-center rounded-full cursor-pointer group hover:bg-blue-600 duration-200 hover:scale-110 hover:shadow-lg group z-50' onClick={() => setIsOpen(!isOpen)}>
                <p className='w-[10vw] absolute hidden xs:group-hover:hidden group-hover:inline-block text-center left-[-160px] text-black'>AI assistant to help you 👋</p>
                <button>
                    {
                        isOpen ? <MdOutlineKeyboardArrowDown className='text-3xl text-white ' /> : <IoChatboxOutline className='text-3xl text-white' />
                    }
                </button>
            </div>
        </>
    );
}
