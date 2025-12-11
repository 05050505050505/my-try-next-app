"use client";

import { useState } from "react";

export default function DogFetcher() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDogImage = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <button
        onClick={fetchDogImage}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        ランダムな犬の画像を取得
      </button>

      {loading && <p>読み込み中...</p>}

      {imageUrl && !loading && (
        <div>
          <img
            src={imageUrl}
            alt="Random Dog"
            className="max-w-full h-auto rounded"
          />
        </div>
      )}
    </div>
  );
}