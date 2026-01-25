import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Science Behind Ketamine Therapy",
  description:
    "Understand the science behind ketamine therapy for depression. Learn about clinical research, how ketamine works in the brain, and safety information.",
};

export default function SciencePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
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
            <div>
              <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
                How ketamine works in the brain
              </h2>
              <p className="mt-4 text-[var(--klear-neutral-600)]">
                Unlike traditional antidepressants that target serotonin, ketamine works on the glutamate system—the brain&apos;s most abundant neurotransmitter. This unique mechanism is why ketamine can work when other treatments haven&apos;t.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
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
                <div className="flex gap-4">
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
                <div className="flex gap-4">
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
            <div className="bg-[var(--klear-neutral-50)] rounded-3xl p-8">
              <div className="aspect-video bg-gradient-to-br from-[var(--klear-primary-100)] to-[var(--klear-secondary-100)] rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-[var(--klear-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="mt-4 text-[var(--klear-neutral-600)]">Neural pathway illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Clinical research & outcomes
            </h2>
            <p className="mt-4 text-[var(--klear-neutral-600)]">
              Ketamine therapy is backed by decades of research and clinical trials from leading institutions.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[var(--klear-primary-600)]">70%</div>
              <p className="mt-2 text-[var(--klear-neutral-900)] font-medium">Response Rate</p>
              <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">
                Approximately 70% of patients with treatment-resistant depression respond to ketamine therapy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[var(--klear-primary-600)]">24hrs</div>
              <p className="mt-2 text-[var(--klear-neutral-900)] font-medium">Rapid Onset</p>
              <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">
                Many patients experience significant improvement within 24 hours of their first treatment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-[var(--klear-primary-600)]">50+</div>
              <p className="mt-2 text-[var(--klear-neutral-900)] font-medium">Years of Research</p>
              <p className="mt-2 text-sm text-[var(--klear-neutral-600)]">
                Ketamine has been studied extensively since its FDA approval in 1970.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8">
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
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Safety information
            </h2>
            <p className="mt-4 text-[var(--klear-neutral-600)]">
              Your safety is our top priority. Here&apos;s what you need to know about ketamine therapy.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
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
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--klear-primary-600)] to-[var(--klear-primary-800)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
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
