"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 space-y-4">
      <p className="text-lg">カウント: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        インクリメント
      </button>
    </div>
  );
}