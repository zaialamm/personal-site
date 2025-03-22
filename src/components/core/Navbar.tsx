import Link from "next/link";

export default function Navbar() {
    
    return (
        <nav
        id = "navigation"
        className ="flex justify-center w-full"
        >
            <ul className="flex flex-row px-6 py-2 space-x-3 tracking-wide">
                <LinkItem href="/about" title="About" />
                <LinkItem href="/projects" title="Projects" />
                <LinkItem href="/blog" title="Blog" />
            </ul>

        </nav>
    )

}

type LinkItemProps = {
    href: string;
    title: string;
  };
  
  function LinkItem({ href, title }: LinkItemProps) {
    return (
      <li>
        <Link href={href} className="text-white link-muted">
          {title}
        </Link>
      </li>
    );
  }
