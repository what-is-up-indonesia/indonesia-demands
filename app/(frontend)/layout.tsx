import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indonesia Demands",
  description: "Demands for the Indonesian government, military, and police.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} antialiased max-w-3xl p-4 mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
