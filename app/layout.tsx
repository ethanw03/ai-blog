import './globals.css';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Bloggr AI',
  description: "The future is here... And it's opinionated.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
