import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microneedling & Dermaplaning Chicago | Medical Skin Care by Dr. Chavez",
  description: "Physician-led microneedling, dermaplaning, and medical skin care in Chicago's Wicker Park. Dr. Chavez offers chemical peels, cryoablation, and surgical dermatology with medical-grade products for superior results.",
  alternates: { canonical: "https://illariaesthetics.com/skin-care" },
  openGraph: {
    url: "https://illariaesthetics.com/skin-care",
    title: "Microneedling & Dermaplaning Chicago | Dr. Chavez, Board-Certified Physician",
    description: "Microneedling, chemical peels, cryoablation, surgical dermatology, and dermaplaning by a board-certified physician in Chicago's Wicker Park.",
    images: [
      {
        url: "/assets/gallery/skincare-chemical-peel.jpg",
        alt: "Medical-grade skin care treatment at Illari Aesthetics, Chicago",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Illari Aesthetics different from other skin care spas in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Chavez is a board-certified family physician with over 30 years of clinical experience, trained at Rush University and retained as faculty. He evaluates your skin the way a physician does and uses products that are not available to non-medical providers. Every plan is built for you, not borrowed from a template.",
      },
    },
    {
      "@type": "Question",
      name: "What skin care treatments do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer skin surveys, cryoablation, surgical dermatology including lesion and mole removal and scar revision, chemical peels, dermaplaning, and microneedling. All treatments use medical-grade products from AlumierMD and Derma Made.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know which treatment is right for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the Skin Survey. Dr. Chavez performs a full facial assessment and walks you through treatment options, a recommended plan, and transparent pricing based on your specific skin and concerns.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use different products than a regular spa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Chavez uses professionally-dispensed medical-grade products from AlumierMD and Derma Made, which are not available to non-medical providers. As a doctor, he is able to use higher-grade products for better patient results.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer mole removal in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Chavez performs mole removal at Illari Aesthetics in Chicago's Wicker Park through surgical dermatology. He evaluates each lesion clinically before recommending removal and performs the procedure with minimal scarring. As a board-certified physician with specific surgical training, Dr. Chavez brings a level of precision to mole removal that is not standard at most med spas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer scar removal or scar revision in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Chavez has specific training in surgical scar revisions, which is uncommon at most med spas. He uses surgical dermatology techniques to address scars from injury, surgery, or acne. Treatment plans are customized to the type, depth, and location of the scar.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer wart removal in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Chavez offers wart removal at Illari Aesthetics through surgical dermatology and cryoablation. Cryoablation uses extremely cold liquid to freeze and destroy the affected tissue. Dr. Chavez evaluates the best approach based on the type, size, and location of the wart.",
      },
    },
    {
      "@type": "Question",
      name: "Is cryoablation the same as cryotherapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cryoablation and cryotherapy share the principle of using cold to destroy tissue, but cryoablation is a targeted medical procedure used to treat specific skin lesions including hyperpigmentation, sun spots, melasma, and irregular pigmentation. Dr. Chavez uses medical-grade cryoablation at Illari Aesthetics in Chicago, not the whole-body wellness chambers used for athletic recovery.",
      },
    },
  ],
};

const treatments = [
  {
    title: "Skin Survey",
    description: "A full facial assessment covering all lesions, scars, and blemishes, with treatment options and transparent pricing. If you are unsure what your skin needs, or want a second opinion from an actual physician, this is where to start.",
    image: "/assets/gallery/skincare-survey.jpg",
  },
  {
    title: "Cryoablation",
    description: "Extremely cold liquid applied with precision to freeze and destroy abnormal tissue. Dr. Chavez uses cryoablation to target hyperpigmentation, sun spots, melasma, and irregular pigmentation. A physician-grade technique for pigmentation that does not respond to topical treatments.",
    image: "/assets/gallery/skincare-cryo.jpg",
  },
  {
    title: "Surgical Dermatology",
    description: "Wart removal, lesion and mole removal, scar revision. Dr. Chavez trained specifically in surgical scar revisions, which is not common at med spas. If you have a scar or a suspicious growth you want addressed by an actual physician, this is the treatment.",
    image: "/assets/gallery/skincare-surgical.jpg",
  },
  {
    title: "Chemical Peels",
    description: "Chemical peels customized to your peel history and skin type, improving tone, targeting acne, and reducing pore size. The difference here is the grade of products. Dr. Chavez uses medical-grade formulations that are not available at a standard spa.",
    image: "/assets/gallery/skincare-facial.jpg",
    quote: "As a doctor, we use higher grade medical products for a better patient result.",
  },
  {
    title: "Dermaplane",
    description: "Manual exfoliation that clears surface debris and significantly increases topical product absorption. Cleaner delivery means the AlumierMD or Derma Made products applied afterward actually do more. Works well paired with a chemical peel.",
    image: "/assets/gallery/skincare-dermaplane.jpg",
  },
  {
    title: "Microneedling",
    description: "Small controlled injuries to the first layer of skin trigger collagen and elastin production. The result is firmer, smoother skin over time. Good for texture, acne scarring, and general skin renewal.",
    image: "/assets/gallery/skincare-microneedling.jpg",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://illariaesthetics.com" },
    { "@type": "ListItem", position: 2, name: "Skin Care", item: "https://illariaesthetics.com/skin-care" },
  ],
};

