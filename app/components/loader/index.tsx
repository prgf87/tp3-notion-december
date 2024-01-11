import React from "react";
import { NotionAPI } from "notion-client";
import NotionLoader from "./NotionLoader";

const notion = new NotionAPI();

const getLoader = async () => {
  const response = await notion.getPage("e600a555239945e3b856b3c27bc29d16");
  return response;
};

export default async function Loader() {
  const loader = await getLoader();

  // for (const key in loader) {
  //   console.log("for loop key: ", key, typeof key);
  // }

  const filter = Object.entries(loader).filter((record, i) => {
    console.log("####Record", Object.entries(record));
  });

  return (
    <div className="max-w-3xl 2xl:max-w-7xl mx-auto">
      <NotionLoader recordMap={loader} />
    </div>
  );
}
