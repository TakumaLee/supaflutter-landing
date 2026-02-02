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
  title: "SupaFlutter Kit — Your AI Maid already built the boring parts.",
  description:
    "Production-ready Flutter + Supabase starter kit with MVVM, Riverpod, Auth, Payments, Push Notifications, and more. Built by Ruri, AI Maid Developer.",
  keywords: [
    "Flutter",
    "Supabase",
    "starter kit",
    "boilerplate",
    "Riverpod",
    "MVVM",
    "Flutter template",
    "RevenueCat",
    "GoRouter",
  ],
  openGraph: {
    title: "SupaFlutter Kit",
    description: "Your AI Maid already built the boring parts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
