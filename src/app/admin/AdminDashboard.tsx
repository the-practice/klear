"use client";

import { useMemo, useState } from "react";

const toneOptions = [
  "Clinical & reassuring",
  "Warm & supportive",
  "Modern & concise",
  "Hopeful & uplifting",
  "Direct & practical",
];

const platformLimits = {
  x: 280,
  linkedin: 3000,
  instagram: 2200,
};

type GeneratedSEO = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  ogImageCopy: string;
  socialPosts: {
    platform: "x" | "linkedin" | "instagram";
    text: string;
    hashtags: string;
  }[];
  checklist: string[];
  schemaIdeas: string[];
  internalLinks: string[];
};

function clamp(text: string, limit: number) {
  return text.length > limit ? text.slice(0, limit - 1).trimEnd() + "…" : text;
}

function buildTitle(brand: string, keyword: string, location: string, topic: string) {
  const base = keyword || topic || "At-Home Ketamine Treatment";
  const loc = location ? ` in ${location}` : "";
  const suffix = brand ? ` | ${brand}` : "";
  return `${base}${loc}${suffix}`.trim();
}

function buildDescription(audience: string, topic: string, cta: string, keyword: string, location: string) {
  const focus = keyword || topic || "clinician-guided ketamine therapy";
  const loc = location ? ` in ${location}` : "";
  const who = audience ? `${audience} can` : "You can";
  const action = cta || "Check eligibility in minutes";
  return `${who} access ${focus}${loc} from home. Get clarity with a personalized plan, ongoing support, and safe monitoring. ${action}.`;
}

function buildOGCopy(keyword: string, topic: string, location: string) {
  const focus = keyword || topic || "At-Home Ketamine Therapy";
  const loc = location ? ` • ${location}` : "";
  return `${focus}${loc}\nGuided care, delivered to your door`;
}

function buildSocialPosts(params: {
  brand: string;
  topic: string;
  keyword: string;
  location: string;
  audience: string;
  tone: string;
  cta: string;
  url: string;
}) {
  const base = params.keyword || params.topic || "at-home ketamine treatment";
  const loc = params.location ? ` in ${params.location}` : "";
  const who = params.audience ? `for ${params.audience}` : "";
  const cta = params.cta || "Join the waitlist";
  const url = params.url || "https://kleartreatment.com";

  const xText = `Introducing ${base}${loc} — clinician-guided care from home ${who}. Safe, supportive, and designed for real-life schedules. ${cta}: ${url}`;
  const linkedinText = `We’re expanding access to ${base}${loc}. This is clinician-guided care that fits modern life ${who}.\n\nWhy it matters:\n• Personalized plans\n• Ongoing support\n• Private, at-home experience\n\n${cta}: ${url}`;
  const instagramText = `Healing shouldn’t require a waiting room. ${base}${loc} is coming — guided care, at home ${who}.\n\n${cta} at ${url}`;

  return [
    {
      platform: "x" as const,
      text: clamp(xText, platformLimits.x),
      hashtags: "#mentalhealth #ketamine #depression #anxiety #telehealth",
    },
    {
      platform: "linkedin" as const,
      text: clamp(linkedinText, platformLimits.linkedin),
      hashtags: "#MentalHealth #HealthcareInnovation #KetamineTherapy",
    },
    {
      platform: "instagram" as const,
      text: clamp(instagramText, platformLimits.instagram),
      hashtags: "#mentalhealth #ketaminetherapy #healingathome",
    },
  ];
}

function buildChecklist() {
  return [
    "Title length 45–60 characters",
    "Meta description 150–160 characters",
    "Primary keyword in H1 + first paragraph",
    "One unique OG image per page (1200×630)",
    "Alt text includes primary keyword",
    "Internal links to: Pricing, Reviews, How it Works",
    "Schema markup added (FAQ + MedicalBusiness)",
    "Canonical URL set",
    "Noindex on admin-only pages",
  ];
}

function buildSchemaIdeas(topic: string) {
  return [
    "MedicalBusiness",
    "FAQPage",
    "BreadcrumbList",
    "WebPage",
    topic ? `MedicalTherapy (${topic})` : "MedicalTherapy",
  ];
}

function buildInternalLinks() {
  return [
    "/how-it-works",
    "/pricing",
    "/reviews",
    "/get-started",
  ];
}

