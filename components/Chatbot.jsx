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
  const [showQuickCommands, setShowQuickCommands] = useState(true);
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
  const introMessage = "Hello 👋 I'm Tez AI, your personal assistant. How can I help you today?";

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
            className="absolute inset-0 bg-green-500/20 dark:bg-[#00FF6A]/20 rounded-xl blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              repeat: Infinity,
              duration: 2
            }}
          />
          
          {/* Main button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 rounded-xl bg-white dark:bg-[#0D0D0D] border-2 border-gray-400 dark:border-[#00FF6A]/50 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_0px_rgba(0,255,106,0.2)] group hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] dark:hover:shadow-[2px_2px_0px_0px_rgba(0,255,106,0.2)] transition-shadow"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring" }}
            >
              {isOpen ? (
                <IoClose className="text-2xl text-green-600 dark:text-[#00FF6A]" />
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
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#00FF6A]/30 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
              <span className="text-xs font-mono font-bold text-gray-700 dark:text-[#00FF6A] whitespace-nowrap uppercase tracking-wider">
                {isOpen ? "CLOSE" : "CHAT"}
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
              className="fixed inset-0 bg-black/60 z-[30]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Terminal */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed xs:right-2 xs:w-[300px] bottom-24 right-8 w-[420px] h-[560px] z-[60]"
            >
              {/* Terminal Window */}
              <div className="relative w-full h-full bg-white dark:bg-[#0D0D0D] border-2 border-gray-300 dark:border-gray-800 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(0,255,106,0.1)] overflow-hidden flex flex-col font-mono">
                
                {/* Terminal Header */}
                <motion.div 
                  className="px-5 py-4 border-b border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-[#1A1A1A]"
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
                        <FaTerminal className="text-green-600 dark:text-[#00FF6A]" />
                        <span className="text-sm font-bold font-mono text-gray-700 dark:text-[#00FF6A]/80 uppercase tracking-widest">
                          TEZ AI
                        </span>
                      </div>
                    </div>
                    
                    {/* Toggle Quick Commands */}
                    <button 
                      onClick={() => setShowQuickCommands(!showQuickCommands)}
                      className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 hover:text-green-600 dark:hover:text-[#00FF6A] transition-colors"
                      title={showQuickCommands ? "Hide Quick Commands" : "Show Quick Commands"}
                    >
                      <MdOutlineKeyboardArrowDown className={`text-xl transition-transform duration-300 ${!showQuickCommands ? "transform -rotate-90" : ""}`} />
                    </button>
                  </div>
                  
                  {/* Quick stats bar */}
                 
                </motion.div>

                {/* Quick Commands */}
                <AnimatePresence>
                  {showQuickCommands && (
                    <motion.div 
                      className="px-5 border-b border-gray-200 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/20 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="py-3 flex flex-wrap gap-2">
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
                            className="px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wide rounded border transition-colors bg-green-500/5 dark:bg-green-500/10 border-green-500/20 dark:border-[#00FF6A]/20 hover:bg-green-500/10 dark:hover:bg-green-500/20 text-green-700 dark:text-[#00FF6A] hover:border-green-600 dark:hover:border-[#00FF6A]/50"
                          >
                            {cmd}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

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
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">TEZ AI</span>
                    </div>
                    <div className="text-gray-300 pl-1 border-l-2 border-green-500/30">
                      <span className="xs:text-xs text-sm text-green-400">{introText}</span>
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
                              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">YOU</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            </div>
                            <div className="inline-block max-w-[85%] text-left">
                              <div className="px-4 py-2.5 rounded-xl rounded-tr-none bg-amber-500/10 border border-amber-500/30">
                                <p className="text-gray-800 dark:text-amber-500 xs:text-xs text-sm leading-relaxed">
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
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-[#00FF6A]" />
                              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">TEZ AI</span>
                            </div>
                            <div className="max-w-[90%]">
                              <div className="px-4 py-2.5 rounded-xl rounded-tl-none bg-white/10 dark:bg-[#00FF6A]/10 border border-gray-300 dark:border-[#00FF6A]/30">
                                <p className="text-gray-800 dark:text-green-400 text-sm leading-relaxed">
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
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">TEZ AI</span>
                      </div>
                      <div className="max-w-[90%]">
                        <div className="px-4 py-2.5 rounded-xl rounded-tl-none bg-white/10 dark:bg-[#00FF6A]/10 border border-gray-300 dark:border-[#00FF6A]/30">
                          <p className="text-gray-800 dark:text-green-400 text-sm leading-relaxed">
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
                  className="px-5 py-4 border-t border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-[#1A1A1A]"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-green-600 dark:text-[#00FF6A] font-bold">{">"}</div>
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 font-mono text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleSend}
                      disabled={!input.trim() || loading}
                      className={`p-2 rounded transition-colors duration-200 ${
                        !input.trim() || loading
                          ? 'bg-gray-200 dark:bg-gray-800/50 text-gray-400 dark:text-gray-600 cursor-not-allowed border border-transparent'
                          : 'bg-green-500/10 dark:bg-[#00FF6A]/10 hover:bg-green-500/20 dark:hover:bg-[#00FF6A]/20 text-green-600 dark:text-[#00FF6A] border border-green-500/30 dark:border-[#00FF6A]/30'
                      }`}
                    >
                      <IoArrowForwardCircleSharp className="text-2xl" />
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