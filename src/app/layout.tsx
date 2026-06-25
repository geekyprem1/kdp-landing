import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KDP Mafia | The Complete AI Operating System for Amazon KDP",
  description: "Stop using 10 different tools. KDP Mafia is the all-in-one AI platform to research, create, and publish highly profitable low and medium content books on Amazon KDP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
