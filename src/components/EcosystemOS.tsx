"use client";

import { motion } from "framer-motion";
import { Workflow, ArrowRight } from "lucide-react";

export function EcosystemOS() {
  const systems = [
    { name: "Opportunity Engine", desc: "Niche Research", step: "01" },
    { name: "Publishing Studio", desc: "Interior Generator", step: "02" },
    { name: "Cover Studio", desc: "Design Engine", step: "03" },
    { name: "Launch Kit", desc: "Metadata & SEO", step: "04" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <Workflow className="w-4 h-4 text-primary-500" />
            Infrastructure, Not Software
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Everything Your KDP Business Needs. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-600">
              One Connected Operating System.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed"
          >
            Stop paying for 5 different subscriptions that don't talk to each other. KDP Mafia is the world's first fully interconnected publishing pipeline where data flows seamlessly from research to launch.
          </motion.p>
        </div>

        {/* Visual Pipeline */}
        <div className="relative max-w-5xl mx-auto py-12">
           <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent -translate-y-1/2 hidden md:block" />
           
           <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {systems.map((sys, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-black border border-white/10 p-6 rounded-2xl relative group hover:border-primary-500/50 transition-all text-center md:text-left flex flex-col items-center md:items-start shadow-xl"
                >
                   <div className="text-5xl font-black text-white/5 absolute top-2 right-4 pointer-events-none group-hover:text-primary-500/10 transition-colors">
                     {sys.step}
                   </div>
                   <h3 className="text-lg font-bold text-white mb-1 relative z-10">{sys.name}</h3>
                   <p className="text-sm text-gray-400 font-medium relative z-10">{sys.desc}</p>
                   
                   {i < systems.length - 1 && (
                     <div className="absolute -right-5 top-1/2 -translate-y-1/2 bg-[#111] p-1 rounded-full hidden md:block z-20">
                       <ArrowRight className="w-5 h-5 text-primary-500" />
                     </div>
                   )}
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
