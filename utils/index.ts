'use server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID as string;
const databaseId2 = process.env.NOTION_DB2_ID as string;
const pageSize: number = 10;

export async function fetchPages() {
  //* GET query made looking for the first complete pages/posts */
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'complete',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    page_size: pageSize,
  });

  return response;
}
export async function fetchCategories() {
  //* GET query made looking for the categories */
  const response = await notion.databases.query({
    database_id: databaseId2,
  });

  return response;
}

export async function fetchMorePages(cursor: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'complete',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    page_size: pageSize,
    start_cursor: cursor,
  });

  return response;
}
