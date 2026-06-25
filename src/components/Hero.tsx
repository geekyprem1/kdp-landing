"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary-600/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-64 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 text-primary-400 font-semibold mb-8 text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(255,138,0,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            The #1 KDP Publishing OS For 2024
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1] mb-8"
          >
            Replace <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-primary-500 line-through decoration-white/30">10 Expensive Tools</span> With The Ultimate AI <br className="hidden lg:block" />
            <span className="text-gradient-primary drop-shadow-[0_0_20px_rgba(255,138,0,0.3)]">Publishing System</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Stop wasting thousands of dollars on fragmented software. Research, generate, design, and publish highly profitable low & medium content books in <strong className="text-white">under 60 seconds</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-primary-400 hover:from-primary-500 hover:to-primary-300 text-black font-black uppercase tracking-tight text-lg px-10 py-5 rounded-xl shadow-[0_0_40px_rgba(255,138,0,0.5)] hover:shadow-[0_0_60px_rgba(255,138,0,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Get Instant Access Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById("vsl")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto glass hover:bg-white/5 text-white font-bold text-lg px-8 py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <PlayCircle className="w-6 h-6 text-primary-500" />
              Watch The Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400 font-medium"
          >
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>30-Day Money-Back Guarantee • Cancel Anytime • No Hidden Fees</span>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
          className="mt-20 relative mx-auto max-w-[1200px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-20 h-full w-full pointer-events-none" />
          <div className="relative rounded-2xl border border-white/10 bg-surface shadow-2xl overflow-hidden glass-card">
            {/* Browser Header */}
            <div className="bg-black/50 border-b border-white/5 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="mx-auto bg-black/50 rounded-md px-32 py-1 flex items-center justify-center border border-white/5">
                <span className="text-xs text-gray-500 font-mono">app.kdpmafia.com</span>
              </div>
            </div>
            {/* Mockup Content (Placeholder Image/Div) */}
            <div className="aspect-[16/9] bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary-500/20 flex items-center justify-center mb-4 border border-primary-500/30 animate-pulse">
                  <PlayCircle className="w-12 h-12 text-primary-500" />
                </div>
                <p className="text-white/70 font-medium tracking-widest uppercase text-sm">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
