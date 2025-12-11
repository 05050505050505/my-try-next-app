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
      <body className="min-h-screen bg-gradient-to-b from-zinc-950 via-slate-950 to-zinc-900 text-zinc-50 antialiased">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6">
          {/* ここは全ページ共通のベース。重いヘッダーは置かない */}
          <header className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h1 className="text-lg font-semibold tracking-wide text-zinc-50">
                Playground
              </h1>
              <p className="text-xs text-zinc-400">
                Next.js でいろいろ遊んでる実験スペース
              </p>
            </div>
            <span className="rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
              hobby / sandbox
            </span>
          </header>

          <main className="flex-1 py-2">{children}</main>

          <footer className="mt-6 border-t border-white/10 pt-3 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Raia&apos;s Playground
          </footer>
        </div>
      </body>
    </html>
  );
}