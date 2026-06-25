"use client";

import { motion } from "framer-motion";
import { TrendingUp, Cpu, Workflow } from "lucide-react";

export function ThePublishingShift() {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            The Market Has Evolved
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            The Era of &quot;Just Publish More&quot; <br className="hidden sm:block" />
            <span className="text-gray-500">Is Officially Over.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed"
          >
            A few years ago, volume won. Today, everyone has access to AI. The new competitive advantage isn't having an AI tool—it's having a completely integrated publishing infrastructure.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Cpu,
              title: "AI Is A Commodity",
              desc: "ChatGPT and Midjourney leveled the playing field. Anyone can generate text or an image. Individual tools no longer provide an edge."
            },
            {
              icon: TrendingUp,
              title: "Speed Is The Moat",
              desc: "The publishers dominating KDP aren't smarter. They are faster. They can spot an opportunity and publish before the market gets saturated."
            },
            {
              icon: Workflow,
              title: "Systems Win",
              desc: "The winners treat Amazon KDP like a software business. They rely on interconnected systems, not manual copy-pasting between seven different tabs."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
