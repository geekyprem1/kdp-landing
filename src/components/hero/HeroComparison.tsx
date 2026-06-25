"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export function HeroComparison() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-5xl mx-auto bg-black/40 border border-white/5 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
    >
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
        
        {/* The Old Way */}
        <div className="flex flex-col gap-4">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">The Old Way</div>
          <ul className="space-y-3">
            {[
              "Multiple expensive subscriptions",
              "Multiple confusing dashboards",
              "Manual copy & paste data transfer",
              "Disconnected, fragile workflow"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                <XCircle className="w-4 h-4 text-red-500/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:flex flex-col items-center justify-center h-full">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent absolute top-0 bottom-0" />
          <div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center relative z-10 text-xs font-bold text-gray-500 shadow-xl">VS</div>
        </div>
        <div className="md:hidden w-full h-px bg-white/5 my-2" />

        {/* The New Way */}
        <div className="flex flex-col gap-4">
          <div className="text-xs uppercase tracking-widest text-primary-500 font-bold mb-2">The New Way</div>
          <ul className="space-y-3">
            {[
              "One unified workspace",
              "One seamless workflow",
              "One KDP-ready export",
              "Everything perfectly connected"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
}
