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
                Start Publishing Faster
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

      {/* Microcopy */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400 font-medium mb-12"
      >
        <span className="flex items-center gap-1.5"><span className="text-green-500">✅</span> No technical skills required</span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5"><span className="text-green-500">✅</span> KDP-Ready Exports</span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5"><span className="text-green-500">✅</span> Replace 10+ KDP Tools</span>
      </motion.div>

      {/* Trust Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto mb-16"
      >
        {[
          { title: "25+ AI Tools", desc: "Everything needed for Amazon KDP" },
          { title: "End-to-End Workflow", desc: "From niche research to publishing" },
          { title: "One-Click KDP Export", desc: "Ready-to-upload PDF & metadata" },
          { title: "Built for Serious Publishers", desc: "Scale faster with one platform" }
        ].map((trust, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl text-center sm:text-left flex flex-col items-center sm:items-start">
            <h4 className="text-white font-bold text-sm mb-1">{trust.title}</h4>
            <p className="text-gray-500 text-xs">{trust.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Comparison Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl mx-auto border-t border-b border-white/5 py-6 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent text-center"
      >
        <span className="text-gray-400 font-medium text-sm sm:text-base">
          <span className="text-white font-bold">Replace:</span> ChatGPT <span className="text-primary-500 mx-2">•</span> Book Bolt <span className="text-primary-500 mx-2">•</span> Publisher Rocket <span className="text-primary-500 mx-2">•</span> Canva <span className="text-primary-500 mx-2">•</span> Midjourney <span className="text-primary-500 mx-2">•</span> Freelancers <span className="text-primary-500 mx-2">•</span> Formatting Tools
        </span>
      </motion.div>



    </div>
  );
}
