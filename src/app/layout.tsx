// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Inconsolata } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; 

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const inconsolata = Inconsolata({ subsets: ['latin'], variable: '--font-inconsolata' });

export const metadata: Metadata = {
  title: 'home',
  description: 'Welcome to my website. Find my projects, music, social media and info here.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inconsolata.variable} font-sans bg-black text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}