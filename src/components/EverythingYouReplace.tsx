"use client";

import { motion } from "framer-motion";
import { X, ArrowRight, Zap } from "lucide-react";

export function EverythingYouReplace() {
  const replacements = [
    { name: "ChatGPT Plus", cost: "$240/yr" },
    { name: "Midjourney", cost: "$360/yr" },
    { name: "Canva Pro", cost: "$120/yr" },
    { name: "Book Bolt", cost: "$120/yr" },
    { name: "Freelance Cover Designer", cost: "$500+/mo" },
    { name: "Freelance Ghostwriter", cost: "$1000+/mo" },
    { name: "Manual Formatters", cost: "$200+/mo" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <Zap className="w-4 h-4 text-red-500" />
            Stop Bleeding Money
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Everything You Will <span className="text-red-500">Replace.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            KDP Mafia isn't just another tool to add to your expensive stack. It is the operating system that replaces your entire stack.
          </motion.p>
        </div>

        <div className="bg-black border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/5 blur-[100px] pointer-events-none" />
          
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
            {replacements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-gray-300 font-medium line-through decoration-red-500/50">{item.name}</span>
                </div>
                <span className="text-gray-500 text-sm font-bold">{item.cost}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10"
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                <ArrowRight className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Replaced by KDP Mafia</p>
                <p className="text-primary-500 font-medium">For a single one-time payment.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
