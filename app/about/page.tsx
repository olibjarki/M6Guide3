import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { Sidebar } from "@/app/components/Sidebar";

export default async function AboutPage() {
  const client = createClient();
  const [page] = await client.getAllByType("about_page");

  return (
    <main className="min-h-screen">
      <Sidebar pageTitle="About" />
      <div className="flex flex-col justify-center p-10 mt-6">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </main>
  );
}
