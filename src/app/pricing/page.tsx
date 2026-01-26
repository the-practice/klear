import Link from "next/link";
import { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Klear®'s at-home ketamine therapy. Affordable treatment plans with HSA/FSA eligibility and flexible payment options.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      description: "Begin your healing journey",
      price: 399,
      period: "first month",
      sessions: 4,
      features: [
        "Initial clinician consultation",
        "4 ketamine sessions",
        "Treatment kit with supplies",
        "Blood pressure monitor",
        "Messaging support",
        "Progress tracking app",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Complete",
      description: "Our most popular program",
      price: 299,
      period: "per month",
      sessions: 6,
      features: [
        "Everything in Starter",
        "6 ketamine sessions",
        "Monthly clinician check-in",
        "Integration coaching session",
        "Priority messaging support",
        "Personalized dosing adjustments",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Maintenance",
      description: "For ongoing wellness",
      price: 199,
      period: "per month",
      sessions: 2,
      features: [
        "2 ketamine sessions",
        "Quarterly clinician review",
        "Ongoing messaging support",
        "Prescription refills",
        "Progress tracking",
        "Community access",
      ],
      cta: "Get Started",
      popular: false,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
        {/* Background Image Placeholder - Edge to Edge */}
        <div className="absolute inset-0 opacity-10">
          <ImagePlaceholder
            id="3a"
            aspectRatio="banner"
            description="Abstract wellness/value visual"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--klear-neutral-900)]">
              Transparent, affordable pricing
            </h1>
            <p className="mt-6 text-lg text-[var(--klear-neutral-600)]">
              Quality mental health care shouldn&apos;t break the bank. Our programs are designed to be accessible with flexible payment options.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--klear-secondary-50)] border border-[var(--klear-secondary-200)]">
              <svg className="w-5 h-5 text-[var(--klear-secondary-600)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-[var(--klear-secondary-700)]">HSA/FSA Eligible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 animate-fade-in-up opacity-0 ${
                  plan.popular
                    ? "bg-[var(--klear-primary-600)] text-white ring-4 ring-[var(--klear-primary-600)] ring-offset-4"
                    : "bg-[var(--klear-neutral-50)]"
                }`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--klear-accent-500)] text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className={`text-xl font-semibold ${plan.popular ? "text-white" : "text-[var(--klear-neutral-900)]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-2 text-sm ${plan.popular ? "text-[var(--klear-primary-100)]" : "text-[var(--klear-neutral-600)]"}`}>
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-[var(--klear-neutral-900)]"}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? "text-[var(--klear-primary-100)]" : "text-[var(--klear-neutral-600)]"}`}>
                      /{plan.period}
                    </span>
                  </div>
                  <p className={`mt-2 text-sm ${plan.popular ? "text-[var(--klear-primary-100)]" : "text-[var(--klear-neutral-500)]"}`}>
                    {plan.sessions} sessions included
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-[var(--klear-primary-200)]" : "text-[var(--klear-primary-500)]"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${plan.popular ? "text-[var(--klear-primary-50)]" : "text-[var(--klear-neutral-600)]"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/get-started"
                    className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-colors ${
                      plan.popular
                        ? "bg-white text-[var(--klear-primary-600)] hover:bg-[var(--klear-neutral-100)]"
                        : "bg-[var(--klear-primary-600)] text-white hover:bg-[var(--klear-primary-700)]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              What&apos;s included in every plan
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Licensed Clinicians", desc: "Board-certified mental health professionals", imageId: "3b" },
              { title: "Secure Platform", desc: "HIPAA-compliant telehealth and messaging", imageId: "3c" },
              { title: "Treatment Kit", desc: "Everything you need shipped to your door", imageId: "3d" },
              { title: "24/7 Support", desc: "Clinical team available for emergencies", imageId: "3e" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ImagePlaceholder
                  id={item.imageId}
                  aspectRatio="square"
                  description={item.title}
                  className="w-full rounded-none border-x-0 border-t-0"
                />
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-[var(--klear-neutral-900)]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Kit Image */}
      <section className="relative">
        <ImagePlaceholder
          id="3f"
          aspectRatio="wide"
          description="Full treatment kit laid out - Edge to Edge"
          className="w-full rounded-none border-0"
        />
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)] text-center animate-fade-in">
            Pricing FAQs
          </h2>
          <div className="mt-12 space-y-6">
            {[
              {
                q: "Can I use my HSA or FSA?",
                a: "Yes! Klear® treatments are eligible for HSA and FSA funds. We provide all necessary documentation for reimbursement.",
              },
              {
                q: "Do you offer payment plans?",
                a: "We offer flexible payment options including monthly installments. Ask about our financing options during your consultation.",
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a satisfaction guarantee. If you're not seeing improvement after your initial program, we'll work with you to adjust your treatment plan.",
              },
              {
                q: "Are there any hidden fees?",
                a: "No hidden fees. The price you see includes consultation, medication, supplies, and clinical support.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-[var(--klear-neutral-50)] rounded-xl p-6 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-[var(--klear-neutral-900)]">
                  {faq.q}
                  <svg className="w-5 h-5 text-[var(--klear-neutral-500)] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-[var(--klear-neutral-600)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
