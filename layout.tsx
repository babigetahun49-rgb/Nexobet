import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXOBET — Play Beyond",
  description: "Explore original arcade-style games in the NEXOBET demo lobby.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
