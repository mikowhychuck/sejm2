import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sejm RP",
  description: "Alternatywna strona Sejmu Rzeczypospolitej Polskiej",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Sejm Rzeczypospolitej Polskiej</h1>
          {/* <p>"Wszelka władza społeczności ludzkiej początek swój bierze z woli narodu."</p> */}
          <nav>
            <Link href='/'>Strona Główna</Link>
            <Link href='/mps'>Posłowie</Link>
            <Link href='/clubs'>Kluby</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
