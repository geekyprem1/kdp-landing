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
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-bold mb-8 text-[10px] sm:text-xs uppercase tracking-[0.2em] backdrop-blur-sm shadow-[0_0_20px_rgba(255,138,0,0.1)] text-center max-w-[90vw]"
      >
        <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(255,138,0,0.8)] animate-pulse shrink-0" />
        <span className="truncate sm:whitespace-normal">THE COMPLETE AI OPERATING SYSTEM FOR AMAZON KDP</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.15] mb-8"
      >
        Publish Amazon KDP Books That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-yellow-500 drop-shadow-[0_0_30px_rgba(255,138,0,0.3)]">Actually Sell.</span> <br className="hidden lg:block" />
        <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-200 mt-4 block">
          From Profitable Idea to Published Book.
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg sm:text-xl text-gray-400 mb-12 font-medium leading-relaxed max-w-4xl mx-auto"
      >
        Replace ChatGPT, Book Bolt, Publisher Rocket, Canva, freelancers, and every disconnected KDP tool with one AI platform. Research profitable niches, create professional books, and publish faster—all from a single dashboard.
      </motion.p>



    </div>
  );
}
