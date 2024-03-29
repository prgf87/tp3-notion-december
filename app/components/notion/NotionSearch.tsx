"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { searchNotion } from "@/utils";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState([]);
  return (
    <div className="py-4">
      <form
        onInput={(e) => {
          e.preventDefault();
          try {
            searchNotion(query)
              .then((res) => {
                const { results } = res;
                console.log("Query Results: ", results);
                return results;
              })
              .then((res) => {
                setResults(
                  res.sort((a: { object: string }, b: { object: string }) => {
                    if (a.object === "database" && b.object === "page") {
                      return -1; // 'database' comes before 'page'
                    } else if (a.object === "page" && b.object === "database") {
                      return 1;
                    } else {
                      return 2; // order remains unchanged
                    }
                  }) as any
                );
              });
          } catch (e) {
            console.log("Query Results Failed - Error: ", e);
          }
        }}
      >
        <input
          className="text-black px-2 py-1 rounded shadow-lg w-80 border border-spacing-1 border-gray-400/55"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
      <div className="relative z-10">
        <div className="absolute min-w-[280px] max-h-[200px]">
          <ul className="bg-gray-700/95 transition-transform duration-300 opacity-95 overflow-y-scroll max-h-[50vh]">
            {query.length > 0 &&
              results.map((res: any, i: number) => {
                // console.log(res);

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
                // }]
                if (
                  res.object === "page" &&
                  res.id !== "e600a555-2399-45e3-b856-b3c27bc29d16" &&
                  res.id !== "201222b4-5e6b-43bf-95e0-95f99c9c7beb" &&
                  res.parent.database_id
                ) {
                  // console.log("###### Search Result - Page: ", res.page);
                  const resultName = res.url
                    .substring(22, res.url.length - 32)
                    .split("-")
                    .join(" ", 1);
                  // console.log("Search Result Name: ", resultName);

                  const resultIcon = "";

                  return (
                    <li
                      key={i}
                      className="p-0.5 flex  justify-start items-center hover:bg-gray-900/90 border-b-2"
                    >
                      <Link
                        href={`/${res.parent.database_id as string}`}
                        onClick={() => {
                          setQuery("");
                        }}
                      >
                        <div className="flex items-center">
                          <Image
                            src={
                              res?.icon?.external?.url ? (
                                res?.icon?.external?.url
                              ) : res?.icon?.emoji ? (
                                <span>{res?.icon?.emoji}</span>
                              ) : (
                                logo
                              )
                            }
                            width={50}
                            height={50}
                            alt="logo"
                            className="h-6 w-6 object-cover p-0.5 mr-1"
                          />{" "}
                          <p className="text-white font-semibold">
                            {resultName.length > 50
                              ? resultName.substring(0, 50) + "... "
                              : resultName}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                } else if (
                  res.object === "database" &&
                  res.id !== "e600a555-2399-45e3-b856-b3c27bc29d16" &&
                  res.id !== "201222b4-5e6b-43bf-95e0-95f99c9c7beb" &&
                  res?.title[0].text.content
                  // res?.parent.page_id
                ) {
                  return (
                    <li
                      className="p-0.5 flex hover:bg-gray-900/90 border-b-2"
                      key={res.id}
                    >
                      <Link
                        href={`/${res?.id as string}`}
                        onClick={() => {
                          setQuery("");
                        }}
                      >
                        <div className="flex items-center">
                          <Image
                            src={
                              res?.icon?.external?.url ? (
                                res?.icon?.external?.url
                              ) : res?.icon?.emoji ? (
                                <span>{res?.icon?.emoji}</span>
                              ) : (
                                logo
                              )
                            }
                            alt={"Page Icon"}
                            width={50}
                            height={50}
                            className="h-6 w-6 object-cover p-0.5 mr-1"
                          />
                          {res?.title[0].text.content ? (
                            <p className="text-white font-semibold">
                              {res?.title[0].text.content.slice(0, 50)}
                            </p>
                          ) : (
                            <p>Broken</p>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                }
              })}
            {results.length > 0 && query.length > 0 && (
              <li className="sticky bottom-0 border-t-2 border-b-2 bg-gray-700 z-10 text-white font-semibold">
                Results: {results.length}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
