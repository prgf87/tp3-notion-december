import { getDatabase } from '@/utils/db';

const fetchData = async () => {
  const response = await getDatabase().then(() => {
    console.log('done!');
  });
};

export default async function Home() {
  const homePage = await fetchData();

  return (
    <main>
      <h1 className="text-7xl">Hello world!!</h1>
    </main>
  );
}
