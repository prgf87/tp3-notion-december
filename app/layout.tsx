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
        <div className="top-0">
          <Header />
        </div>
        <div className="min-h-screen min-w-screen max-w-screen mx-auto">
          {children}
        </div>
        <div className="bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
