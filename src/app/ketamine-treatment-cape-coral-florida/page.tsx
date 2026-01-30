import { Metadata } from "next";
import { CityLandingPage } from "@/components/city-landing-page/CityLandingPage";
import { CitySchema } from "@/components/city-landing-page/CitySchema";
import { floridaCities } from "@/data/florida-cities";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Cape Coral, FL | At-Home Therapy | Klear",
  description: "Get effective ketamine treatment in Cape Coral, Florida from licensed psychiatric providers. At-home therapy with medical supervision. Serving Lee County and Southwest Florida.",
  keywords: [
    "ketamine treatment Cape Coral",
    "ketamine therapy Cape Coral",
    "at-home ketamine Cape Coral",
    "depression treatment Cape Coral",
    "anxiety treatment Cape Coral",
    "PTSD treatment Cape Coral",
    "ketamine Lee County",
    "Cape Coral mental health treatment",
    "ketamine Fort Myers",
    "ketamine Southwest Florida",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Cape Coral, FL | Klear",
    description: "Get effective ketamine treatment in Cape Coral from licensed psychiatric providers. At-home therapy for depression, anxiety, PTSD.",
    type: "website",
  },
};

export default function CapeCoralPage() {
  return (
    <>
      <CitySchema city={floridaCities["cape-coral"]} url="https://kleartreatment.com/ketamine-treatment-cape-coral-florida" />
      <CityLandingPage city={floridaCities["cape-coral"]} />
    </>
  );
}
