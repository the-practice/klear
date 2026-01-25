import Link from "next/link";
import { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Florida | At-Home Therapy",
  description:
    "Klear offers at-home ketamine treatment for depression, anxiety, and PTSD in Florida. Licensed Florida clinicians, discreet home delivery to Tampa, Miami, Orlando, Jacksonville & statewide.",
  keywords: [
    "ketamine treatment Florida",
    "ketamine therapy Florida",
    "at-home ketamine Florida",
    "depression treatment Florida",
    "anxiety treatment Florida",
    "PTSD treatment Florida",
    "ketamine Tampa",
    "ketamine Miami",
    "ketamine Orlando",
    "ketamine Jacksonville",
    "Florida mental health treatment",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Florida | Klear",
    description:
      "Experience breakthrough depression and anxiety treatment from home. Klear provides licensed ketamine therapy throughout Florida.",
  },
};

export default function FloridaPage() {
  const cities = [
    { name: "Miami", description: "Serving Miami-Dade County and surrounding areas" },
    { name: "Tampa", description: "Covering Tampa Bay, St. Petersburg, and Clearwater" },
    { name: "Orlando", description: "Central Florida including Orange and Seminole Counties" },
    { name: "Jacksonville", description: "Northeast Florida and Duval County" },
    { name: "Fort Lauderdale", description: "Broward County and the Gold Coast" },
    { name: "West Palm Beach", description: "Palm Beach County and the Treasure Coast" },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
        {/* Background Image Placeholder - Edge to Edge */}
        <div className="absolute inset-0 opacity-15">
          <ImagePlaceholder
            id="7a"
            aspectRatio="banner"
            description="Florida landscape - palm trees, beach, sunset"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--klear-primary-50)] border border-[var(--klear-primary-200)] mb-6">
              <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium text-[var(--klear-primary-700)]">Now serving all of Florida</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--klear-neutral-900)]">
              At-home ketamine treatment in Florida
            </h1>
            <p className="mt-6 text-lg text-[var(--klear-neutral-600)]">
              Experience clinician-guided ketamine therapy for depression, anxiety, and PTSD from the comfort of your Florida home. Licensed Florida clinicians, discreet delivery statewide.
            </p>
            <div className="mt-10">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[var(--klear-primary-600)] hover:bg-[var(--klear-primary-700)] rounded-full shadow-lg transition-colors"
              >
                Check if you qualify in Florida
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Scenic Image - Edge to Edge */}
      <section className="relative">
        <ImagePlaceholder
          id="7b"
          aspectRatio="wide"
          description="Florida panoramic - beach, palm trees, or coastal view - Edge to Edge"
          className="w-full rounded-none border-0"
        />
      </section>

      {/* Cities We Serve */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Serving patients across Florida
            </h2>
            <p className="mt-4 text-[var(--klear-neutral-600)]">
              No matter where you are in the Sunshine State, Klear can deliver ketamine treatment to your door.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <div
                key={city.name}
                className="bg-[var(--klear-neutral-50)] rounded-xl p-6 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="font-semibold text-[var(--klear-neutral-900)]">{city.name}</h3>
                <p className="mt-1 text-sm text-[var(--klear-neutral-600)]">{city.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[var(--klear-neutral-600)]">
            Plus all other Florida cities and counties. If you have a Florida address, we can serve you.
          </p>
        </div>
      </section>

      {/* Why Florida */}
      <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left opacity-0" style={{ animationFillMode: 'forwards' }}>
              <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
                Why Floridians choose Klear
              </h2>
              <p className="mt-4 text-[var(--klear-neutral-600)]">
                Florida&apos;s mental health needs are unique. With a diverse population and busy lifestyles, at-home ketamine therapy offers a convenient, effective solution.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Licensed Florida clinicians who understand local healthcare",
                  "Skip traffic and wait times—treatment comes to you",
                  "Perfect for Florida's active retiree community",
                  "Discreet delivery to your home or condo",
                  "Telehealth consultations fit busy schedules",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <svg className="w-6 h-6 text-[var(--klear-primary-500)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[var(--klear-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in-right opacity-0" style={{ animationFillMode: 'forwards' }}>
              <ImagePlaceholder
                id="7c"
                aspectRatio="square"
                description="Florida lifestyle - person relaxing at home or on patio"
                className="w-full mb-6"
              />
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[var(--klear-primary-600)]">2M+</div>
                  <p className="mt-2 text-[var(--klear-neutral-600)]">Floridians suffer from depression</p>
                </div>
                <div className="mt-8 pt-8 border-t border-[var(--klear-neutral-200)] text-center">
                  <div className="text-5xl font-bold text-[var(--klear-primary-600)]">70%</div>
                  <p className="mt-2 text-[var(--klear-neutral-600)]">respond to ketamine therapy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Testimonial */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
            <ImagePlaceholder
              id="7d"
              aspectRatio="square"
              description="Florida patient portrait - warm, friendly"
              className="w-full h-full rounded-none border-0"
            />
            <div className="bg-[var(--klear-primary-50)] p-8 lg:p-12 flex items-center animate-fade-in-right opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--klear-accent-500)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-[var(--klear-neutral-800)] leading-relaxed">
                  &ldquo;As a Tampa resident, I was thrilled to find Klear. The heat and traffic here make leaving home for appointments tough. Having my treatment delivered and doing sessions in my living room has been a game-changer for my depression.&rdquo;
                </blockquote>
                <div className="mt-8">
                  <div className="font-semibold text-[var(--klear-neutral-900)]">Maria S.</div>
                  <div className="text-[var(--klear-neutral-600)]">Tampa, Florida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--klear-primary-600)] to-[var(--klear-primary-800)] relative overflow-hidden">
        {/* Background Image Placeholder - Edge to Edge */}
        <div className="absolute inset-0 opacity-10">
          <ImagePlaceholder
            id="7e"
            aspectRatio="wide"
            description="Florida sunset/palm silhouettes pattern"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-scale-in">
          <h2 className="text-3xl font-bold text-white">
            Ready to start your healing journey in Florida?
          </h2>
          <p className="mt-4 text-[var(--klear-primary-100)]">
            Take our free assessment to see if ketamine therapy is right for you.
          </p>
          <div className="mt-8">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--klear-primary-700)] bg-white hover:bg-[var(--klear-neutral-100)] rounded-full transition-colors"
            >
              Get Started in Florida
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
