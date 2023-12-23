import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID as string;
const categoriesId =
  '222e4acf63964c7e90c55228768a2db9?v=64300174648c41ee8a84e94f80881a64';

export async function getDatabase(cursor: string | undefined = undefined) {
  //* Initial query made looking for the first complete pages/posts */
  const pageSize = 12;
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
// export async function getCategories() {
//   //* Initial query made looking for complete pages/posts */
//   const response = await notion.pages.retrieve({ page_id: categoriesId });
//   console.log(response);
//   return response;
// }
