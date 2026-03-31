"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Account", path: "/account" },
  { name: "Users", path: "/users" },
  { name: "Products", path: "/products" },
];

export default function Navigation() {
  const pathName = usePathname();

  return (
    <nav className="space-x-6">
      {navItems.map(({ name, path }) => (
        <Link
          key={name}
          href={path}
          className={
            pathName == path
              ? "text-red-500"
              : "hover:text-gray-400 transition-colors text-black"
          }
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
