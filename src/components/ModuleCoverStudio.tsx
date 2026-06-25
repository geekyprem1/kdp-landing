"use client";

import { motion } from "framer-motion";
import { Paintbrush, Wand2, MonitorPlay, CheckCircle2, ArrowRight } from "lucide-react";

export function ModuleCoverStudio() {
  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <Paintbrush className="w-4 h-4" />
            Module 03
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Cover Studio™
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            Stop paying designers $50 per cover. The Cover Studio™ generates premium, vector-quality book covers mathematically formatted to fit your exact page count and trim size.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: The Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(255,0,0,0.05)] overflow-hidden"
          >
            <div className="bg-[#111] border-b border-white/5 p-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-gray-500 font-mono">Cover_Studio_Active</div>
            </div>
            
            <div className="p-6">
              
              {/* Fake UI Editor Area */}
              <div className="flex flex-col gap-4">
                
                {/* Top Controls */}
                <div className="flex justify-between items-center bg-[#111] border border-white/5 p-3 rounded-lg">
                  <div className="flex gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span>Trim: 8.5" x 11"</span>
                    <span>Pages: 120</span>
                    <span className="text-primary-400">Bleed: Calculated</span>
                  </div>
                  <button className="bg-red-500 text-white font-bold text-xs px-4 py-1.5 rounded flex items-center gap-2">
                    <Wand2 className="w-3 h-3" /> Re-Generate
                  </button>
                </div>

                {/* The Canvas */}
                <div className="w-full aspect-[2/1] bg-[#151515] border border-white/5 rounded-xl flex items-center justify-center relative overflow-hidden group">
                  {/* Fake Cover Representation */}
                  <div className="absolute inset-0 flex">
                    {/* Back Cover */}
                    <div className="flex-1 bg-gradient-to-br from-gray-900 to-black border-r border-dashed border-gray-700 relative flex items-center justify-center">
                      <div className="w-24 h-16 bg-white/5 rounded border border-white/10" />
                    </div>
                    {/* Spine */}
                    <div className="w-4 bg-gray-800 border-r border-dashed border-gray-700" />
                    {/* Front Cover */}
                    <div className="flex-1 bg-gradient-to-br from-red-900/40 to-black relative flex flex-col items-center justify-center p-4">
                       <div className="w-3/4 h-6 bg-white/10 rounded mb-4" />
                       <div className="w-full h-32 bg-white/5 rounded-xl border border-white/10" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-black font-bold px-4 py-2 rounded-lg text-sm flex items-center gap-2 shadow-xl">
                      <MonitorPlay className="w-4 h-4" /> Preview High-Res
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right: Benefits & Business Outcome */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="flex flex-col gap-6 mb-8">
              {[
                { icon: Wand2, title: "AI Image Generation", text: "Create stunning, niche-specific vector illustrations that look like they were drawn by a professional." },
                { icon: Paintbrush, title: "Automated Typography", text: "No more wrestling with Photoshop. Text is automatically placed, aligned, and styled to convert." }
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
                    <item.icon className="w-6 h-6 text-red-500" />
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
              className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 mb-8"
            >
              <h4 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-3">Business Outcome</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-red-500" /> Print-Ready Vector PDF
                </div>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-red-500" /> Flawless Spine & Bleed Math
                </div>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-red-500" /> Commercial License Included
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
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white font-black rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">Design A Cover Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

          </div>

        </div>
      </div>
    </section>
  );
}
