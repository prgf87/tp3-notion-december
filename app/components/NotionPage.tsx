'use client';
import Link from 'next/link';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';

import 'react-notion-x/src/styles.css';

type Props = {};

export default function NotionPage({ recordMap }: any) {
  return (
    <div>
      <div className="flex justify-center items-center pt-8">
        <Link href={'/'}>Home</Link>
      </div>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </div>
  );
}
