import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

*/

export const metadata: Metadata = {
  title: "Zai Alam",
  description: "Hello",
};

export default function Layout({children}: {children: React.ReactNode }) {
  return (
    <html lang="en">

      <body
        className= {`antialiased sm:w-2xl md:w-5xl xl:w-6xl mx-auto` }  
      >
      <Header />

       {children}
        
      <Footer />
      </body>
    </html>
  );
}
