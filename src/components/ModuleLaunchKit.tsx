"use client";

import { motion } from "framer-motion";
import { PackageOpen, DownloadCloud, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export function ModuleLaunchKit() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <PackageOpen className="w-4 h-4" />
            Module 04
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Launch Kit™
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            Don't fail at the finish line. The Launch Kit™ compiles your interior, cover, and a highly-optimized metadata package into one single export, ready for instant upload to Amazon.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Benefits & Business Outcome */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            
            <div className="flex flex-col gap-6 mb-8">
              {[
                { icon: DownloadCloud, title: "1-Click Export", text: "Download your exact-size Cover PDF and formatted Interior PDF with a single click." },
                { icon: FileText, title: "Optimized Metadata", text: "Receive auto-generated titles, subtitles, descriptions, and the 7 backend KDP keywords." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Outcome Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-5 mb-8"
            >
              <h4 className="text-primary-400 font-bold text-sm uppercase tracking-widest mb-3">Business Outcome</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" /> Complete KDP Upload Package
                </div>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" /> HTML-Formatted Description
                </div>
                <div className="flex items-center gap-2 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" /> Guaranteed KDP Approval
                </div>
              </div>
            </motion.div>

            {/* Contextual CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-black font-black rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">Export A Book Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>

          </div>

          {/* Right: The Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(255,138,0,0.05)] overflow-hidden order-1 lg:order-2"
          >
            <div className="bg-[#111] border-b border-white/5 p-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-gray-500 font-mono">Launch_Kit_Active</div>
            </div>
            
            <div className="p-6">
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-start gap-4 mb-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">Your assets are ready.</h3>
                  <p className="text-gray-400 text-sm">Download your final files and copy your metadata directly into Amazon KDP.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#151515] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center group hover:border-primary-500/30 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-gray-400 group-hover:text-primary-500" />
                  </div>
                  <div className="text-white font-bold text-sm">Interior.pdf</div>
                  <div className="text-gray-500 text-xs mt-1">120 Pages • 2.4MB</div>
                </div>
                <div className="bg-[#151515] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center group hover:border-primary-500/30 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-gray-400 group-hover:text-primary-500" />
                  </div>
                  <div className="text-white font-bold text-sm">Cover.pdf</div>
                  <div className="text-gray-500 text-xs mt-1">Print Ready • 4.1MB</div>
                </div>
              </div>

              <div className="bg-[#111] border border-white/5 rounded-xl p-5">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-sm font-semibold text-gray-400">Optimized Metadata</h4>
                  <button className="text-xs text-primary-400 font-bold hover:text-primary-300">Copy All</button>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Title</div>
                    <div className="text-sm text-white bg-black p-2 rounded border border-white/5">The Complete Shadow Work Journal</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">7 KDP Keywords</div>
                    <div className="text-sm text-white bg-black p-2 rounded border border-white/5 font-mono text-xs">
                      shadow work, manifestation, trauma healing, journaling...
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
