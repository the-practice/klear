import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Jacksonville, FL | At-Home Therapy | Klear",
  description: "Get effective ketamine treatment in Jacksonville, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Serving Duval County and surrounding areas.",
  keywords: [
    "ketamine treatment Jacksonville",
    "ketamine therapy Jacksonville",
    "at-home ketamine Jacksonville",
    "depression treatment Jacksonville",
    "anxiety treatment Jacksonville",
    "PTSD treatment Jacksonville",
    "ketamine Duval County",
    "Jacksonville mental health treatment",
    "ketamine St. Johns County",
    "ketamine Orange Park",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Jacksonville, FL | Klear",
    description: "Get effective ketamine treatment in Jacksonville from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD.",
    type: "website",
  },
};

export default function JacksonvillePage() {
  return (
    <>
      <CitySchema city={floridaCities.jacksonville} url="https://kleartreatment.com/ketamine-treatment-jacksonville-florida" />
      <CityLandingPage city={floridaCities.jacksonville} />
    </>
  );
}
