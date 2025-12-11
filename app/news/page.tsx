// app/news/page.tsx
import ArticleCard from "./ArticleCard";

type Article = {
  id: number;
  title: string;
  body: string;
};

export default async function NewsPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
        ニュースを取得できませんでした。少し時間をおいて再読み込みしてください。
      </div>
    );
  }

  const articles: Article[] = await res.json();

  return (
    <div className="space-y-8">
      {/* ヒーローセクション */}
      <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            Today&apos;s Briefing
          </p>
          <h1 className="text-3xl font-semibold text-zinc-50 md:text-4xl">
            ニュース記事一覧
          </h1>
          <p className="max-w-xl text-sm text-zinc-300">
            いま気になるトピックだけをさっとチェックできる、コンパクトなニュースフィード。
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-sky-200">
            トレンド
          </span>
          <span className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-emerald-200">
            テック
          </span>
          <span className="rounded-full border border-fuchsia-500/60 bg-fuchsia-500/10 px-3 py-1 text-fuchsia-200">
            コミュニティ
          </span>
        </div>
      </section>

      {/* 記事リスト */}
      <section className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>
    </div>
  );
}