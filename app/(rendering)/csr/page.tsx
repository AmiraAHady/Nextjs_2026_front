"use client"
import Post from "@/types/post";
import React, { useEffect, useState } from "react";

export default function CSR() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllData(data);
      });
  }, []);
  return (
    <>
      <h1>CSR</h1>
      {allData.map((post: Post) => (
        <div key={post.id} className="m-4">
          <h3>{post.title}</h3>
          <p>{post.userId}</p>
        </div>
      ))}
    </>
  );
}
