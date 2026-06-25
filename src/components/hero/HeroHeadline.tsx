"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

function Counter({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export function HeroHeadline() {
  return (
    <div className="flex flex-col items-center text-center z-20 relative mt-4 lg:mt-0 max-w-5xl mx-auto px-4">
      
      {/* Background Glows for Premium Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold mb-8 text-xs sm:text-sm uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_rgba(255,0,0,0.1)]"
      >
        <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.8)] animate-pulse" />
        The Era Of 'Just Publish More' Is Over
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-6xl lg:text-[5rem] font-black tracking-tighter text-white leading-[1.1] mb-8"
      >
        Stop Guessing. <br className="hidden sm:block" />Build Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-yellow-500 drop-shadow-[0_0_30px_rgba(255,138,0,0.3)]">
          KDP Empire
        </span>{" "}
        Smarter.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg sm:text-xl text-gray-300 mb-12 font-medium leading-relaxed max-w-4xl mx-auto"
      >
        Turn any idea into an Amazon KDP book in minutes—not weeks. Replace expensive freelancers, disconnected AI tools, endless manual formatting, and guesswork with one AI-powered operating system built to help you publish faster, launch smarter, and scale your royalties.
      </motion.p>

      {/* Animated Proof Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 w-full border-y border-white/5 py-8 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"
      >
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
            <Counter end={25000} suffix="+" />
          </span>
          <span className="text-[10px] sm:text-xs text-primary-400/80 uppercase tracking-widest font-bold mt-1">Books Created</span>
        </div>
        
        <div className="hidden sm:block w-px h-12 bg-white/10" />
        
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
            <Counter end={8000} suffix="+" />
          </span>
          <span className="text-[10px] sm:text-xs text-primary-400/80 uppercase tracking-widest font-bold mt-1">Publishers</span>
        </div>
        
        <div className="hidden md:block w-px h-12 bg-white/10" />
        
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
            <Counter end={4.2} suffix="M+" />
          </span>
          <span className="text-[10px] sm:text-xs text-primary-400/80 uppercase tracking-widest font-bold mt-1">Niches Analyzed</span>
        </div>
        
        <div className="hidden sm:block w-px h-12 bg-white/10" />
        
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
            <Counter end={2.5} suffix="M+" />
          </span>
          <span className="text-[10px] sm:text-xs text-primary-400/80 uppercase tracking-widest font-bold mt-1">AI Generations</span>
        </div>
      </motion.div>

    </div>
  );
}
