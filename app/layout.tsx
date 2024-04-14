import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import SupaBaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import Sidebar  from '@/components/Sidebar';
import ModalProvidar from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

import "./globals.css";
import getSongsByUserId from "@/actions/getSongsByUserId";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Made by Ronan Drost",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupaBaseProvider>
          <UserProvider>
            <ModalProvidar />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
          </UserProvider>
        </SupaBaseProvider>
        </body>
    </html>
  );
}
