"use client";

import { motion } from "framer-motion";
import { HelpCircle, CheckCircle2 } from "lucide-react";

export function ObjectionHandling() {
  const objections = [
    {
      question: "I've never published before. Will this work for me?",
      answer: "Yes. KDP Mafia was built specifically so beginners don't have to learn the hard way. The framework guides you from zero to published."
    },
    {
      question: "I can't design and I'm not creative.",
      answer: "You don't need to be. Our Cover Studio and Interior Generators handle all the heavy lifting. If you can click a button, you can create a beautiful book."
    },
    {
      question: "I already use ChatGPT. Why do I need this?",
      answer: "ChatGPT generates raw text. KDP Mafia generates Amazon-ready, formatted books. We use specialized AI models trained specifically on best-selling KDP formats."
    },
    {
      question: "I don't have much time to dedicate to this.",
      answer: "That's exactly why you need infrastructure. What used to take 3 weeks now takes 30 minutes. You can build your empire on your lunch break."
    },
    {
      question: "I don't know how to find profitable niches.",
      answer: "Our Opportunity Engine removes the guesswork. It analyzes Amazon's live data to hand you low-competition, high-demand niches before your competitors find them."
    },
    {
      question: "I've failed at KDP before. Why is this different?",
      answer: "Because you likely failed using the old 'throw spaghetti at the wall' method. KDP Mafia enforces a proven, data-backed 7-step blueprint."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold mb-6 text-sm uppercase tracking-widest"
          >
            <HelpCircle className="w-4 h-4 text-primary-500" />
            Addressing The Elephant In The Room
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            "But What If..."
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-medium leading-relaxed"
          >
            It's completely normal to be skeptical. Let's tackle your biggest doubts head-on.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {objections.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-white/10 p-6 sm:p-8 rounded-2xl group hover:border-primary-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-4 pr-8">{obj.question}</h3>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-gray-400 leading-relaxed font-medium">{obj.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
