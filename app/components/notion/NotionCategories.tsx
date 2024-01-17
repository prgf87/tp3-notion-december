"use client";
import Link from "next/link";
import React from "react";
import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";

import { ExtendedRecordMap } from "notion-types";
import Image from "next/image";

import "@/app/styles/notion-styles.css";

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

type Props = { recordMap: ExtendedRecordMap };

export default function NotionCategories({ recordMap }: Props) {
  return (
    <div className="max-w-3xl xl:max-w-7xl">
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
        />
      </div>
    </div>
  );
}
