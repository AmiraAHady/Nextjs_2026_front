import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const links = [
  {
    name: "About",
    path: "/about",
    icon: <EyeIcon className="size-6 text-blue-500"></EyeIcon>,
  },
  {
    name: "Mision",
    path: "/about/mision",
    icon: (
      <InformationCircleIcon className="size-6 text-blue-500"></InformationCircleIcon>
    ),
  },
  {
    name: "Vision",
    path: "/about/vision",
    icon: <EyeIcon className="size-6 text-blue-500"></EyeIcon>,
  },
];

export default function Sidemenu() {
  return (
    <div className="w-74 bg-gray-900 text-white p-5">
      <h1>Menu</h1>
      <nav className="flex flex-col gap-3">
        {links.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center gap-3 p-2"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
