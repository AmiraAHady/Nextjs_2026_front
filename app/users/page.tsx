import Counter from "@/components/counter";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Users",
  description: "Simple Next Js App",
};
interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export default async function Users() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  const UsersData: User[] = data.users;
  return (
    <div>
      {/* ssr */}
      <Counter/>
      <h1>Users</h1>
      {UsersData.map((user) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
