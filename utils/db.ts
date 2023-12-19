import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID as string;

export async function getDatabase() {
  //* Initial query made looking for complete pages/posts */
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
    //* Can add more filters (or/and) and also a sort function */
    // sorts: [
    //   {
    //     property: 'Last ordered',
    //     direction: 'ascending',
    //   },
    // ],
  });
  console.log(response);
  return response;
}
