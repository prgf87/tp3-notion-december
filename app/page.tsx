// import { getDatabase } from '@/utils/db';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';

const notion = new NotionAPI();
const databaseId = process.env.NOTION_DB_ID as string;

// import { Client } from '@notionhq/client';

const getStaticProps = async () => {
  const db = await notion.getPage(databaseId);
  console.log(db);

  return db;
};

export default async function Home({ db }) {
  return (
    <main>
      <h1 className="text-7xl">Hello world!!</h1>
      <NotionRenderer recordMap={db} fullPage={true} darkMode={false} />
    </main>
  );
}
