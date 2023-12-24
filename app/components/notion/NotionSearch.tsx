'use client';
import { searchNotion } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

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
              return results.map((res) => {
                if (res.object === 'database') return res;
              });
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
        <div className="absolute min-w-[500px] max-h-[200px]">
          <ul className="bg-gray-700/95">
            {query.length > 0 &&
              results.map((res: any) => {
                console.log(res);

                if (res?.title[0].text.content) {
                  return (
                    <li
                      className="p-0.5 flex hover:bg-gray-900/90 border-t-2"
                      key={res.id}
                    >
                      <Link
                        href={`/${
                          res?.parent.database_id
                            ? res?.parent.database_id
                            : res?.id
                        }`}
                        onClick={() => {
                          setQuery('');
                        }}
                      >
                        {/* <Image src={res?} alt='Search Icon' /> */}
                        <p className="">
                          {res?.title[0].text.content ? (
                            res?.title[0].text.content.slice(0, 50)
                          ) : (
                            <p>Broken</p>
                          )}
                        </p>
                      </Link>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
