"use client";

import { motion } from "framer-motion";
import { Network, Database, Brain, Cpu, ArrowDown } from "lucide-react";

export function InsideTheOS() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <Network className="w-4 h-4" />
            System Architecture
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            This Isn't Six Tools. <br />
            <span className="text-gray-500">This Is One Brain.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            The magic of KDP Mafia is how the modules communicate. When the Opportunity Engine™ finds a niche, it automatically feeds the exact dimensions to the Cover Studio™, and the keywords to the Launch Kit™. Everything is connected.
          </motion.p>
        </div>

        {/* The Exploded Architectural Diagram */}
        <div className="max-w-4xl mx-auto relative mt-10">
          
          {/* Central Brain/Database */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full bg-[#111] border border-primary-500/30 rounded-2xl p-8 text-center relative z-20 shadow-[0_0_50px_rgba(255,138,0,0.1)] mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-xl font-black text-white mb-2">Central Business Logic</h3>
            <p className="text-gray-400 text-sm">Validates ideas, calculates math, and routes data.</p>
          </motion.div>

          {/* Connectors to Modules */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {/* The actual connecting lines (desktop only for simplicity) */}
            <div className="hidden md:block absolute top-[-3rem] left-[12.5%] w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent" />
            <div className="hidden md:block absolute top-[-3rem] left-[37.5%] w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent" />
            <div className="hidden md:block absolute top-[-3rem] left-[62.5%] w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent" />
            <div className="hidden md:block absolute top-[-3rem] left-[87.5%] w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent" />

            {[
              { name: "Opportunity Engine™", input: "Data Input", output: "Passes Keywords" },
              { name: "Publishing Studio™", input: "Generates Interior", output: "Passes Page Count" },
              { name: "Cover Studio™", input: "Receives Page Count", output: "Calculates Spine" },
              { name: "Launch Kit™", input: "Receives All Assets", output: "Compiles Export" }
            ].map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-black border border-white/10 rounded-xl p-5 relative group hover:border-white/20 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center mb-4">
                  <Cpu className="w-4 h-4 text-gray-400" />
                </div>
                <h4 className="text-white font-bold text-sm mb-4">{module.name}</h4>
                
                <div className="space-y-3">
                  <div className="bg-[#111] rounded p-2 text-xs border border-white/5">
                    <span className="text-gray-500 block mb-1">Function</span>
                    <span className="text-gray-300 font-medium">{module.input}</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowDown className="w-3 h-3 text-primary-500/50" />
                  </div>
                  <div className="bg-primary-500/5 rounded p-2 text-xs border border-primary-500/20">
                    <span className="text-primary-500/50 block mb-1">Data Flow</span>
                    <span className="text-primary-400 font-medium">{module.output}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
