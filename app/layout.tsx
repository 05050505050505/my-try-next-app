// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description: "遊びで作った Next.js 実験場",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className="
          min-h-screen 
          bg-gradient-to-b 
          from-black via-zinc-950 to-zinc-900
          text-zinc-50 
          antialiased
        "
      >
        {/* 背景にうっすらノイズを追加（読みやすくするため） */}
        <div className="pointer-events-none fixed inset-0 bg-[url('/noise.png')] opacity-[0.08]" />

        <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6">
          {/* ===== Header ===== */}
          <header
            className="
              mb-6 flex items-center justify-between 
              border-b border-white/10 
              pb-4
              backdrop-blur-sm
              sm:bg-white/5 sm:rounded-xl sm:px-4 sm:py-3
            "
          >
            <div>
              <h1 className="text-lg font-semibold tracking-wide">Playground</h1>
              <p className="text-xs text-zinc-400">
                Next.js でいろいろ遊んでいるスペース
              </p>
            </div>

            <span
              className="
                rounded-full
                border border-emerald-400/50
                bg-emerald-400/10
                px-3 py-1 
                text-xs text-emerald-200
                shadow-[0_0_8px_rgba(16,185,129,0.35)]
              "
            >
              hobby / sandbox
            </span>
          </header>

          {/* ===== Main ===== */}
          <main className="flex-1 py-2">{children}</main>

          {/* ===== Footer ===== */}
          <footer className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Playground
          </footer>
        </div>
      </body>
    </html>
  );
}