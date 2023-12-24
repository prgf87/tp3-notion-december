import React from 'react';
import { NotionAPI } from 'notion-client';
import NotionPage from '../notion/NotionPage';
import NotionCategories from '../notion/NotionCategories';
const notion = new NotionAPI();
type Props = {};

const getCategories = async () => {
  const response = await notion.getPage('222e4acf63964c7e90c55228768a2db9');
  return response;
};

export default async function Categories({}: Props) {
  const categories = await getCategories();
  // console.log(categories);

  return (
    <div className="max-w-3xl 2xl:max-w-7xl mx-auto">
      <NotionCategories recordMap={categories} />
    </div>
  );
}
