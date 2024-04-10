import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          " bg-neutral-900 font-sans antialiased",
          fontSans.variable
        )}
        >
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}
