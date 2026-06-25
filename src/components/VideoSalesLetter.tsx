"use client";

import { motion } from "framer-motion";
import { PlayCircle, ShieldCheck, Volume2 } from "lucide-react";

export function VideoSalesLetter() {
  return (
    <section id="vsl" className="relative py-24 bg-surface z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] to-surface pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Watch How We <span className="text-primary-500 underline decoration-red-500/50 underline-offset-8">Dominate</span> Amazon KDP
          </motion.h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Turn your speaker up <Volume2 className="inline w-5 h-5 text-primary-500 mb-1" /> and watch this short 5-minute breakdown.
          </p>
        </div>

        {/* Video Player Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-[2rem] p-2 sm:p-4 bg-gradient-to-br from-primary-500/30 via-black/50 to-primary-600/20 shadow-[0_0_50px_rgba(255,138,0,0.15)]"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-red-500 rounded-2xl sm:rounded-[2rem] blur opacity-20 animate-pulse" />
          
          <div className="relative aspect-video bg-black rounded-xl sm:rounded-[1.5rem] overflow-hidden border border-white/10 group cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 blur-xl opacity-50 rounded-full animate-pulse" />
                <div className="relative bg-primary-500/20 backdrop-blur-sm border border-primary-500/50 w-20 h-20 sm:w-32 sm:h-32 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-12 h-12 sm:w-20 sm:h-20 text-primary-500 translate-x-1" />
                </div>
              </div>
            </div>

            {/* Video Controls Mockup */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full overflow-hidden mb-4">
                <div className="w-1/3 h-full bg-primary-500 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
              </div>
              <div className="flex justify-between items-center text-white/80 font-mono text-xs sm:text-sm">
                <span>02:14 / 05:42</span>
                <span className="font-bold text-primary-400">High Definition</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-gray-400 font-medium text-sm">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            100% Secure Checkout
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-primary-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Limited Time Launch Pricing Active
          </div>
        </div>
      </div>
    </section>
  );
}