export default function SkinCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative pt-[100px] pb-[75px] bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/skincare-chemical-peel.jpg"
            alt="Medical-grade skin care treatments in Chicago"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">
            Physician-Led Skin Care, Chicago
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-3xl">
            Medical-Grade Skin Care by a Board-Certified Physician
          </h1>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            Most skin care in Chicago is performed by estheticians using retail-grade products. At Illari Aesthetics, it is guided by a board-certified family physician with 30 years of clinical experience, using products that require medical oversight to dispense. That is a meaningful distinction.
          </p>
          <a
            href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Skin Consultation
          </a>
        </div>
      </section>

      {/* Why Dr. Chavez */}
      <section className="py-28 bg-marble-stone linen-texture">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — editorial label + heading */}
            <div className="lg:col-span-4">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Why It Matters</p>
              <h2 className="font-serif text-dark text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
                A Physician&apos;s Approach<br />to Skin Health
              </h2>
              <div className="w-10 h-px bg-gold/30 mt-8" />
            </div>
            {/* Right — copy + blockquote */}
            <div className="lg:col-span-8">
              <p className="text-dark/50 text-base font-sans font-light leading-[1.9] mb-12">
                When Dr. Chavez examines your skin, he is drawing on 30 years of clinical and academic training, not aesthetic intuition. He sees lesions, pigmentation patterns, and scarring the way a physician does. Every recommendation is backed by that same training, and carried out with AlumierMD and Derma Made, two professional lines not available over the counter.
              </p>
              <blockquote className="border-l-2 border-gold/40 pl-8">
                <p className="font-serif text-dark italic text-[clamp(1.4rem,3vw,2rem)] leading-[1.35]">
                  &ldquo;As a doctor, we use higher grade medical products for a better patient result.&rdquo;
                </p>
                <cite className="text-gold text-[10px] tracking-[0.25em] uppercase font-sans font-light mt-5 block not-italic">
                  Dr. Milton Chavez, Founder and Medical Director
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 bg-marble-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Our Treatments</p>
              <h2 className="text-4xl md:text-5xl font-serif text-dark leading-tight">Skin Care Services</h2>
              <div className="w-16 h-px bg-gold/50 mt-6" />
            </div>
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start md:self-auto flex-shrink-0"
            >
              Book a Consultation
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.title}
                className="ken-burns group bg-white hairline-t hairline-b overflow-hidden reveal flex flex-col"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden bg-neutral-bg">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:brightness-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
                  {/* Treatment number badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 border border-ivory/60 flex items-center justify-center bg-dark/40 backdrop-blur-sm">
                    <span className="text-ivory text-xs font-sans tracking-widest">0{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1 border border-ivory-dark/60">
                  <h3 className="font-serif text-2xl text-dark mb-3 group-hover:text-gold transition-colors duration-300">{treatment.title}</h3>
                  <div className="w-8 h-px bg-gold/50 mb-5" />
                  <p className="text-neutral-medium text-sm leading-relaxed mb-5 flex-1">{treatment.description}</p>
                  {treatment.quote && (
                    <blockquote className="border-l border-gold/60 pl-4 mb-5 bg-marble-stone/60 py-3 pr-3">
                      <p className="text-dark font-serif italic text-sm leading-relaxed">
                        &ldquo;{treatment.quote}&rdquo;
                      </p>
                      <cite className="text-gold text-xs mt-2 block not-italic font-sans tracking-wider">
                        Dr. Milton Chavez
                      </cite>
                    </blockquote>
                  )}
                  <a
                    href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold text-xs tracking-widest uppercase font-sans group-hover:gap-3 transition-all duration-300 mt-auto"
                  >
                    Book This Treatment
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Used */}
      <section className="py-28 bg-dark linen-texture-dark">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Professional Products</p>
              <h2 className="font-serif text-ivory text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
                Medical-Grade Products<br />for Better Results
              </h2>
              <div className="w-10 h-px bg-gold/30 mt-8" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-ivory/45 text-base font-sans font-light leading-[1.9] mb-10">
                Dr. Chavez uses AlumierMD and Derma Made in every in-office treatment. These are professionally dispensed lines, not available at retail, chosen because they match the clinical standards of the practice. You can continue using them at home through Illari Aesthetics.
              </p>
              <Link
                href="/products"
                className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
              >
                Shop Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-marble-stone linen-texture">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left — sticky editorial header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Common Questions</p>
              <h2 className="font-serif text-dark text-[clamp(2rem,4vw,3.2rem)] leading-[1.1]">Skin Care FAQ</h2>
              <div className="w-10 h-px bg-gold/30 mt-8 mb-8" />
              <p className="text-dark/40 text-sm font-sans font-light leading-[1.8]">
                Questions about our treatments or physician-led approach? These are the most common ones.
              </p>
            </div>

            {/* Right — accordion */}
            <div className="lg:col-span-8 divide-y divide-gold/10">
              {[
                {
                  q: "What makes Illari Aesthetics different from other skin care spas in Chicago?",
                  a: "Dr. Chavez is a board-certified family physician with over 30 years of clinical experience, trained at Rush University and retained as faculty. He evaluates your skin the way a physician does and uses products that are not available to non-medical providers. Every plan is built for you, not borrowed from a template.",
                },
                {
                  q: "What skin care treatments do you offer?",
                  a: "We offer skin surveys, cryoablation, surgical dermatology including lesion and mole removal and scar revision, chemical peels, dermaplaning, and microneedling. All treatments use medical-grade products from AlumierMD and Derma Made.",
                },
                {
                  q: "How do I know which treatment is right for me?",
                  a: "Start with the Skin Survey. Dr. Chavez performs a full facial assessment and walks you through treatment options, a recommended plan, and transparent pricing based on your specific skin and concerns.",
                },
                {
                  q: "Do you use different products than a regular spa?",
                  a: "Yes. Dr. Chavez uses professionally-dispensed medical-grade products from AlumierMD and Derma Made, which are not available to non-medical providers. As a doctor, he is able to use higher-grade products for better patient results.",
                },
                {
                  q: "Do you offer mole removal in Chicago?",
                  a: "Yes. Dr. Chavez performs mole removal at Illari Aesthetics in Chicago's Wicker Park through surgical dermatology. He evaluates each lesion clinically before recommending removal and performs the procedure with minimal scarring. As a board-certified physician with specific surgical training, Dr. Chavez brings a level of precision to mole removal that is not standard at most med spas.",
                },
                {
                  q: "Do you offer scar removal or scar revision in Chicago?",
                  a: "Yes. Dr. Chavez has specific training in surgical scar revisions, which is uncommon at most med spas. He uses surgical dermatology techniques to address scars from injury, surgery, or acne. Treatment plans are customized to the type, depth, and location of the scar.",
                },
                {
                  q: "Do you offer wart removal in Chicago?",
                  a: "Yes. Dr. Chavez offers wart removal at Illari Aesthetics through surgical dermatology and cryoablation. Cryoablation uses extremely cold liquid to freeze and destroy the affected tissue. Dr. Chavez evaluates the best approach based on the type, size, and location of the wart.",
                },
                {
                  q: "Is cryoablation the same as cryotherapy?",
                  a: "Cryoablation and cryotherapy share the principle of using cold to destroy tissue, but cryoablation is a targeted medical procedure used to treat specific skin lesions including hyperpigmentation, sun spots, melasma, and irregular pigmentation. Dr. Chavez uses medical-grade cryoablation at Illari Aesthetics in Chicago, not the whole-body wellness chambers used for athletic recovery.",
                },
              ].map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="cursor-pointer flex items-start justify-between gap-6 font-serif text-dark text-lg leading-snug hover:text-gold transition-colors duration-300 list-none">
                    {item.q}
                    <span className="flex-shrink-0 w-6 h-6 border border-gold/40 rounded-full flex items-center justify-center mt-0.5 group-open:border-gold transition-colors duration-300">
                      <svg className="w-3 h-3 text-gold group-open:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-dark/45 text-sm font-sans font-light leading-[1.9] mt-5 pr-12">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-dark linen-texture-dark">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Ready to Begin?</p>
          <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] mb-6">
            Schedule Your Skin Consultation<br />in Chicago
          </h2>
          <div className="w-10 h-px bg-gold/30 mx-auto mb-8" />
          <p className="text-ivory/40 text-sm font-sans font-light leading-[1.9] mb-12 max-w-lg mx-auto">
            Open Monday through Friday, 9am to 4pm. Located at 1509 N Western Avenue, Unit B, Wicker Park, Chicago.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Book Now
            </a>
            <a href="tel:7732190326" className="text-ivory/35 text-sm font-mono tracking-widest hover:text-ivory/70 transition-colors duration-500">
              773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
