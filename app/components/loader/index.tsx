import React from "react";
import { NotionAPI } from "notion-client";
import NotionLoader from "./NotionLoader";

const notion = new NotionAPI();

const getLoader = async () => {
  const response = await notion.getPage("e600a555239945e3b856b3c27bc29d16", {
    chunkLimit: 6,
    chunkNumber: 0,
  });
  return response;
};

export default async function Loader() {
  const loader = await getLoader();

  return (
    <div className="max-w-3xl 2xl:max-w-7xl mx-auto">
      <NotionLoader recordMap={loader} />
    </div>
  );
}
