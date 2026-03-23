import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { Sidebar } from "@/app/components/Sidebar";

export default async function ArticlesPage() {
  const client = createClient();
  const page = await client.getSingle("articles_page");

  return (
    <main className="min-h-screen">
      <Sidebar pageTitle="Articles" />
      <div className="flex flex-col gap-8 p-10 mt-6">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </main>
  );
}