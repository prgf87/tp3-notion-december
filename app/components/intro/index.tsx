import Link from "next/link";
import React from "react";
import thumbsup from "@/public/thumbs-up.png";
import Image from "next/image";

type Props = {};

export default function Intro({}: Props) {
  return (
    <div className="max-w-3xl 2xl:max-w-7xl mx-auto">
      <div>
        <span className="relative drop-shadow-[4px_4px_3px_rgba(0,0,0,0.55)]">
          <h1 className="text-6xl 2xl:text-7xl font-light text-center pt-8 pb-4 uppercase drop-shadow-[-4px_4px_3px_rgba(0,0,0,0.55)]">
            Welcome to<br></br>Talking Points for Life
          </h1>
        </span>
        {/* <h1 className="text-6xl 2xl:text-7xl text-center pt-8 pb-4 uppercase drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.55)] relative left-[0px] top-[3px] right-0 bottom-0 font-normal opacity-5 z-[0]">
          Welcome to<br></br>Talking Points for Life
        </h1> */}
      </div>
      <div className="mx-8 2xl:mx-20 pb-8 space-y-4">
        <p className="font-semibold text-lg">
          Too many people are left wandering through Reddit threads and Quora
          posts, looking for advice on what to say. Communication is tricky. We
          all bring our own biases, emotions, and histories to the table.
        </p>
        <p className="text-lg font-bold">
          This site will help you navigate those tricky subjects, allowing you
          to build healthier and happier relationships.
        </p>
        <p className="font-semibold text-lg">
          Talking Points for Life is a library of ready-to-use messages for
          challenging social situations e.g.,{" "}
          <Link
            href={"/d7bf60a711e44017980ab7ca4fb3f6b5"}
            className="text-emerald-700 underline font-bold hover:text-emerald-500"
          >
            How to respond to nosy or inappropriate questions{" "}
          </Link>
        </p>
        <p className="font-semibold text-lg">
          Not sure how to tell your best friend she&apos;s not your Maid of
          Honor? Check out{" "}
          <Link
            href={"/41420f6ef1d14c40bb94e5439047d4f8"}
            className="text-amber-700 underline font-bold hover:text-amber-500"
          >
            How to tell someone they will not be your Bridesmaid
          </Link>
        </p>
        <p className="font-semibold text-lg">
          Need to draw a boundary? We&apos;ve got you covered:{" "}
          <Link
            href={"/dd3d38aa898741d59de80cf1fbf3615e"}
            className="text-sky-600 underline font-bold hover:text-sky-400"
          >
            How to set boundaries
          </Link>
        </p>
        <p className="font-semibold text-lg">
          Want to give sympathy to someone who lost a parent? Here&apos;s a good
          place to start:
          <Link
            href={"/564acfddc4e74ef19d23fe3d68cdb60e"}
            className="text-emerald-700 underline font-bold hover:text-gray-200"
          ></Link>
          How to offer comfort/give sympathy{" "}
        </p>
        <div className="bg-pink-700/50 px-8 py-4 flex space-x-4 text-white font-bold">
          <Image src={thumbsup} alt="Thumbs Up icon" className="h-8 w-8" />
          <p>
            You&apos;re welcome to use these talking points as written or adapt
            them to your style and voice — whatever works best for you.
          </p>
        </div>
      </div>
    </div>
  );
}
