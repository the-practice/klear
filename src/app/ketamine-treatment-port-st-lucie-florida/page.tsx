import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Port St. Lucie, FL | At-Home Therapy | Klear",
  description: "Get FDA-approved ketamine treatment in Port St. Lucie, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Serving St. Lucie County and the Treasure Coast.",
  keywords: [
    "ketamine treatment Port St. Lucie",
    "ketamine therapy Port St. Lucie",
    "at-home ketamine Port St. Lucie",
    "depression treatment Port St. Lucie",
    "anxiety treatment Port St. Lucie",
    "PTSD treatment Port St. Lucie",
    "ketamine St. Lucie County",
    "Port St. Lucie mental health treatment",
    "ketamine Tradition",
    "ketamine Treasure Coast",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Port St. Lucie, FL | Klear",
    description: "Get FDA-approved ketamine treatment in Port St. Lucie from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD.",
    type: "website",
  },
};

export default function PortStLuciePage() {
  return (
    <>
      <CitySchema city={floridaCities["port-st-lucie"]} url="https://kleartreatment.com/ketamine-treatment-port-st-lucie-florida" />
      <CityLandingPage city={floridaCities["port-st-lucie"]} />
    </>
  );
}
