"use client";

import { motion } from "framer-motion";
import { Gift, BookOpen, Database, LayoutTemplate, CheckSquare, ShieldCheck, RefreshCw, Users, FolderOpen, ArrowRight } from "lucide-react";

export function PremiumBonusStack() {
  const bonuses = [
    {
      icon: Database,
      title: "Premium Prompt Vault™",
      desc: "Over 500+ tested AI prompts for generating high-converting interiors, descriptions, and story ideas.",
      value: "$197",
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/20"
    },
    {
      icon: BookOpen,
      title: "KDP Niche Vault™",
      desc: "A constantly updated database of 100+ low-competition, high-demand niches ready to publish in today.",
      value: "$297",
      color: "from-primary-500/20 to-transparent",
      borderColor: "border-primary-500/20"
    },
    {
      icon: LayoutTemplate,
      title: "Launch Templates™",
      desc: "Fill-in-the-blank HTML description templates proven to convert browsers into buyers on Amazon.",
      value: "$97",
      color: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/20"
    },
    {
      icon: CheckSquare,
      title: "Publishing Checklist™",
      desc: "Our internal 14-step checklist to ensure your book never gets rejected by KDP quality control.",
      value: "$47",
      color: "from-green-500/20 to-transparent",
      borderColor: "border-green-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Commercial License",
      desc: "Full rights to publish, sell, and distribute everything you generate. You own 100% of your royalties.",
      value: "$497",
      color: "from-yellow-500/20 to-transparent",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: RefreshCw,
      title: "Lifetime Updates",
      desc: "As Amazon KDP changes, we update the Operating System. You get all future feature releases for free.",
      value: "$297",
      color: "from-cyan-500/20 to-transparent",
      borderColor: "border-cyan-500/20"
    },
    {
      icon: Users,
      title: "Private Community",
      desc: "Network with other KDP Mafia publishers, share niches, and get direct feedback on your covers.",
      value: "$197/yr",
      color: "from-pink-500/20 to-transparent",
      borderColor: "border-pink-500/20"
    },
    {
      icon: FolderOpen,
      title: "KDP Resource Library™",
      desc: "A library of premium fonts, vector assets, and interior elements licensed for your KDP books.",
      value: "$147",
      color: "from-indigo-500/20 to-transparent",
      borderColor: "border-indigo-500/20"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 w-full max-w-4xl h-full bg-primary-500/5 blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <Gift className="w-4 h-4" />
            The Founder's Arsenal
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Your Complete <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-primary-500 to-yellow-500">Business Toolkit.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            You aren't just getting the Operating System. When you join today, you receive our entire vault of internal publishing resources designed to accelerate your growth.
          </motion.p>
        </div>

        {/* Bonus Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-[#0a0a0a] border ${bonus.borderColor} rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Product Box Mockup Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${bonus.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-4 shadow-xl">
                  <bonus.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2">{bonus.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{bonus.desc}</p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="text-xs font-bold text-gray-500 line-through">Value: {bonus.value}</span>
                  <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">Included Free</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Value Stack Climax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#111] border border-primary-500/30 rounded-2xl p-8 sm:p-12 text-center shadow-[0_0_100px_rgba(255,138,0,0.15)] relative overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          
          <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Here Is Everything You Are Getting Today</h3>
          
          <div className="space-y-4 mb-8 relative z-10 text-left max-w-sm mx-auto">
            <div className="flex justify-between items-center text-gray-300 font-medium pb-2 border-b border-white/5">
              <span>KDP Mafia Operating System</span>
              <span className="font-mono">$997/yr</span>
            </div>
            <div className="flex justify-between items-center text-gray-400 text-sm pb-2 border-b border-white/5">
              <span>Premium Prompt Vault™</span>
              <span className="font-mono">$197</span>
            </div>
            <div className="flex justify-between items-center text-gray-400 text-sm pb-2 border-b border-white/5">
              <span>KDP Niche Vault™</span>
              <span className="font-mono">$297</span>
            </div>
            <div className="flex justify-between items-center text-gray-400 text-sm pb-2 border-b border-white/5">
              <span>Commercial License & All Bonuses</span>
              <span className="font-mono">$1,282</span>
            </div>
          </div>

          <div className="relative z-10 border-t-2 border-dashed border-gray-700 pt-6 mb-8 max-w-sm mx-auto flex justify-between items-end">
            <div className="text-left">
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Total Real Value</div>
              <div className="text-4xl font-black text-gray-400 line-through decoration-red-500/50">$2,773</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-primary-500 uppercase tracking-widest font-bold mb-1">Today's Price</div>
              <div className="text-5xl font-black text-white">$14.99</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-primary-500 to-yellow-500 text-black font-black text-lg rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,138,0,0.4)] relative z-10"
          >
            <span className="relative z-10">Get The Operating System & All Bonuses</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <p className="text-gray-500 text-xs mt-4 relative z-10">Zero Risk. 14-Day Money Back Guarantee.</p>

        </motion.div>

      </div>
    </section>
  );
}
