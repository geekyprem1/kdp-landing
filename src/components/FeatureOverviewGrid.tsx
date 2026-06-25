"use client";

import { motion } from "framer-motion";
import { 
  Search, BookOpen, PenTool, Layout, FileText, BarChart, 
  Settings, Layers, Box, Cpu, Download, Sparkles,
  Globe, UploadCloud, Database
} from "lucide-react";

export function FeatureOverviewGrid() {
  const features = [
    { icon: Search, title: "AI Niche Intelligence" },
    { icon: BarChart, title: "Keyword Matrix" },
    { icon: Layers, title: "Competition Analyzer" },
    { icon: Cpu, title: "Proprietary Opp Score" },
    { icon: Box, title: "Coloring Book Engine" },
    { icon: BookOpen, title: "Story Book Generator" },
    { icon: Layout, title: "Puzzle Generator Suite" },
    { icon: FileText, title: "Activity Book Creator" },
    { icon: PenTool, title: "Cover & Interior Design" },
    { icon: Sparkles, title: "AI Copywriter" },
    { icon: Settings, title: "Listing Optimizer" },
    { icon: Download, title: "One-Click KDP Export" },
    { icon: UploadCloud, title: "One-Click Auto Publishing" },
    { icon: Globe, title: "Multi-Language Scaling" },
    { icon: Database, title: "AI Metadata Optimizer" },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Arsenal</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            Everything You Need.<br />Nothing You Don't.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-surface border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-primary-900/10 hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary-500/50 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400" />
              </div>
              <h3 className="text-white font-bold text-sm sm:text-base group-hover:text-primary-300 transition-colors">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
