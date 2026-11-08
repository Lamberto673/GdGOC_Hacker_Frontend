import type { Metadata } from "next";
import { Geist_Mono, Google_Sans, Inter } from "next/font/google";
import "./globals.css";

// Figma: Google Sans for almost all text, Inter for the hero headline and step numbers
const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GDGoC UGM – Big ideas. Built together.",
  description:
    "Google Developer Groups on Campus, Universitas Gadjah Mada — a place for curious minds to learn, connect, and build technology that matters.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
