import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/logo.png';

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <div className="grid grid-cols-3 pt-6 pb-6 mx-auto bg-pink-500/90 text-white text-xl drop-shadow-lg">
        <div className="flex justify-center items-center">
          <Link href={'/'}>
            <Image
              src={logo}
              alt="Website Logo"
              width={125}
              height={125}
              className="h-[70px] max-w-[70px] transition-all duration-500 ease-linear hover:rounded-2xl hover:border hover:border-black/70"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-8">
          <Link href={'/about'}>About Us</Link>
          <Link href={'/coffee'}>Buy me a Coffee</Link>
        </div>
        <div className="flex justify-center items-center">
          <Link href={'/login'}>User Area</Link>
        </div>
      </div>
    </>
  );
}
