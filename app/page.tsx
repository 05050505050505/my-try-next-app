// app/page.tsx
import Link from "next/link";

type PlaygroundLink = {
  href: string;
  title: string;
  description: string;
  tag: string;
};

const links: PlaygroundLink[] = [
  {
    href: "/news",
    title: "Nightly News",
    description: "API から記事を取ってきて表示するニュース風ページ。",
    tag: "Next.js / API / UI",
  },
  {
    href: "/counter",
    title: "Counter Lab",
    description: "useState だけで作ったシンプルなカウンター。",
    tag: "React hooks",
  },
  {
    href: "/client-test",
    title: "Random Dog Viewer",
    description: "Dog CEO API からランダムな犬画像を表示する。",
    tag: "fetch / client component",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* ヒーロー */}
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-300 sm:text-zinc-400">
          Playground
        </p>
        <h2 className="text-3xl font-semibold text-zinc-50 md:text-4xl">
          これは試しサイト集です。
        </h2>
        <p className="max-w-xl text-sm text-zinc-200 sm:text-zinc-300">
          Next.js とか React の機能を試しながら、遊びで作っているページたち。
          下のカードから好きなサイトに飛べるようにしてある。
        </p>
      </section>

      {/* リンクカード */}
      <section className="grid gap-4 md:grid-cols-3">
        {links.map((item) => (
          <Link key={item.href} href={item.href}>
            <div
              className="
                group flex h-full cursor-pointer flex-col justify-between
                rounded-2xl border border-white/10 
                bg-zinc-900/90 sm:bg-white/5
                p-5
                shadow-[0_6px_18px_rgba(0,0,0,0.5)]
                sm:shadow-[0_8px_24px_rgba(0,0,0,0.4)]
                sm:backdrop-blur-md
                transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.55)]
              "
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-50 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-200 sm:text-zinc-300">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="rounded-full border border-sky-400/60 bg-sky-400/10 px-3 py-1 text-sky-200">
                  {item.tag}
                </span>
                <span className="text-zinc-300 group-hover:text-zinc-200">
                  Enter →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}