import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Orlando, FL | At-Home Therapy | Klear",
  description: "Get effective ketamine treatment in Orlando, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Serving Orange County and surrounding areas.",
  keywords: [
    "ketamine treatment Orlando",
    "ketamine therapy Orlando",
    "at-home ketamine Orlando",
    "depression treatment Orlando",
    "anxiety treatment Orlando",
    "PTSD treatment Orlando",
    "ketamine Orange County",
    "Orlando mental health treatment",
    "ketamine Winter Park",
    "ketamine Lake Mary",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Orlando, FL | Klear",
    description: "Get effective ketamine treatment in Orlando from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD.",
    type: "website",
  },
};

export default function OrlandoPage() {
  return (
    <>
      <CitySchema city={floridaCities.orlando} url="https://kleartreatment.com/ketamine-treatment-orlando-florida" />
      <CityLandingPage city={floridaCities.orlando} />
    </>
  );
}
