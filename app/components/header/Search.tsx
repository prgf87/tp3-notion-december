'use client';
import { search } from '@/utils';
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
          search(query).then((res) => {
            console.log(Object.keys(res));
            setResults(res.results);
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
          <ul>
            {results.map((res) => {
              console.log(res);

              return <li className="py-1" key={res.id}></li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
