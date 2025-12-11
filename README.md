# Next.js Study Project  
*A practice environment for learning modern web application development with Next.js*

---

# English Version 🇬🇧

## 📌 Project Overview
This repository contains a study project built with **Next.js (App Router)**.  
The goal is to gain practical understanding of:

- Server Components & Client Components  
- SSR / dynamic data fetching  
- API Routes  
- Routing and dynamic segments  
- Component design using TypeScript  
- Deployment workflows with Vercel  

The project is used as a personal sandbox for experimenting with modern full-stack concepts.

---

## 🏗 Tech Stack

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **Server Components / Client Components**
- **Vercel Deployment**
- **next/font (Geist)**

---

## ▶ Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

Editing any file under `app/` hot-refreshes automatically.

---

## 📂 Main Features

### 1. `/news` – News List Page  
Displays articles fetched from JSONPlaceholder (SSR).

### 2. `/news/[id]` – News Detail Page  
Demonstrates dynamic routing and per-page data fetching.

### 3. `/counter` – Client Component Example  
Simple usage of `useState` for interactivity.

### 4. `/api/news/[id]` – API Route Example  
Returns mock data for experimentation.

---

## 📁 Project Structure

```
app/
 ├ page.tsx               # Top page (Playground Hub)
 ├ layout.tsx             # Global layout
 ├ news/
 │   ├ page.tsx           # News list
 │   ├ layout.tsx         # News layout
 │   └ [id]/
 │       └ page.tsx       # Detail page
 ├ counter/
 │   └ page.tsx           # Client component demo
 └ api/
     └ news/
         └ [id]/route.ts  # API route example
```

---

## 🌐 Deployment

Deployed via **Vercel** with automatic builds triggered by pushes to `main`.

Production URL:
```
https://my-try-next-app.vercel.app
```

---

## 📄 Future Improvements

- Add more interactive client components  
- Introduce persistent storage via a database  
- Improve UI/UX and layout structures  
- Expand API routes into a more complete backend layer  

---

# 日本語版 🇯🇵

## 📌 プロジェクト概要
このリポジトリは、**Next.js（App Router）** を用いた学習用プロジェクトです。  
以下の技術要素を実践的に理解することを目的としています。

- Server Component / Client Component の仕組み  
- SSR と動的データフェッチ  
- API Routes の実装  
- 動的ルーティング  
- TypeScript を用いたコンポーネント設計  
- Vercel を用いたデプロイフロー  

Next.js の機能を試すための「個人実験環境」として利用しています。

---

## 🏗 使用技術

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **Server Components / Client Components**
- **Vercel**
- **next/font（Geist）**

---

## ▶ 開発サーバーの起動方法

依存関係のインストール：

```bash
npm install
```

開発サーバーの起動：

```bash
npm run dev
```

ブラウザで以下を開く：

```
http://localhost:3000
```

`app/` 配下のファイルを編集すると即時反映されます。

---

## 📂 主な機能

### 1. `/news` – ニュース一覧ページ  
JSONPlaceholder から記事を取得し SSR で表示。

### 2. `/news/[id]` – 記事詳細ページ  
動的ルーティングとページごとのデータ取得を実演。

### 3. `/counter` – Client Component の例  
`useState` を用いた簡易的なインタラクション。

### 4. `/api/news/[id]` – API Route のサンプル  
モックデータを返す実験用 API。

---

## 📁 ディレクトリ構成

```
app/
 ├ page.tsx               # トップページ（実験サイトのハブ）
 ├ layout.tsx             # 全体レイアウト
 ├ news/
 │   ├ page.tsx           # ニュース一覧
 │   ├ layout.tsx         # ニュースレイアウト
 │   └ [id]/
 │       └ page.tsx       # 記事詳細
 ├ counter/
 │   └ page.tsx           # Client Component 実験
 └ api/
     └ news/
         └ [id]/route.ts  # API Route の例
```

---

## 🌐 デプロイ

Vercel により自動デプロイされています（`main` ブランチを監視）。

本番 URL：
```
https://my-try-next-app.vercel.app
```

---

## 📄 今後の拡張予定

- より高度なクライアントインタラクションの追加  
- データベース導入による永続化  
- UI/UX の改善・コンポーネント整理  
- API Routes を用いた簡易バックエンド化  

---

本プロジェクトは、Next.js の習得および開発経験の蓄積を目的とした個人学習用リポジトリです。