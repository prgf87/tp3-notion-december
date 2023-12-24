'use client';
import { searchNotion } from '@/utils';
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
          searchNotion(query).then((res) => {
            console.log(Object.keys(res));
            setResults(res.results as any);
          });
        }}
      >
        <input
          className="text-black px-2"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
      <div className="relative">
        <div className="absolute border w-full">
          <ul className="bg-gray-900/70">
            {query.length > 0 &&
              results.map((res: any) => {
                console.log(res);

                return (
                  <Link
                    href={`/${res.id}`}
                    className="p-0.5 flex"
                    key={res.id}
                    onClick={() => {
                      setQuery('');
                    }}
                  >
                    {res.id}
                  </Link>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