export default function AdminDashboard() {
  const [brand, setBrand] = useState("Klear®");
  const [topic, setTopic] = useState("At-Home Ketamine Treatment");
  const [keyword, setKeyword] = useState("ketamine treatment");
  const [secondaryKeywords, setSecondaryKeywords] = useState(
    "depression, anxiety, PTSD, ketamine therapy"
  );
  const [location, setLocation] = useState("Florida & Washington");
  const [audience, setAudience] = useState("adults seeking relief from depression or anxiety");
  const [tone, setTone] = useState(toneOptions[0]);
  const [cta, setCta] = useState("Check eligibility");
  const [url, setUrl] = useState("https://kleartreatment.com");

  const generated = useMemo<GeneratedSEO>(() => {
    const title = buildTitle(brand, keyword, location, topic);
    const description = buildDescription(audience, topic, cta, keyword, location);
    const ogTitle = buildTitle(brand, keyword || topic, location, topic);
    const ogDescription = buildDescription(audience, topic, "Learn more", keyword, location);
    const twitterTitle = ogTitle;
    const twitterDescription = ogDescription;
    const ogImageCopy = buildOGCopy(keyword, topic, location);
    const socialPosts = buildSocialPosts({
      brand,
      topic,
      keyword,
      location,
      audience,
      tone,
      cta,
      url,
    });
    return {
      title,
      description,
      ogTitle,
      ogDescription,
      twitterTitle,
      twitterDescription,
      ogImageCopy,
      socialPosts,
      checklist: buildChecklist(),
      schemaIdeas: buildSchemaIdeas(topic),
      internalLinks: buildInternalLinks(),
    };
  }, [brand, keyword, location, topic, audience, cta, url, tone]);

  return (
    <main className="min-h-screen bg-[var(--klear-neutral-50)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-4 mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--klear-primary-50)] border border-[var(--klear-primary-200)] w-fit">
            <span className="w-2 h-2 rounded-full bg-[var(--klear-primary-500)] animate-pulse-slow"></span>
            <span className="text-sm font-medium text-[var(--klear-primary-700)]">
              Admin • SEO & Social Studio
            </span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--klear-neutral-900)]">
            AI-assisted SEO & Social command center
          </h1>
          <p className="text-[var(--klear-neutral-600)] max-w-2xl">
            Generate titles, meta descriptions, OG image copy, social posts, and on-page SEO
            recommendations from a single source of truth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-[var(--klear-neutral-200)] p-6">
            <h2 className="text-lg font-semibold text-[var(--klear-neutral-900)] mb-4">
              Content inputs
            </h2>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm text-[var(--klear-neutral-600)]">Brand</span>
                <input
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--klear-neutral-300)] px-4 py-2.5"
                />
              </label>
              <label className="block">
                <span className="text-sm text-[var(--klear-neutral-600)]">Page topic</span>
                <input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--klear-neutral-300)] px-4 py-2.5"
                />
              </label>
              <label className="block">
                <span className="text-sm text-[var(--klear-neutral-600)]">Primary keyword</span>
                <input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--klear-neutral-300)] px-4 py-2.5"
                />
              </label>
              <label className="block">
                <span className="text-sm text-[var(--klear-neutral-600)]">Secondary keywords</span>
                <textarea
                  value={secondaryKeywords}
                  onChange={(e) => setSecondaryKeywords(e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-[var(--klear-neutral-300)] px-4 py-2.5"
                />
              </label>
              <label className="block">
                <span className="text-sm text-[var(--klear-neutral-600)]">Target location</span>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--klear-neutral-300)] px-4 py-2.5"
                />
              </label>
              <label className="block">
                <span className="text-sm text-[var(--klear-neutral-600)]">Audience</span>
                <textarea
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  rows={2}
                  className="mt-1 w-full rounded-xl border border-[var(--klear-neutral-300)] px-4 py-2.5"
                />
              </label>
              <label className="block">
                <span className="text-sm text-[var(--klear-neutral-600)]">Tone</span>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--klear-neutral-300)] px-4 py-2.5"
                >
                  {toneOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm text-[var(--klear-neutral-600)]">Primary CTA</span>
                <input
                  value={cta}
                  onChange={(e) => setCta(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--klear-neutral-300)] px-4 py-2.5"
                />
              </label>
              <label className="block">
                <span className="text-sm text-[var(--klear-neutral-600)]">Canonical URL</span>
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[var(--klear-neutral-300)] px-4 py-2.5"
                />
              </label>
            </div>
          </section>

          <section className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-[var(--klear-neutral-200)] p-6">
              <h2 className="text-lg font-semibold text-[var(--klear-neutral-900)] mb-4">
                SEO outputs
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[var(--klear-neutral-600)]">Title tag</p>
                  <div className="mt-1 rounded-xl border border-[var(--klear-neutral-200)] px-4 py-3 text-[var(--klear-neutral-900)]">
                    {generated.title}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[var(--klear-neutral-600)]">Meta description</p>
                  <div className="mt-1 rounded-xl border border-[var(--klear-neutral-200)] px-4 py-3 text-[var(--klear-neutral-900)]">
                    {generated.description}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[var(--klear-neutral-600)]">OG title</p>
                    <div className="mt-1 rounded-xl border border-[var(--klear-neutral-200)] px-4 py-3 text-[var(--klear-neutral-900)]">
                      {generated.ogTitle}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--klear-neutral-600)]">OG description</p>
                    <div className="mt-1 rounded-xl border border-[var(--klear-neutral-200)] px-4 py-3 text-[var(--klear-neutral-900)]">
                      {generated.ogDescription}
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[var(--klear-neutral-600)]">Twitter title</p>
                    <div className="mt-1 rounded-xl border border-[var(--klear-neutral-200)] px-4 py-3 text-[var(--klear-neutral-900)]">
                      {generated.twitterTitle}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--klear-neutral-600)]">Twitter description</p>
                    <div className="mt-1 rounded-xl border border-[var(--klear-neutral-200)] px-4 py-3 text-[var(--klear-neutral-900)]">
                      {generated.twitterDescription}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-[var(--klear-neutral-200)] p-6">
                <h3 className="text-lg font-semibold text-[var(--klear-neutral-900)] mb-4">
                  SERP preview
                </h3>
                <div className="border border-[var(--klear-neutral-200)] rounded-xl p-4">
                  <p className="text-blue-700 text-lg leading-snug">{generated.title}</p>
                  <p className="text-green-700 text-sm mt-1">{url}</p>
                  <p className="text-[var(--klear-neutral-600)] mt-2">
                    {generated.description}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-[var(--klear-neutral-200)] p-6">
                <h3 className="text-lg font-semibold text-[var(--klear-neutral-900)] mb-4">
                  OG image copy & specs
                </h3>
                <div className="border border-dashed border-[var(--klear-neutral-300)] rounded-xl p-4 bg-[var(--klear-neutral-50)]">
                  <p className="whitespace-pre-line text-[var(--klear-neutral-900)] font-medium">
                    {generated.ogImageCopy}
                  </p>
                  <div className="mt-4 text-sm text-[var(--klear-neutral-600)]">
                    1200×630 · Safe area 100px · Include logo + CTA
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[var(--klear-neutral-200)] p-6">
              <h2 className="text-lg font-semibold text-[var(--klear-neutral-900)] mb-4">
                Social post generator
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {generated.socialPosts.map((post) => (
                  <div key={post.platform} className="border border-[var(--klear-neutral-200)] rounded-xl p-4">
                    <p className="text-sm font-semibold uppercase text-[var(--klear-neutral-500)]">
                      {post.platform}
                    </p>
                    <p className="text-[var(--klear-neutral-900)] mt-2 whitespace-pre-line">
                      {post.text}
                    </p>
                    <p className="text-[var(--klear-neutral-500)] text-sm mt-3">{post.hashtags}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-[var(--klear-neutral-200)] p-6">
                <h3 className="text-lg font-semibold text-[var(--klear-neutral-900)] mb-4">
                  SEO checklist
                </h3>
                <ul className="space-y-2 text-sm text-[var(--klear-neutral-700)]">
                  {generated.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--klear-primary-500)]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-[var(--klear-neutral-200)] p-6">
                <h3 className="text-lg font-semibold text-[var(--klear-neutral-900)] mb-4">
                  Schema ideas
                </h3>
                <ul className="space-y-2 text-sm text-[var(--klear-neutral-700)]">
                  {generated.schemaIdeas.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--klear-secondary-500)]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-[var(--klear-neutral-200)] p-6">
                <h3 className="text-lg font-semibold text-[var(--klear-neutral-900)] mb-4">
                  Internal link targets
                </h3>
                <ul className="space-y-2 text-sm text-[var(--klear-neutral-700)]">
                  {generated.internalLinks.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--klear-accent-500)]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[var(--klear-neutral-200)] p-6">
              <h2 className="text-lg font-semibold text-[var(--klear-neutral-900)] mb-4">
                Additional AI tools
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-[var(--klear-neutral-700)]">
                <div className="border border-[var(--klear-neutral-200)] rounded-xl p-4">
                  <h4 className="font-semibold text-[var(--klear-neutral-900)]">Keyword clusters</h4>
                  <p className="mt-2">Group and prioritize secondary keywords by intent and funnel stage.</p>
                </div>
                <div className="border border-[var(--klear-neutral-200)] rounded-xl p-4">
                  <h4 className="font-semibold text-[var(--klear-neutral-900)]">Content outline</h4>
                  <p className="mt-2">Generate H2/H3 outlines with FAQs tailored to your audience.</p>
                </div>
                <div className="border border-[var(--klear-neutral-200)] rounded-xl p-4">
                  <h4 className="font-semibold text-[var(--klear-neutral-900)]">Screenshot checklist</h4>
                  <p className="mt-2">Visual QA for OG images, hero screenshots, and social proof captures.</p>
                </div>
                <div className="border border-[var(--klear-neutral-200)] rounded-xl p-4">
                  <h4 className="font-semibold text-[var(--klear-neutral-900)]">UTM builder</h4>
                  <p className="mt-2">Create campaign URLs for social, email, and paid campaigns.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
