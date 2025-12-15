"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoChatboxOutline, IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaRobot, FaTerminal, FaChartLine, FaCog, FaBolt } from "react-icons/fa";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { serverChatGeneration } from "../lib/action";
import { PiChatTextLight } from "react-icons/pi";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const controls = useAnimation();

  // Quick commands
  const quickCommands = [
    "Tell me about your projects",
    "What's your tech stack?",
    "Finance experience?",
    "Hackathon achievements",
    "Show me your best work",
  ];

  // Handle message send
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setLoading(true);
    
    // Add user message immediately
    setHistory((prev) => [
      ...prev,
      { role: "user", parts: [{ text: userMessage }], id: Date.now() },
    ]);

    try {
      const responseText = await serverChatGeneration(userMessage, history);
      
      // Simulate streaming effect
      let displayText = "";
      const chars = responseText.split("");
      
      chars.forEach((char, index) => {
        setTimeout(() => {
          displayText += char;
          setStreamingText(displayText);
        }, index * 20);
      });

      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          { 
            role: "model", 
            parts: [{ text: responseText }], 
            id: Date.now() + 1 
          },
        ]);
        setStreamingText("");
        setLoading(false);
      }, chars.length * 20);

    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // Quick send from command
  const handleQuickCommand = (command) => {
    setInput(command);
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  // Scroll to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history, loading, streamingText]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Terminal typing effect for intro
  const [introText, setIntroText] = useState("");
  const introMessage = "Hello 👋 I'm TEZ_AI, your portfolio assistant. Type 'help' for commands.";

  useEffect(() => {
    if (isOpen) {
      let i = 0;
      const typing = setInterval(() => {
        if (i < introMessage.length) {
          setIntroText(introMessage.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 30);
      
      return () => clearInterval(typing);
    } else {
      setIntroText("");
    }
  }, [isOpen]);

  const containerVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0, 
      y: 20,
      rotateX: -10 
    },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0, 
      y: 20,
      rotateX: -10,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { 
        repeat: Infinity,
        duration: 2 
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        animate="pulse"
      >
        <div className="relative">
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-400/30 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              repeat: Infinity,
              duration: 2
            }}
          />
          
          {/* Main button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#0D0D0D] to-gray-900 border-2 border-green-500/50 flex items-center justify-center shadow-2xl group"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring" }}
            >
              {isOpen ? (
                <IoClose className="text-2xl text-green-500" />
              ) : (
                <div className="relative">
                  <PiChatTextLight className="text-2xl text-green-500" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                </div>
              )}
            </motion.div>
            
            {/* Hover label */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-xs font-mono text-green-400 whitespace-nowrap">
                {isOpen ? "CLOSE TERMINAL" : "CHAT WITH TEZ"}
              </span>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Chat Terminal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[30]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Terminal */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-24 right-8 w-[420px] h-[560px] z-[60]"
            >
              {/* Terminal Window */}
              <div className="relative w-full h-full bg-gradient-to-b from-[#0A0A0A] to-[#0D0D0D] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono">
                
                {/* Terminal Header */}
                <motion.div 
                  className="px-5 py-4 border-b border-gray-800 bg-gradient-to-r from-gray-900/50 to-[#0D0D0D]"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Status indicators */}
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      </div>
                      
                      {/* Title */}
                      <div className="flex items-center gap-2">
                        <FaTerminal className="text-green-500" />
                        <span className="text-sm font-bold text-green-400 tracking-wider">
                          TEZ_AI v2.1
                        </span>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    
                  </div>
                  
                  {/* Quick stats bar */}
                 
                </motion.div>

                {/* Quick Commands */}
                <motion.div 
                  className="px-5 py-3 border-b border-gray-800/50 bg-gradient-to-r from-gray-900/20 to-transparent"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {quickCommands.map((cmd, idx) => (
                      <motion.button
                        key={idx}
                        custom={idx}
                        variants={messageVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleQuickCommand(cmd)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700 hover:border-green-500/50 text-gray-300 hover:text-green-400 transition-all"
                      >
                        {cmd}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Chat Messages */}
                <div
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto px-5 py-4 space-y-4"
                >
                  {/* Welcome message with typing effect */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20">
                        <span className="text-xs text-green-500 font-bold">SYSTEM</span>
                      </div>
                      <span className="text-xs text-gray-500">@terminal:/tez_ai</span>
                    </div>
                    <div className="text-gray-300 pl-1 border-l-2 border-green-500/30">
                      <span className="text-green-400">{introText}</span>
                      {introText.length < introMessage.length && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="ml-0.5"
                        >
                          ▋
                        </motion.span>
                      )}
                    </div>
                  </motion.div>

                  {/* Chat History */}
                  <AnimatePresence>
                    {history.map((chat, i) => (
                      <motion.div
                        key={chat.id}
                        custom={i}
                        variants={messageVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-2"
                      >
                        {/* User message */}
                        {chat.role === "user" && (
                          <div className="text-right">
                            <div className="inline-flex items-center gap-2 mb-1">
                              <span className="text-xs text-gray-500">you@portfolio</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            </div>
                            <div className="inline-block max-w-[85%]">
                              <div className="px-4 py-2.5 rounded-2xl rounded-tr-none bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/30">
                                <p className="text-gray-100 text-sm leading-relaxed">
                                  {chat.parts[0].text}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* AI message */}
                        {chat.role === "model" && (
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              <span className="text-xs text-gray-500">tez_ai@terminal</span>
                            </div>
                            <div className="max-w-[90%]">
                              <div className="px-4 py-2.5 rounded-2xl rounded-tl-none bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700">
                                <p className="text-gray-200 text-sm leading-relaxed">
                                  {chat.parts[0].text}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Streaming response */}
                  {streamingText && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-gray-500">tez_ai@terminal</span>
                      </div>
                      <div className="max-w-[90%]">
                        <div className="px-4 py-2.5 rounded-2xl rounded-tl-none bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700">
                          <p className="text-gray-200 text-sm leading-relaxed">
                            {streamingText}
                          </p>
                          <div className="flex gap-1 mt-2">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                  duration: 0.6
                                }}
                                className="w-1 h-1 rounded-full bg-green-500"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Loading animation */}
                  {loading && !streamingText && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gray-800/30 border border-gray-700 max-w-[80%]"
                    >
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              repeat: Infinity,
                              delay: i * 0.15,
                              duration: 0.5
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-green-500"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 font-mono">
                        Processing query...
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Input Area */}
                <motion.div 
                  className="px-5 py-4 border-t border-gray-800 bg-gradient-to-t from-gray-900/80 to-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-green-500 font-bold">{">"}</div>
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type command or question..."
                      className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-600 font-mono text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleSend}
                      disabled={!input.trim() || loading}
                      className={`p-2.5 rounded-xl transition-all duration-100 ${
                        !input.trim() || loading
                          ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white shadow-lg shadow-green-500/20'
                      }`}
                    >
                      <IoArrowForwardCircleSharp className="text-xl" />
                    </motion.button>
                  </div>
                  
                  {/* Shortcuts hint */}
                 
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}