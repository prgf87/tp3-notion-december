import Loader from './components/notion/NotionLoader';
import Categories from './components/categories';
import Intro from './components/intro';

export default async function Home() {
  return (
    <main className="gradient">
      <Intro />
      <Categories />
      <Loader />
    </main>
  );
}
