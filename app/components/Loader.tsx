'use client';
import { getDatabase } from '@/utils';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {};

export default function Loader({}: Props) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      //   alert('Load More');
      getDatabase();
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div className="flex justify-center items-center">
        <div className="loader" />
      </div>
    </div>
  );
}
