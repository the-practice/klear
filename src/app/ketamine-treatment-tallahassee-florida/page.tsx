import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Tallahassee, FL | At-Home Therapy | Klear",
  description: "Get effective ketamine treatment in Tallahassee, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Serving Leon County and the Big Bend region.",
  keywords: [
    "ketamine treatment Tallahassee",
    "ketamine therapy Tallahassee",
    "at-home ketamine Tallahassee",
    "depression treatment Tallahassee",
    "anxiety treatment Tallahassee",
    "PTSD treatment Tallahassee",
    "ketamine Leon County",
    "Tallahassee mental health treatment",
    "ketamine FSU",
    "ketamine Florida State University",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Tallahassee, FL | Klear",
    description: "Get effective ketamine treatment in Tallahassee from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD.",
    type: "website",
  },
};

export default function TallahasseePage() {
  return (
    <>
      <CitySchema city={floridaCities.tallahassee} url="https://kleartreatment.com/ketamine-treatment-tallahassee-florida" />
      <CityLandingPage city={floridaCities.tallahassee} />
    </>
  );
}
