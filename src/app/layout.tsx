import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CineLingo - Bringing language learning to life",
  description: "We believe in a future where learning languages is natural, engaging, and effective. Through AI-powered conversations and immersive experiences, we're making language acquisition as natural as watching your favorite movies.",
  keywords: "language learning, AI, education, technology, CineLingo, language companion",
  openGraph: {
    title: "CineLingo - Bringing language learning to life",
    description: "AI-powered language learning that makes acquisition natural and engaging",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CineLingo - Bringing language learning to life",
    description: "AI-powered language learning that makes acquisition natural and engaging",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
