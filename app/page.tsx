import { getDatabase } from '@/utils/db';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';
import NotionPage from './components/NotionPage';
import Image from 'next/image';
// import logo from '@/public/logo.png';
// import Header from './components/header';

const notion = new NotionAPI();
// const databaseId = process.env.NOTION_DB_ID as string;

// import { Client } from '@notionhq/client';

const getCategories = async () => {
  const response = await notion.getPage('222e4acf63964c7e90c55228768a2db9');
  return response;
};

export default async function Home() {
  const pages = await getDatabase();
  // const homePage = await notion.getPage(databaseId);
  const categories = await getCategories();

  return (
    <main>
      <NotionPage recordMap={categories} />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 mx-auto">
          {pages.results.map((page) => {
            // console.log('###################', page.properties.name);

            return (
              <Link href={`/${page.id}`} key={page.id} className="p-10">
                <p>{page.properties.name.title[0].plain_text}</p>
                <Image
                  alt="Image corresponding to the Link"
                  src={page?.cover?.external.url}
                  width={75}
                  height={150}
                  className="h-40 w-full object-cover"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
