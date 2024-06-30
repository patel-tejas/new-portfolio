"use client";

import React, { useState } from 'react';
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

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

    async function handleSend() {
        // console.log("Input: ", input);

        const chatSession = model.startChat({
            generationConfig,
            history
        });

        try {
            const result = await chatSession.sendMessage(input);
            const responseText = await result.response.text();
            // console.log("Response: ", responseText);

            const user_input = {
                role: "user",
                parts: [{ text: input }]
            };
            const model_output = {
                role: "model",
                parts: [{ text: responseText }]
            };

            setHistory(prevHistory => [
                ...prevHistory,
                user_input,
                model_output
            ]);

            setInput("");
            // console.log("History: ", history);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    const renderResponse = () => {
        return (
            <div>
                {history.map((chat, index) => (
                    <div key={index}>
                        <p><strong>{chat.role === 'user' ? 'User' : 'Tez'}:</strong> {chat.parts[0].text}</p>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div className='w-full px-2'>
            {renderResponse()}
            <div className='flex gap-1'>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    className='flex-1'
                />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}
