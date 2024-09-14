import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import Navbar from "@/components/organisms/Navbar";

export const metadata: Metadata = {
  title: "SatuRuang",
  description: "Random Chat with Strangers in One Room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} antialiased bg-primary`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
