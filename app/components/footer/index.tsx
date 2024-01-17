import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  const date = new Date();
  return (
    <div className="text-center py-5 bg-black text-white text-xl">
      <Link href={"/"}>
        &copy; {date.getFullYear()} Talking Points for Life
      </Link>
    </div>
  );
}
