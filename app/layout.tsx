import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orbit Agency - Digital Innovation & Design Studio",
    template: "%s | Orbit Agency",
  },
  description:
    "We create exceptional digital experiences through innovative design, cutting-edge development, and strategic thinking. Transform your business with Orbit Agency.",
  authors: [{ name: "Orbit Agency" }],
  creator: "Orbit Agency",
  publisher: "Orbit Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://orbit-agency.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orbit-agency.com",
    title: "Orbit Agency - Digital Innovation & Design Studio",
    description:
      "We create exceptional digital experiences through innovative design, cutting-edge development, and strategic thinking.",
    siteName: "Orbit Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit Agency - Digital Innovation & Design Studio",
    description:
      "We create exceptional digital experiences through innovative design, cutting-edge development, and strategic thinking.",
    creator: "@orbitagency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
