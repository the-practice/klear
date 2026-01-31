import Link from "next/link";
import { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { TextEffect } from "@/components/ui/text-effect";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Klear®'s at-home ketamine therapy program works. From your initial assessment to ongoing treatment, we guide you every step of the way.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Complete Your Assessment",
      description:
        "Start with a comprehensive online assessment that takes about 10 minutes. We'll ask about your mental health history, current symptoms, medications, and treatment goals. This helps us understand if ketamine therapy might be right for you.",
      details: [
        "Health history questionnaire",
        "Current medication review",
        "Mental health symptom assessment",
        "Treatment goal discussion",
      ],
      imageId: "2b",
      imageDesc: "Person filling out assessment on laptop",
    },
    {
      number: "02",
      title: "Meet Your Clinician",
      description:
        "Schedule a video consultation with one of our board-certified clinicians. They'll review your assessment, answer your questions, and work with you to create a personalized treatment plan tailored to your needs.",
      details: [
        "45-minute video consultation",
        "Personalized treatment plan",
        "Medication dosing discussion",
        "Safety protocol review",
      ],
      imageId: "2c",
      imageDesc: "Video call with clinician",
    },
    {
      number: "03",
      title: "Receive Your Treatment Kit",
      description:
        "Once approved, your personalized treatment kit is shipped discreetly to your home. It includes everything you need for your sessions, along with detailed instructions and safety guidelines.",
      details: [
        "Prescribed ketamine medication",
        "Blood pressure monitor",
        "Treatment guide",
        "Safety checklist",
      ],
      imageId: "2d",
      imageDesc: "Treatment kit being unboxed",
    },
    {
      number: "04",
      title: "Begin Your Sessions",
      description:
        "Complete your ketamine sessions in the comfort and privacy of your own home. Each session lasts about 2 hours. You'll have a trusted person nearby and can reach our clinical team if needed.",
      details: [
        "Guided session protocol",
        "2-hour session duration",
        "At-home comfort",
        "Clinical support available",
      ],
      imageId: "2e",
      imageDesc: "Peaceful home session environment",
    },
    {
      number: "05",
      title: "Integration & Follow-up",
      description:
        "Between sessions, you'll work with your clinician to integrate your experiences and track your progress. Regular check-ins ensure your treatment is optimized for the best outcomes.",
      details: [
        "Progress tracking",
        "Integration coaching",
        "Dosage adjustments",
        "Ongoing clinician support",
      ],
      imageId: "2f",
      imageDesc: "Follow-up consultation session",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
        {/* Background Image Placeholder - Edge to Edge */}
        <div className="absolute inset-0 opacity-10">
          <ImagePlaceholder
            id="2a"
            aspectRatio="banner"
            description="Abstract healing journey visual"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <TextEffect
              as="h1"
              per="word"
              preset="fade"
              className="text-4xl sm:text-5xl font-bold text-[var(--klear-neutral-900)]"
            >
              Your path to healing, step by step
            </TextEffect>
            <p className="mt-6 text-lg text-[var(--klear-neutral-600)]">
              We&apos;ve designed a simple, supportive process that fits your life. From your first assessment to ongoing care, we&apos;re with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative animate-fade-in-up opacity-0`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-[var(--klear-primary-100)] hidden md:block" />
                )}
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--klear-primary-600)] flex items-center justify-center text-white font-bold text-xl">
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[var(--klear-neutral-900)]">{step.title}</h2>
                        <p className="mt-4 text-[var(--klear-neutral-600)]">{step.description}</p>
                        <ul className="mt-6 grid grid-cols-2 gap-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-[var(--klear-neutral-600)]">
                              <svg className="w-5 h-5 text-[var(--klear-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <ImagePlaceholder
                      id={step.imageId}
                      aspectRatio="video"
                      description={step.imageDesc}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              What to expect during a session
            </h2>
            <p className="mt-4 text-[var(--klear-neutral-600)]">
              Each ketamine session is a guided experience designed for safety and effectiveness
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <ImagePlaceholder
                id="2g"
                aspectRatio="video"
                description="Session preparation scene"
                className="w-full rounded-none border-x-0 border-t-0"
              />
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-[var(--klear-primary-600)]">Before</div>
                <p className="mt-4 text-[var(--klear-neutral-600)]">
                  Prepare your space, have your support person ready, and review the safety checklist. Take your medication as prescribed.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <ImagePlaceholder
                id="2h"
                aspectRatio="video"
                description="During session - peaceful setting"
                className="w-full rounded-none border-x-0 border-t-0"
              />
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-[var(--klear-primary-600)]">During</div>
                <p className="mt-4 text-[var(--klear-neutral-600)]">
                  Relax in a comfortable position. The experience lasts about 45-60 minutes. Many people use eye masks and calming music.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <ImagePlaceholder
                id="2i"
                aspectRatio="video"
                description="Post-session reflection"
                className="w-full rounded-none border-x-0 border-t-0"
              />
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-[var(--klear-primary-600)]">After</div>
                <p className="mt-4 text-[var(--klear-neutral-600)]">
                  Rest for the remainder of the 2-hour session. Journal your thoughts. Don&apos;t drive or operate machinery for 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--klear-primary-600)] to-[var(--klear-primary-800)] relative overflow-hidden">
        {/* Background Image Placeholder - Edge to Edge */}
        <div className="absolute inset-0 opacity-5">
          <ImagePlaceholder
            id="2j"
            aspectRatio="wide"
            description="Abstract hope/healing pattern"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-scale-in">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-[var(--klear-primary-100)]">
            Take our free assessment to see if Klear<sup>®</sup> is right for you.
          </p>
          <div className="mt-8">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--klear-primary-700)] bg-white hover:bg-[var(--klear-neutral-100)] rounded-full transition-colors"
            >
              Check if you qualify
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
