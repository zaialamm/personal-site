import Navbar from "./Navbar";
import Link from "next/link";


export default function Header() {   
    return (
      <section className="w-16 md:w-32 lg:w48">
      <div className="flex justify-between items-center px-5 py-8">
        <div className="text-5xl font-semibold flext justify-center">
          <Link href="/" className="">
            Z
          </Link>
        </div>
        <div className="flex justify-end"> 
        <Navbar />
        </div>
      </div>

      <div
        id="header-divider"
        className="w-full h-px my-4 transform bg-gray-900 rotate-[0.5deg]"
      >

      </div>
      </section>
 
        

    )

}