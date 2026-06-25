"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function DashboardShowcase() {
  return (
    <section className="py-24 bg-background relative z-10 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Ultimate Command Center</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            One Dashboard To Rule Them All
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto mb-12">
            No more logging into 5 different websites just to publish a single book. Every tool, every generator, and every piece of data is seamlessly integrated into one beautiful, lightning-fast interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden glass-card">
            {/* Browser Header */}
            <div className="bg-black/80 border-b border-white/5 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="mx-auto bg-white/5 rounded-md px-48 py-1.5 flex items-center justify-center border border-white/5">
                <span className="text-xs text-gray-500 font-mono">app.kdpmafia.com/studio</span>
              </div>
            </div>
            
            {/* Mockup Content */}
            <div className="aspect-[16/9] relative overflow-hidden flex bg-[#0a0a0a]">
              {/* Fake Sidebar */}
              <div className="w-64 border-r border-white/5 bg-black/50 p-4 hidden md:flex flex-col gap-4">
                <div className="h-8 w-32 bg-primary-500/20 rounded border border-primary-500/30 mb-8" />
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`h-10 rounded ${i === 2 ? 'bg-primary-500/10 border border-primary-500/20' : 'bg-white/5'} w-full`} />
                ))}
              </div>
              
              {/* Fake Main Content */}
              <div className="flex-1 p-8 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary-500/20 flex items-center justify-center border border-primary-500/30 animate-pulse cursor-pointer group hover:bg-primary-500/30 transition-colors hover:scale-110">
                    <PlayCircle className="w-12 h-12 text-primary-500 group-hover:text-primary-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
