import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

export const metadata: Metadata = {
  title: "Zai Alam",
  description: "",
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
