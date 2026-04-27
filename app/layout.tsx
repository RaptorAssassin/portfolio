import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// @ts-ignore - CSS side-effect import
import './globals.css';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollSnapping from '@/components/scroll-snapping';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Raptor',
  description: "Raptor's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full w-full overflow-y-auto antialiased`}
      >
        <TooltipProvider>
          <ScrollSnapping>{children}</ScrollSnapping>
        </TooltipProvider>
      </body>
    </html>
  );
}
