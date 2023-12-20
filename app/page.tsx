import { getDatabase } from '@/utils/db';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';
import NotionPage from './components/NotionPage';
import Image from 'next/image';
import logo from '@/public/logo.png';
import Header from './components/header';

const notion = new NotionAPI();
const databaseId = process.env.NOTION_DB_ID as string;

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
      {/* <Header /> */}
      {/* <div className="h-28 flex justify-center items-center pt-8 pb-4">
        <Link href={'/'}>
          <Image
            src={logo}
            alt="Website Logo"
            width={125}
            height={125}
            className="h-[125px] max-w-[125px] transition-all duration-500 ease-linear hover:rounded-3xl hover:border hover:border-black/70"
          />
        </Link>
      </div> */}
      {/* <h1 className="text-7xl font-extrabold shadow-2xl text-center pt-8 pb-4">
        Talking Points for Life
      </h1> */}
      <NotionPage recordMap={categories} />
      {/* <NotionPage recordMap={homePage} /> */}
      <div className="grid grid-cols-8 mx-auto">
        {pages.results.map((page) => {
          return (
            <p key={page.id}>
              <Link href={`/${page.id}`}>{page.object}</Link>
            </p>
          );
        })}

        {/* <div className="grid mx-auto">
          {categories.results.map((result) => {
            return (
              <p key={result.id}>
                <Link href={`/pages/${result.id}`}>{result.id}</Link>
              </p>
            );
          })}
        </div> */}
      </div>
    </main>
  );
}
