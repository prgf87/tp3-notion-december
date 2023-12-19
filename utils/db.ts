import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID as string;

const filteredRows = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Task completed',
      checkbox: {
        equals: true,
      },
    },
  });
  return response;
};
