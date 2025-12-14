import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Getia | Building the Future of Digital Products",
  description: "Getia is a venture studio based in Norway. We transform bold ideas into market-defining products across AI, SaaS, and next-generation consumer experiences.",
  keywords: ["venture studio", "startup", "investment", "Norway", "SaaS", "AI", "digital products"],
  authors: [{ name: "Getia" }],
  openGraph: {
    title: "Getia | Building the Future of Digital Products",
    description: "We transform bold ideas into market-defining products.",
    url: "https://getia.no",
    siteName: "Getia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Getia | Building the Future of Digital Products",
    description: "We transform bold ideas into market-defining products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://getcookies.co/api/v1/widget/script.js"
          data-domain-id="6179fdcb-cdc1-4c5c-85c5-9e87e45ff42e"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
