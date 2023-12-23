'use client';
import { getDatabase, getMoreDatabase } from '@/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import React, { Key, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {};

export default function Loader({}: Props) {
  const [data, setData] = useState<any>([]);
  const [cursor, setCursor] = useState<string | null | undefined>(undefined);
  const { ref, inView } = useInView();
  const response: any = getDatabase().then((res) => {
    console.log(res);
    setData(res.results);
    setCursor(res.next_cursor);
  });

  useEffect(() => {
    if (data.length > 0 && inView) {
      console.log('Load More');
      console.log(cursor);
      //   getMoreDatabase()
      //   //   getDatabase();
      // }
    }
    // getDatabase().then((res) => {
    //   console.log(res);
    //   setData(res.results);
    // });
    // if (inView) {
  }, [inView, data]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
        {data.map(
          (page: {
            id: Key | null | undefined;
            properties: { name: { title: { plain_text: string }[] } };
            cover: { external: { url: string } };
          }) => {
            return (
              <Link href={`/${page.id}`} key={page.id} className="p-10">
                <p>{page.properties?.name.title[0].plain_text as string}</p>
                <Image
                  alt="Image corresponding to the Link"
                  src={
                    page.cover?.external.url as unknown as string | StaticImport
                  }
                  width={1920}
                  height={1080}
                  className="h-40 w-full object-cover"
                />
              </Link>
            );
          }
        )}
      </div>
      <div ref={ref} className="flex justify-center items-center">
        <div className="loader" />
      </div>
    </div>
  );
}
