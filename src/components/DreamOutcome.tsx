"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, CalendarDays, DollarSign, Layers, Users } from "lucide-react";

export function DreamOutcome() {
  const outcomes = [
    {
      icon: Layers,
      title: "Hundreds of Books Published",
      desc: "An entire catalogue of high-quality assets working for you 24/7."
    },
    {
      icon: DollarSign,
      title: "Consistent Monthly Royalties",
      desc: "Wake up to new sales notifications instead of zero-dollar days."
    },
    {
      icon: Users,
      title: "Zero Expensive Freelancers",
      desc: "Never pay another ghostwriter or cover designer again."
    },
    {
      icon: TrendingUp,
      title: "Scale Without Burnout",
      desc: "Launch 10x faster without working 10x harder."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-b border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <CalendarDays className="w-4 h-4 text-primary-500" />
            Fast-Forward The Clock
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Imagine Your Publishing Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-600">
              90 Days From Now.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed"
          >
            Stop focusing on the struggle of writing, designing, and formatting. Here is what your daily life looks like when you finally have a system that does the heavy lifting for you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-white/10 p-6 rounded-2xl flex gap-4 items-start group hover:border-primary-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary-500/10 group-hover:text-primary-400 transition-colors">
                <outcome.icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{outcome.title}</h3>
                <p className="text-gray-400 leading-relaxed">{outcome.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-12 text-center"
        >
           <p className="text-gray-500 font-medium italic">All managed from one centralized, connected dashboard.</p>
        </motion.div>

      </div>
    </section>
  );
}
