import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import Search from "../notion/NotionSearch";
// import { Search } from 'react-notion-x';
// import { search } from '@/utils';
// import { Search } from 'react-notion-x';

type Props = {};

export default async function Header({}: Props) {
  // const block = await search();
  return (
    <>
      <div className="grid grid-cols-3 pt-6 pb-6 mx-auto bg-pink-500/90 text-white text-base drop-shadow-lg">
        <div className="flex justify-center items-center py-8">
          <Link href={"/"} className="absolute">
            <Image
              src={logo}
              alt="Website Logo"
              width={150}
              height={150}
              placeholder="blur"
              className="h-[70px] max-w-[70px] transition-all duration-300 ease-linear hover:rounded-2xl hover:border-2 hover:border-black/70"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-8">
          <Search />
        </div>
        <div className="flex justify-center items-center space-x-8">
          <Link href={"https://www.buymeacoffee.com/tp4life"} target="_blank">
            Donate
          </Link>
          <Link href={"/537536d77d304f20909472994442451f"}>About Us</Link>

          <Link href={"/login"}>User Area</Link>
        </div>
      </div>
    </>
  );
}
