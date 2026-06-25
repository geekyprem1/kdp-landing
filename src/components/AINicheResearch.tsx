"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, AlertTriangle, Search } from "lucide-react";

export function AINicheResearch() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 01: AI Niche Intelligence</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Uncover "Ghost Niches" That Your Competitors Can't See
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-8 leading-relaxed">
              Stop guessing what to publish. Our AI analyzes millions of Amazon data points to feed you highly profitable, low-competition niches on a silver platter.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Hyper-Targeted Suggestions</h4>
                  <p className="text-gray-500 text-sm mt-1">Get precise sub-niches (e.g. "Sudoku for seniors with poor vision" instead of just "Sudoku").</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Real-Time Search Volume</h4>
                  <p className="text-gray-500 text-sm mt-1">Know exactly how many people are searching for a term before you create the book.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl glass-card p-2 border border-white/10"
          >
            <div className="aspect-[4/3] bg-black rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
              
              {/* Fake UI Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="h-10 bg-white/5 rounded border border-white/10 flex items-center px-4 mb-4">
                  <Search className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-white/50 text-sm font-mono">Niche: Activity Books for Adults...</span>
                </div>
                
                <div className="flex-1 space-y-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-16 bg-white/5 rounded border border-white/5 flex items-center px-4 justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="w-48 h-3 bg-white/20 rounded" />
                        <div className="w-24 h-2 bg-white/10 rounded" />
                      </div>
                      <div className="w-16 h-8 bg-green-500/20 text-green-500 rounded border border-green-500/30 flex items-center justify-center font-bold text-xs">
                        98% Opp
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Callout */}
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white font-bold px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-red-400/30 animate-bounce">
              <AlertTriangle className="w-6 h-6 text-yellow-300" />
              <span>Found 1,204 Hidden Niches!</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
