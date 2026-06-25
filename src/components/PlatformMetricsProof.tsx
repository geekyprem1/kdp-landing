"use client";

import { motion } from "framer-motion";
import { BarChart3, BookOpen, Clock, Globe, Download } from "lucide-react";
import Image from "next/image";

export function PlatformMetricsProof() {
  const metrics = [
    { icon: BookOpen, value: "1.2M+", label: "Books Generated", suffix: "Lifetime" },
    { icon: Globe, value: "4.5M+", label: "Niches Validated", suffix: "By Opportunity Engine™" },
    { icon: Clock, value: "2.8M", label: "Hours Saved", suffix: "Versus manual formatting" },
    { icon: Download, value: "850k+", label: "Launch Kits Exported", suffix: "KDP-Ready Zips" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <BarChart3 className="w-4 h-4" />
            Platform Scale
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            The Numbers Behind <br />
            <span className="text-gray-500">The Empire.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            We don't just show screenshots of income. We show the raw processing power of the platform that generates that income. KDP Mafia is powering thousands of publishing businesses globally.
          </motion.p>
        </div>

        {/* The Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 max-w-5xl mx-auto">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 text-center hover:border-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-2">{metric.value}</div>
              <div className="text-sm font-bold text-gray-300 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-600">{metric.suffix}</div>
            </motion.div>
          ))}
        </div>

        {/* The Income Case Studies (Reframed as Business Results) */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Real Business Results</h3>
            <p className="text-gray-500 text-sm">Illustrative case studies of portfolios built using the KDP Mafia infrastructure.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Portfolio: Coloring Books", value: "$4,200/mo", speed: "12 Books Built in 3 Days" },
              { title: "Portfolio: Word Search", value: "$2,850/mo", speed: "Automated via Publishing Studio™" },
              { title: "Portfolio: Log Books", value: "$8,100/mo", speed: "Scaled using Scale Builder™" }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <BarChart3 className="w-16 h-16 text-green-500" />
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">{study.title}</div>
                <div className="text-3xl font-black text-green-500 mb-2">{study.value}</div>
                <div className="text-sm text-gray-400">{study.speed}</div>
                
                {/* Visual Representation of a dashboard chart */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-end gap-1 h-12">
                  {[20, 30, 25, 40, 45, 60, 55, 80, 90, 100].map((h, j) => (
                    <div key={j} className="flex-1 bg-green-500/20 group-hover:bg-green-500/40 transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
