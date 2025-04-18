import Navbar from "./Navbar";
import Link from "next/link";


export default function Header() {   
    return (
      <header className="max-w-6xl container mx-auto">
      <div className="flex justify-between items-center pl-5 pr-2 py-6">
        
        <div className="text-4xl font-semibold flex justify-center sm:text-5xl md:text-6xl">
          <Link href="/" className="">
            Z
          </Link>
        </div>

        <Navbar/>

      </div>

      <div
        id="header-divider"
        className="w-full h-px my-2 transform bg-gray-900 rotate-[0.3deg]"
      >

      </div>
      
      </header>
      
        

    )

}