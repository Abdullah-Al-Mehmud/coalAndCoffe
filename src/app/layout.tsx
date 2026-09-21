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
  title: "Coal & Coffee | Premium Rooftop Cafe in Uttara, Dhaka",
  description: "Experience Uttara's finest rooftop coffee, rustic brickwork, gourmet dishes, and fairy-lit evenings at Coal & Coffee. Located on Sonargaon Janapath Road, Dhaka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0f0f] text-neutral-100">{children}</body>
    </html>
  );
}
