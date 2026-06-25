"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is KDP Mafia completely cloud-based?",
    a: "Yes! There is nothing to download or install. You can access KDP Mafia from your Mac, PC, tablet, or even your phone from anywhere in the world."
  },
  {
    q: "Do I need any design skills?",
    a: "Absolutely not. Our AI handles 100% of the design, formatting, and typesetting. If you can click a mouse, you can publish a professional-grade book."
  },
  {
    q: "Are the books generated compliant with Amazon KDP terms?",
    a: "Yes. We built this platform specifically for Amazon KDP. All interiors, covers, and bleed margins are mathematically calculated to pass Amazon's automated review system the first time."
  },
  {
    q: "What if I already use Book Bolt or Publisher Rocket?",
    a: "Cancel them. KDP Mafia replaces the need for any other keyword tool, interior generator, or design software. Save your money."
  },
  {
    q: "Are there any hidden upsells?",
    a: "No. The Lifetime Founders Edition gives you full access to the core KDP Mafia platform, all generators, and all 6 bonuses for a single one-time payment."
  },
  {
    q: "What is the 'Opportunity Score'?",
    a: "It's our proprietary metric (0-100) that analyzes search volume vs. competition. If the score is high, it means there are buyers actively searching for a book, but not enough sellers providing it. It's an instant green-light indicator."
  },
  {
    q: "Can I sell the books I generate to clients?",
    a: "Yes! During this launch period, we are including the Commercial/Agency license for free. You can sell book generation as a service on Fiverr or Upwork."
  },
  {
    q: "How fast can I actually generate a book?",
    a: "A standard 120-page lined journal or puzzle book can be generated and exported as a KDP-ready PDF in under 60 seconds."
  },
  {
    q: "Does the AI Writing Assistant write the actual book?",
    a: "Yes, our Ebook and Storybook modules can generate tens of thousands of words of cohesive, engaging text based on your prompts, while the Listing module writes your sales copy."
  },
  {
    q: "What kind of puzzles can it generate?",
    a: "Currently, the suite includes Word Search, Sudoku, and Mazes. We are constantly adding new puzzle types, and as a Lifetime member, you get all future updates for free."
  },
  {
    q: "What happens after the 30 days?",
    a: "You keep access to the software forever. The 30-day period is just our money-back guarantee window to ensure you are 100% satisfied."
  },
  {
    q: "How do I get my bonuses?",
    a: "As soon as you complete your secure checkout, you will receive an email with your login credentials. Your bonuses will be waiting for you inside the dashboard."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 font-medium">Everything you need to know before joining.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-surface border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="text-white font-bold text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
