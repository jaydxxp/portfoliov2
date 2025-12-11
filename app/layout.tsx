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
  weight:"400"
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
  title: "Jaydeep Wagaskar",
  icons:"/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Satoshi_font.variable} ${Pixelify.variable} ${Grotesk.variable} ${Instrument.variable} antialiased`}
      >
        {children} <Analytics/>
      </body>
    </html>
  );
}
