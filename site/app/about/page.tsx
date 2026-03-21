import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Milton Chavez",
  jobTitle: "Founder and Medical Director",
  description:
    "Board-certified family physician with 30+ years of clinical experience. Trained at Rush University and retained as faculty and preceptor. Founder of Illari Aesthetics in Chicago's Wicker Park.",
  url: "https://illariaesthetics.com/about",
  image: "https://illariaesthetics.com/assets/team/dr-chavez.jpg",
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Illari Aesthetics",
    url: "https://illariaesthetics.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Rush University",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Board Certification",
    name: "Board-Certified Family Physician",
  },
  knowsAbout: [
    "Family Medicine",
    "Medical Aesthetics",
    "Surgical Dermatology",
    "Microneedling",
    "Chemical Peels",
    "Botox",
    "Dermal Fillers",
    "GLP-1 Weight Loss",
    "IV Therapy",
  ],
  sameAs: [
    "https://www.instagram.com/illariaesthetics/",
    "https://www.facebook.com/illariaesthetics/",
  ],
};

export const metadata: Metadata = {
  title: "About Illari Aesthetics | Dr. Milton Chavez, Chicago Med Spa",
  description: "Meet Dr. Milton Chavez, board-certified family physician with 30+ years of clinical experience and founder of Illari Aesthetics in Wicker Park, Chicago.",
  alternates: { canonical: "https://illariaesthetics.com/about" },
  openGraph: {
    url: "https://illariaesthetics.com/about",
    title: "Dr. Milton Chavez | Board-Certified Physician & Founder, Illari Aesthetics Chicago",
    description: "Dr. Chavez trained at Rush University and spent 30+ years in clinical medicine before founding Illari Aesthetics. This is physician-led care, not an esthetician.",
    images: [
      {
        url: "/assets/team/dr-chavez.jpg",
        width: 1023,
        height: 1273,
        alt: "Dr. Milton Chavez, Founder and Medical Director of Illari Aesthetics",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero */}
      <section className="relative bg-dark linen-texture-dark overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end min-h-[700px]">
            {/* Left — Editorial copy */}
            <div className="lg:col-span-6 py-28 lg:py-36 lg:pr-20 order-2 lg:order-1">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Our Story</p>
              <h1 className="font-serif text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8">
                Physician-Led<br /><span className="italic">Aesthetic Excellence</span>
              </h1>
              <div className="w-12 h-px bg-gold/40 mb-10" />
              <p className="text-white/50 text-sm font-sans font-light leading-[1.8] mb-6 max-w-lg">
                Dr. Milton Chavez spent years teaching resident physicians at Rush University before he opened his own aesthetics practice. That background is not just a line on a bio. It is the reason Illari Aesthetics approaches skin care the way a clinical practice would.
              </p>
              <p className="text-white/50 text-sm font-sans font-light leading-[1.8] mb-6 max-w-lg">
                The mission is specific. Facilitate the expression of your true desired appearance. Not alter who you are, not hand you a package deal. Give you a treatment protocol built around your skin and your goals.
              </p>
              <p className="text-white/50 text-sm font-sans font-light leading-[1.8] mb-14 max-w-lg">
                The office is in Wicker Park on North Western Avenue. A practice that feels professional without feeling cold.
              </p>
              <a
                href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
              >
                Schedule a Consultation
              </a>
            </div>

            {/* Right — Portrait */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative h-[420px] lg:h-[700px]">
              <Image
                src="/assets/team/dr-chavez.jpg"
                alt="Dr. Milton Chavez, Founder and Medical Director of Illari Aesthetics"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/30 via-transparent to-transparent" />
              {/* Name badge */}
              <div className="absolute bottom-8 left-8 bg-dark/75 backdrop-blur-sm border border-gold/20 px-6 py-4">
                <p className="font-serif text-gold text-base mb-1">Dr. Milton Chavez</p>
                <p className="text-[9px] tracking-[0.25em] uppercase font-sans font-light text-white/50">Founder &amp; Medical Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Chavez Bio */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Leadership</p>
            <h2 className="section-title">Meet Dr. Chavez</h2>
            <div className="gold-divider" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-medium leading-relaxed mb-6 text-lg">
              Board-certified in family medicine, trained at Rush University, then kept on as faculty to teach the next generation of physicians. Dr. Chavez has been practicing clinical medicine since the early 1990s. In 2010, he opened a private practice spanning family medicine, medical aesthetics, and surgical dermatology.
            </p>
            <p className="text-neutral-medium leading-relaxed mb-6 text-lg">
              His additional training covers surgical scar revisions, Ortho biologics, acne treatment, and advanced filler technique. None of that is standard at a beauty spa. It is standard at Illari Aesthetics.
            </p>

            <blockquote className="border-l-2 border-gold pl-8 my-10">
              <p className="text-dark-medium font-serif italic text-2xl leading-relaxed">
                &ldquo;The mission is specific. Facilitate the expression of your true desired appearance.&rdquo;
              </p>
              <cite className="text-neutral-medium text-sm mt-4 block not-italic font-sans tracking-wider">
                Dr. Milton Chavez
              </cite>
            </blockquote>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "Board Certification",
                detail: "Board-Certified Family Physician",
                iconPath: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
              },
              {
                title: "Academic Training",
                detail: "Rush University, Faculty Member and Preceptor",
                iconPath: "M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
              },
              {
                title: "Private Practice",
                detail: "Opened in 2010, Family Medicine, Medical Aesthetics, and Surgical Dermatology",
                iconPath: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
              },
              {
                title: "Specialties",
                detail: "Surgical Scar Revisions, Ortho Biologics, Acne Treatment, Advanced Filler Technique",
                iconPath: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 p-6 flex gap-4">
                <svg
                  className="w-8 h-8 text-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={item.iconPath} />
                </svg>
                <div>
                  <h3 className="font-serif text-gold text-lg mb-2">{item.title}</h3>
                  <p className="text-neutral-medium text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Why Choose Us</p>
            <h2 className="section-title-white">What Sets Us Apart</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Physician-Led Care",
                description: "Dr. Chavez is a board-certified family physician with 30+ years of clinical experience. Every treatment here starts with that level of training behind it.",
                iconPath: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
              },
              {
                title: "Medical-Grade Products",
                description: "AlumierMD and Derma Made are professionally dispensed lines that require medical oversight to use correctly. You will not find them at the drugstore.",
                iconPath: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 0 1 .45 1.317C20.25 17.801 18.988 19 17.438 19H6.562C5.012 19 3.75 17.801 3.75 16.317a2.25 2.25 0 0 1 .45-1.317M16.5 3h-9",
              },
              {
                title: "True Personalization",
                description: "Your treatment plan is built from your skin type, your history, and what you actually want. Not a preset package selected from a menu.",
                iconPath: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
              },
              {
                title: "Academic Credentials",
                description: "Dr. Chavez trained at Rush University and was retained as faculty to teach and precept resident physicians. That depth of training is unusual in aesthetics.",
                iconPath: "M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
              },
              {
                title: "Advanced Techniques",
                description: "Surgical scar revisions, Ortho biologics, acne treatment, advanced filler technique. Skills that take years of focused training and are rarely found at a med spa.",
                iconPath: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
              },
              {
                title: "Comprehensive Wellness",
                description: "Skin care, injectables, IV therapy, and physician-supervised weight loss. One practice, one physician, covering more of what your body actually needs.",
                iconPath: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 p-8 hover:border-gold/40 transition-colors h-full flex flex-col">
                <svg
                  className="w-10 h-10 text-gold mb-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={item.iconPath} />
                </svg>
                <h3 className="font-serif text-white text-xl mb-3">{item.title}</h3>
                <p className="text-neutral-light text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark linen-texture-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Wicker Park, Chicago</p>
          <h2 className="font-serif text-white text-3xl md:text-4xl mb-6">Ready to Experience the Illari Difference?</h2>
          <div className="gold-divider" />
          <p className="text-white/50 text-sm font-sans font-light mb-12 max-w-2xl mx-auto leading-[1.8]">
            Book a consultation and find out what a physician-led practice looks like in practice.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Book a Consultation
            </a>
            <Link href="/contact" className="text-white/50 text-sm font-mono tracking-widest hover:text-white/80 transition-colors duration-500 py-3.5">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
