import Navbar from "./Navbar";
import Link from "next/link";


export default function Header() {   
    return (
      <>
      <div className="flex justify-between items-center pl-5 pr-2 py-8">
        
        <div className="text-5xl font-semibold flex justify-center">
          <Link href="/" className="">
            Z
          </Link>
        </div>

        <Navbar/>

      </div>

      <div
        id="header-divider"
        className="w-full h-px my-4 transform bg-gray-900 rotate-[0.5deg]"
      >

      </div>
      
      </>
      
        

    )

}