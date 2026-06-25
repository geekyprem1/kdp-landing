"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, CheckCircle2, Paintbrush, FileDown, UploadCloud, DollarSign, BookOpen } from "lucide-react";

export function OneBookStartToFinish() {
  const steps = [
    { icon: Lightbulb, title: "Book Idea", text: "You have a concept for a Shadow Work Journal." },
    { icon: CheckCircle2, title: "Opportunity Engine™", text: "Validates demand & extracts keywords." },
    { icon: BookOpen, title: "Publishing Studio™", text: "Generates the 120-page interior." },
    { icon: Paintbrush, title: "Cover Studio™", text: "Designs a KDP-ready vector cover." },
    { icon: FileDown, title: "Launch Kit™", text: "Packages the PDFs and Metadata." },
    { icon: UploadCloud, title: "Amazon KDP", text: "You upload the final package." },
    { icon: DollarSign, title: "Royalties", text: "You earn passive income." }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            One Book. <br className="sm:hidden" />
            <span className="text-gray-500">Start To Finish.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            Watch exactly how one single idea moves through the KDP Mafia Operating System to become a published, revenue-generating asset on Amazon.
          </motion.p>
        </div>

        {/* Vertical Timeline for Mobile, Horizontal for Desktop */}
        <div className="max-w-6xl mx-auto mt-16 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col lg:flex-row items-center group w-full lg:w-auto"
              >
                {/* The Node */}
                <div className="flex flex-col items-center w-full lg:w-32 relative">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors ${i === steps.length - 1 ? 'bg-green-500/10 border-green-500/50 text-green-500' : i === 0 ? 'bg-white/10 border-white/20 text-white' : 'bg-[#111] border-white/10 text-gray-400 group-hover:bg-primary-500/10 group-hover:border-primary-500/50 group-hover:text-primary-400'} border-2`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className={`font-bold text-sm ${i === steps.length - 1 ? 'text-green-500' : 'text-white'}`}>{step.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 max-w-[120px] mx-auto leading-tight">{step.text}</p>
                  </div>
                </div>

                {/* The Connector (Arrow) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center w-8 mx-2">
                    <ArrowRight className="w-5 h-5 text-gray-700" />
                  </div>
                )}
                {/* Mobile Connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden h-8 w-px bg-white/10 my-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
