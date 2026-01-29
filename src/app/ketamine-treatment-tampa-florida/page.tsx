import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Tampa, FL | At-Home Therapy | Klear",
  description: "Get FDA-approved ketamine treatment in Tampa, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Serving Hillsborough County and surrounding areas.",
  keywords: [
    "ketamine treatment Tampa",
    "ketamine therapy Tampa",
    "at-home ketamine Tampa",
    "depression treatment Tampa",
    "anxiety treatment Tampa",
    "PTSD treatment Tampa",
    "ketamine Hillsborough County",
    "Tampa mental health treatment",
    "ketamine South Tampa",
    "ketamine Carrollwood",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Tampa, FL | Klear",
    description: "Get FDA-approved ketamine treatment in Tampa from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD.",
    type: "website",
  },
};

export default function TampaPage() {
  return (
    <>
      <CitySchema city={floridaCities.tampa} url="https://kleartreatment.com/ketamine-treatment-tampa-florida" />
      <CityLandingPage city={floridaCities.tampa} />
    </>
  );
}
