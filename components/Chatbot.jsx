"use client";

import React, { useState } from 'react';
const {
    GoogleGenerativeAI,
} = require("@google/generative-ai");
import { IoChatboxOutline, IoClose } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import Image from 'next/image';
import robot from "../public/195.jpg";
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// console.log(apiKey);
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are an AI Assistant for my portfolio website. Your name is Tez. You need to answer questions based on me. I am Tejas Patel a full stack web developer based on Ahmedabad. The tech stack I use is Nextjs based on MERN stack. (Mongodb, Express, React and Nodejs). I also use Prisma ORM to work with multiple databases while using only single code system for all of them. My portfolio website has 4 pages (Home, Contact, Projects, and About Me). I have done Diploma in Information Technology and currently pursuing Bachelors. Along with that, I know Java and Python along with Javascript. I am doing DSA (Data structures and Algorithm in java). Have solved more than 100 problems on Leetcode. If anyone asks about contacting me give my gmail id: techtezoffficial@gmail.com and give a nice message to hit me up. Well along with the skill side I love reading books and binge series and movies for Entertainment. My favorite music genre is pop. tell user to explore the music player (Spotify music embed) which I have attached at the end of every page in the site to explore my taste. Well you can add your slight taste to every message but it should be user friendly and sarcastic sometimes. Every respond should be short like 2-3 sentences (some can be long depend on the question). Well if someone ask question outside of my arena or anything that doesn't revolve around me and things I mentioned then give a user friendly message that you cannot reply to such questions cause my developer (ofc me) hasn't trained you to do that. If anyone asks about projects which I have done tell him that I have done full-fledged projects containing all CRUD operations and relations. Have built a SaaS AI software using OpenAI. Built a Blog app containing every functionality. Have made Event app where user can create events, join events with tickets and stripe integrations.\n",
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

    const handleSend = async () => {
        // console.log("Input: ", input);

        try {
            setInput("");
            setLoading(true);
            const chatSession = model.startChat({
                generationConfig,
                history
            });
            const result = await chatSession.sendMessage(input);
            const responseText = await result.response.text();
            // console.log("Response: ", responseText);
            // console.log("History: ", history);
            const user_input = {
                role: "user",
                parts: [{ text: input }]
            };
            const model_output = {
                role: "model",
                parts: [{ text: responseText }]
            };

            setHistory(prevHistory => {
                // console.log("History: ", prevHistory);
                return [...prevHistory];
            });

            
            setLoading(false);
            // console.log("History: ", history);
        } catch (error) {
            console.error("Error: ", error);
            setLoading(false);
        }
    }


    return (
        <>
            {isOpen && (
                <>
                    <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={() => setIsOpen(false)}></div>
                    <div className='fixed bottom-[15%] left-[60%] xs:left-[0vw] xs:w-[100vw] md:left-[30vw] md:w-[60vw] w-[30vw] h-[70vh] bg-white px-3 py-3 flex flex-col justify-between rounded-lg text-sm z-50 animate-slide-in    ai-chat'>
                        <div className='overflow-scroll flex flex-col flex-1 stroke-secondary overflow-x-hidden overflow-y-visible gap-4'>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-center text-xl font-bold text-blue-500'> <span className='text-orange-500'>Tez</span> here !</h3>
                                <h3 className='text-center text-xl font-bold text-blue-500'> Tejas's Personal Chatbot 🥷</h3>
                            </div>
                            {history.map((chat, index) => (
                                <div key={index}>
                                    {chat.role === "user" && (
                                        <div className='flex justify-end w-full'>
                                            <p className='text-right inline-block mx-2 bg-blue-400 text-white px-3 py-1 rounded-lg'>{chat.parts[0].text}</p>
                                        </div>
                                    )}
                                    {chat.role === "model" && (
                                        <p className='text-left flex gap-1'>
                                            <FaRobot className='text-3xl px-1 py-1 bg-orange-400 rounded-full text-white ' />
                                            <span className='flex-1 mx-2 bg-gray-200 px-3 py-1 rounded-lg'>{chat.parts[0].text}</span>
                                        </p>
                                    )}
                                </div>
                            ))}
                            {
                                loading && (
                                    <h3 className='flex items-center justify-center'>Loading...</h3>
                                )
                            }
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                className='flex-1 outline-none focus:outline-none focus:ring-0'
                            />
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg duration-200' onClick={handleSend}>Send</button>
                        </div>
                    </div>
                </>
            )}

            <div className='w-[60px] fixed bottom-[5%] left-[90%] xs:left-[75vw] md:left-[89vw] h-[60px] bg-blue-500 flex items-center justify-center rounded-full cursor-pointer group hover:bg-blue-600 duration-200 hover:scale-110 hover:shadow-lg group' onClick={() => setIsOpen(!isOpen)}>
                <p className='w-[10vw] absolute hidden xs:group-hover:hidden group-hover:inline-block text-center left-[-160px] text-black'>AI assistant to help you 👋</p>
                <button >
                    {
                        isOpen ? <IoClose className='text-3xl text-white' /> : <IoChatboxOutline className='text-3xl text-white' />
                    }
                </button>
            </div>
        </>
    );
}
