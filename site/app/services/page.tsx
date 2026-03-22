import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Illari Aesthetics Chicago — Physician-Led Med Spa",
  description:
    "Explore all services at Illari Aesthetics in Chicago's Wicker Park. Physician-led skin care, injectables, medical weight loss, IV therapy, and medical-grade products by Dr. Chavez.",
  alternates: { canonical: "https://illariaesthetics.com/services" },
  openGraph: {
    url: "https://illariaesthetics.com/services",
    title: "Services | Illari Aesthetics Chicago",
    description:
      "Skin care, injectables, weight loss, IV therapy, and products. All physician-led by Dr. Chavez in Wicker Park.",
  },
};

const services = [
  {
    title: "Skin Care",
    href: "/skin-care",
    image: "/assets/gallery/skincare-chemical-peel.jpg",
    description:
      "Medical-grade skin treatments by a board-certified physician. Chemical peels, microneedling, cryoablation, dermaplaning, and surgical dermatology using products not available at a standard spa.",
    treatments: [
      "Skin Survey",
      "Cryoablation",
      "Surgical Dermatology",
      "Chemical Peels",
      "Dermaplane",
      "Microneedling",
    ],
  },
  {
    title: "Injectables",
    href: "/injectables",
    image: "/assets/gallery/injectables-hero.jpg",
    description:
      "Physician-administered Botox, dermal fillers, and PRF treatments. Dr. Chavez brings 30 years of clinical training and advanced filler technique to every injection for results that look natural.",
    treatments: [
      "Wrinkle Relaxers (Botox, Xeomin, Dysport)",
      "Lip Filler & Dermal Filler",
      "PRF (Platelet Rich Fibrinogen)",
    ],
  },
  {
    title: "Weight Loss",
    href: "/weight-loss-1",
    image: "/assets/gallery/weight-loss-new.jpg",
    description:
      "Physician-supervised GLP-1 weight loss program with tirzepatide and semaglutide. Monthly provider check-ins, tailored medication regimens, and regular weight assessments starting around $350 per month.",
    treatments: [
      "GLP-1 Consultation",
      "Tirzepatide Program",
      "Semaglutide Program",
      "Monthly Check-Ins",
    ],
  },
  {
    title: "IV Therapy",
    href: "/iv-infusion-services",
    image: "/assets/gallery/iv-therapy-hero.jpg",
    description:
      "IV infusions and micronutrient injections delivering vitamins, minerals, and nutrients directly into the bloodstream. Options for beauty, energy, immunity, hangover recovery, NAD+ anti-aging, and more.",
    treatments: [
      "IV Infusions (~45 min)",
      "Micronutrient Injections (~15 min)",
      "NAD+ Therapy",
      "Immunity & Recovery Drips",
    ],
  },
  {
    title: "Products",
    href: "/products",
    image: "/assets/products/alumiermd-hero.jpg",
    description:
      "Medical-grade skincare from AlumierMD and Derma Made. Every product we recommend is one Dr. Chavez and staff use in the office. Professional-dispensed formulations not available over the counter.",
    treatments: [
      "AlumierMD Skincare",
      "Derma Made Skincare",
      "Online Ordering via Referral Link",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[120px] pb-[100px] bg-dark overflow-hidden linen-texture-dark">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/skincare-chemical-peel.jpg"
            alt="Medical-grade services at Illari Aesthetics Chicago"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/98 via-dark/80 to-dark/50" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">
            Physician-Led, Chicago
          </p>
          <h1 className="font-serif text-white text-[clamp(3rem,7vw,6rem)] leading-[0.95] mb-10 max-w-3xl">
            Our <span className="italic">Services</span>
          </h1>
          <div className="w-12 h-px bg-gold/40 mb-10" />
          <p className="text-white/50 text-sm font-sans font-light leading-[1.9] max-w-xl">
            Every treatment at Illari Aesthetics is guided by Dr. Chavez, a board-certified physician with over 30 years of clinical experience. Medical-grade products, physician-level expertise, and plans built around you.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-marble py-32 linen-texture">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="space-y-1">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-dark ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <Link
                  href={service.href}
                  className={`ken-burns relative aspect-[4/3] lg:aspect-auto overflow-hidden block ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-dark/20 hover:bg-dark/10 transition-colors duration-500" />
                </Link>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-10 lg:p-16 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">
                    0{i + 1}
                  </p>
                  <h2 className="font-serif text-white text-3xl lg:text-4xl mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <div className="w-10 h-px bg-gold/30 mb-6" />
                  <p className="text-white/45 text-sm font-sans font-light leading-[1.8] mb-8 max-w-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-10">
                    {service.treatments.map((t) => (
                      <li
                        key={t}
                        className="text-white/30 text-xs font-sans font-light flex items-center gap-2.5"
                      >
                        <div className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500 self-start"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-dark linen-texture-dark">
        <div className="max-w-[1000px] mx-auto px-8 lg:px-12 text-center">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">
            Chicago&apos;s Physician-Led Med Spa
          </p>
          <h2 className="font-serif text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-6">
            Ready to Get <span className="italic">Started?</span>
          </h2>
          <div className="w-12 h-px bg-gold/30 mx-auto mb-8" />
          <p className="text-white/40 text-sm font-sans font-light mb-12 max-w-xl mx-auto leading-[1.8]">
            Book a consultation with Dr. Chavez and find out which treatments are right for your skin and your goals.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Book Now
            </a>
            <a
              href="tel:7732190326"
              className="text-white/40 text-sm font-mono tracking-widest hover:text-white/70 transition-colors duration-500"
            >
              773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
