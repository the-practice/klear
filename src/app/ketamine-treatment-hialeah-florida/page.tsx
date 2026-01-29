import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Hialeah, FL | At-Home Therapy | Klear",
  description: "Get FDA-approved ketamine treatment in Hialeah, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Servicios en español. Serving Miami-Dade County.",
  keywords: [
    "ketamine treatment Hialeah",
    "ketamine therapy Hialeah",
    "at-home ketamine Hialeah",
    "depression treatment Hialeah",
    "anxiety treatment Hialeah",
    "PTSD treatment Hialeah",
    "ketamine Miami-Dade County",
    "Hialeah mental health treatment",
    "ketamina Hialeah",
    "tratamiento depresión Hialeah",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Hialeah, FL | Klear",
    description: "Get FDA-approved ketamine treatment in Hialeah from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD. Servicios en español.",
    type: "website",
  },
};

export default function HialeahPage() {
  return (
    <>
      <CitySchema city={floridaCities.hialeah} url="https://kleartreatment.com/ketamine-treatment-hialeah-florida" />
      <CityLandingPage city={floridaCities.hialeah} />
    </>
  );
}
