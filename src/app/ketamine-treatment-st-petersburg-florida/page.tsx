import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in St. Petersburg, FL | At-Home Therapy | Klear",
  description: "Get effective ketamine treatment in St. Petersburg, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Serving Pinellas County and surrounding areas.",
  keywords: [
    "ketamine treatment St. Petersburg",
    "ketamine therapy St. Petersburg",
    "at-home ketamine St. Petersburg",
    "depression treatment St. Petersburg",
    "anxiety treatment St. Petersburg",
    "PTSD treatment St. Petersburg",
    "ketamine Pinellas County",
    "St. Pete mental health treatment",
    "ketamine Downtown St. Pete",
    "ketamine Treasure Island",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in St. Petersburg, FL | Klear",
    description: "Get effective ketamine treatment in St. Petersburg from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD.",
    type: "website",
  },
};

export default function StPetersburgPage() {
  return (
    <>
      <CitySchema city={floridaCities["st-petersburg"]} url="https://kleartreatment.com/ketamine-treatment-st-petersburg-florida" />
      <CityLandingPage city={floridaCities["st-petersburg"]} />
    </>
  );
}
