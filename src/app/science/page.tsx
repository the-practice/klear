import Link from "next/link";
import { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "The Science Behind Ketamine Therapy",
  description:
    "Understand the science behind ketamine therapy for depression. Learn about clinical research, how ketamine works in the brain, and safety information.",
};

export default function SciencePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
        {/* Background Image Placeholder - Edge to Edge */}
        <div className="absolute inset-0 opacity-10">
          <ImagePlaceholder
            id="4a"
            aspectRatio="banner"
            description="Abstract neural/brain science visual"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--klear-neutral-900)]">
              The science of ketamine therapy
            </h1>
            <p className="mt-6 text-lg text-[var(--klear-neutral-600)]">
              Decades of research support ketamine as a breakthrough treatment for depression, anxiety, and PTSD. Learn how it works and why it&apos;s different.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left opacity-0" style={{ animationFillMode: 'forwards' }}>
              <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
                How ketamine works in the brain
              </h2>
              <p className="mt-4 text-[var(--klear-neutral-600)]">
                Unlike traditional antidepressants that target serotonin, ketamine works on the glutamate system—the brain&apos;s most abundant neurotransmitter. This unique mechanism is why ketamine can work when other treatments haven&apos;t.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                  <div className="w-12 h-12 rounded-xl bg-[var(--klear-primary-50)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--klear-primary-600)] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--klear-neutral-900)]">NMDA Receptor Modulation</h3>
                    <p className="mt-1 text-sm text-[var(--klear-neutral-600)]">
                      Ketamine blocks NMDA receptors, triggering a cascade of neurological changes that promote healing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  <div className="w-12 h-12 rounded-xl bg-[var(--klear-primary-50)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--klear-primary-600)] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--klear-neutral-900)]">Increased Neuroplasticity</h3>
                    <p className="mt-1 text-sm text-[var(--klear-neutral-600)]">
                      This leads to increased BDNF production, promoting the growth of new neural connections.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                  <div className="w-12 h-12 rounded-xl bg-[var(--klear-primary-50)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--klear-primary-600)] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--klear-neutral-900)]">Rapid Symptom Relief</h3>
                    <p className="mt-1 text-sm text-[var(--klear-neutral-600)]">
                      Unlike SSRIs that take weeks, ketamine can provide relief within hours to days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right opacity-0" style={{ animationFillMode: 'forwards' }}>
              <ImagePlaceholder
                id="4b"
                aspectRatio="square"
                description="Brain neural pathway illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brain Diagram - Edge to Edge */}
      <section className="relative">
        <ImagePlaceholder
          id="4c"
          aspectRatio="wide"
          description="Scientific brain diagram showing ketamine pathways - Edge to Edge"
          className="w-full rounded-none border-0"
        />
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Clinical research & outcomes
            </h2>
            <p className="mt-4 text-[var(--klear-neutral-600)]">
              Ketamine therapy is backed by decades of research and clinical trials from leading institutions.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { value: "70%", label: "Response Rate", desc: "Approximately 70% of patients with treatment-resistant depression respond to ketamine therapy.", imageId: "4d" },
              { value: "24hrs", label: "Rapid Onset", desc: "Many patients experience significant improvement within 24 hours of their first treatment.", imageId: "4e" },
              { value: "50+", label: "Years of Research", desc: "Ketamine has been studied extensively since its FDA approval in 1970.", imageId: "4f" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ImagePlaceholder
                  id={stat.imageId}
                  aspectRatio="video"
                  description={stat.label}
                  className="w-full rounded-none border-x-0 border-t-0"
                />
                <div className="p-8 text-center">
                  <div className="text-5xl font-bold text-[var(--klear-primary-600)]">{stat.value}</div>
                  <p className="mt-2 text-[var(--klear-neutral-900)] font-medium">{stat.label}</p>
                  <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-bold text-[var(--klear-neutral-900)]">Key Research Findings</h3>
            <div className="mt-6 space-y-4">
              {[
                {
                  study: "Berman et al., 2000",
                  finding: "First randomized controlled trial showing ketamine's rapid antidepressant effects.",
                },
                {
                  study: "Zarate et al., 2006",
                  finding: "NIMH study demonstrating ketamine's efficacy in treatment-resistant depression.",
                },
                {
                  study: "Murrough et al., 2013",
                  finding: "Large multi-site trial confirming ketamine's rapid antidepressant action.",
                },
                {
                  study: "FDA Approval, 2019",
                  finding: "Esketamine (Spravato) approved for treatment-resistant depression, validating the mechanism.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start pb-4 border-b border-[var(--klear-neutral-100)] last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-[var(--klear-primary-500)] mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-[var(--klear-neutral-900)]">{item.study}:</span>{" "}
                    <span className="text-[var(--klear-neutral-600)]">{item.finding}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Safety information
            </h2>
            <p className="mt-4 text-[var(--klear-neutral-600)]">
              Your safety is our top priority. Here&apos;s what you need to know about ketamine therapy.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in-left opacity-0" style={{ animationFillMode: 'forwards' }}>
              <ImagePlaceholder
                id="4g"
                aspectRatio="video"
                description="Medical safety/clinical environment"
                className="w-full mb-6"
              />
              <div className="bg-[var(--klear-neutral-50)] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[var(--klear-neutral-900)]">Common Side Effects</h3>
                <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">Usually mild and temporary:</p>
                <ul className="mt-4 space-y-2">
                  {["Dissociation or feeling disconnected", "Dizziness or lightheadedness", "Nausea", "Increased blood pressure", "Drowsiness"].map((effect, i) => (
                    <li key={i} className="flex items-center gap-2 text-[var(--klear-neutral-700)]">
                      <svg className="w-4 h-4 text-[var(--klear-accent-500)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                      </svg>
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="animate-fade-in-right opacity-0" style={{ animationFillMode: 'forwards' }}>
              <ImagePlaceholder
                id="4h"
                aspectRatio="video"
                description="Consultation with healthcare provider"
                className="w-full mb-6"
              />
              <div className="bg-[var(--klear-neutral-50)] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[var(--klear-neutral-900)]">Who Should Avoid Ketamine</h3>
                <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">Ketamine may not be right for those with:</p>
                <ul className="mt-4 space-y-2">
                  {["Uncontrolled high blood pressure", "History of psychosis or schizophrenia", "Active substance use disorder", "Certain heart conditions", "Pregnancy or breastfeeding"].map((condition, i) => (
                    <li key={i} className="flex items-center gap-2 text-[var(--klear-neutral-700)]">
                      <svg className="w-4 h-4 text-[var(--klear-accent-600)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {condition}
                    </li>
                  ))}
                </ul>
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
            id="4i"
            aspectRatio="wide"
            description="Abstract science/hope pattern"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-scale-in">
          <h2 className="text-3xl font-bold text-white">Have questions about ketamine therapy?</h2>
          <p className="mt-4 text-[var(--klear-primary-100)]">
            Our clinical team is here to answer your questions and help you understand if ketamine is right for you.
          </p>
          <div className="mt-8">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--klear-primary-700)] bg-white hover:bg-[var(--klear-neutral-100)] rounded-full transition-colors"
            >
              Take the Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
