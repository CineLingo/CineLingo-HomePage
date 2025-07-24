import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CineLingo - AI-Powered Video Localization",
  description: "We don't just translate videos. We reconstruct them. Every frame, every word, every voice — our AI transforms global content into fluent local experiences.",
  keywords: "language learning, AI, education, technology, CineLingo, language companion",
  openGraph: {
    title: "CineLingo - AI-Powered Video Localization",
    description: "We don't just translate videos. We reconstruct them. Every frame, every word, every voice — our AI transforms global content into fluent local experiences.",
    type: "website",
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
        suppressHydrationWarning={true}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
