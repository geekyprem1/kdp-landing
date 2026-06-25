"use client";

import { motion } from "framer-motion";

export function StoryIntroduction() {
  return (
    <section className="py-24 bg-background relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 leading-tight">
            Dear Frustrated Publisher,
          </h2>
          
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            If you're reading this, you already know the massive potential of Amazon KDP.
          </p>
          
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            You've seen the screenshots. You've heard the success stories of ordinary people making <strong>$5,000, $10,000, even $50,000 per month</strong> publishing simple low and medium content books.
          </p>
          
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            But if you're like most people, your reality looks a little different...
          </p>
          
          <div className="my-12 p-8 border border-red-500/20 bg-red-500/5 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-500" />
            <p className="text-red-400 font-bold text-2xl italic m-0">
              "Why isn't this working for me? Why am I spending hours every day on this, paying for 5 different software subscriptions, and still hearing crickets when I check my KDP dashboard?"
            </p>
          </div>
          
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            The truth is, it's not your fault. The game has changed.
          </p>
          
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            A few years ago, you could slap together a blank lined journal, throw a generic cover on it, and make sales. 
            <span className="text-white font-bold block mt-4">Today? That approach is dead.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
