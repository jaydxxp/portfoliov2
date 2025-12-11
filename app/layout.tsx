import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Satoshi from "next/font/local"
import { Hanken_Grotesk } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const Instrument = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400"
});
const Grotesk = Hanken_Grotesk({
  variable:"--font-hanken-grotesk",
  subsets:["latin"]
})
const Satoshi_font = Satoshi({
  src: "/fonts/Satoshi-Regular.otf",
  variable: "--font-satoshi",
  weight: "400",
});
const Pixelify = Pixelify_Sans({
  variable:"--font-pixelify-sans",
  subsets:["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaydeep Wagaskar - Full Stack Developer & UI/UX Designer",
  description:
    "I'm Jaydeep Wagaskar, a Full Stack Developer & UI/UX Designer passionate about creating modern web apps, exploring new technologies, and solving real-world problems through clean and efficient code.",

  keywords: [
    "Jaydeep Wagaskar",
    "Full Stack Developer",
    "UI UX Designer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Software Engineer",
  ],

  authors: [{ name: "Jaydeep Wagaskar" }],
  creator: "Jaydeep Wagaskar",
  publisher: "Jaydeep Wagaskar",

  metadataBase: new URL("https://jaydeepw.tech"),

  alternates: {
    canonical: "/", 
  },

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
    title: "Jaydeep Wagaskar – Full Stack Developer & UI/UX Designer",
    description:
      "Full Stack Developer & UI/UX Designer crafting modern full-stack web applications and thoughtful user interfaces.",
    url: "https://jaydeep.tech",
    siteName: "Jaydeep Wagaskar",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Jaydeep Wagaskar Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jaydeep Wagaskar – Full Stack Developer & UI/UX Designer",
    description:
      "Full Stack Developer & UI/UX Designer crafting modern full-stack web applications.",
    images: ["/portfolio.png"],
    creator: "@jayydeeppp", 
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Satoshi_font.variable} ${Pixelify.variable} ${Grotesk.variable} ${Instrument.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
