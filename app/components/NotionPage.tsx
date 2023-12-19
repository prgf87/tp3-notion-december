'use client';
import Link from 'next/link';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';

import 'react-notion-x/src/styles.css';

type Props = {};

export default function NotionPage({ recordMap }: any) {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </div>
  );
}
