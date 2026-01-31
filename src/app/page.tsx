import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ZipCodeChecker from "@/components/ui/ZipCodeChecker";

export const metadata: Metadata = {
  title: "At-Home Ketamine Treatment for Depression | Klear®",
  description:
    "Experience clinician-guided ketamine therapy from the comfort of your home. FDA-supervised treatment for depression, anxiety, and PTSD. Now available in Florida and Washington State.",
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 gradient-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--klear-primary-50)] border border-[var(--klear-primary-200)] mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[var(--klear-primary-500)] animate-pulse-slow"></span>
              <span className="text-sm font-medium text-[var(--klear-primary-700)]">
                Now available in Florida & Washington
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--klear-neutral-900)] animate-fade-in-up animate-delay-100">
              Find <span className="text-gradient">clarity</span> with at-home ketamine therapy
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--klear-neutral-600)] max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-200">
              Clinician-guided ketamine treatment for depression, anxiety, and PTSD.
              Experience breakthrough relief from the comfort of your home.
            </p>
            {/* ZIP Code Checker */}
            <div className="mt-8 animate-fade-in-up animate-delay-250">
              <ZipCodeChecker />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-300">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[var(--klear-primary-600)] hover:bg-[var(--klear-primary-700)] rounded-full shadow-lg shadow-[var(--klear-primary-600)]/25 transition-all hover:shadow-xl hover:shadow-[var(--klear-primary-600)]/30 hover:-translate-y-0.5"
              >
                Check if you qualify
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--klear-neutral-700)] bg-white hover:bg-[var(--klear-neutral-50)] rounded-full border border-[var(--klear-neutral-300)] transition-all hover:-translate-y-0.5"
              >
                Learn how it works
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 animate-fade-in-up animate-delay-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[var(--klear-neutral-600)]">Licensed clinicians</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[var(--klear-neutral-600)]">HSA/FSA eligible</span>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 animate-fade-in-right animate-delay-200">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <Image
                src="/athomehero.webp"
                alt="Hero: Person relaxing at home during treatment session"
                width={600}
                height={600}
                className="rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: "70%", label: "of patients report significant improvement" },
    { value: "24hrs", label: "average time to feel initial effects" },
    { value: "10k+", label: "treatments completed safely" },
    { value: "4.9", label: "average patient satisfaction" },
  ];

  return (
    <section className="py-16 bg-[var(--klear-neutral-900)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[var(--klear-primary-400)]">{stat.value}</div>
              <div className="mt-2 text-sm text-[var(--klear-neutral-400)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Complete Assessment",
      description: "Take a quick online assessment to see if ketamine therapy is right for you. Our licensed clinicians review your health history.",
      imageId: "1b",
      imageDesc: "Person completing online assessment on laptop",
    },
    {
      number: "02",
      title: "Video Consultation",
      description: "Meet with a licensed clinician via video call to discuss your treatment goals and create a personalized care plan.",
      imageId: "1c",
      imageDesc: "Video consultation with clinician",
    },
    {
      number: "03",
      title: "Receive Treatment Kit",
      description: "Your personalized treatment kit is shipped discreetly to your home with everything you need for your sessions.",
      imageId: "1d",
      imageDesc: "Treatment kit unboxing",
    },
    {
      number: "04",
      title: "Begin Your Journey",
      description: "Complete guided sessions from home with clinician support. Track your progress and adjust treatment as needed.",
      imageId: "1e",
      imageDesc: "Peaceful at-home treatment session",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            How Klear<sup>®</sup> works
          </h2>
          <p className="mt-4 text-lg text-[var(--klear-neutral-600)]">
            A simple, supportive process designed to fit your life
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[var(--klear-neutral-50)] hover:bg-[var(--klear-primary-50)] transition-all hover:-translate-y-1">
                {step.imageId === "1b" ? (
                  <div className="w-full mb-4 relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/onlineassessment.jpg"
                      alt={step.imageDesc}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : step.imageId === "1c" ? (
                  <div className="w-full mb-4 relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/videomeeting.webp"
                      alt={step.imageDesc}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : step.imageId === "1d" ? (
                  <div className="w-full mb-4 relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/delivery.webp"
                      alt={step.imageDesc}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : step.imageId === "1e" ? (
                  <div className="w-full mb-4 relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/change.webp"
                      alt={step.imageDesc}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    id={step.imageId}
                    aspectRatio="square"
                    description={step.imageDesc}
                    className="w-full mb-4"
                  />
                )}
                <div className="text-xs font-semibold text-[var(--klear-primary-600)]">{step.number}</div>
                <h3 className="mt-2 text-lg font-semibold text-[var(--klear-neutral-900)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up animate-delay-600">
          <Link
            href="/how-it-works"
            className="inline-flex items-center text-[var(--klear-primary-600)] hover:text-[var(--klear-primary-700)] font-medium transition-colors"
          >
            Learn more about our process
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Benefits Section
function BenefitsSection() {
  const benefits = [
    {
      title: "At-Home Comfort",
      description: "Experience treatment in the safety and privacy of your own home, surrounded by familiar comforts.",
      imageId: "1f",
      imageDesc: "Cozy home treatment environment",
    },
    {
      title: "Licensed Clinicians",
      description: "Work with board-certified clinicians who specialize in ketamine-assisted therapy and mental health.",
      imageId: "1g",
      imageDesc: "Professional clinician portrait",
    },
    {
      title: "Evidence-Based",
      description: "Treatment protocols backed by clinical research and peer-reviewed studies on ketamine therapy.",
      imageId: "1h",
      imageDesc: "Research/scientific imagery",
    },
    {
      title: "Ongoing Support",
      description: "Get continuous care with integration coaching, progress tracking, and clinician check-ins.",
      imageId: "1i",
      imageDesc: "Support team or coaching session",
    },
    {
      title: "Affordable Pricing",
      description: "Transparent pricing with flexible payment options. HSA/FSA eligible for maximum savings.",
      imageId: "1j",
      imageDesc: "HSA/FSA cards or pricing visual",
    },
    {
      title: "Personalized Care",
      description: "Treatment plans tailored to your unique needs, health history, and wellness goals.",
      imageId: "1k",
      imageDesc: "Personalized treatment plan visual",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            Why choose Klear<sup>®</sup>
          </h2>
          <p className="mt-4 text-lg text-[var(--klear-neutral-600)]">
            We&apos;ve designed every aspect of our program to support your healing journey
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {benefit.imageId === "1f" ? (
                <div className="w-full relative aspect-video">
                  <Image
                    src="/relaxing2.webp"
                    alt={benefit.imageDesc}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : benefit.imageId === "1g" ? (
                <div className="w-full relative aspect-video">
                  <Image
                    src="/medical.webp"
                    alt={benefit.imageDesc}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : benefit.imageId === "1h" ? (
                <div className="w-full relative aspect-video">
                  <Image
                    src="/research3.webp"
                    alt={benefit.imageDesc}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : benefit.imageId === "1i" ? (
                <div className="w-full relative aspect-video">
                  <Image
                    src="/licensed.webp"
                    alt={benefit.imageDesc}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : benefit.imageId === "1j" ? (
                <div className="w-full relative aspect-video">
                  <Image
                    src="/save.webp"
                    alt={benefit.imageDesc}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : benefit.imageId === "1k" ? (
                <div className="w-full relative aspect-video">
                  <Image
                    src="/personalized3.webp"
                    alt={benefit.imageDesc}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  id={benefit.imageId}
                  aspectRatio="video"
                  description={benefit.imageDesc}
                  className="rounded-none"
                />
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--klear-neutral-900)]">{benefit.title}</h3>
                <p className="mt-2 text-[var(--klear-neutral-600)]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "After years of trying different medications, Klear® finally gave me the breakthrough I needed. I feel like myself again.",
      author: "Sarah M.",
      location: "Tampa, FL",
      condition: "Depression",
      imageId: "1l",
    },
    {
      quote: "The entire process was so supportive. From my first consultation to ongoing check-ins, I never felt alone in my journey.",
      author: "Michael R.",
      location: "Seattle, WA",
      condition: "Anxiety",
      imageId: "1m",
    },
    {
      quote: "I was skeptical at first, but the results speak for themselves. My PTSD symptoms have decreased significantly.",
      author: "Jennifer L.",
      location: "Miami, FL",
      condition: "PTSD",
      imageId: "1n",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            Real stories from real patients
          </h2>
          <p className="mt-4 text-lg text-[var(--klear-neutral-600)]">
            Hear from people who have transformed their mental health with Klear<sup>®</sup>
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--klear-neutral-50)] rounded-2xl p-8 animate-fade-in-up transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--klear-accent-500)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-[var(--klear-neutral-700)]">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <ImagePlaceholder
                    id={testimonial.imageId}
                    aspectRatio="square"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <div className="font-medium text-[var(--klear-neutral-900)]">{testimonial.author}</div>
                  <div className="text-sm text-[var(--klear-neutral-500)]">{testimonial.location} • {testimonial.condition}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up animate-delay-500">
          <Link
            href="/reviews"
            className="inline-flex items-center text-[var(--klear-primary-600)] hover:text-[var(--klear-primary-700)] font-medium transition-colors"
          >
            Read more reviews
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "What is ketamine therapy?",
      answer: "Ketamine is an FDA-approved medication that, when used under clinical supervision, can help treat depression, anxiety, and PTSD. It works differently than traditional antidepressants, often providing relief faster and for those who haven't responded to other treatments.",
    },
    {
      question: "Is ketamine therapy safe?",
      answer: "When administered under proper clinical supervision, ketamine therapy has a strong safety profile. Our licensed clinicians evaluate each patient carefully and monitor treatment closely. Side effects are typically mild and short-lived.",
    },
    {
      question: "Who is a good candidate for ketamine therapy?",
      answer: "Ketamine therapy may be right for adults who have treatment-resistant depression, anxiety, or PTSD. Our assessment process determines eligibility based on your health history and current medications.",
    },
    {
      question: "What does a treatment session look like?",
      answer: "Sessions take place in your home. You'll take the prescribed medication sublingually while in a comfortable, relaxed setting. Each session lasts about 2 hours, and you should have a trusted person nearby.",
    },
    {
      question: "Is Klear® available in my state?",
      answer: "Currently, Klear® is available in Florida and Washington State. We're actively working to expand to additional states. Sign up for our newsletter to be notified when we're available in your area.",
    },
    {
      question: "Is ketamine therapy covered by insurance?",
      answer: "While most insurance plans don't cover ketamine therapy directly, you can use HSA/FSA funds for treatment. We also offer flexible payment plans to make treatment accessible.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-[var(--klear-neutral-600)]">
            Get answers to common questions about Klear<sup>®</sup> and ketamine therapy
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm animate-fade-in-up transition-all hover:shadow-md"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="font-medium text-[var(--klear-neutral-900)]">{faq.question}</h3>
                <svg
                  className="w-5 h-5 text-[var(--klear-neutral-500)] group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--klear-neutral-600)]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--klear-primary-600)] to-[var(--klear-primary-800)] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/naturescene.webp"
          alt="Calming nature scene background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white animate-fade-in-up">
          Ready to start your healing journey?
        </h2>
        <p className="mt-4 text-lg text-[var(--klear-primary-100)] animate-fade-in-up animate-delay-100">
          Take the first step toward lasting relief. Our quick assessment will help determine if Klear<sup>®</sup> is right for you.
        </p>
        <div className="mt-10 animate-fade-in-up animate-delay-200">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--klear-primary-700)] bg-white hover:bg-[var(--klear-neutral-100)] rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Check if you qualify
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        <p className="mt-6 text-sm text-[var(--klear-primary-200)] animate-fade-in-up animate-delay-300">
          Free assessment • No commitment required
        </p>
      </div>
    </section>
  );
}

// Pricing Comparison Section
function PricingComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            Affordable, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-[var(--klear-neutral-600)]">
            Get the same clinical-grade treatment at a fraction of the cost
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg border border-[var(--klear-neutral-200)]">
          <table className="w-full">
            <thead className="bg-[var(--klear-primary-50)]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--klear-neutral-900)]">
                  Treatment Option
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[var(--klear-neutral-900)]">
                  Cost per Session
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[var(--klear-neutral-900)]">
                  Convenience
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[var(--klear-neutral-900)]">
                  Clinician Support
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[var(--klear-neutral-200)]">
              <tr className="bg-[var(--klear-primary-50)] border-2 border-[var(--klear-primary-600)]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--klear-primary-500)] to-[var(--klear-primary-700)] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">K</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--klear-neutral-900)]">Klear® At-Home</div>
                      <div className="text-xs text-[var(--klear-primary-700)] font-medium">Recommended</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="text-2xl font-bold text-[var(--klear-primary-700)]">$249</div>
                  <div className="text-xs text-[var(--klear-neutral-600)] mt-1">HSA/FSA eligible</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-xs text-[var(--klear-neutral-600)] mt-1">At home</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-xs text-[var(--klear-neutral-600)] mt-1">Ongoing</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">
                  <div className="font-medium text-[var(--klear-neutral-700)]">In-Office Ketamine Clinic</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="text-xl font-bold text-[var(--klear-neutral-900)]">$400-800</div>
                  <div className="text-xs text-[var(--klear-neutral-500)] mt-1">Not covered</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div className="text-xs text-[var(--klear-neutral-600)] mt-1">Travel required</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-6 h-6 text-yellow-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div className="text-xs text-[var(--klear-neutral-600)] mt-1">Session only</div>
                </td>
              </tr>
              <tr className="bg-[var(--klear-neutral-50)]">
                <td className="px-6 py-4">
                  <div className="font-medium text-[var(--klear-neutral-700)]">Traditional Psychiatry</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="text-xl font-bold text-[var(--klear-neutral-900)]">$200-400</div>
                  <div className="text-xs text-[var(--klear-neutral-500)] mt-1">Per visit</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-6 h-6 text-yellow-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div className="text-xs text-[var(--klear-neutral-600)] mt-1">Office visits</div>
                </td>
                <td className="px-6 py-4 text-center">
                  <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-xs text-[var(--klear-neutral-600)] mt-1">Ongoing</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2 text-[var(--klear-neutral-600)]">
            <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">HSA/FSA accepted</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--klear-neutral-600)]">
            <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Flexible payment plans</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--klear-neutral-600)]">
            <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">No hidden fees</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingComparisonSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
