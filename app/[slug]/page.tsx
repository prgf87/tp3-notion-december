import NotionPage from '@/components/NotionPage';

export async function generateStaticParams() {
  const recordMap = await notion.getPage(databaseId);

  const posts = await fetch('https://.../posts').then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
