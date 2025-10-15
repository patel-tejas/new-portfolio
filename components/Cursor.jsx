"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const cursorText = document.querySelector('.cursor-text');
        
        // Initialize cursor position
        gsap.set(cursor, {
            x: window.innerWidth/2,
            y: window.innerHeight/2
        });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            gsap.to(cursor, { 
                x: clientX,
                y: clientY,
                duration: 0.2,
                ease: "power1.out"
            });
        };

        const handleMouseEnterLink = (e) => {
            const target = e.target.closest('a');
            if (target) {
                gsap.to(cursor, {
                    scale: 2,
                    duration: 0.2,
                });
                if (target.classList.contains('view')) {
                    cursorText.style.display = 'block';
                }
            }
        };

        const handleMouseLeaveLink = (e) => {
            const target = e.target.closest('a');
            if (target) {
                gsap.to(cursor, {
                    scale: 1,
                    duration: 0.2,
                });
                cursorText.style.display = 'none';
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseEnterLink);
        document.addEventListener('mouseout', handleMouseLeaveLink);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseEnterLink);
            document.removeEventListener('mouseout', handleMouseLeaveLink);
        };
    }, []);

    return (
        <div id="custom-cursor" className='custom-cursor'>
            <span className='cursor-text'></span>
        </div>
    );
};

export default Cursor;