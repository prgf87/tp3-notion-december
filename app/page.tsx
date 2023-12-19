import { getCategories, getDatabase } from '@/utils/db';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();
const databaseId = process.env.NOTION_DB_ID as string;

// import { Client } from '@notionhq/client';

export default async function Home() {
  const pages = await getDatabase();
  const categories = await getCategories();
  console.log(Object.keys(pages));
  return (
    <main>
      <h1 className="text-7xl">Hello world!!</h1>
      <div className="grid grid-cols-2 mx-auto">
        <div className="grid mx-auto">
          {pages.results.map((page) => {
            return (
              <p key={page.id}>
                <Link href={`/pages/${page.id}`}>{page.id}</Link>
              </p>
            );
          })}
        </div>
        <div className="grid mx-auto">
          {categories.results.map((result) => {
            return (
              <p key={result.id}>
                <Link href={`/pages/${result.id}`}>{result.id}</Link>
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
}
