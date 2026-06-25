"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Edit3, Image as ImageIcon, FileText, Upload } from "lucide-react";

export function TheFragmentedWorkflow() {
  return (
    <section className="py-24 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            The Hidden Cost of <br />
            <span className="text-red-500">Fragmented Workflows.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg font-medium"
          >
            This is what building an Amazon KDP business looks like without an Operating System. Multiple subscriptions, constant context switching, and manual data transfer.
          </motion.p>
        </div>

        {/* The Fragmented Pipeline Visualization */}
        <div className="max-w-5xl mx-auto relative mt-10">
          {/* Connecting Line (Broken) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500/20 -translate-y-1/2 hidden lg:block border-t border-dashed border-red-500/50" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              {
                step: "1. Research",
                tool: "Publisher Rocket",
                cost: "$97",
                icon: Search,
                pain: "Export CSVs manually"
              },
              {
                step: "2. Write",
                tool: "ChatGPT Plus",
                cost: "$20/mo",
                icon: Edit3,
                pain: "Prompting endlessly"
              },
              {
                step: "3. Design",
                tool: "Midjourney",
                cost: "$30/mo",
                icon: ImageIcon,
                pain: "No vector outputs"
              },
              {
                step: "4. Format",
                tool: "Canva Pro",
                cost: "$15/mo",
                icon: FileText,
                pain: "Manual bleeding issues"
              },
              {
                step: "5. Publish",
                tool: "Amazon KDP",
                cost: "Time",
                icon: Upload,
                pain: "Manual metadata entry"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111] border border-red-500/20 rounded-xl p-5 relative flex flex-col items-center text-center group hover:border-red-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{item.step}</div>
                <div className="text-white font-bold mb-2">{item.tool}</div>
                <div className="text-red-400 font-mono text-sm bg-red-500/10 px-2 py-0.5 rounded mb-3">
                  {item.cost}
                </div>
                <div className="text-xs text-gray-500 mt-auto pt-3 border-t border-white/5 w-full">
                  ⚠️ {item.pain}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-8 py-4">
            <p className="text-xl text-white font-bold">
              Total Cost: <span className="text-red-500">$162+ upfront & monthly</span> + <span className="text-red-500">Hours of wasted time.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
