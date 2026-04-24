import type { Metadata } from 'next';
import { Epilogue, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const epilogue = Epilogue({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'layoutd - Solana Account Migrations',
  description: 'Stop Writing Migration Code by Hand.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#080808] text-[#e5e2e1] font-mono antialiased selection:bg-[#9945FF]/30 selection:text-[#14F195]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
