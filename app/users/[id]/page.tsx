import { title } from "process";
import React from "react";

async function getUser(id: string) {
  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}
interface User {
  firstName: string;
  lastName: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user: User = await getUser((await params).id);

  if (!user) return { title: "User Not Found" };
  return {
    title: user.firstName,
    description: "User Details Page",
  };
}

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);
  if (!user) return <p>User Not Founded</p>;
  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
    </div>
  );
}
//users/2
