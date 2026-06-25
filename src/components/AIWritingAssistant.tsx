"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, MessageSquare } from "lucide-react";

export function AIWritingAssistant() {
  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Module 10 & 11: The Wordsmiths</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            AI Writing Assistant & Prompt Library
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto">
            Staring at a blank page is a thing of the past. Let our finely-tuned AI write your descriptions, introductions, copyright pages, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Bot className="w-32 h-32" />
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary-500/20 text-primary-500 flex items-center justify-center mb-6 relative z-10">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Sales Copywriter</h3>
            <p className="text-gray-400 font-medium leading-relaxed relative z-10">
              The Amazon description is your #1 sales tool. Our AI uses the AIDA (Attention, Interest, Desire, Action) framework to write high-converting descriptions that turn browsers into buyers instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MessageSquare className="w-32 h-32" />
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center mb-6 relative z-10">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Built-in Prompt Generator</h3>
            <p className="text-gray-400 font-medium leading-relaxed relative z-10">
              Don't know how to talk to AI? No problem. We have over 500+ pre-engineered prompts built directly into the software. Just click the prompt you need, and the AI executes perfectly every time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
