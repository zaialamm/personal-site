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
        className= {`antialiased flex flex-col min-h-screen md:w-5xl mx-auto` }  
      >
      <Header />
      <main className="flex-grow container mx-auto">
       {children}
       </main>
      <Footer />
      </body>
    </html>
  );
}
