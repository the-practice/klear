import { FloridaCityData } from "@/data/florida-cities";

interface CitySchemaProps {
  city: FloridaCityData;
  url: string;
}

export function CitySchema({ city, url }: CitySchemaProps) {
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Klear - Ketamine Treatment ${city.name}`,
    description: `At-home ketamine treatment for ${city.name}, ${city.county} County residents`,
    url: url,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "Florida"
      }
    },
    medicalSpecialty: "Psychiatric",
    availableService: {
      "@type": "MedicalTherapy",
      name: "Ketamine Therapy",
      description: "FDA-approved ketamine treatment for depression and anxiety"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is ketamine treatment legal in ${city.name}, Florida?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, ketamine is FDA-approved and can be legally prescribed by licensed providers for off-label use in treating depression, anxiety, and other conditions. Our entire team is licensed to practice in Florida.`
        }
      },
      {
        "@type": "Question",
        name: "How quickly can I start treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Most ${city.name} patients complete their initial consultation within a few days. If approved, medication typically arrives within 3-5 business days. Many patients begin their first session within 1-2 weeks of initial contact.`
        }
      },
      {
        "@type": "Question",
        name: "Is ketamine therapy safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When administered under medical supervision, ketamine has an excellent safety profile. We monitor you throughout every session via video and have protocols in place for any concerns."
        }
      },
      {
        "@type": "Question",
        name: "What does a ketamine session feel like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Experiences vary, but most patients describe a dreamlike, dissociative state lasting 45-60 minutes. Many find it deeply relaxing. You'll remain conscious and able to communicate with our team throughout."
        }
      },
      {
        "@type": "Question",
        name: "How many sessions will I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Treatment protocols vary by individual. Most patients start with 6 sessions over 2-3 weeks, then transition to maintenance sessions as needed. We'll create a personalized treatment plan during your evaluation."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
