"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { CometCard } from "@/components/ui/comet-card";
import tailwind from "../public/tailwind.png";
import react from "../public/react.png";
import nextjs from "../public/nextjs.png";
import html from "../public/html.png";
import node from "../public/node.png";
import js from "../public/javascript.png";
import github from "../public/github.png";
import python from "../public/python.png";
import java from "../public/java.png";

const MobileTechnologies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragDirection, setDragDirection] = useState(0);

  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const autoScrollInterval = useRef(null);

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const techAssets = [
    {
      id: 1,
      icon: react,
      name: "React",
      ticker: "RCT",
      description: "Frontend library for building user interfaces",
      level: "Expert",
      experience: "3+ years",
      category: "Frontend",
      trend: "+24.5%",
      performance: "98.7%",
      color: "#61DAFB",
      cardGradient: "linear-gradient(135deg, #0a192f 0%, #112240 50%, #1d3a5f 100%)",
      accentColor: "#61DAFB",
      chipColor: "from-blue-400 to-cyan-300",
      hologram: "radial-gradient(circle at 30% 30%, rgba(97, 218, 251, 0.15) 0%, transparent 60%)"
    },
    {
      id: 2,
      icon: nextjs,
      name: "Next.js",
      ticker: "NXT",
      description: "Full-stack React framework for production",
      level: "Advanced",
      experience: "2+ years",
      category: "Full-Stack",
      trend: "+31.2%",
      performance: "99.2%",
      color: "#FFFFFF",
      cardGradient: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%)",
      accentColor: "#FFFFFF",
      chipColor: "from-gray-300 to-gray-100",
      hologram: "radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)"
    },
    {
      id: 3,
      icon: node,
      name: "Node.js",
      ticker: "NOD",
      description: "JavaScript runtime for server-side applications",
      level: "Advanced",
      experience: "3+ years",
      category: "Backend",
      trend: "+18.7%",
      performance: "97.5%",
      color: "#339933",
      cardGradient: "linear-gradient(135deg, #0a290a 0%, #113311 50%, #1d4d1d 100%)",
      accentColor: "#339933",
      chipColor: "from-green-400 to-emerald-300",
      hologram: "radial-gradient(circle at 50% 50%, rgba(51, 153, 51, 0.15) 0%, transparent 60%)"
    },
    {
      id: 4,
      icon: js,
      name: "JavaScript",
      ticker: "JS",
      description: "Programming language of the web",
      level: "Expert",
      experience: "4+ years",
      category: "Language",
      trend: "+12.3%",
      performance: "99.8%",
      color: "#F7DF1E",
      cardGradient: "linear-gradient(135deg, #2a2400 0%, #3d3400 50%, #514500 100%)",
      accentColor: "#F7DF1E",
      chipColor: "from-yellow-400 to-amber-300",
      hologram: "radial-gradient(circle at 20% 70%, rgba(247, 223, 30, 0.15) 0%, transparent 60%)"
    },
    {
      id: 5,
      icon: tailwind,
      name: "Tailwind CSS",
      ticker: "TWD",
      description: "Utility-first CSS framework",
      level: "Expert",
      experience: "2+ years",
      category: "Styling",
      trend: "+42.1%",
      performance: "98.9%",
      color: "#06B6D4",
      cardGradient: "linear-gradient(135deg, #001a1f 0%, #002b33 50%, #00414d 100%)",
      accentColor: "#06B6D4",
      chipColor: "from-cyan-400 to-teal-300",
      hologram: "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)"
    },
    {
      id: 6,
      icon: github,
      name: "GitHub",
      ticker: "GH",
      description: "Version control and collaboration platform",
      level: "Advanced",
      experience: "4+ years",
      category: "Version Control",
      trend: "+15.6%",
      performance: "100%",
      color: "#181717",
      cardGradient: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%)",
      accentColor: "#F0F6FC",
      chipColor: "from-purple-400 to-violet-300",
      hologram: "radial-gradient(circle at 40% 40%, rgba(240, 246, 252, 0.1) 0%, transparent 60%)"
    },
    {
      id: 7,
      icon: python,
      name: "Python",
      ticker: "PY",
      description: "High-level programming language",
      level: "Intermediate",
      experience: "2+ years",
      category: "Language",
      trend: "+28.9%",
      performance: "95.4%",
      color: "#3776AB",
      cardGradient: "linear-gradient(135deg, #0a1f33 0%, #112e4d 50%, #1d3e66 100%)",
      accentColor: "#3776AB",
      chipColor: "from-blue-500 to-sky-400",
      hologram: "radial-gradient(circle at 60% 30%, rgba(55, 118, 171, 0.15) 0%, transparent 60%)"
    },
    {
      id: 8,
      icon: java,
      name: "Java",
      ticker: "JV",
      description: "Object-oriented programming language",
      level: "Intermediate",
      experience: "2+ years",
      category: "Language",
      trend: "+8.7%",
      performance: "92.3%",
      color: "#007396",
      cardGradient: "linear-gradient(135deg, #001f29 0%, #00303d 50%, #004152 100%)",
      accentColor: "#007396",
      chipColor: "from-indigo-400 to-blue-300",
      hologram: "radial-gradient(circle at 30% 60%, rgba(0, 115, 150, 0.15) 0%, transparent 60%)"
    },
    {
      id: 9,
      icon: html,
      name: "HTML/CSS",
      ticker: "WEB",
      description: "Core technologies for web pages",
      level: "Expert",
      experience: "5+ years",
      category: "Web",
      trend: "+5.4%",
      performance: "99.9%",
      color: "#E34F26",
      cardGradient: "linear-gradient(135deg, #290a00 0%, #3d1300 50%, #521d00 100%)",
      accentColor: "#E34F26",
      chipColor: "from-orange-500 to-red-400",
      hologram: "radial-gradient(circle at 70% 70%, rgba(227, 79, 38, 0.15) 0%, transparent 60%)"
    }
  ];

  // Auto-scroll functionality - reduced to 3s
  useEffect(() => {
    if (isHovering || isDragging) {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
      return;
    }

    autoScrollInterval.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + visibleCards;
        return nextIndex >= techAssets.length ? 0 : nextIndex;
      });
    }, 3000);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isHovering, isDragging, techAssets.length, visibleCards]);

  const nextCard = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + visibleCards;
      return nextIndex >= techAssets.length ? 0 : nextIndex;
    });
  }, [visibleCards, techAssets.length]);

  const prevCard = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex - visibleCards;
      return nextIndex < 0 ? techAssets.length - visibleCards : nextIndex;
    });
  }, [visibleCards, techAssets.length]);

  const goToCard = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Touch and drag handlers
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const currentTouchX = e.touches[0].clientX;
    setCurrentX(currentTouchX);

    const diff = currentTouchX - startX;
    setDragDirection(diff > 0 ? 1 : -1);

    // Prevent default to avoid page scroll during swipe
    e.preventDefault();
  }, [isDragging, startX]);

  const handleTouchEnd = useCallback((e) => {
    if (!isDragging) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        prevCard(); // Swipe right - go previous
      } else {
        nextCard(); // Swipe left - go next
      }
    }

    setIsDragging(false);
    setDragDirection(0);
    setStartX(0);
    setCurrentX(0);
  }, [isDragging, nextCard, prevCard]);

  // Mouse drag handlers for desktop testing
  const handleMouseDown = useCallback((e) => {
    if (visibleCards > 1) return; // Only enable swipe on mobile
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  }, [visibleCards]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || visibleCards > 1) return;
    setCurrentX(e.clientX);
    const diff = e.clientX - startX;
    setDragDirection(diff > 0 ? 1 : -1);
  }, [isDragging, startX, visibleCards]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging || visibleCards > 1) return;

    const diff = currentX - startX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        prevCard();
      } else {
        nextCard();
      }
    }

    setIsDragging(false);
    setDragDirection(0);
    setStartX(0);
    setCurrentX(0);
  }, [isDragging, currentX, startX, nextCard, prevCard, visibleCards]);

  // Add global mouse event listeners
  useEffect(() => {
    if (visibleCards === 1) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [handleMouseMove, handleMouseUp, visibleCards]);

  // Get cards that should be visible based on activeIndex and visibleCards
  const getVisibleCards = useCallback(() => {
    const cards = [];

    for (let i = 0; i < visibleCards; i++) {
      const cardIndex = (activeIndex + i) % techAssets.length;
      cards.push({
        ...techAssets[cardIndex],
        index: cardIndex,
        position: i
      });
    }

    return cards;
  }, [activeIndex, visibleCards, techAssets]);

  // Calculate card styles with drag/swipe animation
  const getCardStyle = useCallback((position) => {
    const isMobile = visibleCards === 1;
    const isTablet = visibleCards === 2;
    const isDesktop = visibleCards === 3;

    // Calculate drag offset for mobile swipe animation
    const dragOffset = isDragging && isMobile ? (currentX - startX) * 0.5 : 0;
    const opacityDuringDrag = isDragging && isMobile ?
      Math.max(0.7, 1 - Math.abs(dragOffset) / 200) : 1;

    if (isMobile) {
      // Mobile: single card with swipe animation
      return {
        transform: `translateX(${dragOffset}px) scale(${1 - Math.abs(dragOffset) / 1000})`,
        zIndex: 30,
        opacity: opacityDuringDrag,
        filter: isDragging
          ? `drop-shadow(${dragOffset > 0 ? '-' : ''}${Math.abs(dragOffset) / 20}px 20px 30px rgba(0, 255, 106, 0.3))`
          : 'drop-shadow(0 20px 40px rgba(0, 255, 106, 0.4))',
        transition: isDragging ? 'none' : 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: isDragging ? 'grabbing' : 'grab',
      };
    }

    if (isTablet) {
      // Tablet: 2 cards side by side
      if (position === 0) {
        return {
          transform: 'translateX(-25%) scale(0.95)',
          zIndex: 20,
          opacity: 0.9,
          filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        };
      } else if (position === 1) {
        return {
          transform: 'translateX(25%) scale(0.95)',
          zIndex: 20,
          opacity: 0.9,
          filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3))',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        };
      }
    }

    if (isDesktop) {
      // Desktop: 3 cards with center highlighted
      if (position === 0) {
        return {
          transform: 'translateX(-60%) scale(0.85)',
          zIndex: 10,
          opacity: 0.8,
          filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        };
      } else if (position === 1) {
        return {
          transform: 'scale(1.1) translateY(-15px)',
          zIndex: 30,
          opacity: 1,
          filter: 'drop-shadow(0 25px 50px rgba(0, 255, 106, 0.5))',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        };
      } else if (position === 2) {
        return {
          transform: 'translateX(60%) scale(0.85)',
          zIndex: 10,
          opacity: 0.8,
          filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        };
      }
    }

    return {
      transform: 'scale(0.8)',
      zIndex: 1,
      opacity: 0.3,
      filter: 'none',
      transition: 'all 0.5s ease',
    };
  }, [visibleCards, isDragging, currentX, startX]);

  // Get responsive card width
  const getCardWidth = useCallback(() => {
    if (visibleCards === 1) return 'w-[480px] h-[200px] sm:w-[275px] sm:h-[230px]'; // Mobile
    if (visibleCards === 2) return 'w-[420px] h-[156px] md:w-[380px] md:h-[175px]'; // Tablet
    return 'w-[460px] h-[204px] lg:w-[360px] lg:h-[162px] xl:w-[280px] xl:h-[175px]'; // Desktop
  }, [visibleCards]);

  const visibleCardData = getVisibleCards();

  return (
    <div className='mt-24 mb-24 px-4 relative'>
      {/* Header */}
      <div className='text-center mb-16'>
        <div className='inline-flex items-center gap-3 mb-4'>
          <div className='flex gap-1'>
            <div className='w-2 h-2 rounded-full bg-green-500 dark:bg-[#00FF6A] animate-pulse'></div>
            <div className='w-2 h-2 rounded-full bg-blue-500 animate-pulse' style={{ animationDelay: '0.2s' }}></div>
            <div className='w-2 h-2 rounded-full bg-purple-500 animate-pulse' style={{ animationDelay: '0.4s' }}></div>
          </div>
          <h2 className='font-mono text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest'>
            PREMIUM
          </h2>
        </div>

        <div className='text-6xl xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl font-bold mb-4'>
          <span className='block text-gray-900 dark:text-white'>TECHNOLOGY</span>
          <span className='block'>
            <span className='text-green-600 dark:text-[#00FF6A] font-mono'>"SKILL CARDS"</span>
          </span>
        </div>

        <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light'>
          {visibleCards === 1
            ? 'Swipe left/right to explore cards • Auto-rotates every 3s'
            : visibleCards === 2
              ? 'Hover on corners to see the magic :)'
              : 'Hover on corners to see the magic :)'}
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        ref={carouselRef}
      >
        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevCard}
          className={`absolute left-0 md:-left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 hover:border-white/40 transition-all duration-300 group shadow-2xl ${visibleCards === 1 ? 'flex sm:hidden' : 'flex'
            }`}
          aria-label="Previous cards"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextCard}
          className={`absolute right-0 md:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black/60 hover:border-white/40 transition-all duration-300 group shadow-2xl ${visibleCards === 1 ? 'flex sm:hidden' : 'flex'
            }`}
          aria-label="Next cards"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Cards Container */}
        <div
          className={`relative h-[220px] sm:h-[240px] flex items-center justify-center ${visibleCards === 1 ? 'px-4 touch-none select-none' :
            visibleCards === 2 ? 'px-8 md:px-16' :
              'px-4 lg:px-8 xl:px-16'
            }`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={visibleCards === 1 ? handleMouseDown : undefined}
          style={{ userSelect: visibleCards === 1 ? 'none' : 'auto' }}
        >
          {/* Swipe hint overlay for mobile */}
          {visibleCards === 1 && !isDragging && (
            <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center pointer-events-none z-10 opacity-60">
              <div className="flex items-center gap-2 animate-pulse">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-mono text-green-400 hidden sm:inline">Swipe</span>
              </div>
              <div className="flex items-center gap-2 animate-pulse">
                <span className="text-sm font-mono text-green-400 hidden sm:inline">Swipe</span>
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}

          {/* Drag direction indicator */}
          {isDragging && visibleCards === 1 && dragDirection !== 0 && (
            <div className={`absolute top-4 ${dragDirection > 0 ? 'left-4' : 'right-4'} z-40`}>
              <div className={`px-3 py-1.5 rounded-full backdrop-blur-md ${dragDirection > 0
                ? 'bg-green-500/20 border border-green-500/30'
                : 'bg-blue-500/20 border border-blue-500/30'
                }`}>
                <span className="text-xs font-mono text-white">
                  {dragDirection > 0 ? '← Previous' : 'Next →'}
                </span>
              </div>
            </div>
          )}

          {visibleCardData.map((tech, positionIndex) => (
            <div
              key={`${tech.id}-${positionIndex}`}
              className={`absolute ${getCardWidth()} transition-all duration-300 cursor-pointer ${isDragging && visibleCards === 1 ? 'active:scale-95' : ''
                }`}
              style={getCardStyle(positionIndex)}
              onClick={(e) => {
                // Prevent click during drag
                if (!isDragging || Math.abs(currentX - startX) < 10) {
                  goToCard(tech.index);
                }
              }}
            >
              <CometCard
                rotateDepth={visibleCards === 1 ? 12 : positionIndex === 1 ? 12 : 6}
                translateDepth={visibleCards === 1 ? 15 : positionIndex === 1 ? 20 : 10}
                className="w-full h-full"
              >
                {/* Premium Credit Card Container */}
               <div className={`relative rounded-2xl overflow-hidden w-full h-full transition-all duration-300 ${visibleCards === 1 || (visibleCards > 1 && positionIndex === 1)
  ? 'ring-1 ring-white/20 dark:ring-white/20 shadow-2xl shadow-green-500/20 dark:shadow-[#00FF6A]/20 backdrop-blur-sm'
  : 'ring-1 ring-white/10 dark:ring-white/10 shadow-lg'
  }`} style={{ aspectRatio: '16/10' }}>

                  {/* Card Background with Gradient */}
                  <div
                    className="absolute inset-0"
                    style={{ background: tech.cardGradient }}
                  />

                  {/* Holographic Overlay */}
                  <div
                    className="absolute inset-0 mix-blend-overlay opacity-30"
                    style={{ background: tech.hologram }}
                  />

                  {/* Subtle Pattern */}
                  <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.3)_50%,transparent_55%)]"></div>

                  {/* Embossed Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>

                  {/* Card Content - Optimized for mobile */}
                  <div className="relative h-full sm:p-3 p-4 flex flex-col justify-between">

                    {/* Card Header - Top Section */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center sm:gap-2 gap-3">
                        {/* Tech Logo */}
                        <div className="relative">
                          <div className="sm:p-1 p-2 sm:rounded-lg rounded-xl bg-black/40 backdrop-blur-sm border border-white/20">
                            <div className="relative sm:w-4 sm:h-4 w-8 h-8">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 24px, 32px"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Card Title */}
                        <>
                          <div className="sm:text-[8px] text-xs font-mono text-gray-400 tracking-widest">
                            {tech.ticker}
                          </div>
                          <div className="sm:text-[12px] text-lg font-bold text-white sm:mt-0.5 mt-1">
                            {tech.name}
                          </div>
                          <div className="sm:text-[8px] text-xs text-gray-400 mt-0.5">
                            {tech.category}
                          </div>
                        </>
                      </div>

                      {/* Premium Chip */}
                      <div className="relative">
                        <div className={`sm:w-8 sm:h-5 w-10 h-7 sm:rounded-md rounded-lg bg-gradient-to-br ${tech.chipColor} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/40"></div>
                          <div className="absolute top-0 left-1/2 h-full w-px bg-white/40"></div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stats Section - Middle */}
                    <div className="sm:mt-1 mt-3">
                      {/* Growth Indicator */}
                      <div className="sm:hidden flex items-center justify-between sm:mb-2 mb-3">
                        <div className="text-left">
                          <div className="sm:text-[10px] text-xs font-mono text-gray-400 mb-0.5">GROWTH</div>
                          <div className={`text-base sm:text-xs font-bold ${tech.trend.startsWith('+')
                            ? 'text-green-400'
                            : 'text-red-400'
                            }`}>
                            {tech.trend}
                          </div>
                        </div>

                        {/* Skill Level */}
                        <div className="sm:hidden text-right">
                          <div className="sm:text-[10px] text-xs font-mono text-gray-400 mb-0.5">SKILL LEVEL</div>
                          <div className="sm:px-2 sm:py-1 px-3 py-1.5 sm:rounded-md rounded-lg bg-black/60 backdrop-blur-sm border border-white/20">
                            <span className="sm:text-[10px] text-sm font-bold text-white">{tech.level}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Number (Tech ID) - Golden Style */}
                      <div className="font-mono sm:text-xs text-lg sm:tracking-[0.15em] tracking-[0.25em] text-center sm:mb-1 mb-3">
                        <span className="text-lg sm:text-xs bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                          •••• •••• •••• {tech.ticker.padStart(4, '0')}
                        </span>
                      </div>

                      {/* Experience Info */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="sm:text-[10px] text-xs font-mono text-gray-400 mb-0.5">EXPERIENCE</div>
                          <div className="sm:text-sm text-base font-semibold bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                            {tech.experience}
                          </div>
                        </div>
                         <div className="text-left hidden sm:inline">
                          <div className="sm:text-[10px] text-xs font-mono text-gray-400 mb-0.5">GROWTH</div>
                          <div className={`text-base sm:text-xs font-bold ${tech.trend.startsWith('+')
                            ? 'text-green-400'
                            : 'text-red-400'
                            }`}>
                            {tech.trend}
                          </div>
                        </div>
                        <div className="text-right sm:hidden">
                          <div className="sm:text-[10px] text-xs font-mono text-gray-400 mb-0.5">PERFORMANCE</div>
                          <div className={`sm:text-sm text-base font-semibold ${parseInt(tech.performance) >= 98
                            ? 'text-green-400'
                            : 'text-amber-400'
                            }`}>
                            {tech.performance}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Network Logo */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/20">
  {/* Card Holder Name - Silver Shiny Style */}
  <div className="text-left">
    <div className="sm:text-[9px] text-[10px] font-mono text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-[0.1em]">
      CARD HOLDER
    </div>
    <div className="text-sm sm:text-[10px] font-mono font-medium 
      bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 
      bg-clip-text text-transparent 
      drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
      TEJAS PATEL
    </div>
  </div>
  
  {/* Category */}
  <div className="text-right">
    <div className="text-[9px] sm:text-[10px] font-mono text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-[0.1em]">
      CATEGORY
    </div>
    <div className="text-sm sm:text-[10px] font-mono font-medium text-white">
      {tech.category}
    </div>
  </div>
</div>

                    {/* Active Indicator */}
                    {(visibleCards === 1 || (visibleCards > 1 && positionIndex === 1)) && (
                      <div className="sm:hidden absolute top-2 sm:top-4 right-2 sm:right-4">
                        <div className="relative">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 dark:bg-[#00FF6A]"></div>
                          <div className="absolute inset-0 animate-ping rounded-full bg-green-500/40 dark:bg-[#00FF6A]/40"></div>
                        </div>
                      </div>
                    )}

                    {/* Tech Expertise Indicator */}


                    {/* Metallic Accent Lines */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  </div>
                </div>
              </CometCard>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 space-x-2 sm:space-x-3">
          {Array.from({ length: Math.ceil(techAssets.length / visibleCards) }).map((_, groupIndex) => {
            const startIndex = groupIndex * visibleCards;
            const isActive = activeIndex >= startIndex && activeIndex < startIndex + visibleCards;

            return (
              <button
                key={groupIndex}
                onClick={() => goToCard(startIndex)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${isActive
                  ? 'bg-green-500 dark:bg-[#00FF6A] w-5 sm:w-6 md:w-8'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
                  }`}
                aria-label={`Go to group ${groupIndex + 1}`}
              />
            );
          })}
        </div>

        {/* Center Card Details - Only show for center card on desktop/tablet */}

      </div>

      {/* Control Instructions - Responsive */}

    </div>
  );
};

export default MobileTechnologies;