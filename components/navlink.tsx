"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  name: string;
  path: string;
}

export default function NavLink({ name, path }: Props) {
  const pathName = usePathname();
  return (
    <li>
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
    </li>
  );
}
