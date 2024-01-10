import NotionPage from "@/app/components/notion/NotionPage";
import { redirect } from "next/navigation";
import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";
import React from "react";

const notion = new NotionAPI();

type Props = { params: { slug: string } };

function ErrorHandler() {
  redirect("/");
  return (
    <div className="flex justify-center items-center h-80">
      <h1>Whoops..! We couldn&apos;t find that page, please try again.</h1>
    </div>
  );
}

export default async function page({ params }: Props) {
  const { slug } = params;
  if (
    slug === "201222b4-5e6b-43bf-95e0-95f99c9c7beb" ||
    slug === "e600a555-2399-45e3-b856-b3c27bc29d16"
  )
    return <ErrorHandler />;
  try {
    const recordMap: ExtendedRecordMap | null = await notion.getPage(slug);
    return (
      <div>
        <NotionPage recordMap={recordMap} />
      </div>
    );
  } catch {
    return <ErrorHandler />;
  }
}
