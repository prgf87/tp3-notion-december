'use client';
import Link from 'next/link';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import dynamic from 'next/dynamic';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);
// const Collection = dynamic(() =>
//   import('react-notion-x/build/third-party/collection').then(
//     (m) => m.Collection
//   )
// );
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false,
  }
);

import 'react-notion-x/src/styles.css';

type Props = {};

export default function NotionPage({ recordMap }: any) {
  return (
    <div>
      <div className="flex justify-center items-center pt-8">
        <Link href={'/'}>Home</Link>
      </div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        components={{ Code, Equation, Modal, Pdf }}
      />
    </div>
  );
}
