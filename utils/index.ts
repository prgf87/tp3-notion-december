import { Client } from '@notionhq/client';
import { useState } from 'react';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID as string;
const categoriesId =
  '222e4acf63964c7e90c55228768a2db9?v=64300174648c41ee8a84e94f80881a64';

export async function getDatabase() {
  //* Initial query made looking for the first complete pages/posts */
  const pageSize: number = 12;
  let cursor: string | undefined = undefined;
  let results: any[] = [];
  // let cursor: string | undefined = undefined;
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
  if (response.has_more) {
    cursor = response.next_cursor ? response.next_cursor : undefined;
  }
  results = [...results, ...response.results];
  return { ...response, response: { results: [results] } };
}
