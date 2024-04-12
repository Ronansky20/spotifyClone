import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Sidebar  from '@/components/Sidebar';

import "./globals.css";
import SupaBaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Made by Ronan Drost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupaBaseProvider>
          <UserProvider>
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupaBaseProvider>
        </body>
    </html>
  );
}
