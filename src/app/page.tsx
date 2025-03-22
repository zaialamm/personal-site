import Image from 'next/image';
import {FaGithub, FaLinkedin, FaArrowRight} from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import Link from 'next/link';
import gd from "@/../public/img/logo-gd.png";
import sb from "@/../public/img/logo-sb.svg";
import sh from "@/../public/img/shopback.jpg";
import z from "@/../public/img/zaipad.png";

export default function Home() {
  return (
    <div className="min-h-[300px] my-8 container mx-auto max-lg:px-5">
      <h1 className="text-3xl text-gray-400 font-light">Hi! I'm Zai, </h1>

      <p className="text-amber-50 my-5 lg:w-2/3">
        I’m currently diving deep into <span className="text-orange-400 hover:font-semibold hover:text-green-400 border-b-2 border-green-400 hover:border-orange-400">Solana Blockchain </span> development, learning <span className="text-orange-400 hover:font-semibold hover:text-green-400 border-b-2 border-green-400 hover:border-orange-400">Rust</span> and Solana from the ground up. 
        Before this, I spent over 7 years as an SEO Content Writer, crafting articles on a wide range of topics, with a strong focus on finance.
      </p>

      <div className='text-3xl flex justify-items-start mb-8'>
      <Link href="https://github.com/zaialamm" target="_blank"> <FaGithub className='mr-5 text-gray-400 hover:text-white'/> </Link>  
      <Link href="https://www.linkedin.com/in/zai-alam-01b638102/" target="_blank"> <FaLinkedin className='text-gray-400 hover:text-blue-400 mr-5'/> </Link>
      <Link href="https://x.com/zaialamm" target="_blank"> <FaXTwitter className='text-gray-400 hover:text-white'/> </Link>
      </div>

      <h2 className="text-xl text-gray-400 font-semibold mb-5 border-b-1 border-solid border-gray-500 w-2/3">
        💼 Experiences
        </h2>
      
      <div className="flex space-between items-center w-sm md:w-2/3 mt-5 pr-8">
      <Image src={sb} alt="logo Stockbit" width="52" height="52" 
      className=" bg-white rounded-full w-10 h-10 border border-gray-800"
      >
      </Image>
        <div className="ml-2 mr-auto ">
       <h3 className="text-md font-semibold"> Stockbit </h3>
       <p className="text-[13px]  text-gray-500"> SEO Content Writer</p>
       </div>
       <p className=" text-sm  text-gray-400"> 2021 - 2025 </p>
      </div>
      
      <div className="flex space-between items-center w-sm md:w-2/3 mt-5 pr-8">
      <Image src={gd} alt="logo Good Doctor" width={256} height={25} 
      className=" bg-white rounded-full w-10 h-10 border border-gray-800"
      >
      </Image>
        <div className="ml-2 mr-auto ">
       <h3 className="text-md font-semibold"> Good Doctor </h3>
       <p className="text-[13px]  text-gray-500"> SEO Content Writer</p>
       </div>
       <p className="text-sm text-gray-400"> 2019 - 2020 </p>
      </div>

      <div className="flex space-between items-center w-sm md:w-2/3 mt-5 pr-8">
      <Image src={sh} alt="logo Shopback" width="52" height="52" 
      className=" bg-white rounded-full w-10 h-10 border-solid border-2 border-gray-500"
      >
      </Image>
        <div className="ml-2 mr-auto ">
       <h3 className="text-md font-semibold "> ShopBack </h3>
       <p className="text-[13px]  text-gray-500"> SEO Content Writer</p>
       </div>
       <p className="text-sm text-gray-400"> 2017 - 2020 </p>
      </div>

      <h2 className="mt-8 text-xl text-gray-400 font-semibold mb-5 border-b-1 border-solid border-gray-500 w-2/3">
        📊 Projects
        </h2>

      <div className="py-5 hover:border-1 hover:rounded-2xl hover:border-orange-400 w-sm sm:2/3 mt-5">
      
      <div className="flex items-center">
      <Image src={z} alt="logo Zaipad" width="52" height="52" 
      className="w-10 h-10"
      >
      </Image>

       <Link href="https://zaipad.com" target="_blank"
       ><h3 className="ml-2 text-md font-semibold hover:text-orange-400"> Zaipad </h3>
       </Link>
      </div>

      <div>
      <p className="pl-1 text-md text-gray-400"
      > A blog about personal finance tips, investment guides, stocks, crypto, etc.
      </p>

      </div>
      </div>
      <div className="mt-5 flex items-center space-x-1 sm:w-2/3">
      <Link href="/projects" className="hover:text-green-400">
      <span className="border-b-2 hover:border-orange-400 border-green-400 hover:font-semibold text-md font-light "
      > View more projects </span>
      </Link>
      <FaArrowRight className="font-light" />
      </div>

      <h2 className="mt-8 text-xl font-semibold mb-5 border-b-1 border-solid border-gray-500 w-2/3">
        💻 <span className="text-gray-400">Tech Stack</span>
        </h2>
        <p> <span className="font-bold w-sm md:w-2/3">Frontend: </span> React.js, Next.js, Javascript/Typescript, Tailwind CSS</p>

        <p> <span className="font-bold">Backend:</span> Node.js, Git </p>

        <p className="mt-3"><span className="font-bold border-b-2 ">Solana development:</span> Anchor, Rust, Typescript, Web3.js, Pyth Network, Node.js </p>

  </div>

  );
}
