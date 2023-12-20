import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
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
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
