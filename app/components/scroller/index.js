import React from "react";
import { NotionAPI } from "notion-client";
import NotionScroller from "../notion/NotionScroller";

const notion = new NotionAPI();

const getScroller = async () => {
  const response = await notion.getPage("e600a555239945e3b856b3c27bc29d16");
  return response;
};

export default async function Scroller() {
  const scroller = await getScroller();

  // for (const key in Scroller) {
  //   console.log("for loop key: ", key, typeof key);
  // }

  // const filter = Object.entries(Scroller).filter((record, i) => {
  //   console.log("####Record", Object.entries(record));
  // });

  return (
    <div className="max-w-3xl 2xl:max-w-7xl mx-auto">
      <NotionScroller recordMap={scroller} />
    </div>
  );
}
