import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "@/public/css/globals.css";
import { Header } from "./components/Header";
import 'swiper/css';

const mavenPro = Maven_Pro({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Portfolio Ronaldo MINE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mavenPro.className}>
        <main className="px-5 sm:px-10 max-w-6xl mx-auto pb-10">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
