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
            href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Skin Consultation
          </a>
        </div>
      </section>

      {/* Why Dr. Chavez */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Why It Matters</p>
          <h2 className="section-title">A Physician&apos;s Approach to Skin Health</h2>
          <div className="gold-divider" />
          <p className="text-neutral-medium leading-relaxed mb-6 text-lg">
            When Dr. Chavez examines your skin, he is drawing on 30 years of clinical and academic training, not aesthetic intuition. He sees lesions, pigmentation patterns, and scarring the way a physician does. Every recommendation is backed by that same training, and carried out with AlumierMD and Derma Made, two professional lines not available over the counter.
          </p>
          <blockquote className="border border-gold/20 p-8 mt-10">
            <p className="text-dark-medium font-serif italic text-2xl leading-relaxed">
              &ldquo;As a doctor, we use higher grade medical products for a better patient result.&rdquo;
            </p>
            <cite className="text-neutral-medium text-sm mt-4 block not-italic font-sans tracking-wider">
              Dr. Milton Chavez, Founder and Medical Director
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Our Treatments</p>
            <h2 className="section-title">Skin Care Services</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-16">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-serif text-3xl text-dark-medium mb-4">{treatment.title}</h3>
                  <div className="w-10 h-px bg-gold mb-6" />
                  <p className="text-neutral-medium leading-relaxed mb-6">{treatment.description}</p>
                  {treatment.quote && (
                    <blockquote className="border-l-2 border-gold pl-6 mb-6">
                      <p className="text-dark-medium font-serif italic">
                        &ldquo;{treatment.quote}&rdquo;
                      </p>
                      <cite className="text-neutral-medium text-sm mt-2 block not-italic">
                        Dr. Milton Chavez
                      </cite>
                    </blockquote>
                  )}
                  <a
                    href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Book This Treatment
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Used */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Professional Products</p>
          <h2 className="section-title-white">Medical-Grade Products for Better Results</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light leading-relaxed mb-10">
            Dr. Chavez uses AlumierMD and Derma Made in every in-office treatment. These are professionally dispensed lines, not available at retail, chosen because they match the clinical standards of the practice. You can continue using them at home through Illari Aesthetics.
          </p>
          <Link href="/products" className="btn-primary">
            Shop Our Products
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Common Questions</p>
            <h2 className="section-title">Skin Care FAQ</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-6">
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
              <details key={item.q} className="border border-neutral-bg group">
                <summary className="px-6 py-5 cursor-pointer flex items-center justify-between font-serif text-dark-medium text-lg hover:text-gold transition-colors">
                  {item.q}
                  <svg className="w-5 h-5 flex-shrink-0 ml-4 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-neutral-medium leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Schedule Your Skin Consultation in Chicago</h2>
          <div className="gold-divider" />
          <p className="text-neutral-medium mb-10 max-w-xl mx-auto leading-relaxed">
            Open Monday through Friday, 9am to 4pm. Located at 1509 N Western Avenue, Unit B, Wicker Park, Chicago.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Now
            </a>
            <a href="tel:7732190326" className="btn-outline">
              Call 773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
