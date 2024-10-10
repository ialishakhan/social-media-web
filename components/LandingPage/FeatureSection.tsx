"use client";

import { Camera, LockKeyholeOpen, MessageCircle, Newspaper } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const FeatureSection = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
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
    <div className="h-screen px-16 relative">
      <div className="flex flex-col gap-16 justify-center">
        <h1 className="text-blue-700 text-7xl font-semibold text-center">Features</h1>

        {/* First Row */}
        <div className="flex justify-between gap-10">
          <motion.div
            ref={ref}
            className="bg-gray-100/60 backdrop-blur-md rounded-3xl shadow-xl p-36 flex flex-col justify-center items-center gap-2 w-full relative text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
          >
            <LockKeyholeOpen className="text-blue-700 w-14 h-14" />
            <span>User Privacy and Security</span>
            <span className="text-lg text-gray-600">Protecting your data with advanced encryption.</span>
          </motion.div>
          <motion.div
            ref={ref}
            className="bg-gray-100/60 backdrop-blur-md rounded-3xl shadow-xl p-36 w-full relative transform translate-y-36 flex flex-col justify-center items-center gap-2 text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <MessageCircle className="text-blue-700 w-14 h-14" />
            <span className="text-4xl">Real Time Messaging</span>
            <span className="text-lg text-gray-600">Instant communication to keep you connected.</span>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="flex justify-between gap-10">
          <motion.div
            ref={ref}
            className="bg-gray-100/60 backdrop-blur-md rounded-3xl shadow-xl p-36 w-full relative flex flex-col justify-center items-center gap-2 text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Newspaper className="text-blue-700 w-14 h-14" />
            <span className="text-4xl">Content Discovery</span>
            <span className="text-lg text-gray-600">Find new content tailored just for you.</span>
          </motion.div>
          <motion.div
            ref={ref}
            className="bg-gray-100/60 backdrop-blur-md rounded-3xl shadow-xl p-36 w-full relative transform translate-y-36 flex flex-col justify-center items-center gap-2 text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Camera className="text-blue-700 w-14 h-14" />
            <span className="text-4xl">Moments</span>
            <span className="text-lg text-gray-600">Share and relive your favorite experiences.</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
