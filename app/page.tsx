import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Sidebar } from "@/app/components/Sidebar";
import Article from "@/slices/Article";

export default async function Page() {
  const client = createClient();
  const [page, articlesPage] = await Promise.all([
    client.getSingle("home_page").catch(() => notFound()),
    client.getSingle("articles_page").catch(() => null),
  ]);

  const articleSlices = articlesPage?.data.slices ?? [];
  const featuredArticle = articleSlices.length > 0
    ? articleSlices[Math.floor(Math.random() * articleSlices.length)]
    : null;

  return (
    <main className="min-h-screen">
      <Sidebar pageTitle="Home" />
      <div className="p-10">
        <SliceZone slices={page.data.slices} components={components} />
        {featuredArticle && (
          <div className="mt-10">
            <h2 className="flex justify-center text-xl font-bold mb-4">Featured Article</h2>
            <Article slice={featuredArticle as any} index={0} slices={[]} context={{}} />
          </div>
        )}
      </div>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home_page").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}