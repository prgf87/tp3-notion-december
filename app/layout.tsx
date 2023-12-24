import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './styles/globals.css';
import Header from './components/header';
import Footer from './components/footer';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Talking Points For Life',
  description:
    'Talking Points For Life - Notion-X Integration built by Pedro Ferreira using react-notion-x',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen`}>
        <div className="relative left-0 top-0 right-0 z-[2000]">
          <Header />
        </div>
        <div className="relative min-h-fit min-w-[100%] mx-auto">
          {children}
        </div>
        <div className="relative bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
