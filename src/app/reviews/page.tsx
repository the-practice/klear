import { Metadata } from "next";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials",
  description:
    "Read real reviews from Klear patients who have transformed their mental health with at-home ketamine therapy for depression, anxiety, and PTSD.",
};

export default function ReviewsPage() {
  const reviews = [
    {
      quote: "After struggling with depression for over 15 years and trying countless medications, Klear was a turning point. Within weeks, I noticed a shift in how I experienced life. The fog started to lift.",
      author: "Sarah M.",
      location: "Tampa, FL",
      condition: "Depression",
      rating: 5,
      date: "3 months ago",
    },
    {
      quote: "The convenience of at-home treatment made all the difference. I was hesitant about ketamine therapy, but the clinical team walked me through everything. I feel supported every step of the way.",
      author: "Michael R.",
      location: "Seattle, WA",
      condition: "Anxiety",
      rating: 5,
      date: "2 months ago",
    },
    {
      quote: "As a veteran with PTSD, I had given up on finding relief. Klear gave me hope again. The treatment combined with integration coaching has been life-changing.",
      author: "James K.",
      location: "Orlando, FL",
      condition: "PTSD",
      rating: 5,
      date: "4 months ago",
    },
    {
      quote: "I was skeptical about doing this at home, but the process is so well-designed. The blood pressure monitor, check-ins, and having my wife as my support person made me feel completely safe.",
      author: "Jennifer L.",
      location: "Miami, FL",
      condition: "Treatment-Resistant Depression",
      rating: 5,
      date: "1 month ago",
    },
    {
      quote: "The integration sessions are what set Klear apart. It's not just about the medicine—it's about processing the experience and making lasting changes. My anxiety is more manageable than ever.",
      author: "David P.",
      location: "Tacoma, WA",
      condition: "Anxiety",
      rating: 5,
      date: "6 weeks ago",
    },
    {
      quote: "I appreciate the transparency around pricing and what to expect. No surprises, just quality care. The monthly check-ins with my clinician keep me on track.",
      author: "Amanda T.",
      location: "Jacksonville, FL",
      condition: "Depression",
      rating: 5,
      date: "2 months ago",
    },
    {
      quote: "Finally found something that works. After years of therapy and medications with limited success, ketamine has given me my life back. I'm present with my kids again.",
      author: "Rachel S.",
      location: "Spokane, WA",
      condition: "Depression",
      rating: 5,
      date: "5 months ago",
    },
    {
      quote: "The clinical team is incredibly responsive. When I had questions during my first session, they answered right away. That kind of support makes all the difference.",
      author: "Chris M.",
      location: "Fort Lauderdale, FL",
      condition: "Anxiety & Depression",
      rating: 5,
      date: "3 weeks ago",
    },
  ];

  const stats = [
    { value: "4.9", label: "Average Rating" },
    { value: "95%", label: "Would Recommend" },
    { value: "89%", label: "Report Improvement" },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
        {/* Background Image Placeholder - Edge to Edge */}
        <div className="absolute inset-0 opacity-10">
          <ImagePlaceholder
            id="5a"
            aspectRatio="banner"
            description="Happy people/community visual"
            className="w-full h-full rounded-none border-0"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--klear-neutral-900)]">
              Hear from our patients
            </h1>
            <p className="mt-6 text-lg text-[var(--klear-neutral-600)]">
              Real stories from people who have experienced the transformative power of ketamine therapy with Klear.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-[var(--klear-primary-600)]">{stat.value}</div>
                <div className="mt-1 text-sm text-[var(--klear-neutral-600)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial - Edge to Edge */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <ImagePlaceholder
            id="5b"
            aspectRatio="square"
            description="Featured patient portrait - Edge to Edge"
            className="w-full h-full rounded-none border-0"
          />
          <div className="bg-[var(--klear-primary-50)] p-12 lg:p-16 flex items-center">
            <div className="animate-fade-in-right opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[var(--klear-accent-500)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl text-[var(--klear-neutral-800)] font-medium leading-relaxed">
                &ldquo;Klear changed my life. After 20 years of struggling with treatment-resistant depression, I finally found something that works.&rdquo;
              </blockquote>
              <div className="mt-8">
                <div className="font-semibold text-[var(--klear-neutral-900)] text-lg">Maria G.</div>
                <div className="text-[var(--klear-neutral-600)]">Orlando, FL • Depression</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-[var(--klear-neutral-50)] rounded-2xl p-8 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--klear-accent-500)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[var(--klear-neutral-700)] leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--klear-primary-100)] flex items-center justify-center">
                      <span className="text-lg font-semibold text-[var(--klear-primary-600)]">
                        {review.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-[var(--klear-neutral-900)]">{review.author}</div>
                      <div className="text-sm text-[var(--klear-neutral-500)]">
                        {review.location} • {review.condition}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-[var(--klear-neutral-400)]">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 lg:py-28 bg-[var(--klear-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-[var(--klear-neutral-900)]">
              Video testimonials
            </h2>
            <p className="mt-4 text-[var(--klear-neutral-600)]">
              Watch patients share their experiences in their own words.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { id: "5c", name: "Sarah's Story", duration: "2 min" },
              { id: "5d", name: "Michael's Journey", duration: "3 min" },
              { id: "5e", name: "Jennifer's Recovery", duration: "2 min" },
            ].map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="relative">
                  <ImagePlaceholder
                    id={video.id}
                    aspectRatio="video"
                    description={`${video.name} thumbnail`}
                    className="w-full rounded-none border-x-0 border-t-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[var(--klear-primary-600)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-[var(--klear-neutral-900)]">{video.name}</p>
                  <p className="text-sm text-[var(--klear-neutral-500)]">{video.duration} watch</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Image - Edge to Edge */}
      <section className="relative">
        <ImagePlaceholder
          id="5f"
          aspectRatio="wide"
          description="Community/support group visual - Edge to Edge"
          className="w-full rounded-none border-0"
        />
      </section>
    </div>
  );
}
