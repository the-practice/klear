import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kleartreatment.com"),
  title: {
    default: "Klear® | At-Home Ketamine Treatment - Coming Soon",
    template: "%s | Klear®",
  },
  description:
    "Something transformative is on its way. Clinician-guided ketamine therapy, delivered to your doorstep. Join the waitlist for at-home mental health treatment.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kleartreatment.com" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
