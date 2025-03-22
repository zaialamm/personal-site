import Link from "next/link";

export default function Navbar() {
    
    return (
        <nav
        id = "navigation"
        className ="flex flex-row justify-end w-full overflow-hidden"
        >
            <ul className="flex flex-row p-6 space-x-2 tracking-wide">
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
