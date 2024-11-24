import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const architypeStedelijk = localFont({
  src: "./fonts/ArchitypeStedelijk.woff",
  variable: "--font-architype-stedelijk",
  weight: "100 900",
});
const cyGroteskWide = localFont({
  src: "./fonts/CyGroteskWide.woff",
  variable: "--font-cy-grotesk-wide",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ukiyotech",
  description: "the ukiyotech website made by ben",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
