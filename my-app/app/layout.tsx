import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas  from "@/components/main/StarBackground";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "AI Space Profile",
  description: "Build A SAAS AI projects in a high level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
