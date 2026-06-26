"use client";

import { motion } from "framer-motion";
import { XCircle, DollarSign, Clock, AlertOctagon } from "lucide-react";

export function TheOldWay() {
  const pains = [
    {
      title: "Subscription Fatigue",
      desc: "Paying $29/mo for keyword research, $19/mo for a cover designer, $49/mo for puzzle generators, $99/mo for AI writing tools... it eats all your profits.",
      icon: DollarSign
    },
    {
      title: "Context Switching Hell",
      desc: "Bouncing between 10 different tabs, copy-pasting data, downloading and uploading files manually. It's an exhausting mess.",
      icon: AlertOctagon
    },
    {
      title: "The Quality Gap",
      desc: "Amazon algorithms are getting smarter. Buyers demand higher quality. Cheap, generic Canva templates are getting accounts banned or buried in search results.",
      icon: XCircle
    },
    {
      title: "The Time Sink",
      desc: "Taking 3 days to research, design, and list a single book. At that speed, you will never build a massive, passive income portfolio.",
      icon: Clock
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Painful Reality</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The "Old Way" Of Publishing Is Broken
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-8 rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <pain.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
