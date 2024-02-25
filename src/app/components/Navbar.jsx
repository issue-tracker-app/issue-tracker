"use client";

import { Avatar, Button, HoverCard, Menu, NavLink, Text } from "@mantine/core";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useStateValue } from "../context/StateProvider";

const Navbar = () => {
  const [{ user }, dispatch] = useStateValue();
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
      <ul className="flex space-x-4 items-center">
        {links.map((link) => {
          return (
            <NavLink
              color="violet"
              key={link.href}
              href={link.href}
              label={link.label}
              active={link.href === currentPath}
              className="rounded-md"
              // className={classNames({
              //   "text-white bg-blue-600 hover:bg-none hover:text-zinc-800":
              //     link.href === currentPath,
              //   "text-zinc-800": link.href !== currentPath,
              //   "px-4 py-2 rounded-md hover:bg-blue-100 transition-colors": true,
              // })}
            >
              {/* {link.label} */}
            </NavLink>
          );
        })}

        <Menu
          shadow="md"
          width={200}
          trigger="click-hover"
          openDelay={100}
          closeDelay={200}
        >
          <Menu.Target>
            <div className="flex items-center gap-1 px-2 hover:bg-violet-100 rounded-md transition-colors">
              <Avatar
                variant="transparent"
                radius="xl"
                className="cursor-pointer "
                color="violet"
              >
                <FaUser />
              </Avatar>
              {user?.accessToken ? "Hello" : ""}
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            {user?.accessToken ? (
              <Menu.Label>Hello Dear</Menu.Label>
            ) : (
              <>
                <Menu.Item>
                  <Link href="/auth/login">Login</Link>
                </Menu.Item>
                <Menu.Item>Register</Menu.Item>
              </>
            )}
          </Menu.Dropdown>
        </Menu>
      </ul>
    </nav>
  );
};

export default Navbar;
