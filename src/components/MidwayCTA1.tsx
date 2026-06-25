"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";

export function MidwayCTA1() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary-600 border-y border-primary-500/30">
      {/* Background Text Pattern */}
      <div className="absolute inset-0 opacity-10 flex flex-wrap content-start overflow-hidden pointer-events-none mix-blend-overlay">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} className="text-black font-black text-6xl uppercase leading-none whitespace-nowrap px-4 py-2">
            Dominate KDP
          </span>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/90 p-8 sm:p-12 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500 text-white mb-6 animate-bounce">
            <AlertTriangle className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Stop Guessing. Start Profiting.
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 font-medium mb-10 max-w-2xl mx-auto">
            You've just seen how we eliminate the research phase. But what happens when it's time to actually <span className="text-white font-bold underline decoration-primary-500">create</span> the books? Grab your license now to see the creation engines.
          </p>

          <button 
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-300 text-black font-black uppercase tracking-tight text-xl px-12 py-6 rounded-xl shadow-[0_0_40px_rgba(255,138,0,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group mx-auto"
          >
            Get KDP Mafia Lifetime Access
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
