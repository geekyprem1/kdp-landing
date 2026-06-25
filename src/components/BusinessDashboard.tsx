"use client";

import { motion } from "framer-motion";
import { TrendingUp, BookCopy, Zap, DollarSign, Activity } from "lucide-react";

export function BusinessDashboard() {
  return (
    <section className="py-24 sm:py-32 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold mb-6 text-sm uppercase tracking-widest"
            >
              <Activity className="w-4 h-4 text-primary-500" />
              Business Dashboard
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
            >
              Manage A Business, <br />
              <span className="text-primary-500">Not Just Books.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 font-medium leading-relaxed mb-8"
            >
              KDP Mafia gives you a high-level view of your entire publishing empire. Track your Publishing Velocity™, monitor your portfolio growth, and manage your Launch Queue all from one place.
            </motion.p>

            <div className="flex flex-col gap-4">
              {[
                { title: "Publishing Velocity™", desc: "Track how fast you are moving from idea to export." },
                { title: "Portfolio Growth", desc: "Visualize your total active book assets." },
                { title: "Launch Queue", desc: "Manage metadata for multiple upcoming launches." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-3 h-3 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Fake Business UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl relative"
          >
            {/* Top Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#111] border border-white/5 rounded-xl p-4">
                <div className="text-gray-500 text-xs font-bold uppercase mb-2 flex items-center gap-2">
                  <BookCopy className="w-3 h-3" /> Total Portfolio
                </div>
                <div className="text-3xl font-black text-white">124</div>
                <div className="text-green-500 text-xs font-bold mt-1">+12 this month</div>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-xl p-4">
                <div className="text-gray-500 text-xs font-bold uppercase mb-2 flex items-center gap-2">
                  <Zap className="w-3 h-3" /> Velocity Score
                </div>
                <div className="text-3xl font-black text-primary-500">9.2</div>
                <div className="text-gray-400 text-xs mt-1">Books / Week</div>
              </div>
            </div>

            {/* Launch Queue */}
            <div className="bg-[#111] border border-white/5 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-white font-bold text-sm">Active Launch Queue</h4>
                <span className="text-xs text-gray-500">3 Pending</span>
              </div>
              
              <div className="flex flex-col gap-3">
                {[
                  { name: "Anxiety Relief Coloring", status: "KDP Processing" },
                  { name: "Cryptogram Vol 4", status: "Ready To Export" },
                  { name: "Shadow Work Journal", status: "Generating Cover" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-300 text-sm">{item.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${i === 0 ? 'bg-yellow-500/10 text-yellow-500' : i === 1 ? 'bg-green-500/10 text-green-500' : 'bg-primary-500/10 text-primary-500'}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fake Chart */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="text-xs font-bold text-gray-500 uppercase mb-4">Projected Royalty Growth</div>
              <div className="h-24 w-full flex items-end gap-2">
                {[20, 30, 45, 40, 60, 75, 90, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-green-500/10 to-green-500/30 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
