"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function HeroCTA() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCTA = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <div className="mt-12 flex flex-col items-center w-full relative z-20">
      
      {/* Background highlight for CTA area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150px] bg-primary-500/5 rounded-[100%] blur-[60px] pointer-events-none" />

      {/* CTAs Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-10"
      >
        {/* Primary CTA */}
        <button
          onClick={handleCTA}
          disabled={isLoading}
          className="relative group overflow-hidden bg-white text-black font-black uppercase tracking-tight text-lg sm:text-xl px-10 py-6 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 disabled:opacity-80 disabled:hover:translate-y-0 flex-1"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          
          <span className="relative z-10 flex items-center gap-3">
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Processing...
              </>
            ) : (
              <>
                Start Building Your KDP Empire
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </>
            )}
          </span>
        </button>

        {/* Secondary CTA */}
        <button
          onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
          className="relative group overflow-hidden bg-[#111] border border-white/10 text-white font-bold uppercase tracking-tight text-lg sm:text-xl px-8 py-6 rounded-2xl hover:bg-[#1a1a1a] hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 flex-none sm:w-[280px]"
        >
          <PlayCircle className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          <span>Watch 2-Min Demo</span>
        </button>
      </motion.div>

      {/* Premium Trust Cards Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap justify-center gap-x-6 gap-y-3 w-full max-w-4xl mx-auto"
      >
        {[
          "Commercial License",
          "Amazon Ready Exports",
          "No Design Skills Needed",
          "Cloud Based",
          "One-Time Purchase",
          "30+ AI Publishing Tools"
        ].map((trust, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-400 font-medium">
            <CheckCircle2 className="w-4 h-4 text-green-500/80" /> {trust}
          </div>
        ))}
      </motion.div>

    </div>
  );
}
