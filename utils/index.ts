"use server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID as string;
const databaseId2 = process.env.NOTION_DB2_ID as string;
const pageSize: number = 6;

export async function fetchPages() {
  //* Query made looking for the first complete pages/posts */
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "complete",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    page_size: pageSize,
  });

  // console.log("Response Database: ", response);
  return response;
}

export async function fetchMorePages(cursor: string) {
  //* Query made looking for the subsequent pages/posts */
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "complete",
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

export async function searchNotion(query = "") {
  const response = await notion.search({
    query: query,
    filter: {
      property: "object",
      value: "database",
    },

    sort: {
      direction: "descending",
      timestamp: "last_edited_time",
    },
    page_size: 100,
    // page_size: 50,
  });
  // console.log('########Search: ', response);
  // console.log(title[0].plain_text);
  // let findQuery = query;

  const { results } = response;

  const filteredResults = results.filter((result) => {
    // console.log("##########result: ", result);
    if (
      result.id !== "e600a555-2399-45e3-b856-b3c27bc29d16" &&
      result.id !== "201222b4-5e6b-43bf-95e0-95f99c9c7beb"
    ) {
      // console.log("result: ", result);
      return result;
      // let pageTitle = result.properties.name.title[0].plain_text
      //   ? result.properties.name.title[0].plain_text
      //   : result.properties.Title.title[0].plain_text
      //     ? result.properties.Title.title[0].plain_text
      //     : "";
      // return {
      //   results: {
      //     title: pageTitle,
      //     link: result.parent.database_id,
      //   },
      // };
    }
    // console.log(Object.keys(result["title"]));
    // return {
    //   pageName: result.title[0].plain_text as string,
    //   icon: result.icon ? result.icon : result.cover ? result.cover : null,
    // };
  });
  // console.log("##########filter", filteredResults);
  return filteredResults;
}

export async function keepSearchingNotion(query: string, cursor: string) {
  //* Query made looking for the subsequent pages/posts */
  const response = await notion.search({
    query: query,
    filter: {
      value: "page",
      property: "object",
    },
    sort: {
      direction: "descending",
      timestamp: "last_edited_time",
    },
    page_size: 25,
    start_cursor: cursor,
  });

  return response;
}
