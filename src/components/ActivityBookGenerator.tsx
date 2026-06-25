"use client";

import { motion } from "framer-motion";
import { Scissors, FileQuestion, Type } from "lucide-react";

export function ActivityBookGenerator() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square grid grid-cols-2 gap-4">
              <div className="bg-surface rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center text-center">
                <Scissors className="w-10 h-10 text-primary-500 mb-4" />
                <span className="text-white font-bold">Cut & Paste</span>
              </div>
              <div className="bg-surface rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center text-center mt-8">
                <Type className="w-10 h-10 text-primary-500 mb-4" />
                <span className="text-white font-bold">Trace Letters</span>
              </div>
              <div className="bg-surface rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center text-center -mt-8">
                <FileQuestion className="w-10 h-10 text-primary-500 mb-4" />
                <span className="text-white font-bold">Match The Shadow</span>
              </div>
              <div className="bg-surface rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-primary-500 mb-4" />
                <span className="text-white font-bold">Connect The Dots</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 08: Activity Book Creator</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Combine Puzzles, Coloring, & Learning
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-8 leading-relaxed">
              Parents love "mixed" activity books because they keep kids occupied longer. Easily drag-and-drop different modules to create massive 200-page ultimate activity books.
            </p>
            
            <button className="bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl border border-white/10 transition-colors">
              View Activity Templates
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
