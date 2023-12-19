// import { getDatabase } from '@/utils/db';

import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();
const databaseId = process.env.NOTION_DB_ID as string;

// import { Client } from '@notionhq/client';

export default async function Home() {
  // const recordMap = await notion.getPage(databaseId);
  return (
    <main>
      <h1 className="text-7xl">Hello world!!</h1>
    </main>
  );
}
