'use server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID as string;

export async function getDatabase() {
  //* GET query made looking for the first complete pages/posts */
  const pageSize: number = 12;
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

export async function getMoreDatabase(cursor: string) {
  const pageSize: number = 12;
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
