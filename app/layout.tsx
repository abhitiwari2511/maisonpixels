import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison Pixels - Crafting Digital Masterpieces",
  description:
    "Maison Pixels is a digital agency specializing in minimal design, robust engineering, and human-centric experiences to build exceptional brands.",
  keywords: [
    "Maison Pixels",
    "Digital Agency",
    "Web Design",
    "Web Development",
    "UI/UX Design",
    "Branding",
    "Minimal Design",
    "Human-Centric Experiences",
    "Robust Engineering",
    "Creative Agency",
    "Digital Solutions",
    "Tech Innovation",
  ],
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-linear-to-r from-blue-600 via-black to-red-600 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
