"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type Step = 1 | 2 | 3 | 4;

export default function GetStartedPage() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    state: "",
    age: "",
    conditions: [] as string[],
    triedMedications: "",
    email: "",
  });

  const conditions = [
    "Depression",
    "Anxiety",
    "PTSD",
    "Treatment-Resistant Depression",
    "Bipolar Depression",
    "Other",
  ];

  const handleConditionToggle = (condition: string) => {
    setFormData((prev) => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions, condition],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.state !== "";
      case 2:
        return formData.age !== "";
      case 3:
        return formData.conditions.length > 0;
      case 4:
        return formData.email !== "";
      default:
        return false;
    }
  };

  const isEligible = formData.state === "florida" || formData.state === "washington";

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-[var(--klear-primary-50)] to-white relative overflow-hidden">
      {/* Background Image Placeholder - Edge to Edge */}
      <div className="absolute inset-0 opacity-5">
        <ImagePlaceholder
          id="6a"
          aspectRatio="banner"
          description="Abstract calm/hope pattern"
          className="w-full h-full rounded-none border-0"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Crisis Support Banner */}
        <div className="mb-8 animate-fade-in">
          <div className="bg-gradient-to-br from-red-900 to-red-800 text-white rounded-lg p-4 border-2 border-red-600">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  Not feeling safe? <a href="tel:988" className="underline font-bold hover:text-red-100">Call 988</a> or <a href="tel:911" className="underline font-bold hover:text-red-100">911</a> for immediate support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[var(--klear-neutral-600)]">Step {step} of 4</span>
            <span className="text-sm text-[var(--klear-neutral-500)]">{step * 25}% complete</span>
          </div>
          <div className="h-2 bg-[var(--klear-neutral-200)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--klear-primary-600)] transition-all duration-300"
              style={{ width: `${step * 25}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 animate-scale-in">
          {/* Step 1: Location */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-[var(--klear-neutral-900)]">
                  Let&apos;s see if Klear<sup>®</sup> is right for you
                </h1>
                <p className="mt-2 text-[var(--klear-neutral-600)]">
                  First, tell us where you&apos;re located.
                </p>
              </div>

              <ImagePlaceholder
                id="6b"
                aspectRatio="video"
                description="Map of Florida and Washington"
                className="w-full"
              />

              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-[var(--klear-neutral-700)]">Which state do you live in?</span>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))}
                    className="mt-2 block w-full px-4 py-3 rounded-xl border border-[var(--klear-neutral-300)] focus:ring-2 focus:ring-[var(--klear-primary-500)] focus:border-transparent"
                  >
                    <option value="">Select your state</option>
                    <option value="florida">Florida</option>
                    <option value="washington">Washington</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              {formData.state === "other" && (
                <div className="bg-[var(--klear-accent-50)] rounded-xl p-4 border border-[var(--klear-accent-200)]">
                  <p className="text-sm text-[var(--klear-accent-800)]">
                    Klear<sup>®</sup> is currently only available in Florida and Washington State. Join our waitlist to be notified when we expand to your area.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Age */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-[var(--klear-neutral-900)]">
                  How old are you?
                </h1>
                <p className="mt-2 text-[var(--klear-neutral-600)]">
                  Ketamine therapy is available for adults 18 and older.
                </p>
              </div>

              <Image
                src="/adults.webp"
                alt="Diverse age group of adults"
                width={1920}
                height={1080}
                className="w-full rounded-lg"
              />

              <div className="grid grid-cols-2 gap-3">
                {["18-24", "25-34", "35-44", "45-54", "55-64", "65+"].map((age) => (
                  <button
                    key={age}
                    onClick={() => setFormData((prev) => ({ ...prev, age }))}
                    className={`py-3 px-4 rounded-xl border text-center font-medium transition-colors ${
                      formData.age === age
                        ? "border-[var(--klear-primary-600)] bg-[var(--klear-primary-50)] text-[var(--klear-primary-700)]"
                        : "border-[var(--klear-neutral-300)] text-[var(--klear-neutral-700)] hover:border-[var(--klear-primary-300)]"
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Conditions */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-[var(--klear-neutral-900)]">
                  What are you seeking treatment for?
                </h1>
                <p className="mt-2 text-[var(--klear-neutral-600)]">
                  Select all that apply.
                </p>
              </div>

              <Image
                src="/mentalwellness.webp"
                alt="Mental wellness illustration"
                width={1920}
                height={1080}
                className="w-full rounded-lg"
              />

              <div className="space-y-3">
                {conditions.map((condition) => (
                  <button
                    key={condition}
                    onClick={() => handleConditionToggle(condition)}
                    className={`w-full py-3 px-4 rounded-xl border text-left font-medium transition-colors flex items-center justify-between ${
                      formData.conditions.includes(condition)
                        ? "border-[var(--klear-primary-600)] bg-[var(--klear-primary-50)] text-[var(--klear-primary-700)]"
                        : "border-[var(--klear-neutral-300)] text-[var(--klear-neutral-700)] hover:border-[var(--klear-primary-300)]"
                    }`}
                  >
                    {condition}
                    {formData.conditions.includes(condition) && (
                      <svg className="w-5 h-5 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-[var(--klear-neutral-200)]">
                <p className="text-sm font-medium text-[var(--klear-neutral-700)]">
                  Have you tried other medications for these conditions?
                </p>
                <div className="flex gap-3">
                  {["Yes", "No"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData((prev) => ({ ...prev, triedMedications: option.toLowerCase() }))}
                      className={`flex-1 py-3 px-4 rounded-xl border text-center font-medium transition-colors ${
                        formData.triedMedications === option.toLowerCase()
                          ? "border-[var(--klear-primary-600)] bg-[var(--klear-primary-50)] text-[var(--klear-primary-700)]"
                          : "border-[var(--klear-neutral-300)] text-[var(--klear-neutral-700)] hover:border-[var(--klear-primary-300)]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Email */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--klear-primary-100)] flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[var(--klear-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-[var(--klear-neutral-900)]">
                  You may be a good candidate!
                </h1>
                <p className="mt-2 text-[var(--klear-neutral-600)]">
                  Enter your email to schedule a consultation with one of our licensed clinicians.
                </p>
              </div>

              <ImagePlaceholder
                id="6e"
                aspectRatio="video"
                description="Clinician ready to help"
                className="w-full"
              />

              <div className="space-y-3">
                <label className="block">
                  <span className="text-sm font-medium text-[var(--klear-neutral-700)]">Email address</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="mt-2 block w-full px-4 py-3 rounded-xl border border-[var(--klear-neutral-300)] focus:ring-2 focus:ring-[var(--klear-primary-500)] focus:border-transparent"
                  />
                </label>
              </div>

              <p className="text-xs text-[var(--klear-neutral-500)] text-center">
                By continuing, you agree to our{" "}
                <Link href="/privacy" className="text-[var(--klear-primary-600)] hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-[var(--klear-primary-600)] hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex gap-4">
            {step > 1 && (
              <button
                onClick={() => setStep((prev) => (prev - 1) as Step)}
                className="flex-1 py-3 px-6 rounded-full border border-[var(--klear-neutral-300)] text-[var(--klear-neutral-700)] font-medium hover:bg-[var(--klear-neutral-50)] transition-colors"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={() => setStep((prev) => (prev + 1) as Step)}
                disabled={!canProceed() || (step === 1 && !isEligible)}
                className="flex-1 py-3 px-6 rounded-full bg-[var(--klear-primary-600)] text-white font-medium hover:bg-[var(--klear-primary-700)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                disabled={!canProceed()}
                className="flex-1 py-3 px-6 rounded-full bg-[var(--klear-primary-600)] text-white font-medium hover:bg-[var(--klear-primary-700)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Schedule Consultation
              </button>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[var(--klear-neutral-500)] animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            HIPAA Compliant
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Licensed Clinicians
          </div>
        </div>
      </div>
    </div>
  );
}
