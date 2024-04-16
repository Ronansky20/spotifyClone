import { Figtree } from "next/font/google";

import SupaBaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import Sidebar  from '@/components/Sidebar';
import ModalProvidar from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

import "./globals.css";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Made by Ronan Drost",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
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
            <Player />
          </UserProvider>
        </SupaBaseProvider>
        </body>
    </html>
  );
}
