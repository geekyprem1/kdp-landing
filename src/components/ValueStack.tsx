"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gift, ShieldAlert } from "lucide-react";

export function ValueStack() {
  const stack = [
    { name: "The Opportunity Engine (Niche AI)", value: "$297 Value" },
    { name: "The Publishing Studio (Interior Generator)", value: "$397 Value" },
    { name: "The Cover Studio (Design Engine)", value: "$197 Value" },
    { name: "The Launch Kit (Metadata & SEO)", value: "$147 Value" },
    { name: "Keyword Intelligence Suite", value: "$197 Value" },
    { name: "Lifetime AI Generation Credits", value: "$997 Value" },
    { name: "Premium Commercial License", value: "$497 Value" },
    { name: "Private Mafia Community Access", value: "$297 Value" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Depth */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-primary-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <Gift className="w-4 h-4 text-primary-500" />
            The Complete Package
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Everything Included <span className="text-primary-500">Today.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            If you were to buy these interconnected tools separately or hire freelancers to do this work, here is what it would cost you.
          </motion.p>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          
          <div className="space-y-4 mb-8 relative z-10">
            {stack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span className="text-white font-medium text-lg">{item.name}</span>
                </div>
                <span className="text-gray-400 font-bold">{item.value}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-gradient-to-br from-primary-900/40 to-[#111] border border-primary-500/30 rounded-2xl p-8 text-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-primary-500/5 mix-blend-overlay pointer-events-none" />
             
             <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-2">Total Real World Value</p>
             <div className="text-4xl sm:text-6xl font-black text-white mb-2 line-through decoration-red-500/80">
               $3,026
             </div>
             
             <div className="mt-6 inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-bold border border-red-500/20">
               <ShieldAlert className="w-4 h-4" />
               Special Launch Pricing Below
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
