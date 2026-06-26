"use client";

import { motion } from "framer-motion";

export function OpportunityScore() {
  return (
    <section className="py-24 bg-background border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-green-500 font-bold tracking-widest uppercase text-sm mb-4 block">The "Secret Sauce"</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">
            The Proprietary <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Opportunity Score</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium mb-12 leading-relaxed">
            We spent 6 months developing an algorithm that calculates a single, undeniable metric. It analyzes search volume, competition density, average BSR (Best Sellers Rank), and pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-lg mx-auto"
        >
          {/* Gauge Mockup */}
          <div className="bg-surface rounded-[2rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent" />
            
            <h3 className="text-2xl font-bold text-white mb-8">Niche: "Zen Garden Coloring Book"</h3>
            
            <div className="relative w-64 mx-auto mb-2">
              <svg viewBox="0 0 100 60" className="w-full overflow-visible">
                {/* Background Track */}
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" className="text-white/5" strokeWidth="12" strokeLinecap="round" />
                {/* Green Fill (94%) */}
                <path 
                  d="M 10 50 A 40 40 0 0 1 90 50" 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                  strokeDasharray="125.66" 
                  strokeDashoffset="7.54" 
                />
              </svg>
              
              <div className="absolute bottom-0 left-0 w-full text-center translate-y-4">
                <span className="text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] leading-none">94</span>
                <span className="text-green-400 font-bold text-xl ml-1">/100</span>
              </div>
            </div>
            
            <div className="mt-8 bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-green-400 font-bold text-lg uppercase tracking-wider">
              Strong BUY Signal
            </div>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-lg text-gray-500 font-medium max-w-2xl mx-auto"
        >
          If the Opportunity Score is above 80, you publish. If it's below 80, you move on. It removes 100% of the emotion and guesswork from publishing.
        </motion.p>
      </div>
    </section>
  );
}
