import NotionPage from '@/app/components/NotionPage';
import { NotionAPI } from 'notion-client';
import React from 'react';

const notion = new NotionAPI();

type Props = { params: { slug: string } };

export default async function page({ params }: Props) {
  const { slug } = params;
  //   console.log(slug);
  const recordMap = await notion.getPage(slug);
  return (
    <div>
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
