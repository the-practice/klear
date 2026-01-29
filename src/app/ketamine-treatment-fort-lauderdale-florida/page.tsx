import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Fort Lauderdale, FL | At-Home Therapy | Klear",
  description: "Get FDA-approved ketamine treatment in Fort Lauderdale, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Serving Broward County and surrounding areas.",
  keywords: [
    "ketamine treatment Fort Lauderdale",
    "ketamine therapy Fort Lauderdale",
    "at-home ketamine Fort Lauderdale",
    "depression treatment Fort Lauderdale",
    "anxiety treatment Fort Lauderdale",
    "PTSD treatment Fort Lauderdale",
    "ketamine Broward County",
    "Fort Lauderdale mental health treatment",
    "ketamine Las Olas",
    "ketamine Harbor Beach",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Fort Lauderdale, FL | Klear",
    description: "Get FDA-approved ketamine treatment in Fort Lauderdale from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD.",
    type: "website",
  },
};

export default function FortLauderdalePage() {
  return (
    <>
      <CitySchema city={floridaCities["fort-lauderdale"]} url="https://kleartreatment.com/ketamine-treatment-fort-lauderdale-florida" />
      <CityLandingPage city={floridaCities["fort-lauderdale"]} />
    </>
  );
}
