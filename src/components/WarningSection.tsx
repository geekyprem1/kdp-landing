"use client";

import { motion } from "framer-motion";
import { AlertOctagon } from "lucide-react";

export function WarningSection() {
  return (
    <section className="py-12 bg-red-600 relative z-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div className="w-16 h-16 shrink-0 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
            <AlertOctagon className="w-8 h-8 text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
              Warning: Do Not Close This Page
            </h3>
            <p className="text-white/90 font-medium text-lg">
              If you leave and come back later, the remaining seats for the $14.99 Lifetime Offer may be filled, and you'll be forced to pay the standard $99/month recurring fee.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
