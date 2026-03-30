"use client" //CSR
import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <button
      onClick={() => setCounter(counter + 1)}
      className="p-5 text-2xl bg-teal-300"
    >
        Counter : {counter}
    </button>
  );
}
