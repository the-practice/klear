import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kleartreatment.com"),
  title: {
    default: "Klear® | At-Home Ketamine Treatment for Depression",
    template: "%s | Klear®",
  },
  description:
    "Klear® offers FDA-supervised at-home ketamine therapy for depression, anxiety, and PTSD. Licensed clinicians, personalized treatment plans, and ongoing support. Available in Florida and Washington State.",
  keywords: [
    "ketamine therapy",
    "ketamine treatment",
    "depression treatment",
    "anxiety treatment",
    "PTSD treatment",
    "at-home ketamine",
    "mental health treatment",
    "psychedelic therapy",
    "ketamine for depression",
    "Florida ketamine treatment",
    "Washington ketamine treatment",
  ],
  authors: [{ name: "Klear®" }],
  creator: "Klear®",
  publisher: "Klear®",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kleartreatment.com",
    siteName: "Klear®",
    title: "Klear® | At-Home Ketamine Treatment for Depression",
    description:
      "Transform your mental health with clinician-guided ketamine therapy from the comfort of home. Available in Florida and Washington State.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Klear® - At-Home Ketamine Treatment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klear® | At-Home Ketamine Treatment for Depression",
    description:
      "Transform your mental health with clinician-guided ketamine therapy from the comfort of home.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kleartreatment.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Klear®",
              description:
                "At-home ketamine treatment for depression, anxiety, and PTSD",
              url: "https://kleartreatment.com",
              areaServed: [
                {
                  "@type": "State",
                  name: "Florida",
                  sameAs: "https://en.wikipedia.org/wiki/Florida",
                },
                {
                  "@type": "State",
                  name: "Washington",
                  sameAs: "https://en.wikipedia.org/wiki/Washington_(state)",
                },
              ],
              medicalSpecialty: "Psychiatry",
              availableService: {
                "@type": "MedicalTherapy",
                name: "Ketamine-Assisted Therapy",
                description:
                  "FDA-supervised ketamine treatment for treatment-resistant depression",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
