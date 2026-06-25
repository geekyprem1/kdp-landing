"use client";

import { motion } from "framer-motion";
import { Search, Target, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export function ModuleOpportunityEngine() {
  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <Search className="w-4 h-4" />
            Module 01
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Opportunity Engine™
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            Stop guessing what readers want. The Opportunity Engine™ scans Amazon data to instantly validate demand, analyze competition, and extract exact-match keywords before you create a single page.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: The Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(255,138,0,0.05)] overflow-hidden"
          >
            <div className="bg-[#111] border-b border-white/5 p-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-gray-500 font-mono">Opportunity_Engine_Active</div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-bold text-lg">Niche Validation: "Shadow Work Journal"</h3>
                <div className="bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Validated
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#111] border border-white/5 rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
                  <div className="text-sm font-semibold text-gray-400 mb-2">Opportunity Score™</div>
                  <div className="text-4xl font-black text-white">94<span className="text-lg text-gray-500">/100</span></div>
                  <div className="text-xs text-primary-400 mt-2 font-medium">High Demand • Low Competition</div>
                </div>
                <div className="bg-[#111] border border-white/5 rounded-xl p-5">
                  <div className="text-sm font-semibold text-gray-400 mb-2">Estimated Monthly Volume</div>
                  <div className="text-4xl font-black text-white">12.5k</div>
                  <div className="text-xs text-green-500 mt-2 font-medium">+15% vs last month</div>
                </div>
              </div>

              <div className="bg-[#111] border border-white/5 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-gray-400 mb-4">Extracted Keyword Matrix</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "shadow work journal for women",
                    "shadow work prompts",
                    "healing trauma",
                    "spiritual awakening",
                    "manifestation journal"
                  ].map((kw, i) => (
                    <div key={i} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-md flex items-center gap-2">
                      <Target className="w-3 h-3 text-primary-500" /> {kw}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits & Business Outcome */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="flex flex-col gap-6 mb-8">
              {[
                { icon: TrendingUp, title: "Eliminate The Guesswork", text: "Stop launching books blindly. Know exactly what the market wants before generating content." },
                { icon: Target, title: "Exact-Match Keywords", text: "Extract the exact search terms buyers use on Amazon, pre-formatted for your KDP metadata." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Outcome Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-5 mb-8"
            >
              <h4 className="text-primary-400 font-bold text-sm uppercase tracking-widest mb-3">Business Outcome</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" /> Validated Profitable Niche
                </div>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" /> Complete Keyword Matrix
                </div>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" /> Confidence To Build
                </div>
              </div>
            </motion.div>

            {/* Contextual CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-black font-black rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">Start Finding Niches Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

          </div>

        </div>
      </div>
    </section>
  );
}
