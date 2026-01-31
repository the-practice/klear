import { Metadata } from "next";
import Link from "next/link";
import { TextEffect } from "@/components/ui/text-effect";

export const metadata: Metadata = {
  title: "Coming Soon | At-Home Ketamine Treatment",
  description:
    "Something transformative is on its way. Clinician-guided ketamine therapy, delivered to your doorstep. Join the waitlist for at-home mental health treatment.",
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--klear-primary-200)] opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--klear-secondary-200)] opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--klear-primary-100)] opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--klear-primary-50)] border border-[var(--klear-primary-200)] mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[var(--klear-primary-500)] animate-pulse-slow"></span>
          <span className="text-sm font-medium text-[var(--klear-primary-700)]">
            Coming Soon
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--klear-neutral-900)] mb-6 animate-fade-in-up">
          <TextEffect as="span" per="word" preset="fade" className="block">
            Healing is about to get a
          </TextEffect>
          <TextEffect
            as="span"
            per="word"
            preset="fade"
            className="text-gradient block mt-2"
          >
            whole lot closer to home
          </TextEffect>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-[var(--klear-neutral-600)] max-w-2xl mx-auto mb-8 animate-fade-in-up animate-delay-100">
          Imagine breakthrough mental health treatment—without ever leaving your living room.
        </p>

        {/* Teaser Copy */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-xl border border-[var(--klear-neutral-200)] max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[var(--klear-primary-100)] flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--klear-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-[var(--klear-neutral-900)] mb-4">
            At-Home Ketamine Treatment
          </h2>
          
          <p className="text-[var(--klear-neutral-600)] leading-relaxed mb-6">
            We're bringing clinician-guided ketamine therapy directly to you. No clinic visits. 
            No waiting rooms. Just effective, FDA-supervised treatment for depression, anxiety, 
            and PTSD—from the comfort and privacy of your own home.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2 text-[var(--klear-neutral-700)]">
              <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Delivered to your door</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[var(--klear-neutral-700)]">
              <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed clinicians</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[var(--klear-neutral-700)]">
              <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Complete privacy</span>
            </div>
          </div>
        </div>

        {/* Email Signup Teaser */}
        <div className="animate-fade-in-up animate-delay-300">
          <p className="text-[var(--klear-neutral-600)] mb-6">
            Be the first to know when we launch. Join our waitlist.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-full border border-[var(--klear-neutral-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--klear-primary-500)] focus:border-transparent text-[var(--klear-neutral-900)] placeholder:text-[var(--klear-neutral-400)]"
            />
            <button
              type="submit"
              className="px-8 py-4 text-base font-medium text-white bg-[var(--klear-primary-600)] hover:bg-[var(--klear-primary-700)] rounded-full shadow-lg shadow-[var(--klear-primary-600)]/25 transition-all hover:shadow-xl hover:shadow-[var(--klear-primary-600)]/30 hover:-translate-y-0.5"
            >
              Notify Me
            </button>
          </form>

          <p className="text-sm text-[var(--klear-neutral-500)]">
            We respect your privacy. No spam, ever.
          </p>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 animate-fade-in-up animate-delay-400">
          <Link
            href="/"
            className="inline-flex items-center text-[var(--klear-primary-600)] hover:text-[var(--klear-primary-700)] font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Klear
          </Link>
        </div>
      </div>
    </main>
  );
}
