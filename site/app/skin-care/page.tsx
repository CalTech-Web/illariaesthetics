import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skin Care Chicago | Medical-Grade Skin Treatments by Dr. Chavez",
  description: "Physician-led skin care in Chicago's Wicker Park. Dr. Chavez offers chemical peels, microneedling, cryoablation, and surgical dermatology with medical-grade products for superior results.",
};

const treatments = [
  {
    title: "Skin Survey",
    description: "A full facial survey of all facial lesions, scars, and blemishes with treatment options, recommendations, and pricing. Ideal for clients who are unsure of their needs or are seeking a second professional opinion. Dr. Chavez reviews your skin with the precision of a physician, not an esthetician.",
    image: "/assets/gallery/skincare-survey.jpg",
  },
  {
    title: "Cryoablation",
    description: "Uses extremely cold liquid to freeze and destroy abnormal tissue. Dr. Chavez uses this physician-grade technique to target hyperpigmentation, sun spots, benign skin tissue, melasma, and irregular pigmentation. A medical approach to stubborn pigmentation concerns.",
    image: "/assets/gallery/skincare-cryo.jpg",
  },
  {
    title: "Surgical Dermatology",
    description: "Removal of warts, suspicious or benign lesions, and moles with minimal scarring. Also addresses scar removal and revisions. As a physician with specialized training in surgical scar revisions, Dr. Chavez brings clinical precision to every dermatological procedure.",
    image: "/assets/gallery/skincare-surgical.jpg",
  },
  {
    title: "Chemical Peels",
    description: "Customizable to any peel history, our chemical peels improve skin tone and pigmentation, target acne, and reduce pore size. We use higher-grade medical products than what is available at a typical spa, resulting in better patient outcomes.",
    image: "/assets/gallery/skincare-facial.jpg",
    quote: "As a doctor, we use higher grade medical products for a better patient result.",
  },
  {
    title: "Dermaplane",
    description: "Manual exfoliation that removes surface debris, increases topical product absorption, and creates a healthier, more radiant appearance. Pairs beautifully with a facial or chemical peel for enhanced results.",
    image: "/assets/gallery/skincare-dermaplane.jpg",
  },
  {
    title: "Microneedling",
    description: "Promotes collagen and elastin production by creating small, controlled injuries in the first layer of skin to keep skin firm and smooth. Excellent for texture concerns, acne scarring, and overall skin rejuvenation.",
    image: "/assets/gallery/skincare-microneedling.jpg",
  },
];

export default function SkinCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark overflow-hidden">
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
            At Illari Aesthetics in Wicker Park, Chicago, every skin care treatment is guided by Dr. Milton Chavez, a board-certified family physician with over 30 years of clinical experience. The difference is measurable.
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
            When Dr. Chavez examines your skin, he draws on 30+ years of clinical and academic training from Rush University. He evaluates with medical precision, not just aesthetic intuition. Every treatment recommendation is backed by evidence-based medicine and performed with professional-grade products from AlumierMD and Derma Made.
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
                    className="btn-outline"
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
            Dr. Chavez uses and recommends AlumierMD and Derma Made, two professional-grade skincare lines not available over the counter. These are the same products used during your in-office treatments, available to continue your results at home.
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
                a: "Dr. Chavez is a board-certified family physician with over 30 years of clinical experience. He evaluates your skin with medical precision and uses higher-grade professional products than those available at a typical beauty spa. Every treatment is customized, never templated.",
              },
              {
                q: "What skin care treatments do you offer?",
                a: "We offer skin surveys, cryoablation, surgical dermatology including lesion and mole removal and scar revision, chemical peels, dermaplaning, and microneedling. All treatments use medical-grade products from AlumierMD and Derma Made.",
              },
              {
                q: "How do I know which treatment is right for me?",
                a: "Schedule a Skin Survey with Dr. Chavez. He will perform a full facial assessment and recommend treatment options, a personalized plan, and transparent pricing based on your unique skin type and concerns.",
              },
              {
                q: "Do you use different products than a regular spa?",
                a: "Yes. Dr. Chavez uses professionally-dispensed medical-grade products from AlumierMD and Derma Made, which are not available to non-medical providers. As a doctor, he is able to use higher-grade products for better patient results.",
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
