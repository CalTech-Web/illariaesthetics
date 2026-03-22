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
      <section className="relative pt-[155px] pb-[75px] bg-dark overflow-hidden linen-texture-dark">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className="ken-burns group relative aspect-[3/4] overflow-hidden block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-3">
                    0{i + 1}
                  </p>
                  <h2 className="font-serif text-white text-2xl lg:text-3xl mb-3 leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                    {service.title}
                  </h2>
                  <div className="w-8 h-px bg-gold/40 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-white/40 text-xs font-sans font-light leading-[1.7] max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4">
                    {service.description.split('.')[0]}.
                  </p>

                  <ul className="space-y-1.5 mb-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {service.treatments.slice(0, 3).map((t) => (
                      <li
                        key={t}
                        className="text-white/30 text-[10px] font-sans font-light flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                    {service.treatments.length > 3 && (
                      <li className="text-gold/50 text-[10px] font-sans font-light">
                        +{service.treatments.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>
              </Link>
            ))}

            {/* Book Now tile */}
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[3/4] overflow-hidden bg-dark flex flex-col items-center justify-center text-center p-10 group hover:bg-dark/90 transition-colors duration-500"
            >
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">
                Chicago&apos;s Physician-Led Med Spa
              </p>
              <h3 className="font-serif text-white text-3xl lg:text-4xl mb-6 leading-tight">
                Ready to Get <span className="italic">Started?</span>
              </h3>
              <div className="w-12 h-px bg-gold/30 mb-6" />
              <p className="text-white/40 text-sm font-sans font-light leading-[1.8] mb-8 max-w-xs">
                Book a consultation with Dr. Chavez and find out which treatments are right for your skin and your goals.
              </p>
              <span className="border border-gold/60 text-gold px-8 py-3 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
                Book Now
              </span>
              <p className="text-white/20 text-sm font-mono tracking-widest mt-5">
                773.219.0326
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
