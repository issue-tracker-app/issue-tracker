"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  
  return (
    <nav className="flex space-x-6 border-b mb-2 px-5 h-14 items-center justify-between">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-4">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                "text-white bg-blue-600 hover:bg-none hover:text-zinc-800":
                  link.href === currentPath,
                "text-zinc-800": link.href !== currentPath,
                "px-4 py-2 rounded-md hover:bg-blue-100 transition-colors":
                  true,
              })}
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
