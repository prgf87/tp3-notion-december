import { fetchCategories } from "@/utils";
import React from "react";

type Props = {};

const getCategories = async () => {
  const res = await fetchCategories();
  console.log("categories res: ", res);
};

export default async function CategoryLoader({}: Props) {
  const categories = await getCategories();
  return <div>CategoryLoader</div>;
}
