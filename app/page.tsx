import Loader from "./components/notion/NotionLoader";
import Categories from "./components/categories";
import Intro from "./components/intro";
import Search from "./components/notion/NotionSearch";

export default async function Home() {
  return (
    <main className="gradient">
      <Intro />
      <h1 className="text-5xl font-light text-center pt-8 pb-4 uppercase drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.55)]">
        Categories
      </h1>
      <Categories />
      <div className="pt-8 pb-2">
        <h1 className="text-5xl font-light text-center pt-8 pb-4 uppercase drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.55)]">
          The Whole Catalogue
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-8">
        <Search />
      </div>
      <Loader />
    </main>
  );
}
