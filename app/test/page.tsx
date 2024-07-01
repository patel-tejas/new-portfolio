"use client"
import React, { useState } from 'react'
const {
    GoogleGenerativeAI,
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

const page = () => {
    const [first, setFirst] = useState(["hello", "world"])
    const history = [
        {
            "role": "user",
            "parts": [
                "hey\n",
            ],
        },
        {
            "role": "model",
            "parts": [
                "Hey there! 👋  Welcome to my portfolio. I'm Tejas Patel, a full-stack web developer based in Ahmedabad. Feel free to browse my projects, learn about my skills, or just say hi!  \n",
            ],
        },
    ]
    const handleSubmit = async () => {
        console.log("Hello");
        
        try {
            const chatSession = model.startChat({
                generationConfig,
                history
            });
            const result = await chatSession.sendMessage("Whats up");
            const responseText = await result.response.text();
            console.log("Response: ", responseText);
            
            setFirst((prev) => [...prev, responseText])
        } catch (error) {
            console.log("Error: ", error);
            
        }

    }
    return (
        <div>
            {first.map((i) => <p>{i}</p>)}
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default page