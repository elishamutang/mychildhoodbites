import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mychildhoodbites.",
  description: "Trip down to memory lane.",
};

export default function RootLayout({
  product,
  children,
}: Readonly<{
  product: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <main className="p-4 flex gap-5 flex-col mx-auto w-full md:max-w-[80%]">
          <MantineProvider>
            <Header />
            {product}
            {children}
            <Footer />
          </MantineProvider>
        </main>
      </body>
    </html>
  );
}
