import Post from "@/types/post";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3002/posts", {
    cache: "no-store", //force regenerate
  });
  return await res.json();
}

export default async function SSR() {
  const allData = await getData();
  return (
    <>
      <h1>SSR</h1>
      {allData.map((post: Post) => (
        <div key={post.id} className="m-4">
          <h3>{post.title}</h3>
          <p>{post.userId}</p>
        </div>
      ))}
    </>
  );
}
