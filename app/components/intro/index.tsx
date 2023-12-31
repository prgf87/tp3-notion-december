import React from 'react';

type Props = {};

export default function Intro({}: Props) {
  return (
    <div className="max-w-3xl 2xl:max-w-7xl mx-auto">
      <h1 className="text-7xl font-light text-center pt-8 pb-4 uppercase drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.55)]">
        Welcome to Talking Points for Life
      </h1>
      <div className="mx-8 2xl:mx-20 py-8 space-y-4">
        <p className="text-lg">
          Too many people are left wandering through Reddit threads and Quora
          posts, looking for advice on what to say. Communication is tricky. We
          all bring our own biases, emotions, and histories to the table.
        </p>
        <p className="text-lg">
          This site will help you navigate those tricky subjects, allowing you
          to build healthier and happier relationships.
        </p>
        <p className="text-lg">
          Talking Points for Life is a library of ready-to-use messages for
          challenging social situations e.g., How to respond to nosy or
          inappropriate questions{' '}
        </p>
        <p className="text-lg">
          Not sure how to tell your best friend she&apos;s not your Maid of
          Honor? Check out How to tell someone they will not be your Bridesmaid
        </p>
        <p className="text-lg">
          Need to draw a boundary? We&apos;ve got you covered: How to set
          boundaries
        </p>
        <p className="text-lg">
          Want to give sympathy to someone who lost a parent? Here&apos;s a good
          place to start: How to offer comfort/give sympathy{' '}
        </p>
        <p className="text-lg">
          You&apos;re welcome to use these talking points as written or adapt
          them to your style and voice — whatever works best for you.
        </p>
      </div>
    </div>
  );
}
