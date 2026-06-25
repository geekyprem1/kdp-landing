"use client";

import { motion } from "framer-motion";

export function MidwayCTA2() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a] border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-red-600/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Still Doing This <br/>
            <span className="text-red-500 underline decoration-red-500/30">The Hard Way?</span>
          </h2>
          
          <p className="text-xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto">
            You could spend the next 3 weeks trying to make one coloring book... or you could click a button and have 10 books live on Amazon by tomorrow morning.
          </p>

          <button 
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto bg-primary-500 hover:bg-primary-400 text-black font-black uppercase tracking-tight text-xl px-12 py-6 rounded-xl shadow-[0_0_40px_rgba(255,138,0,0.4)] hover:shadow-[0_0_60px_rgba(255,138,0,0.6)] hover:-translate-y-1 transition-all duration-300 mx-auto block"
          >
            I Want The Ultimate Shortcut
          </button>
        </motion.div>
      </div>
    </section>
  );
}
