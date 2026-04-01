import { auth, signOut } from "@/app/_lib/auth";
import NavLink from "./navlink";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Account", path: "/account" },
  { name: "Users", path: "/users" },
  { name: "Products", path: "/products" },
];
// lab-1 ==>convert Navigation to client component

export default async function Navigation() {
  const session = await auth();

  const navs = [...navItems];

  // if (session?.user) navs.push({ name: "logout", path: "/logout" });
  if (!session?.user) navs.push({ name: "login", path: "/login" });

  return (
    <nav className="space-x-6">
      <ul className="flex gap-4 items-center">
        {navs.map(({ name, path }) => (
          <NavLink key={name} name={name} path={path}></NavLink>
        ))}
        {session?.user && (
          <>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button>Logout</button>
            </form>
            <li>
              <Image
                src={session?.user?.image as string}
                alt="profile"
                width={50}
                height={50}
                className="w-10 h-10 rounded-full"
              />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
