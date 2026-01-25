import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "At-Home Ketamine Treatment for Depression | Klear",
  description:
    "Experience clinician-guided ketamine therapy from the comfort of your home. FDA-supervised treatment for depression, anxiety, and PTSD. Now available in Florida and Washington State.",
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 gradient-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--klear-primary-50)] border border-[var(--klear-primary-200)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--klear-primary-500)] animate-pulse-slow"></span>
              <span className="text-sm font-medium text-[var(--klear-primary-700)]">
                Now available in Florida & Washington
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--klear-neutral-900)]">
              Find <span className="text-gradient">clarity</span> with at-home ketamine therapy
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--klear-neutral-600)] max-w-2xl mx-auto lg:mx-0">
              Clinician-guided ketamine treatment for depression, anxiety, and PTSD.
              Experience breakthrough relief from the comfort of your home.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[var(--klear-primary-600)] hover:bg-[var(--klear-primary-700)] rounded-full shadow-lg shadow-[var(--klear-primary-600)]/25 transition-all hover:shadow-xl hover:shadow-[var(--klear-primary-600)]/30"
              >
                Check if you qualify
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--klear-neutral-700)] bg-white hover:bg-[var(--klear-neutral-50)] rounded-full border border-[var(--klear-neutral-300)] transition-colors"
              >
                Learn how it works
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
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
          <div className="mt-12 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--klear-primary-100)] to-[var(--klear-secondary-100)] p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[var(--klear-primary-100)] flex items-center justify-center mb-4">
                      <svg className="w-10 h-10 text-[var(--klear-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-[var(--klear-neutral-900)]">Treatment delivered to your door</p>
                    <p className="text-sm text-[var(--klear-neutral-600)] mt-2">Safe, discreet, and personalized</p>
                  </div>
                </div>
              </div>
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
            <div key={index} className="text-center">
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
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Video Consultation",
      description: "Meet with a licensed clinician via video call to discuss your treatment goals and create a personalized care plan.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Receive Treatment Kit",
      description: "Your personalized treatment kit is shipped discreetly to your home with everything you need for your sessions.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Begin Your Journey",
      description: "Complete guided sessions from home with clinician support. Track your progress and adjust treatment as needed.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            How Klear works
          </h2>
          <p className="mt-4 text-lg text-[var(--klear-neutral-600)]">
            A simple, supportive process designed to fit your life
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[var(--klear-neutral-50)] hover:bg-[var(--klear-primary-50)] transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[var(--klear-primary-600)] group-hover:shadow-md transition-shadow">
                  {step.icon}
                </div>
                <div className="mt-2 text-xs font-semibold text-[var(--klear-primary-600)]">{step.number}</div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--klear-neutral-900)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center text-[var(--klear-primary-600)] hover:text-[var(--klear-primary-700)] font-medium"
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
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Licensed Clinicians",
      description: "Work with board-certified clinicians who specialize in ketamine-assisted therapy and mental health.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Evidence-Based",
      description: "Treatment protocols backed by clinical research and peer-reviewed studies on ketamine therapy.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Ongoing Support",
      description: "Get continuous care with integration coaching, progress tracking, and clinician check-ins.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Affordable Pricing",
      description: "Transparent pricing with flexible payment options. HSA/FSA eligible for maximum savings.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Personalized Care",
      description: "Treatment plans tailored to your unique needs, health history, and wellness goals.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            Why choose Klear
          </h2>
          <p className="mt-4 text-lg text-[var(--klear-neutral-600)]">
            We&apos;ve designed every aspect of our program to support your healing journey
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[var(--klear-primary-50)] flex items-center justify-center text-[var(--klear-primary-600)]">
                {benefit.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--klear-neutral-900)]">{benefit.title}</h3>
              <p className="mt-2 text-[var(--klear-neutral-600)]">{benefit.description}</p>
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
      quote: "After years of trying different medications, Klear finally gave me the breakthrough I needed. I feel like myself again.",
      author: "Sarah M.",
      location: "Tampa, FL",
      condition: "Depression",
    },
    {
      quote: "The entire process was so supportive. From my first consultation to ongoing check-ins, I never felt alone in my journey.",
      author: "Michael R.",
      location: "Seattle, WA",
      condition: "Anxiety",
    },
    {
      quote: "I was skeptical at first, but the results speak for themselves. My PTSD symptoms have decreased significantly.",
      author: "Jennifer L.",
      location: "Miami, FL",
      condition: "PTSD",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            Real stories from real patients
          </h2>
          <p className="mt-4 text-lg text-[var(--klear-neutral-600)]">
            Hear from people who have transformed their mental health with Klear
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[var(--klear-neutral-50)] rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--klear-accent-500)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-[var(--klear-neutral-700)]">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--klear-primary-100)] flex items-center justify-center">
                  <span className="text-lg font-semibold text-[var(--klear-primary-600)]">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-[var(--klear-neutral-900)]">{testimonial.author}</div>
                  <div className="text-sm text-[var(--klear-neutral-500)]">{testimonial.location} • {testimonial.condition}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center text-[var(--klear-primary-600)] hover:text-[var(--klear-primary-700)] font-medium"
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
      question: "Is Klear available in my state?",
      answer: "Currently, Klear is available in Florida and Washington State. We're actively working to expand to additional states. Sign up for our newsletter to be notified when we're available in your area.",
    },
    {
      question: "Is ketamine therapy covered by insurance?",
      answer: "While most insurance plans don't cover ketamine therapy directly, you can use HSA/FSA funds for treatment. We also offer flexible payment plans to make treatment accessible.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-[var(--klear-neutral-600)]">
            Get answers to common questions about Klear and ketamine therapy
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-xl p-6 shadow-sm">
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--klear-primary-600)] to-[var(--klear-primary-800)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to start your healing journey?
        </h2>
        <p className="mt-4 text-lg text-[var(--klear-primary-100)]">
          Take the first step toward lasting relief. Our quick assessment will help determine if Klear is right for you.
        </p>
        <div className="mt-10">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--klear-primary-700)] bg-white hover:bg-[var(--klear-neutral-100)] rounded-full shadow-lg transition-colors"
          >
            Check if you qualify
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        <p className="mt-6 text-sm text-[var(--klear-primary-200)]">
          Free assessment • No commitment required
        </p>
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
      <FAQSection />
      <CTASection />
    </>
  );
}
