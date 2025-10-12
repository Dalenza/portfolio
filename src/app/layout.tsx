import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const soraFont = Sora({
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Iheb Daly",
  description:
    "Final-year Cybersecurity student specializing in full-stack development. I love building apps with Next.js and solving real problems through code. Always learning, always shipping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${soraFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
