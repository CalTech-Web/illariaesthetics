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
      <section className="py-32 bg-marble-stone linen-texture">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Leadership</p>
            <h2 className="font-serif text-dark text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-6">
              Meet <span className="italic">Dr. Chavez</span>
            </h2>
            <div className="w-12 h-px bg-gold/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left — editorial bio */}
            <div className="lg:col-span-6">
              <p className="text-dark/55 text-[15px] font-sans font-light leading-[1.9] mb-6">
                Board-certified in family medicine, trained at Rush University, then kept on as faculty to teach the next generation of physicians. Dr. Chavez has been practicing clinical medicine since the early 1990s.
              </p>
              <p className="text-dark/55 text-[15px] font-sans font-light leading-[1.9] mb-6">
                In 2010, he opened a private practice spanning family medicine, medical aesthetics, and surgical dermatology. His additional training covers surgical scar revisions, Ortho biologics, acne treatment, and advanced filler technique.
              </p>
              <p className="text-dark/45 text-sm font-sans font-light leading-[1.9] mb-10">
                None of that is standard at a beauty spa. It is standard at Illari Aesthetics.
              </p>

              <blockquote className="border-l-2 border-gold/50 pl-8 mb-2">
                <p className="font-serif text-dark italic text-[clamp(1.3rem,2.2vw,1.7rem)] leading-[1.4]">
                  &ldquo;The mission is specific. Facilitate the expression of your true desired appearance.&rdquo;
                </p>
                <cite className="text-gold/70 text-[10px] tracking-[0.25em] uppercase font-sans font-light mt-5 block not-italic">
                  Dr. Milton Chavez
                </cite>
              </blockquote>
            </div>

            {/* Right — credentials */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Board Certification",
                    detail: "Board-Certified Family Physician",
                    stat: "M.D.",
                  },
                  {
                    title: "Academic Training",
                    detail: "Rush University, Faculty Member and Preceptor",
                    stat: "Rush",
                  },
                  {
                    title: "Private Practice",
                    detail: "Family Medicine, Medical Aesthetics, and Surgical Dermatology",
                    stat: "2010",
                  },
                  {
                    title: "Specialties",
                    detail: "Scar Revisions, Ortho Biologics, Acne Treatment, Advanced Filler",
                    stat: "30+",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-dark p-8 group hover:bg-dark/95 transition-colors duration-500">
                    <p className="font-serif text-gold text-4xl mb-4">{item.stat}</p>
                    <h3 className="font-serif text-ivory text-lg mb-2">{item.title}</h3>
                    <p className="text-ivory/35 text-sm font-sans font-light leading-[1.7]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/about-why-choose.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/85" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Why Choose Us</p>
            <h2 className="font-serif text-white text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] mb-6">What Sets Us <span className="italic">Apart</span></h2>
            <div className="w-12 h-px bg-gold/40 mx-auto mb-6" />
            <p className="text-white/40 text-sm font-sans font-light leading-[1.8] max-w-lg mx-auto">
              Physician-led care that goes beyond the surface. Every treatment backed by 30+ years of clinical training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {[
              {
                title: "Physician-Led Care",
                description: "Dr. Chavez is a board-certified family physician with 30+ years of clinical experience. Every treatment here starts with that level of training behind it.",
              },
              {
                title: "Medical-Grade Products",
                description: "AlumierMD and Derma Made are professionally dispensed lines that require medical oversight to use correctly. You will not find them at the drugstore.",
              },
              {
                title: "True Personalization",
                description: "Your treatment plan is built from your skin type, your history, and what you actually want. Not a preset package selected from a menu.",
              },
              {
                title: "Academic Credentials",
                description: "Dr. Chavez trained at Rush University and was retained as faculty to teach and precept resident physicians. That depth of training is unusual in aesthetics.",
              },
              {
                title: "Advanced Techniques",
                description: "Surgical scar revisions, Ortho biologics, acne treatment, advanced advanced filler technique. Skills that take years of focused training and are rarely found at a med spa.",
              },
              {
                title: "Comprehensive Wellness",
                description: "Skin care, injectables, IV therapy, and physician-supervised weight loss. One practice, one physician, covering more of what your body actually needs.",
              },
            ].map((item, i) => (
              <div key={item.title} className="bg-dark/60 backdrop-blur-sm p-10 hover:bg-dark/80 transition-colors duration-500 group">
                <p className="font-serif text-gold text-3xl mb-4">0{i + 1}</p>
                <h3 className="font-serif text-white text-xl mb-3 group-hover:text-gold transition-colors duration-500">{item.title}</h3>
                <p className="text-white/35 text-sm font-sans font-light leading-[1.8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/cta-beauty.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/75" />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-8 lg:px-12 py-28 lg:py-36 text-center">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Wicker Park, Chicago</p>
          <h2 className="font-serif text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-6">
            Experience the Illari <span className="italic">Difference</span>
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
          <p className="text-white/50 text-sm font-sans font-light mb-12 max-w-md mx-auto leading-[1.8]">
            A board-certified physician is ready to evaluate your skin and build a real treatment plan, tailored to your goals, not templated from a menu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Book a Consultation
            </a>
            <a href="tel:7732190326" className="text-white/40 text-sm font-mono tracking-widest hover:text-white/70 transition-colors duration-500 py-3.5">
              773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
