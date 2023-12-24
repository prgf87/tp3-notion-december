'use server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID as string;
const databaseId2 = process.env.NOTION_DB2_ID as string;
const pageSize: number = 9;

export async function fetchPages() {
  //* Query made looking for the first complete pages/posts */
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

export async function fetchMorePages(cursor: string) {
  //* Query made looking for the subsequent pages/posts */
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

export async function fetchCategories() {
  //* Query made looking for the categories */
  const response = await notion.databases.query({
    database_id: databaseId2,
  });

  return response;
}

export async function search(query: string = 'Love') {
  const response = await notion.search({
    query: query,
    filter: {
      value: 'page',
      property: 'object',
    },
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time',
    },
    page_size: 5,
  });
  // console.log('########Search: ', response);
  return response;
}
