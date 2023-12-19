import { getDatabase } from '@/utils/db';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();
const databaseId = process.env.NOTION_DB_ID as string;

// import { Client } from '@notionhq/client';

export default async function Home() {
  const pages = await getDatabase();
  console.log(Object.keys(pages));
  return (
    <main>
      <h1 className="text-7xl">Hello world!!</h1>
      {pages.results.map((page) => {
        return (
          <p key={page.id}>
            <Link href={`/pages/${page.id}`}>{page.id}</Link>
          </p>
        );
      })}
    </main>
  );
}
