"use client";

import { motion } from "framer-motion";
import { Check, X, Skull } from "lucide-react";

export function ComparisonSection() {
  const competitors = ["Publisher Rocket", "Book Bolt", "KDSpy", "Canva Pro", "ChatGPT Plus"];
  const features = [
    { name: "Live Amazon Keyword Data", us: true, them: [true, true, true, false, false] },
    { name: "Proprietary Opp Score", us: true, them: [false, false, false, false, false] },
    { name: "AI Cover Generation", us: true, them: [false, false, false, false, true] },
    { name: "Coloring Book Engine", us: true, them: [false, false, false, false, false] },
    { name: "1-Click PDF Typesetting", us: true, them: [false, false, false, false, false] },
    { name: "Story & Illustration AI", us: true, them: [false, false, false, false, false] },
    { name: "Puzzle Generation Suite", us: true, them: [false, true, false, false, false] },
    { name: "Total Monthly Cost", us: "$0 (Today)", them: ["$97", "$19/mo", "$69", "$14/mo", "$20/mo"] },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-6">
            <Skull className="w-8 h-8" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            The Death Of The <span className="text-red-500">Subscription</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto">
            Look at what you are currently forced to pay just to run a basic KDP business. We are making every single one of these tools obsolete.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto pb-8"
        >
          <div className="min-w-[900px] bg-surface rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="grid grid-cols-7 bg-black border-b border-white/10">
              <div className="col-span-2 p-6 flex items-end">
                <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">Feature Comparison</span>
              </div>
              <div className="p-6 text-center border-l border-primary-500/30 bg-primary-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent" />
                <span className="relative z-10 text-primary-400 font-black text-xl tracking-tight block mb-1">KDP MAFIA</span>
                <span className="relative z-10 bg-primary-500 text-black text-xs font-bold px-2 py-0.5 rounded uppercase tracking-widest">You</span>
              </div>
              {competitors.map((comp, i) => (
                <div key={i} className="p-6 text-center border-l border-white/5 opacity-60">
                  <span className="text-white font-bold text-sm block">{comp}</span>
                </div>
              ))}
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/5">
              {features.map((feature, i) => (
                <div key={i} className={`grid grid-cols-7 ${i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'} hover:bg-white/5 transition-colors`}>
                  <div className="col-span-2 p-4 flex items-center">
                    <span className="text-gray-300 font-medium">{feature.name}</span>
                  </div>
                  
                  {/* Our Column */}
                  <div className="p-4 flex items-center justify-center border-l border-primary-500/30 bg-primary-500/5">
                    {typeof feature.us === 'boolean' ? (
                      feature.us ? <CheckCircleIcon /> : <XCircleIcon />
                    ) : (
                      <span className="text-primary-400 font-black text-lg">{feature.us}</span>
                    )}
                  </div>
                  
                  {/* Competitor Columns */}
                  {feature.them.map((val, j) => (
                    <div key={j} className="p-4 flex items-center justify-center border-l border-white/5 opacity-50">
                      {typeof val === 'boolean' ? (
                        val ? <CheckCircleIcon disabled /> : <XCircleIcon />
                      ) : (
                        <span className="text-red-400 font-bold">{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Total Cost Row */}
            <div className="grid grid-cols-7 bg-red-900/20 border-t border-red-500/30">
              <div className="col-span-2 p-6 flex items-center justify-end pr-8">
                <span className="text-white font-black text-lg uppercase">Total 1st Year Cost:</span>
              </div>
              <div className="p-6 text-center border-l border-primary-500/30 bg-primary-500/20 flex flex-col justify-center">
                <span className="text-primary-400 font-black text-2xl">ONLY $97</span>
                <span className="text-xs text-primary-300 uppercase font-bold mt-1">One-Time (Today)</span>
              </div>
              <div className="col-span-4 p-6 flex flex-col items-center justify-center border-l border-white/5">
                <span className="text-red-400 font-black text-3xl line-through decoration-red-600">$1,235.00+</span>
                <span className="text-sm text-red-300 font-bold uppercase tracking-widest mt-1">Recurring Forever</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CheckCircleIcon({ disabled = false }) {
  return (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${disabled ? 'bg-gray-500/20 text-gray-400' : 'bg-green-500/20 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]'}`}>
      <Check className="w-5 h-5" />
    </div>
  );
}

function XCircleIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
      <X className="w-5 h-5" />
    </div>
  );
}
