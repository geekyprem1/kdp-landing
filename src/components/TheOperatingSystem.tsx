"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function TheOperatingSystem() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <LayoutDashboard className="w-4 h-4" />
            The Solution
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Enter The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-primary-500 to-yellow-500">Business OS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed"
          >
            KDP Mafia replaces your entire fragmented software stack with one unified publishing workspace. One login. One subscription. One integrated workflow.
          </motion.p>
        </div>

        {/* The Massive OS Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative max-w-6xl mx-auto rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_100px_rgba(255,138,0,0.1)] overflow-hidden"
        >
          {/* Mockup Header */}
          <div className="bg-[#111] border-b border-white/5 p-4 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="bg-black/50 border border-white/5 rounded-md px-4 py-1.5 text-xs text-gray-500 font-mono w-full max-w-sm mx-auto text-center flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              workspace.kdpmafia.com
            </div>
          </div>

          {/* Fake OS Interface */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Left Sidebar Menu */}
            <div className="hidden lg:flex flex-col gap-2 border-r border-white/5 pr-6">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Modules</div>
              {["Opportunity Engine™", "Publishing Studio™", "Cover Studio™", "Scale Builder™", "Launch Kit™"].map((item, i) => (
                <div key={i} className={`text-sm font-medium p-2 rounded-md ${i === 0 ? 'bg-primary-500/10 text-primary-400' : 'text-gray-400 hover:text-white'}`}>
                  {item}
                </div>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="col-span-3 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white">Active Projects</h3>
                  <p className="text-gray-500 text-sm mt-1">Manage your publishing pipeline</p>
                </div>
                <button className="bg-primary-500 text-black font-bold px-4 py-2 rounded-lg text-sm">
                  + New Book
                </button>
              </div>

              {/* Fake Project List */}
              <div className="grid gap-3">
                {[
                  { name: "Minimalist Shadow Work Journal", status: "Cover Studio", progress: "80%" },
                  { name: "Mandala Coloring Book for Adults", status: "Launch Kit", progress: "100%" },
                  { name: "Cryptogram Puzzle Book Vol. 1", status: "Publishing Studio", progress: "45%" }
                ].map((proj, i) => (
                  <div key={i} className="bg-[#111] border border-white/5 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-12 bg-white/5 border border-white/10 rounded" />
                      <div>
                        <p className="text-white font-semibold text-sm">{proj.name}</p>
                        <p className="text-gray-500 text-xs mt-1">Stage: {proj.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-primary-400 font-bold text-sm">{proj.progress}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
          {[
            "One Unified Workspace",
            "Zero Context Switching",
            "Connected Data Flow",
            "Faster Publishing Velocity"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 justify-center text-sm font-semibold text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
