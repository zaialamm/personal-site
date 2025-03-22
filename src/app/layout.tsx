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
        className= {`antialiased container mx-auto` }  
      >
      <Header />

       {children}
        
      <Footer />
      </body>
    </html>
  );
}
