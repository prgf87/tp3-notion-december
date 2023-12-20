import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/logo.png';

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <div className="h-28 flex justify-center items-center pt-8 pb-4">
        <Link href={'/'}>
          <Image
            src={logo}
            alt="Website Logo"
            width={125}
            height={125}
            className="h-[125px] max-w-[125px] transition-all duration-500 ease-linear hover:rounded-3xl hover:border hover:border-black/70"
          />
        </Link>
      </div>
      <h1 className="text-7xl font-extrabold  text-center pt-8 pb-4 uppercase drop-shadow-[-6px_4px_2px_rgba(0,0,0,0.55)]">
        Talking Points for Life
      </h1>
    </>
  );
}
