import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { FloridaCityData } from "@/data/florida-cities";

interface CityLandingPageProps {
  city: FloridaCityData;
}

export function CityLandingPage({ city }: CityLandingPageProps) {
  const { name, county, neighborhoods, subheadline, localContext, testimonial, nearbyCities } = city;
  const isTampa = city.slug === "tampa";

  const conditions = [
    {
      title: "Treatment-Resistant Depression",
      description: "When antidepressants haven't provided relief"
    },
    {
      title: "Anxiety Disorders",
      description: "Including generalized anxiety and panic disorder"
    },
    {
      title: "PTSD",
      description: "Post-traumatic stress disorder, particularly relevant for veterans"
    },
    {
      title: "OCD",
      description: "Obsessive-compulsive disorder symptoms"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Free Consultation",
      description: "Schedule a telehealth consultation with our psychiatric team. We'll discuss your symptoms, treatment history, and determine if ketamine therapy is right for you."
    },
    {
      step: "2",
      title: "Medical Evaluation",
      description: "If you're a candidate, we conduct a comprehensive psychiatric evaluation. Our Florida-licensed providers review your full medical history to ensure ketamine is safe for you."
    },
    {
      step: "3",
      title: "Prescription & Delivery",
      description: `Once approved, your ketamine prescription is filled and shipped directly to your ${name} address via secure pharmacy delivery.`
    },
    {
      step: "4",
      title: "Guided Treatment Sessions",
      description: "You'll take your medication at home while connected to our team via secure video. We monitor your session in real-time for safety and optimal results."
    },
    {
      step: "5",
      title: "Ongoing Care",
      description: "Regular check-ins, dosage adjustments, and integration support. We're with you throughout your healing journey."
    }
  ];

  const benefits = [
    {
      title: "No Travel Required",
      description: "Skip the drive to a clinic. Receive treatment in your own home."
    },
    {
      title: "Complete Privacy",
      description: "No waiting rooms, no running into people you know."
    },
    {
      title: "Comfort & Safety",
      description: "You're in your familiar environment, which can enhance the therapeutic experience."
    },
    {
      title: "Flexible Scheduling",
      description: "Sessions that work around your life, not clinic hours."
    },
    {
      title: "Same Quality Care",
      description: "Florida-licensed psychiatric providers, same protocols as any clinic."
    },
    {
      title: "Cost Effective",
      description: "Save on gas, parking, and time off work."
    }
  ];

  const faqs = [
    {
      q: `Is ketamine treatment legal in ${name}, Florida?`,
      a: `Yes, ketamine is FDA-approved and can be legally prescribed by licensed providers for off-label use in treating depression, anxiety, and other conditions. Our entire team is licensed to practice in Florida.`
    },
    {
      q: "How quickly can I start treatment?",
      a: `Most ${name} patients complete their initial consultation within a few days. If approved, medication typically arrives within 3-5 business days. Many patients begin their first session within 1-2 weeks of initial contact.`
    },
    {
      q: "Is ketamine therapy safe?",
      a: "When administered under medical supervision, ketamine has an excellent safety profile. We monitor you throughout every session via video and have protocols in place for any concerns. We also screen carefully to ensure you're a good candidate before prescribing."
    },
    {
      q: "What does a ketamine session feel like?",
      a: "Experiences vary, but most patients describe a dreamlike, dissociative state lasting 45-60 minutes. Many find it deeply relaxing. You'll remain conscious and able to communicate with our team throughout."
    },
    {
      q: "What if I have an emergency during treatment?",
      a: `Our providers monitor you via video throughout your session. In the unlikely event of an emergency, we coordinate with local ${name} emergency services. We also provide 24/7 access to our care team.`
    },
    {
      q: "How many sessions will I need?",
      a: "Treatment protocols vary by individual. Most patients start with 6 sessions over 2-3 weeks, then transition to maintenance sessions as needed. We'll create a personalized treatment plan during your evaluation."
    },
    {
      q: "Who will be prescribing and monitoring my treatment?",
      a: "Your care is managed by board-certified psychiatrists and psychiatric nurse practitioners who specialize in ketamine therapy. All of our providers are licensed in Florida and experienced in treating complex mental health conditions."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
        {isTampa ? (
          <>
            <Image
              src="/tampa.webp"
              alt={`${name} skyline background`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />
          </>
        ) : (
          <div className="absolute inset-0 opacity-15">
            <ImagePlaceholder
              id={`hero-${city.slug}`}
              aspectRatio="banner"
              description={`${name} landscape - Florida scenery, calming home setting`}
              className="w-full h-full rounded-none border-0"
            />
          </div>
        )}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                isTampa
                  ? "bg-white/10 border border-white/30 text-white"
                  : "bg-[var(--klear-primary-50)] border border-[var(--klear-primary-200)]"
              }`}
            >
              <svg
                className={`w-5 h-5 ${isTampa ? "text-white" : "text-[var(--klear-primary-600)]"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className={`text-sm font-medium ${isTampa ? "text-white" : "text-[var(--klear-primary-700)]"}`}>
                Serving {name}, Florida
              </span>
            </div>
            <h1 className={`text-4xl sm:text-5xl font-bold ${isTampa ? "!text-white" : "text-[var(--klear-neutral-900)]"}`}>
              Ketamine Treatment for {name}, Florida Residents
            </h1>
            <p className={`mt-6 text-lg ${isTampa ? "text-white/85" : "text-[var(--klear-neutral-600)]"}`}>
              {subheadline}
            </p>
            <div className="mt-10">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[var(--klear-primary-600)] hover:bg-[var(--klear-primary-700)] rounded-full shadow-lg transition-colors"
              >
                Start Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scenic Banner Image */}
      {!isTampa && (
        <section className="relative w-full">
          <ImagePlaceholder
            id={`banner-${city.slug}`}
            aspectRatio="wide"
            description={`${name} scenic view - Florida landscape or comfortable home setting`}
            className="w-full rounded-none border-0"
          />
        </section>
      )}

      {/* Local Context Section - CRITICAL FOR SEO */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              At-Home Ketamine Therapy Serving {name}
            </h2>
            <div className="mt-6 prose prose-lg max-w-none">
              <p className="text-[var(--klear-neutral-600)] leading-relaxed">
                {localContext.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">{paragraph}</p>
                ))}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[var(--klear-primary-50)] text-[var(--klear-primary-700)]"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Conditions We Treat with Ketamine Therapy
            </h2>
            <p className="mt-4 text-[var(--klear-neutral-600)]">
              Ketamine works differently than traditional antidepressants. Rather than taking weeks to build up, many patients experience relief within hours to days. It&apos;s particularly effective for people who haven&apos;t responded to SSRIs, SNRIs, or other conventional medications.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <div
                key={condition.title}
                className="bg-white rounded-xl p-6 shadow-sm animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--klear-primary-100)] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--klear-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--klear-neutral-900)]">{condition.title}</h3>
                <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              How At-Home Ketamine Treatment Works
            </h2>
          </div>

          <div className="mt-16">
            {howItWorks.map((item, index) => (
              <div
                key={item.step}
                className="flex gap-8 mb-12 last:mb-0 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[var(--klear-primary-600)] flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--klear-neutral-900)]">{item.title}</h3>
                  <p className="mt-2 text-[var(--klear-neutral-600)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[var(--klear-primary-600)] hover:bg-[var(--klear-primary-700)] rounded-full shadow-lg transition-colors"
            >
              Ready to get started? Book your free consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose At-Home */}
      <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Why {name} Patients Choose At-Home Ketamine Therapy
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 shadow-sm animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--klear-accent-100)] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--klear-accent-600)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--klear-neutral-900)]">{benefit.title}</h3>
                <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Treatment Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left opacity-0" style={{ animationFillMode: 'forwards' }}>
              <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
                Expert Psychiatric Care
              </h2>
              <p className="mt-4 text-[var(--klear-neutral-600)]">
                Your treatment is managed by board-certified psychiatrists and psychiatric nurse practitioners, all licensed to practice in Florida. Our providers specialize in ketamine-assisted therapy and have extensive experience treating depression, anxiety, PTSD, and other mental health conditions that haven&apos;t responded to traditional medications.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Board-Certified Providers",
                  "Florida Licensed",
                  "Specialized in Ketamine Therapy",
                  "HIPAA Compliant"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <svg className="w-5 h-5 text-[var(--klear-primary-500)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[var(--klear-neutral-700)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in-right opacity-0" style={{ animationFillMode: 'forwards' }}>
              {city.slug === 'tampa' ? (
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/doctors.webp"
                    alt="Medical team - compassionate healthcare providers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  id={`team-${city.slug}`}
                  aspectRatio="square"
                  description="Medical team - compassionate healthcare providers"
                  className="w-full rounded-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Frequently Asked Questions About Ketamine Treatment in {name}
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-sm"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-medium text-[var(--klear-neutral-900)]">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-[var(--klear-primary-600)] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[var(--klear-neutral-600)]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
            <ImagePlaceholder
              id={`testimonial-${city.slug}`}
              aspectRatio="square"
              description={`${name} patient portrait - warm, friendly`}
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
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <div className="font-semibold text-[var(--klear-neutral-900)]">{testimonial.author}</div>
                  <div className="text-[var(--klear-neutral-600)]">{testimonial.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--klear-primary-600)] to-[var(--klear-primary-800)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImagePlaceholder
            id={`cta-${city.slug}`}
            aspectRatio="wide"
            description="Abstract calming pattern"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-scale-in">
          <h2 className="text-3xl font-bold text-white">
            Ready to Start Feeling Better?
          </h2>
          <p className="mt-4 text-[var(--klear-primary-100)]">
            If you&apos;re in {name} and struggling with depression, anxiety, or PTSD that hasn&apos;t responded to traditional treatment, ketamine therapy may be the breakthrough you&apos;ve been looking for. Our team is here to answer your questions and help you take the first step.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--klear-primary-700)] bg-white hover:bg-[var(--klear-neutral-100)] rounded-full transition-colors"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Also Serving */}
      {nearbyCities.length > 0 && (
        <section className="py-16 bg-white border-t border-[var(--klear-neutral-200)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-[var(--klear-neutral-600)]">
              Also serving:{" "}
              {nearbyCities.map((city, index) => (
                <span key={city}>
                  {index > 0 && index < nearbyCities.length - 1 && ", "}
                  {index === nearbyCities.length - 1 && nearbyCities.length > 1 && " and "}
                  <Link
                    href={`/ketamine-treatment-${city.toLowerCase().replace(/\s+/g, '-')}-florida/`}
                    className="text-[var(--klear-primary-600)] hover:underline"
                  >
                    {city}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
