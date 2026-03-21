"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-32 right-8 z-40">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ 
              scale: 1.1,
              translateX: "2px",
              translateY: "-2px"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group relative flex h-16 w-16 items-center justify-center 
              bg-[#00FF6A] text-black border-2 border-black dark:border-[#00FF6A] rounded-xl 
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(0,255,106,0.4)] 
              hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(0,255,106,0.4)]
              active:shadow-none transition-all duration-200"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" />
            
            {/* Tooltip style label */}
            <span className="absolute -top-10 left-0 hidden group-hover:block 
              bg-black text-white text-[10px] font-mono font-bold px-2 py-1 rounded whitespace-nowrap
              border border-white/20">
              $ GOTO_TOP
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;
