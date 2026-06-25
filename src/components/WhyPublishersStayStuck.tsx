"use client";

import { motion } from "framer-motion";
import { Clock, RefreshCcw, Database, FileX } from "lucide-react";

export function WhyPublishersStayStuck() {
  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Emotional Reality */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold mb-6 text-sm uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              The Reality Check
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
            >
              Why Most Publishers <br />
              <span className="text-gray-500">Stay Stuck At $500/Month.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 font-medium leading-relaxed mb-8"
            >
              You don't lack ideas. You lack infrastructure. Most publishers spend 80% of their time managing software instead of actually publishing books.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
              <p className="text-xl font-bold text-white mb-2">The problem isn't Amazon KDP.</p>
              <p className="text-gray-400">The problem is the fragmented workflow you are using to build it.</p>
            </motion.div>
          </div>

          {/* Right Column: The Pain Points */}
          <div className="grid gap-4">
            {[
              {
                icon: Clock,
                text: "Spending hours researching niches in one tool."
              },
              {
                icon: RefreshCcw,
                text: "Constantly switching between 5 different apps."
              },
              {
                icon: Database,
                text: "Copying and pasting data manually to keep track."
              },
              {
                icon: FileX,
                text: "Formatting PDFs manually because the exporter failed."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 bg-black border border-white/5 rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-gray-300 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
