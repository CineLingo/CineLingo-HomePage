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
  title: "CineLingo (씨네링고) - AI-Powered Video Localization Platform",
  description: "CineLingo (씨네링고) - We don't just translate videos. We reconstruct them. Every frame, every word, every voice — our AI transforms global content into fluent local experiences. AI-powered video localization and language learning platform.",
  keywords: "CineLingo, 씨네링고, video localization, AI translation, language learning, video translation, AI-powered, global content, multilingual videos, language companion, education technology, AI video processing, content localization, video dubbing, subtitle generation",
  authors: [{ name: "CineLingo Team" }],
  creator: "CineLingo",
  publisher: "CineLingo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CineLingo (씨네링고) - AI-Powered Video Localization Platform",
    description: "CineLingo (씨네링고) - We don't just translate videos. We reconstruct them. Every frame, every word, every voice — our AI transforms global content into fluent local experiences.",
    type: "website",
    siteName: "CineLingo",
    locale: "en_US",
    url: "https://cinelingo.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CineLingo (씨네링고) - AI-Powered Video Localization",
    description: "We don't just translate videos. We reconstruct them. Every frame, every word, every voice — our AI transforms global content into fluent local experiences.",
    creator: "@cinelingo",
  },
  alternates: {
    canonical: "https://cinelingo.com",
  },
  category: "technology",
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
