import Loader from "./components/notion/NotionLoader";
import Categories from "./components/categories";
import Intro from "./components/intro";

export default async function Home() {
  return (
    <main className="gradient">
      <Intro />
      <h1 className="text-5xl font-light text-center pt-8 pb-4 uppercase drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.55)]">
        Categories
      </h1>
      <Categories />
      <h1 className="text-5xl font-light text-center pt-8 pb-4 uppercase drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.55)]">
        The Whole Catalogue
      </h1>
      <Loader />
    </main>
  );
}
