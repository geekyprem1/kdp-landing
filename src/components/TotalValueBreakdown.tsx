"use client";

import { motion } from "framer-motion";

export function TotalValueBreakdown() {
  const stack = [
    { name: "The KDP Mafia Operating System", value: "$1,997/yr" },
    { name: "AI Niche Intelligence Module", value: "$497/yr" },
    { name: "Keyword Matrix & Opp Score", value: "$397/yr" },
    { name: "Full Generator Suite (Covers, Interiors, Puzzles)", value: "$997/yr" },
    { name: "AI Writing Assistant & Prompts", value: "$497/yr" },
    { name: "Bonus #1: KDP Mafia Masterclass", value: "$497" },
    { name: "Bonus #2: Premium Font Library", value: "$197" },
    { name: "Bonus #3: Private Mastermind", value: "$997/yr" },
    { name: "Bonus #4: Amazon Ads Bootcamp", value: "$297" },
    { name: "Bonus #5: Holiday Niche Cheatsheet", value: "$97" },
    { name: "Bonus #6: Commercial License", value: "$1,997" },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Let's Recap Everything You Are Getting Today
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
          
          <div className="relative z-10 space-y-4 mb-10">
            {stack.map((item, i) => (
              <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-300 font-bold text-sm sm:text-lg">{item.name}</span>
                <span className="text-white font-black text-sm sm:text-lg">{item.value}</span>
              </div>
            ))}
          </div>
          
          <div className="relative z-10 bg-primary-500/10 border-2 border-primary-500/50 rounded-xl p-6 text-center">
            <span className="text-gray-400 font-bold uppercase tracking-widest text-sm block mb-2">Total Value:</span>
            <span className="text-5xl sm:text-7xl font-black text-white line-through decoration-red-600">$8,467</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
