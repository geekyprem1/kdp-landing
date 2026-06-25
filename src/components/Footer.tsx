import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex items-center justify-center mb-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <img 
            src="/logo.png" 
            alt="KDP Mafia Logo" 
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary-500 transition-colors">Earnings Disclaimer</a>
          <a href="#" className="hover:text-primary-500 transition-colors">Contact Support</a>
        </div>

        <div className="text-center max-w-4xl mx-auto text-xs text-gray-600 space-y-4 leading-relaxed">
          <p>
            EARNINGS DISCLAIMER: The sales figures and results stated on this page are our personal results and the results of our beta testers. Please understand our results are not typical. We are not implying you will duplicate them (or do anything for that matter). The average person who buys "how-to" information gets little to no results. We are using these references for example purposes only. Your results will vary and depend on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action.
          </p>
          <p>
            NOT AFFILIATED WITH AMAZON: KDP Mafia is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Amazon.com, Inc., or any of its subsidiaries or its affiliates.
          </p>
          <p>
            Copyright © {new Date().getFullYear()} KDP Mafia. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
