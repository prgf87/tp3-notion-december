import React from 'react';
import { fetchCategories } from '@/utils';

type Props = {};

export default async function Categories({}: Props) {
  const categories = await fetchCategories();
  const response = console.log(categories);

  return (
    <div>
      {categories.results.map((cat) => {
        console.log(cat);
        return <div key={cat.id}>Hello</div>;
      })}
    </div>
  );
}
