import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  const date = new Date();
  return (
    <div className="text-lg text-center py-8 border-t-4 shadow-inner mt-8 bg-white">
      &copy; Talking Points for Life {date.getFullYear()}
    </div>
  );
}
