import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

export const metadata: Metadata = {
  title: "Zai",
  description: "",
};

export default function Layout({children}: {children: React.ReactNode }) {
  return (
    <html lang="en">

      <body
        className= {`antialiased flex flex-col min-h-screen` }  
      >
      <Header />
      <main className="max-w-6xl flex-grow container mx-auto">
       {children}
       </main>
      <Footer />
      </body>
    </html>
  );
}
