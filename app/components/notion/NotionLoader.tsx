"use client";
import { fetchPages, fetchMorePages } from "@/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { Key, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

export default function Loader({}: Props) {
  const [data, setData] = useState<any>([]);
  const [cursor, setCursor] = useState<string | null | undefined>(undefined);
  const [loading, setLoading] = useState<Boolean>(false);
  const [end, setEnd] = useState<Boolean>(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    setLoading(true);
    try {
      fetchPages().then((res) => {
        setData(res.results);
        setCursor(res.next_cursor);
        setLoading(false);
      });
    } catch (e) {
      console.log("****ERROR-INITIAL: ", e);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    if (inView && typeof cursor === "string") {
      try {
        fetchMorePages(cursor).then((res: any) => {
          // console.log(res);
          if (res.has_more) {
            setCursor(res.next_cursor);
            setData([...data, ...res.results]);
          } else {
            setLoading(false);
            setEnd(true);
          }
        });
      } catch (e) {
        console.log("****ERROR-SUBSEQUENT: ", e);
      }
    }
  }, [inView, data, cursor]);

  return (
    <div className="py-8">
      <div className="max-w-3xl 2xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 mx-auto border-t-2 border-[#37352f29]/10">
          {data.map(
            (page: {
              id: Key | null | undefined;
              properties: { name: { title: { plain_text: string }[] } };
              cover: { external: { url: string } };
            }) => {
              // console.log(page, "PAGE#############");
              return (
                <Link
                  href={`/${page.id}`}
                  key={page.id}
                  className="border border-gray-800/30 m-2 rounded-md"
                >
                  <div className="">
                    <Image
                      alt="Image corresponding to the Link"
                      src={
                        page.cover?.external.url as unknown as
                          | string
                          | StaticImport
                      }
                      width={1920}
                      height={1080}
                      className="h-40 w-full object-cover object-center"
                    />
                    <div className="flex space-x-4">
                      <Image
                        src={page.cover.external.url}
                        alt={page.id ? (page.id as string) : "Icon"}
                        width={1920}
                        height={1080}
                        className="object-cover h-10 w-10 m-2"
                      />
                      <p className="py-2 px-4 font-semibold">
                        {page.properties?.name.title[0].plain_text as string}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
      <div ref={ref} className="flex justify-center items-center">
        {loading && <div className="loader" />}
      </div>
      {end && (
        <div className="w-full text-center text-3xl">
          <p className="py-8">
            That&apos;s it folks! Come back later for more Talking Points!
          </p>
        </div>
      )}
    </div>
  );
}
