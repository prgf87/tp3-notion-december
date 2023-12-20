import NotionPage from '@/app/components/NotionPage';
import Image from 'next/image';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';
import React from 'react';
import logo from '@/public/logo.png';
import Header from '../components/header';

const notion = new NotionAPI();

type Props = { params: { slug: string } };

export default async function page({ params }: Props) {
  const { slug } = params;
  const recordMap = await notion.getPage(slug);

  return (
    <div>
      <Header />
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
