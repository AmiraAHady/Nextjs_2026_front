"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function Login() {
  return (
    <div>
      <button
        className="w-100 bg-black text-white p-3 rounded-lg "
        onClick={() => signIn("google", { redirectTo: "/" })}
      >
        SignIn With Google
      </button>
    </div>
  );
}
