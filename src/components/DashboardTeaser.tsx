"use client";

import { motion } from "framer-motion";

export function DashboardTeaser() {
  return (
    <section className="py-24 bg-surface border-y border-white/5 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Look Inside The <span className="text-primary-500">Machine</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto">
            This isn't just another shiny software with no substance. This is an enterprise-grade command center built specifically to dominate Amazon KDP.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl sm:rounded-[2rem] p-2 sm:p-4 bg-gradient-to-br from-primary-500/20 via-black to-primary-600/10 shadow-[0_0_80px_rgba(255,138,0,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-2xl sm:rounded-[2rem]" />
          
          <div className="relative aspect-[16/10] bg-black rounded-xl sm:rounded-[1.5rem] overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-top opacity-50 transition-transform duration-[10s] group-hover:scale-110 group-hover:opacity-70 ease-linear" />
            
            {/* UI Overlays to make it look like a complex dashboard */}
            <div className="absolute top-4 left-4 right-4 h-12 flex gap-4 z-20">
              <div className="w-64 h-full bg-black/60 backdrop-blur-md rounded-lg border border-white/10" />
              <div className="flex-1 h-full bg-black/60 backdrop-blur-md rounded-lg border border-white/10" />
            </div>
            <div className="absolute top-20 left-4 bottom-4 w-64 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 hidden sm:block" />
            <div className="absolute top-20 left-4 sm:left-72 right-4 bottom-4 bg-black/60 backdrop-blur-md rounded-lg border border-white/10" />
            
            <div className="absolute inset-0 z-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
