"use client";

import { motion } from "framer-motion";

export function FloatingOutputs() {
  return (
    <div className="absolute inset-0 pointer-events-none z-30 hidden lg:block">
      
      {/* Floating Output 1: Mini Sudoku Grid */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -left-12 bg-white p-3 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.8)] rotate-[-12deg]"
      >
        <div className="w-24 h-24 grid grid-cols-3 grid-rows-3 border-2 border-black">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-black/50 flex items-center justify-center font-bold text-black text-xs">
              {i % 2 === 0 ? (i + 3) % 9 + 1 : ""}
            </div>
          ))}
        </div>
        <div className="text-[10px] font-bold text-center mt-2 text-black uppercase tracking-wider">Sudoku #14</div>
      </motion.div>

      {/* Floating Output 2: Coloring Page Skeleton */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 -left-20 bg-white p-3 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.8)] rotate-[8deg]"
      >
        <div className="w-28 h-32 flex flex-col items-center justify-center border-2 border-black p-2 relative overflow-hidden">
          {/* Fake Mandala */}
          <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-black" />
              </div>
            </div>
          </div>
          {/* Abstract Lines */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-full h-px bg-black rotate-45" />
            <div className="w-full h-px bg-black -rotate-45" />
            <div className="w-px h-full bg-black" />
            <div className="w-full h-px bg-black" />
          </div>
        </div>
        <div className="text-[10px] font-bold text-center mt-2 text-black uppercase tracking-wider">Mandala #04</div>
      </motion.div>

      {/* Floating Output 3: Premium Gradient Book Cover */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-20 -right-16 w-32 h-48 rounded-md shadow-[0_30px_60px_rgba(0,0,0,0.9)] rotate-[15deg] overflow-hidden border border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-primary-900" />
        <div className="absolute inset-x-0 top-10 flex flex-col items-center">
          <div className="w-20 h-1 bg-primary-500 mb-2" />
          <div className="text-white font-serif font-bold text-xs tracking-widest text-center px-2 leading-tight">THE SHADOW<br/>WORK</div>
          <div className="text-gray-400 text-[8px] uppercase tracking-[0.2em] mt-1">Journal</div>
        </div>
        <div className="absolute bottom-4 inset-x-0 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-primary-500/30 mb-2 flex items-center justify-center">
             <div className="w-8 h-8 rounded-full border border-primary-500/20" />
          </div>
          <div className="text-[6px] text-white/50 uppercase tracking-widest">Premium Edition</div>
        </div>
      </motion.div>

      {/* Floating Output 4: Launch Kit ZIP */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-10 -right-8 bg-[#151515] w-32 h-24 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.8)] rotate-[-5deg] p-3 border border-white/10 flex flex-col items-center justify-center"
      >
        <div className="w-10 h-10 rounded bg-primary-500/10 flex items-center justify-center mb-2 border border-primary-500/30">
          {/* Fake ZIP Icon */}
          <div className="text-primary-500 font-bold text-[10px]">.ZIP</div>
        </div>
        <div className="text-[10px] font-bold text-white text-center">Launch_Kit_V1</div>
        <div className="text-[8px] text-gray-500 text-center">3 Files • 18.4 MB</div>
      </motion.div>

    </div>
  );
}
