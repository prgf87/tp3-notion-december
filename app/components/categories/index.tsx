import React from 'react';
import { fetchCategories } from '@/utils';
import { NotionAPI } from 'notion-client';
const notion = new NotionAPI();
type Props = {};

export default async function Categories({}: Props) {
  const categories = await fetchCategories();
  console.log(categories);

  return (
    <div>
      <h1>Categories</h1>
      {categories.results.map((cat) => {
        console.log(cat);
        return <div key={cat.id}>Hello</div>;
      })}
    </div>
  );
}
