import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Visconti & Partners | Studio Commercialistico',
  description: 'L\'eccellenza fiscale al servizio del tuo business. Consulenza aziendale, pianificazione fiscale e revisione contabile per PMI e grandi imprese.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
