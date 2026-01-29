import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Miami, FL | At-Home Therapy | Klear",
  description: "Get FDA-approved ketamine treatment in Miami, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Serving Miami-Dade County and surrounding areas.",
  keywords: [
    "ketamine treatment Miami",
    "ketamine therapy Miami",
    "at-home ketamine Miami",
    "depression treatment Miami",
    "anxiety treatment Miami",
    "PTSD treatment Miami",
    "ketamine Miami-Dade County",
    "Miami mental health treatment",
    "ketamine Coral Gables",
    "ketamine Brickell",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Miami, FL | Klear",
    description: "Get FDA-approved ketamine treatment in Miami from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD.",
    type: "website",
  },
};

export default function MiamiPage() {
  return (
    <>
      <CitySchema city={floridaCities.miami} url="https://kleartreatment.com/ketamine-treatment-miami-florida" />
      <CityLandingPage city={floridaCities.miami} />
    </>
  );
}
