
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Header from "./header";

//import RouterChangeHandler from "@/app/utils/CheckAuthHandler"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className="w-full h-full" lang="en">
      <body
        className={`${inter.className} antialiased w-full h-full flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
