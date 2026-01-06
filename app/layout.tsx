import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Massage Map - Best Massages in Bali",
  description: "Your smart shortcut to the best massages in Bali. Live, curated map of spas and therapists organized by area, style, budget, and mood.",
  keywords: ["massage", "bali", "spa", "wellness", "therapist", "ubud", "seminyak", "canggu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
