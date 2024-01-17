import Loader from "./components/loader";
import Categories from "./components/categories";
import Intro from "./components/intro";
import Search from "./components/notion/NotionSearch";
import NotionScroller from "./components/notion/NotionScroller";

export default async function Home() {
  return (
    <main className="gradient">
      <Intro />
      <div>
        <span className="relative drop-shadow-[4px_4px_3px_rgba(0,0,0,0.55)]">
          <h1 className="text-6xl 2xl:text-7xl font-light text-center pt-2 pb-4 uppercase drop-shadow-[-4px_4px_3px_rgba(0,0,0,0.55)]">
            Categories
          </h1>
        </span>
        {/* <Categories /> */}
      </div>
      <div className="pt-8 pb-2">
        <span className="relative drop-shadow-[4px_4px_3px_rgba(0,0,0,0.55)]">
          <h1 className="text-6xl 2xl:text-7xl font-light text-center pt-2 pb-4 uppercase drop-shadow-[-4px_4px_3px_rgba(0,0,0,0.55)]">
            The Whole Catalogue
          </h1>
        </span>
      </div>
      <div className="flex justify-center items-center space-x-8">
        <Search />
      </div>
      {/* <Loader /> */}
      <NotionScroller />
    </main>
  );
}
