import Loader from './components/Loader';
import Intro from './components/intro';

export default async function Home() {
  return (
    <main>
      <Intro />
      <Loader />
    </main>
  );
}
