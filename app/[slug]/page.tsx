import NotionPage from '@/app/components/NotionPage';
import Image from 'next/image';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';
import React from 'react';
import logo from '@/public/logo.png';

const notion = new NotionAPI();

type Props = { params: { slug: string } };

export default async function page({ params }: Props) {
  const { slug } = params;
  const recordMap = await notion.getPage(slug);

  return (
    <div>
      <div className="h-28 flex justify-center items-center pt-8 pb-4">
        <Link href={'/'}>
          <Image
            src={logo}
            alt="Website Logo"
            width={125}
            height={125}
            className="h-[125px] max-w-[125px] hover:scale-75 transition-transform duration-100 ease-out hover:rounded-full hover:border-3 hover:border-black/90 hover:m-auto"
          />
        </Link>
      </div>
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
