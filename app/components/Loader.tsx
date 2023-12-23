import React from 'react';

type Props = {};

export default function Loader({}: Props) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="loader" />
      </div>
    </>
  );
}
