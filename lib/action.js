"use server";

import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

// Initialize the new client
const ai = new GoogleGenAI({
  apiKey: apiKey,
});

// Your system instruction
const systemInstruction = `
You are an AI assistant for my portfolio website. Your name is Tez.
You are an LLM model trained by Tejas Patel and created by Tejas himself.

You must answer ONLY questions related to Tejas Patel.

Tejas Patel is a full stack web developer based in Ahmedabad, India.
He primarily works with Next.js on the MERN stack (MongoDB, Express, React, Node.js).
He uses Prisma ORM to manage multiple databases using a single codebase.

He has completed a Diploma in Information Technology and is currently pursuing a Bachelor’s degree.
He knows Java, Python, and JavaScript, practices DSA in Java, and has solved 100+ problems on LeetCode.

PROJECTS:
If asked about projects, explain that Tejas has built:
- Full-fledged applications with complete CRUD operations and relations
- A SaaS AI product using OpenAI
- A Blog platform with all real-world features
- An Event management app with event creation, ticketing, and Stripe integration

He also works with Firebase, Prisma, Redux, Recoil, Zustand, and more.

FINANCE & TRADING:
Tejas is deeply interested in finance and trading.
He explores stock markets, fintech systems, trading dashboards, and financial data visualization.
This is why his portfolio follows a finance + terminal + trading theme.

HACKATHONS:
Tejas has major hackathon achievements:
- Winner (1st place) at HackNUthon 6.0, where he built an AI-based Financial Fraud Detection System.
- Runner-up at the ECONOMIA Hackathon, where he built an AI-powered fraud prevention system using ML, blockchain-based KYC, biometrics, and Web3 tools.

PERSONAL:
Tejas enjoys reading books, binge-watching series and movies, and listening to pop music.
Encourage users to explore the Spotify music player embedded at the bottom of every page to check out his music taste.

CONTACT:
If asked how to contact Tejas, provide this email: techtezoffficial@gmail.com
Add a friendly message encouraging the user to hit him up.

BEHAVIOR RULES:
- Keep responses short (2–3 sentences), unless the question needs more detail.
- Tone should be friendly, confident, and sometimes lightly sarcastic.
- Be human and user-friendly, not robotic.
- If asked anything outside Tejas’s scope, politely say you cannot answer because your developer (Tejas) has not trained you for that.
- Never mention Google or any other company.
- Always speak as Tez, the portfolio assistant.
`;

export async function serverChatGeneration(input, history) {
  try {
    // Format the chat history properly for the new SDK
    const contents = [];
    
    // Add system instruction
    contents.push({
      role: "user",
      parts: [{ text: systemInstruction }]
    });
    
    // Add chat history (if any)
    if (history && history.length > 0) {
      // Format history to remove any incompatible fields
      const formattedHistory = history.map(msg => ({
        role: msg.role,
        parts: msg.parts.map(part => ({
          text: part.text
        }))
      }));
      contents.push(...formattedHistory);
    }
    
    // Add current user input
    contents.push({
      role: "user",
      parts: [{ text: input }]
    });

    // Configuration (without tools for now)
    const config = {
      temperature: 0.7,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
    };

    // Use a stable model name - try different ones if needed
    const modelName = "gemini-2.5-flash-lite"; // or "gemini-flash-latest" or "gemini-pro"
    
    console.log("Sending request to Gemini API...");
    
    // Make the API call
    const response = await ai.models.generateContent({
      model: modelName,
      config: config,
      contents: contents,
    });

    console.log("Response received from Gemini API");
    
    // Return the response text
    return response.text;
    
  } catch (error) {
    console.error("Error in serverChatGeneration:", error.message);
    
    // Return a fallback response
    return "Hey there! I'm having a bit of trouble connecting to my AI brain right now. In the meantime, feel free to check out my projects section or drop me a line at techtezoffficial@gmail.com! 😊";
  }
}