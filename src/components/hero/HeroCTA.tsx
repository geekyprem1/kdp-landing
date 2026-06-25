"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

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

export function HeroCTA() {
  return (
    <div className="mt-10 flex flex-col items-start w-full relative z-20">
      {/* Primary CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(255, 138, 0, 0.3)" }}
        whileTap={{ scale: 0.98 }}
        onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-red-600 to-primary-600 text-white font-black uppercase tracking-tight text-xl px-12 py-6 rounded-2xl shadow-[0_0_30px_rgba(255,138,0,0.15)] transition-all duration-500 flex items-center justify-center gap-3"
      >
        <span className="relative z-10">Start Building My KDP Business</span>
        <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
      </motion.button>

      {/* Tiny USP Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 w-full sm:w-auto flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-xs text-gray-400 font-medium uppercase tracking-widest"
      >
        <span>No Monthly Subscription</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span>Commercial Use</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span>Cloud Based</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span>KDP Ready</span>
      </motion.div>

      {/* Animated Hero Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        className="mt-8 grid grid-cols-3 gap-6 sm:gap-12 w-full border-t border-white/10 pt-6"
      >
        <div className="flex flex-col">
          <span className="text-3xl font-black text-white tracking-tighter">
            <Counter end={25000} suffix="+" />
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">Books Created</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-black text-white tracking-tighter">
            <Counter end={8000} suffix="+" />
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">Publishers</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-black text-white tracking-tighter">
            <Counter end={95} suffix="%" />
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">Time Saved</span>
        </div>
      </motion.div>
    </div>
  );
}
