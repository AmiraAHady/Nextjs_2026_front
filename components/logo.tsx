import React from "react";
import logo from "@/public/logo.webp";
import Image from "next/image";
export default function Logo() {
  return (
    <Image
      src={logo}
      alt="logo"
      width={40}
      height={40}
      className="object-contain"
      
    ></Image>
  );
}
