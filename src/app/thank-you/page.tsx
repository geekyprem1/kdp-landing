"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mail, ArrowRight, LifeBuoy } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="bg-[#050505] min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-2xl w-full bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 sm:p-12 relative z-10 shadow-2xl text-center">
        
        {/* Success Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20"
        >
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-400 font-medium mb-10">
            Welcome to the KDP Mafia. Your account is being provisioned right now.
          </p>

          {/* Next Steps Box */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8 text-left mb-10">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-center">Next Steps</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 border border-primary-500/30">
                  <Mail className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Check Your Email</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We've just sent your exclusive login credentials and receipt to the email you used during checkout. Please check your spam folder just in case!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <LifeBuoy className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Need Help?</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    If you don't receive an email within 10 minutes, contact our support team at <a href="mailto:support@kdpmafia.online" className="text-primary-400 hover:underline">support@kdpmafia.online</a> and we'll sort it out immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="https://app.kdpmafia.com/login" // Placeholder for actual app login URL
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 w-full px-8 py-5 bg-gradient-to-r from-primary-500 to-yellow-500 text-black font-black text-xl rounded-xl shadow-[0_0_40px_rgba(255,138,0,0.4)] hover:shadow-[0_0_60px_rgba(255,138,0,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Go To Login Page
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

        </motion.div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm font-medium">
        &copy; {new Date().getFullYear()} KDP Mafia. All Rights Reserved. <br />
        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link> &bull; <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
      </div>

    </main>
  );
}
