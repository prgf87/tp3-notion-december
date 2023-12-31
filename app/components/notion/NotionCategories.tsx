'use client';
import Link from 'next/link';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import dynamic from 'next/dynamic';

import '@/app/styles/notion-styles.css';
// import 'react-notion-x/src/styles.css';

import { ExtendedRecordMap } from 'notion-types';
import Image from 'next/image';

// const Code = dynamic(() =>
//   import('react-notion-x/build/third-party/code').then((m) => m.Code)
// );
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);
// const Equation = dynamic(() =>
//   import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
// );
// const Pdf = dynamic(
//   () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
//   {
//     ssr: false,
//   }
// );
// const Modal = dynamic(
//   () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
//   {
//     ssr: false,
//   }
// );

type Props = { recordMap: ExtendedRecordMap };

export default function NotionCategories({ recordMap }: Props) {
  // console.log(Object.keys(recordMap));
  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        components={{
          // Code,
          Collection,
          // Equation,
          // Modal,
          // Pdf,
          nextImage: Image,
          nextLink: Link,
        }}
        previewImages={true}
        disableHeader={true}
        // className="z-[0]"

        // mapPageUrl={recordMap.block}
      />
    </div>
  );
}
