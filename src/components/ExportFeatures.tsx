"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download, Box } from "lucide-react";

export function ExportFeatures() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="bg-gradient-to-br from-surface to-black p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[50px] pointer-events-none group-hover:bg-primary-500/20 transition-colors" />
              
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <span className="text-white font-bold">Export Settings</span>
                <span className="text-primary-500 text-sm font-bold bg-primary-500/10 px-2 py-1 rounded">Ready to Publish</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                  <span className="text-gray-300 text-sm font-medium">Trim Size</span>
                  <span className="text-white font-bold text-sm">8.5" x 11"</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                  <span className="text-gray-300 text-sm font-medium">Bleed Settings</span>
                  <span className="text-green-500 font-bold text-sm">Bleed Included</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                  <span className="text-gray-300 text-sm font-medium">File Format</span>
                  <span className="text-white font-bold text-sm">Print-Ready PDF</span>
                </div>
              </div>

              <button className="w-full bg-primary-500 text-black font-black uppercase text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-400 transition-colors">
                <Download className="w-5 h-5" /> Download KDP Files
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 12 & 13: The Finish Line</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Listing Optimization & 1-Click Export
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-8 leading-relaxed">
              We don't just help you make the book. We make sure it actually gets accepted by Amazon the first time, without those frustrating formatting errors.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Box className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-lg">Zero Formatting Errors</h4>
                  <p className="text-gray-500 text-sm mt-1">Our export engine perfectly calculates spine width, bleed margins, and safe zones so Amazon never rejects your manuscript.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-lg">HTML Description Generator</h4>
                  <p className="text-gray-500 text-sm mt-1">Copy and paste our pre-formatted HTML directly into KDP to get bold text, bullet points, and headers in your description.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
