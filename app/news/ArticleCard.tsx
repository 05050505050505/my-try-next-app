// app/news/ArticleCard.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type Article = {
  id: number;
  title: string;
  body: string;
};

export default function ArticleCard({ article }: { article: Article }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl border border-white/10 
        bg-white/5 p-6 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
      "
    >
      {/* 上の角に光 */}
      <div className="pointer-events-none absolute -top-16 right-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />

      {/* タイトル（詳細ページへのリンク） */}
      <Link href={`/news/${article.id}`}>
        <h2 className="mb-2 text-xl font-semibold text-zinc-50 group-hover:text-white line-clamp-2">
          {article.title}
        </h2>
      </Link>

      {/* 本文（抜粋） */}
      <p className="mb-4 line-clamp-3 text-sm text-zinc-300">
        {article.body}
      </p>

      {/* 下エリア */}
      <div className="flex items-center justify-between">
        {/* Likeボタン */}
        <button
          onClick={() => setLiked(!liked)}
          className={`
            rounded-full px-4 py-1 text-sm font-medium transition-all duration-300
            ${
              liked
                ? "bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }
          `}
        >
          {liked ? "♥ Liked" : "♡ Like"}
        </button>

        {/* 詳細リンク */}
        <Link
          href={`/news/${article.id}`}
          className="text-xs text-sky-300 underline-offset-2 transition-colors hover:text-sky-200"
        >
          続きを読む →
        </Link>
      </div>
    </div>
  );
}