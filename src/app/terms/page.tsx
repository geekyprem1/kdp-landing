import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto px-4 py-32 w-full text-gray-300">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Terms of Service</h1>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Agreement to Terms</h2>
          <p>By accessing or using KDP Mafia ("the Service", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Intellectual Property Rights</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of KDP Mafia and its licensors. You are granted a commercial license to use the generated outputs (interiors, covers, etc.) for publishing on Amazon KDP as stipulated in your purchase agreement.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. User Accounts</h2>
          <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Refunds and Guarantees</h2>
          <p>We offer a 30-day money-back guarantee. If you are not satisfied with the Service for any reason within the first 30 days of your purchase, you may contact support for a full refund. After 30 days, all sales are final.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Limitation of Liability</h2>
          <p>In no event shall KDP Mafia, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.</p>

          <p className="mt-12 text-sm text-gray-500">If you have any questions about these Terms, please contact us via our Contact Support page.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
