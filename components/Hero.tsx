"use client"; // Ensure this is a client component

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        controls.start({ opacity: 1, y: 0 }); // Fade in and slide up
      } else {
        controls.start({ opacity: 0, y: 50 }); // Fade out and slide down
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div ref={ref} className="flex items-center justify-center overflow-hidden h-screen">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <motion.h1
          className="text-[150px] font-semibold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={controls} // Use animation controls
          transition={{ duration: 0.8 }}
        >
          BUZZ
          <span className="animate-text bg-gradient-to-r from-blue-800 via-blue-600 to-purple-500 bg-clip-text text-transparent text-[150px] font-semibold">
            ME
          </span>
        </motion.h1>
        <motion.span
          className="text-4xl font-semibold text-blue-700"
          initial={{ opacity: 0, y: 20 }}
          animate={controls} // Use animation controls
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          - Connect, Chat, Create Buzz -
        </motion.span>
      </div>
    </div>
  );
}

export default Hero;
