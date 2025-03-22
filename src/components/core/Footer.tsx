import {FaGithub, FaLinkedin} from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="pt-5 pb-8 mt-5 mb-2 overflow-hidden text-md text-center text-gray-400">
        
        <div
        id="footer-divider"
        className="w-2/3 h-px mx-auto mb-5 transform bg-gray-900 shadow-lg md:w-2/3"
        >

        </div>

        <div className="">
            &copy; {new Date().getFullYear()}{" "}
          <Link
            href="/"
            className="hover:text-black dark:hover:text-white hover:shadow-indigo"
            title="Zai"
          >
            zaialamm
          </Link>
        </div>

        <div className='w-48 flex text-xl justify-center mx-auto space-x-3 py-2'>
        <Link href="https://github.com/zaialamm" target="_blank"> <FaGithub className='hover:text-white'/> </Link>  
        <Link href="https://www.linkedin.com/in/zai-alam-01b638102/" target="_blank"> <FaLinkedin className='hover:text-white'/> </Link>
        <Link href="https://x.com/zaialamm" target="_blank"> <FaXTwitter className='hover:text-white'/> </Link>
        </div>

      </footer>

    )
}