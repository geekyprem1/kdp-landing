"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, LayoutDashboard, Brush, Cloud, FileCheck2, Settings } from "lucide-react";

export function HeroHeadline() {
  return (
    <div className="flex flex-col items-start text-left z-20 relative mt-4 lg:mt-0 max-w-xl mx-auto lg:mx-0">
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold mb-8 text-xs sm:text-sm uppercase tracking-widest backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(255,138,0,0.8)]" />
        Stop switching between disconnected tools
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tighter text-white leading-[1.05] mb-8"
      >
        Build, Launch, And Scale Your <br className="hidden lg:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-primary-500 to-yellow-500">
          Amazon KDP
        </span> <br className="hidden lg:block" />
        Empire.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg sm:text-xl text-gray-400 mb-10 font-medium leading-relaxed max-w-lg"
      >
        Go from a raw idea to a KDP-ready book in minutes without ever switching applications. One connected publishing workspace to dominate your niche.
      </motion.p>

      {/* Premium Trust Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 gap-3 mb-2 w-full max-w-lg"
      >
        {[
          "One-Time Purchase",
          "Commercial License",
          "KDP Ready Exports",
          "30+ AI Publishing Tools",
          "Cloud Based",
          "No Design Skills Needed"
        ].map((trust, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/[0.03] border border-white/5 px-3 py-2.5 rounded-xl text-sm text-gray-300 font-medium shadow-sm backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
            <CheckCircle2 className="w-4 h-4 text-primary-500 opacity-80" /> {trust}
          </div>
        ))}
      </motion.div>

    </div>
  );
}
