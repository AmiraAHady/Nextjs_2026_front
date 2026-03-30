import Link from "next/link";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App",
  description: "Simple Next Js App",
};
const oswald = Oswald({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(oswald);
  
  return (
    <html lang="en">
      <body className={oswald.className + " min-h-full flex flex-col"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
