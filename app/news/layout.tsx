// app/news/layout.tsx
import type { ReactNode } from "react";

export default function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-slate-950 to-zinc-900 text-zinc-50">
      {/* ヘッダー */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-sm font-bold shadow-lg shadow-sky-500/30">
              N
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                Nightly News
              </p>
              <h1 className="text-sm font-semibold text-zinc-100">
                ニュースセクション
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="rounded-full border border-white/10 px-3 py-1 bg-white/5">
              Beta
            </span>
            <span className="hidden md:inline">
              今日はどんなニュース読む？
            </span>
          </div>
        </div>
      </header>

      {/* 本文エリア */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Top Stories
              </p>
              <h2 className="text-xl font-semibold text-zinc-50">
                今夜の注目記事
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
              <span>リアルタイム更新</span>
            </div>
          </div>

          <div className="space-y-4">{children}</div>
        </div>
      </main>

      {/* フッター */}
      <footer className="mt-8 border-t border-white/10 pb-6 pt-4 text-center text-xs text-zinc-500">
        <span className="text-zinc-400">Built with Next.js & Tailwind ·</span>{" "}
        <span className="text-zinc-300"> 夜更かしニュース by ライア & 僕</span>
      </footer>
    </div>
  );
}