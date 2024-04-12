import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import SupaBaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import Sidebar  from '@/components/Sidebar';
import ModalProvidar from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

import "./globals.css";

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
        <ToasterProvider />
        <SupaBaseProvider>
          <UserProvider>
            <ModalProvidar />
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupaBaseProvider>
        </body>
    </html>
  );
}
