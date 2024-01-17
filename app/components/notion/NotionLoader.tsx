"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import "@/app/styles/notion-category-styles.css";

type Props = { recordMap: ExtendedRecordMap };

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

export default function NotionLoader({ recordMap }: Props) {
  // const filteredRecordMap = recordMap.filter(())
  // console.log(recordMap, "///recordmap");

  const fakeLoader = recordMap;

  console.log(typeof fakeLoader, fakeLoader.collection);

  // useEffect(() => {}, []);

  return (
    <div className="max-w-3xl xl:max-w-7xl z-0">
      <div className="flex justify-center items-center">
        <NotionRenderer
          recordMap={recordMap}
          fullPage={false}
          darkMode={false}
          components={{
            Collection,
            nextImage: Image,
            nextLink: Link,
          }}
          previewImages={true}
          disableHeader={true}
          className="z-0"
        />
      </div>
    </div>
  );
}
