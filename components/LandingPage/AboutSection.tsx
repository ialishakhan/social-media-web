"use client"; // Ensure this is a client component

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Define the type for IntersectionObserverEntry
type IntersectionObserverEntry = {
  isIntersecting: boolean;
};

const AboutSection = () => {
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
    <div className="h-screen px-16" ref={ref}>
      <motion.div
        className="flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 50 }} // Start lower for a more dramatic effect
        animate={controls} // Use animation controls
        transition={{ duration: 1, ease: "easeInOut" }} // Using a predefined easing function
      >
        <h1 className="font-medium text-gray-800 text-3xl">BUZZME</h1>
        <h2 className="text-7xl font-semibold">
          <span className="text-blue-700">Lightweight and sleek interface</span>
          <span> simple and pure, relaxing atmosphere</span>
        </h2>
        <span className="text-3xl text-gray-100">Flexible and comfortable operation</span>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state for the image
          animate={controls} // Use animation controls
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }} // Add a delay for the image
        >
          <Image 
            src="/images/about/mockup.webp"
            alt='Mockup'
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutSection;
