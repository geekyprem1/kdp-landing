"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Scale } from "lucide-react";

export function TransformationComparison() {
  const comparison = [
    {
      pain: "Spend hours switching between 5 different software tabs.",
      gain: "One unified workspace handles every stage of publishing."
    },
    {
      pain: "Pay $150+ per month in multiple recurring subscriptions.",
      gain: "One single platform eliminates your monthly software overhead."
    },
    {
      pain: "Manually copy-paste keywords and dimensions between tools.",
      gain: "Data automatically flows from research directly into design."
    },
    {
      pain: "Struggle with Canva margins and KDP bleed rejections.",
      gain: "Perfectly formatted interiors and covers mathematically calculated."
    },
    {
      pain: "Publish 1-2 books a month through sheer manual effort.",
      gain: "Scale to 10+ books a month with the automated Scale Builder™."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 w-full max-w-4xl h-1/2 bg-primary-500/5 blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <Scale className="w-4 h-4 text-primary-500" />
            The Ultimate Contrast
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Why KDP Mafia Wins.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            We aren't competing on features. We are competing on outcomes. Here is what happens when you upgrade from a fragmented workflow to a true Operating System.
          </motion.p>
        </div>

        {/* The Comparison Table */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(255,138,0,0.05)] overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-2 divide-x divide-white/5 border-b border-white/5 bg-[#111]">
            <div className="p-6 text-center">
              <div className="text-red-400 font-bold text-sm uppercase tracking-widest mb-1">The Old Way</div>
              <h3 className="text-xl font-black text-white">Fragmented Stack</h3>
            </div>
            <div className="p-6 text-center bg-primary-500/5">
              <div className="text-primary-500 font-bold text-sm uppercase tracking-widest mb-1">The New Way</div>
              <h3 className="text-xl font-black text-white">Publishing OS</h3>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {comparison.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-2 divide-x divide-white/5"
              >
                {/* Loser Column */}
                <div className="p-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors">
                  <XCircle className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-sm leading-relaxed">{row.pain}</p>
                </div>
                {/* Winner Column */}
                <div className="p-6 flex items-start gap-4 bg-primary-500/5 hover:bg-primary-500/10 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <p className="text-gray-100 text-sm font-medium leading-relaxed">{row.gain}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer CTA */}
          <div className="p-8 bg-black flex justify-center border-t border-white/5">
            <button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} className="bg-white text-black font-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors shadow-xl">
              Switch To The Operating System
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
