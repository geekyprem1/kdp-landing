import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function EarningsPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto px-4 py-32 w-full text-gray-300">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Earnings Disclaimer</h1>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>Every effort has been made to accurately represent KDP Mafia and its potential. However, there is no guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Earning Potential</h2>
          <p>Earning potential is entirely dependent on the person using our product, ideas, and techniques. We do not position this product as a "get rich quick scheme." Any claims made of actual earnings or examples of actual results can be verified upon request. Your level of success in attaining the results claimed in our materials depends on the time you devote to the program, ideas and techniques mentioned, your finances, knowledge, and various skills.</p>
          <p>Since these factors differ according to individuals, we cannot guarantee your success or income level. Nor are we responsible for any of your actions.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Forward-Looking Statements</h2>
          <p>Materials in our product and our website may contain information that includes or is based upon forward-looking statements within the meaning of the securities litigation reform act of 1995. Forward-looking statements give our expectations or forecasts of future events. You can identify these statements by the fact that they do not relate strictly to historical or current facts. They use words such as "anticipate," "estimate," "expect," "project," "intend," "plan," "believe," and other words and terms of similar meaning in connection with a description of potential earnings or financial performance.</p>
          
          <p>Any and all forward-looking statements here or on any of our sales material are intended to express our opinion of earnings potential. Many factors will be important in determining your actual results and no guarantees are made that you will achieve results similar to ours or anybody else's, in fact no guarantees are made that you will achieve any results from our ideas and techniques in our material.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Assumption of Risk</h2>
          <p>As with any business endeavor, there is an inherent risk of loss of capital and there is no guarantee that you will earn any money. Please read all agreements, notices, and disclaimers before purchasing anything.</p>

        </div>
      </div>
      <Footer />
    </main>
  );
}
