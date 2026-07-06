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
  metadataBase: new URL("https://chintanchauhan.com"),
  title: "Chintan Chauhan | Jr. Network Security Analyst",
  description:
    "Portfolio of Chintan Chauhan — Jr. Network Security Analyst specializing in SIEM monitoring, vulnerability assessment, endpoint security, and network infrastructure.",
  keywords: [
    "Chintan Chauhan",
    "Network Security Analyst",
    "Cybersecurity",
    "SIEM",
    "Vulnerability Assessment",
    "Network Engineer",
  ],
  openGraph: {
    title: "Chintan Chauhan | Jr. Network Security Analyst",
    description:
      "Securing networks & endpoints. Portfolio, experience, and projects.",
    url: "https://chintanchauhan.com",
    siteName: "Chintan Chauhan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
