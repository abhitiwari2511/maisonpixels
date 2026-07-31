import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
  ],
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-[#09090b] text-white selection:bg-[#ef4d23] selection:text-white m-0 p-0 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
