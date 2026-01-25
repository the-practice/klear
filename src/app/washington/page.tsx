import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketamine Treatment in Washington State | At-Home Therapy",
  description:
    "Klear offers at-home ketamine treatment for depression, anxiety, and PTSD in Washington State. Licensed Washington clinicians, discreet home delivery to Seattle, Tacoma, Spokane & statewide.",
  keywords: [
    "ketamine treatment Washington",
    "ketamine therapy Washington State",
    "at-home ketamine Seattle",
    "depression treatment Seattle",
    "anxiety treatment Washington",
    "PTSD treatment Washington",
    "ketamine Seattle",
    "ketamine Tacoma",
    "ketamine Spokane",
    "ketamine Bellevue",
    "Washington mental health treatment",
  ],
  openGraph: {
    title: "At-Home Ketamine Treatment in Washington State | Klear",
    description:
      "Experience breakthrough depression and anxiety treatment from home. Klear provides licensed ketamine therapy throughout Washington State.",
  },
};

export default function WashingtonPage() {
  const cities = [
    { name: "Seattle", description: "King County, downtown Seattle, and surrounding areas" },
    { name: "Tacoma", description: "Pierce County and South Puget Sound" },
    { name: "Bellevue", description: "Eastside including Redmond, Kirkland, and Issaquah" },
    { name: "Spokane", description: "Eastern Washington and Spokane County" },
    { name: "Olympia", description: "State capital and Thurston County" },
    { name: "Vancouver", description: "Clark County and Southwest Washington" },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--klear-primary-50)] border border-[var(--klear-primary-200)] mb-6">
              <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium text-[var(--klear-primary-700)]">Now serving all of Washington State</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--klear-neutral-900)]">
              At-home ketamine treatment in Washington
            </h1>
            <p className="mt-6 text-lg text-[var(--klear-neutral-600)]">
              Experience clinician-guided ketamine therapy for depression, anxiety, and PTSD from the comfort of your Washington home. Licensed Washington clinicians, discreet delivery statewide.
            </p>
            <div className="mt-10">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[var(--klear-primary-600)] hover:bg-[var(--klear-primary-700)] rounded-full shadow-lg transition-colors"
              >
                Check if you qualify in Washington
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Serving patients across Washington State
            </h2>
            <p className="mt-4 text-[var(--klear-neutral-600)]">
              From the Puget Sound to Eastern Washington, Klear delivers ketamine treatment to your door.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="bg-[var(--klear-neutral-50)] rounded-xl p-6">
                <h3 className="font-semibold text-[var(--klear-neutral-900)]">{city.name}</h3>
                <p className="mt-1 text-sm text-[var(--klear-neutral-600)]">{city.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[var(--klear-neutral-600)]">
            Plus all other Washington cities and counties. If you have a Washington address, we can serve you.
          </p>
        </div>
      </section>

      {/* Why Washington */}
      <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
                Why Washingtonians choose Klear
              </h2>
              <p className="mt-4 text-[var(--klear-neutral-600)]">
                Washington&apos;s gray winters and high-pressure tech culture contribute to elevated rates of depression and anxiety. At-home ketamine therapy offers a convenient, effective solution.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Licensed Washington State clinicians who understand local needs",
                  "Skip I-5 traffic and ferry waits—treatment comes to you",
                  "Perfect for the Pacific Northwest's work-from-home culture",
                  "Combat Seasonal Affective Disorder (SAD) effectively",
                  "Telehealth consultations fit busy tech schedules",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--klear-primary-500)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[var(--klear-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-[var(--klear-primary-600)]">1 in 5</div>
                <p className="mt-2 text-[var(--klear-neutral-600)]">Washington adults experience mental illness</p>
              </div>
              <div className="mt-8 pt-8 border-t border-[var(--klear-neutral-200)] text-center">
                <div className="text-5xl font-bold text-[var(--klear-primary-600)]">9%</div>
                <p className="mt-2 text-[var(--klear-neutral-600)]">have Seasonal Affective Disorder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Washington Testimonial */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--klear-primary-50)] rounded-2xl p-8 lg:p-12 text-center">
            <blockquote className="text-xl lg:text-2xl text-[var(--klear-neutral-800)]">
              &ldquo;Working in Seattle tech, I was burning out fast. The dark winters made everything worse. Klear&apos;s at-home treatment let me get help without taking time off work. My depression has improved dramatically.&rdquo;
            </blockquote>
            <div className="mt-8">
              <div className="font-semibold text-[var(--klear-neutral-900)]">David K.</div>
              <div className="text-[var(--klear-neutral-600)]">Seattle, Washington</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--klear-primary-600)] to-[var(--klear-primary-800)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to start your healing journey in Washington?
          </h2>
          <p className="mt-4 text-[var(--klear-primary-100)]">
            Take our free assessment to see if ketamine therapy is right for you.
          </p>
          <div className="mt-8">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--klear-primary-700)] bg-white hover:bg-[var(--klear-neutral-100)] rounded-full transition-colors"
            >
              Get Started in Washington
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
