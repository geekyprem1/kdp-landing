import { ShieldCheck, Monitor, Apple, Smartphone } from "lucide-react";

export function SecurePaymentLogos() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-6">
      {/* Top Row: Payment Methods & Guarantee */}
      <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            {/* VISA */}
            <img 
              src="/images/Payment%20Icon/visa.png" 
              alt="Visa" 
              className="h-10 object-contain drop-shadow-md"
            />
            {/* AMEX */}
            <img 
              src="/images/Payment%20Icon/americanexpress.png" 
              alt="American Express" 
              className="h-10 object-contain drop-shadow-md"
            />
            {/* DISCOVER */}
            <img 
              src="/images/Payment%20Icon/discover.png" 
              alt="Discover" 
              className="h-10 object-contain drop-shadow-md"
            />
            {/* MASTERCARD */}
            <img 
              src="/images/Payment%20Icon/mastercard.png" 
              alt="Mastercard" 
              className="h-10 object-contain drop-shadow-md"
            />
          </div>

        <div className="h-6 w-px bg-gray-700 hidden sm:block"></div>

        <div className="flex items-center gap-2 text-white">
          <ShieldCheck className="w-8 h-8 text-yellow-500" />
          <div className="flex flex-col text-left leading-tight">
            <span className="font-bold text-sm">30 Day</span>
            <span className="text-xs text-gray-400">Money Back Guarantee</span>
          </div>
        </div>
      </div>

      {/* Bottom Row: OS & Platform */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
        <div className="flex items-center gap-4">
          {/* Android */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-500 hover:fill-green-400 transition-colors" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592c.1158-.2018.0461-.4584-.1553-.5746-.2014-.1154-.4584-.0461-.5738.1553l-2.0223 3.5028C15.5746 8.2869 13.854 7.8596 12 7.8596c-1.854 0-3.5746.4273-5.1274 1.0858L4.8503 5.4427c-.1154-.2014-.372-.271-.5738-.1553-.2014.1162-.271.3728-.1553.5746l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396z"/>
          </svg>
          {/* Apple */}
          <Apple className="w-6 h-6 text-white hover:text-gray-300 transition-colors fill-current" />
          {/* Windows */}
          <svg viewBox="0 0 87.6 87.6" className="w-5 h-5 fill-[#00adef] hover:fill-[#33c5ff] transition-colors" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.428L35.438 7.5v34.428H0V12.428zM39.697 6.945L87.59 0v41.928H39.697V6.945zM0 45.428h35.438V79.5L0 74.856V45.428zM39.697 45.428H87.59v47.59l-47.893-6.857V45.428z"/>
          </svg>
        </div>
        
        <div className="px-4 py-1.5 border border-gray-600 rounded-lg text-xs font-medium uppercase tracking-wider text-gray-300">
          Web Based Software
        </div>
      </div>
    </div>
  );
}
