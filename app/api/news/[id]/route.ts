// app/api/news/[id]/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// まず記事データをここに置く（外では fetch しない）
const articles: Record<string, { title: string; content: string }> = {
  "1": { title: "News Article 1", content: "Content of news article 1." },
  "2": { title: "News Article 2", content: "Content of news article 2." },
  "3": { title: "News Article 3", content: "Content of news article 3." },
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // params は Promise → 必ず await する
  const { id } = await params;

  const article = articles[id];

  if (!article) {
    return NextResponse.json(
      {
        message: "記事が見つからないよ",
        id,
        keys: Object.keys(articles),
      },
      { status: 404 }
    );
  }

  return NextResponse.json(article);
}
