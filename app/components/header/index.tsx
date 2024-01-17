import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import coffee from "@/public/coffee-white.png";

type Props = {};

export default async function Header({}: Props) {
  // const block = await search();
  return (
    <div className="bg-black/95 text-white text-sm drop-shadow-lg">
      <div className="grid grid-cols-3 py-6 mx-auto">
        <div className="flex justify-center items-center py-2">
          <Link href={"/"} className="absolute">
            <Image
              src={logo}
              alt="Website Logo"
              width={150}
              height={150}
              placeholder="blur"
              className="h-[60px] max-w-[60px] transition-all duration-300 ease-linear hover:rounded-3xl hover:border-1 hover:border-black/70"
            />
          </Link>
        </div>
        <div className="col-span-2 flex justify-center items-center space-x-8">
          <Link
            href={"https://www.buymeacoffee.com/tp4life"}
            target="_blank"
            className="flex items-center hover:brightness-75"
          >
            Buy me a{" "}
            <Image
              src={coffee}
              alt="Website Logo"
              width={150}
              height={150}
              placeholder="blur"
              className="h-10 w-6 ml-1 font-bold relative bottom-1"
            />
          </Link>
          <Link
            href={"/537536d77d304f20909472994442451f"}
            className="hover:brightness-75"
          >
            About Us
          </Link>

          {/* <Link href={"/login"} className="hover:brightness-75">
            User Area
          </Link> */}

          <Link
            href={"/a35b86baa3f24f01ac5ec3b7d2c4d410"}
            className="hover:brightness-75"
          >
            Share Feedback
          </Link>
        </div>
      </div>
    </div>
  );
}
