import NotionPage from '@/app/components/NotionPage';
import { NotionAPI } from 'notion-client';
import React from 'react';

type Props = { params: { slug: string } };

export default async function page({ params }: Props) {
  const { slug } = params;
  const notion = new NotionAPI();
  //   console.log(slug);
  const recordMap = await notion.getPage(slug);
  return (
    <div>
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
