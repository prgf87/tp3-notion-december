import NotionPage from '@/app/components/notion/NotionPage';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import React from 'react';

const notion = new NotionAPI();

type Props = { params: { slug: string } };

export default async function page({ params }: Props) {
  const { slug } = params;
  try {
    const recordMap: ExtendedRecordMap | null = await notion.getPage(slug);
    return (
      <div>
        <NotionPage recordMap={recordMap} />
      </div>
    );
  } catch {
    return (
      <div className="flex justify-center items-center h-80">
        <h1>Whoops..! We couldn&apos;t find that page, please try again.</h1>
      </div>
    );
  }
}
