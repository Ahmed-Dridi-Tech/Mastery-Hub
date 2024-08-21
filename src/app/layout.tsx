import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Lexend } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mastery Hub"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(lexend.className, "antialiased min-h-screen pt-16")}>
      <Navbar />
      {children}</body>
    </html>
  );
}
