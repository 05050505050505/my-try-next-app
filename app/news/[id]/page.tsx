// app/news/[id]/page.tsx
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

type Article = {
  id: number;
  title: string;
  body: string;
};

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-zinc-300">記事が見つからないよ。</p>
        <Link
          href="/news"
          className="text-sm text-sky-300 underline-offset-2 hover:text-sky-200"
        >
          ← ニュース一覧に戻る
        </Link>
      </div>
    );
  }

  const article: Article = await res.json();

  return (
    <article className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
          Story #{article.id}
        </p>
        <h1 className="text-2xl font-semibold text-zinc-50 md:text-3xl">
          {article.title}
        </h1>
      </div>

      <p className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-200">
        {article.body}
      </p>

      <div className="pt-4">
        <Link
          href="/news"
          className="text-sm text-sky-300 underline-offset-2 hover:text-sky-200"
        >
          ← ニュース一覧に戻る
        </Link>
      </div>
    </article>
  );
}