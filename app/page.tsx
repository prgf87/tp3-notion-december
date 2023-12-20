import { getDatabase } from '@/utils/db';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';
import NotionPage from './components/NotionPage';
import Image from 'next/image';
import { Key } from 'react';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
// import { sqip } from 'sqip';

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
  const pages: any = await getDatabase();
  const categories = await getCategories();

  // const imagePreview = async (str: string) => {
  //   const result = await sqip({ input: str });
  //   console.log(result);
  // };

  return (
    <main>
      <NotionPage recordMap={categories} />
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-3 mx-auto">
          {pages.results
            .slice(0, 18)
            .map(
              (page: {
                id: Key | null | undefined;
                properties: { name: { title: { plain_text: string }[] } };
                cover: { external: { url: string } };
              }) => {
                return (
                  <Link href={`/${page.id}`} key={page.id} className="p-10">
                    <p>{page.properties?.name.title[0].plain_text as string}</p>
                    <Image
                      alt="Image corresponding to the Link"
                      src={
                        page.cover?.external.url as unknown as
                          | string
                          | StaticImport
                      }
                      width={1920}
                      height={1080}
                      className="h-40 w-full object-cover"
                    />
                  </Link>
                );
              }
            )}
        </div>
      </div>
    </main>
  );
}
