"use client";

import { motion } from "framer-motion";
import { BookOpen, Layers, Type, CheckCircle2, ArrowRight } from "lucide-react";

export function ModulePublishingStudio() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <BookOpen className="w-4 h-4" />
            Module 02: The Publishing Studio™
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Your Next Bestseller Shouldn't Take Weeks.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed space-y-4"
          >
            <p>
              <strong className="text-red-400">The Problem:</strong> You spend weeks outlining, writing, and formatting manually. Or worse, you spend $1,000+ hiring ghostwriters who deliver generic, unformatted trash that gets 1-star reviews.
            </p>
            <p>
              <strong className="text-primary-400">The Solution:</strong> Generate complete, high-quality, Amazon-ready interiors instantly. Simply enter your validated niche, and watch our specialized AI write and format a full book in minutes.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Benefits & Business Outcome */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            
            <div className="flex flex-col gap-6 mb-8">
              {[
                { icon: Layers, title: "Any Niche, Any Format", text: "Generate Word Searches, Sudoku, Mazes, Coloring Books, Story Books, and high-content text automatically." },
                { icon: Type, title: "Automated Formatting", text: "Never worry about Amazon KDP rejection. Margins, bleed, and page numbering are perfectly calculated." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
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
                  <CheckCircle2 className="w-4 h-4 text-primary-500" /> Complete 120-Page Formatted PDF
                </div>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" /> Zero Formatting Errors
                </div>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" /> Ready For KDP Upload
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
              <span className="relative z-10">Start Generating Interiors</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

          </div>

          {/* Right: The Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(255,138,0,0.05)] overflow-hidden order-1 lg:order-2"
          >
            <div className="bg-[#111] border-b border-white/5 p-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-gray-500 font-mono">Publishing_Studio_Active</div>
            </div>
            
            <div className="p-6 flex flex-col md:flex-row gap-6">
              
              {/* Sidebar Menu */}
              <div className="w-full md:w-48 shrink-0 flex flex-col gap-2 border-r border-white/5 pr-4">
                <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-2">Engine Type</div>
                {[
                  { name: "Coloring Books", active: true },
                  { name: "Logic Puzzles", active: false },
                  { name: "Story Books", active: false },
                  { name: "Journals", active: false },
                  { name: "High Content", active: false }
                ].map((item, i) => (
                  <div key={i} className={`text-sm px-3 py-2 rounded-md font-medium ${item.active ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' : 'text-gray-400 hover:text-white'}`}>
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Main Preview Area */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-white font-bold">Mandala Collection Vol. 1</h3>
                    <p className="text-gray-500 text-xs">8.5" x 11" • 120 Pages • Bleed</p>
                  </div>
                  <div className="bg-primary-500/10 text-primary-500 border border-primary-500/20 px-2 py-1 rounded text-xs font-bold animate-pulse">
                    Rendering... 64%
                  </div>
                </div>

                {/* Fake Grid of generated pages */}
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((page) => (
                    <div key={page} className="aspect-[8.5/11] bg-white border border-gray-300 rounded overflow-hidden relative group cursor-pointer">
                      {/* Fake content representation */}
                      <div className="absolute inset-2 border-2 border-dashed border-gray-200 rounded flex items-center justify-center">
                         <div className="w-12 h-12 rounded-full border-[3px] border-gray-300 opacity-50" />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-bold px-2 py-1 bg-primary-500 rounded">View Page {page}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
