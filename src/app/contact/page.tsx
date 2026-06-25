"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto px-4 py-32 w-full text-gray-300">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Contact Support</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Need help with your account or have questions about KDP Mafia? Our support team is here to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary-500/50 transition-colors">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-primary-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Email Support</h2>
            <p className="text-gray-400 mb-6">For billing, account issues, or general inquiries, shoot us an email.</p>
            <a href="mailto:support@kdpmafia.online" className="text-primary-500 font-bold hover:underline">support@kdpmafia.online</a>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary-500/50 transition-colors">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Community Support</h2>
            <p className="text-gray-400 mb-6">Ask questions, share strategies, and get help from the community.</p>
            <button className="bg-white/5 border border-white/10 text-white px-6 py-2 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Join Discord Server
            </button>
          </div>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center max-w-2xl mx-auto">
          <Clock className="w-8 h-8 text-gray-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Support Hours</h3>
          <p className="text-gray-400">
            Our team operates Monday through Friday, 9:00 AM to 5:00 PM EST.<br />
            We aim to respond to all inquiries within 24-48 hours.
          </p>
        </div>

      </div>
      <Footer />
    </main>
  );
}
