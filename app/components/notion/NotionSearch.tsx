'use client';
import { searchNotion } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/public/logo.png';

type Props = {};

export default function Search({}: Props) {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState([]);
  return (
    <div>
      <form
        onInput={(e) => {
          e.preventDefault();
          searchNotion(query)
            .then((res) => {
              const { results } = res;
              console.log(results);
              return results;
              // .map((res) => {
              //   if (res.object === 'database') return res;
              // });
            })
            .then((res) => {
              setResults(res as any);
            });
        }}
      >
        <input
          className="text-black px-2 py-1"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
      <div className="relative">
        <div className="absolute min-w-[550px] max-h-[200px]">
          <ul className="bg-gray-700/95 transition-transform duration-300 opacity-95">
            {query.length > 0 &&
              // (
              //     <th>
              //       <p>Results: {results.length}</p>
              //     </th>
              //   ) &&
              results.map((res: any, i: number) => {
                console.log(res);

                // if (res?.title[0].text.content && res?.parent.page_id) {
                //   return (
                //     <li
                //       className="p-0.5 flex hover:bg-gray-900/90 border-b-2"
                //       key={res.id}
                //     >
                //       <Link
                //         href={`/${res?.parent.page_id as string}`}
                //         onClick={() => {
                //           setQuery('');
                //         }}
                //       >
                //         <p className="flex">
                //           <Image
                //             src={
                //               res?.icon?.external?.url ? (
                //                 res?.icon?.external?.url
                //               ) : res?.icon?.emoji ? (
                //                 <span>{res?.icon?.emoji}</span>
                //               ) : (
                //                 logo
                //               )
                //             }
                //             alt={'Page Icon'}
                //             width={50}
                //             height={50}
                //             className="h-6 w-6 object-cover mr-1"
                //           />
                //           {res?.title[0].text.content ? (
                //             res?.title[0].text.content.slice(0, 50)
                //           ) : (
                //             <p>Broken</p>
                //           )}
                //         </p>
                //       </Link>
                //     </li>
                //   );
                // } else {
                //   return <li key={i}>broken link</li>;
                // }
                return <li key={i}>hello</li>;
              })}
            {results.length > 0 && query.length > 0 && (
              <li className="border-b-2 p-0.5">Results: {results.length}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
