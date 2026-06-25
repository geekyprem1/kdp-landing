import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto px-4 py-32 w-full text-gray-300">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>At KDP Mafia, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by KDP Mafia and how we use it.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Information We Collect</h2>
          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
          <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website and services</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Log Files</h2>
          <p>KDP Mafia follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Cookies and Web Beacons</h2>
          <p>Like any other website, KDP Mafia uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Contact Us</h2>
          <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
