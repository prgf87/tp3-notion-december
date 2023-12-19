import NotionPage from '@/app/components/NotionPage';
import { NotionAPI } from 'notion-client';
import React from 'react';

const notion = new NotionAPI();

type Props = { params: { slug: string } };

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts');
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: Props) {
  const { slug } = params;
  //   console.log(slug);
  const recordMap = await notion.getPage(slug);
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()

  // Pass post data to the page via props
  return { props: { recordMap } };
}

// export async function generateStaticParams(pageId: string) {
//   const posts = await fetch('https://.../posts').then((res) => res.json());

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

export default async function page({ posts }) {
  return (
    <div>
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
