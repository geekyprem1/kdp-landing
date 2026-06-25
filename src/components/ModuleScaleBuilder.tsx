"use client";

import { motion } from "framer-motion";
import { Layers, ArrowRight, Library, Target, CheckCircle2, LineChart } from "lucide-react";

export function ModuleScaleBuilder() {
  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <LineChart className="w-4 h-4" />
            Module 05: The Scale Builder™
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Stop Starting From Scratch Every Time.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed space-y-4"
          >
            <p>
              <strong className="text-red-400">The Problem:</strong> Most publishers launch a book, make a few sales, and then have to do all the grueling research and formatting again from scratch to build the next one.
            </p>
            <p>
              <strong className="text-primary-400">The Solution:</strong> The Scale Builder acts as your franchise engine. Instantly duplicate your winning assets, repurpose them into new series, and scale your single book into an entire brand network.
            </p>
          </motion.div>
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
              <div className="text-xs text-gray-500 font-mono">Scale_Builder_Active</div>
            </div>
            
            <div className="p-6">
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-bold">New Compilation: "The Ultimate Shadow Work Bundle"</h3>
                <button className="bg-primary-500 text-black text-xs font-bold px-3 py-1.5 rounded">Generate Bundle</button>
              </div>

              {/* Fake UI: Merging Books */}
              <div className="bg-[#111] border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                <div className="text-xs font-bold text-gray-500 uppercase">Selected Assets</div>
                
                <div className="flex items-center justify-between bg-black border border-white/5 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-10 bg-white/5 rounded border border-white/10" />
                    <span className="text-sm text-gray-300">Shadow Work Journal Vol 1</span>
                  </div>
                  <span className="text-xs text-gray-500">120 Pages</span>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-4 bg-white/10" />
                </div>

                <div className="flex items-center justify-between bg-black border border-white/5 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-10 bg-white/5 rounded border border-white/10" />
                    <span className="text-sm text-gray-300">Shadow Work Prompts Vol 2</span>
                  </div>
                  <span className="text-xs text-gray-500">120 Pages</span>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-4 bg-white/10" />
                </div>

                <div className="flex items-center justify-between bg-primary-500/5 border border-primary-500/20 p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-10 bg-primary-500/20 rounded border border-primary-500/30" />
                    <span className="text-sm text-white font-bold">Combined Mega-Bundle</span>
                  </div>
                  <span className="text-xs text-primary-400 font-bold">240 Pages</span>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Right: Benefits & Business Outcome */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="flex flex-col gap-6 mb-8">
              {[
                { icon: Layers, title: "1-Click Bundling", text: "Select multiple existing books and merge their interiors into a single massive 'Box Set' PDF instantly." },
                { icon: Target, title: "Multiply Your Income", text: "Amazon rewards higher-priced bundles. Turn 3 $6 books into one highly profitable $15 bundle." }
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
              <h4 className="text-primary-400 font-bold text-sm uppercase tracking-widest mb-3">Business Progression</h4>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300 font-medium">
                Single Book <ArrowRight className="w-3 h-3 text-gray-500" /> Series <ArrowRight className="w-3 h-3 text-gray-500" /> <span className="text-white font-bold">Portfolio Empire</span>
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
              <span className="relative z-10">Start Scaling Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

          </div>

        </div>
      </div>
    </section>
  );
}
