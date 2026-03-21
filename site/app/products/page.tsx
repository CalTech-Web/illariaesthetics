import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medical-Grade Skincare Products Chicago | AlumierMD & Derma Made",
  description: "Shop medical-grade skincare products used by Dr. Chavez at Illari Aesthetics in Chicago. AlumierMD and Derma Made, professionally dispensed skincare not available over the counter.",
  alternates: { canonical: "https://illariaesthetics.com/products" },
  openGraph: {
    url: "https://illariaesthetics.com/products",
    title: "AlumierMD & Derma Made Chicago | Medical-Grade Skincare at Illari Aesthetics",
    description: "Purchase professionally dispensed AlumierMD and Derma Made skincare, the same lines Dr. Chavez uses and recommends at Illari Aesthetics in Chicago.",
    images: [
      {
        url: "/assets/products/alumiermd-hero.jpg",
        alt: "AlumierMD medical-grade skincare products at Illari Aesthetics",
      },
    ],
  },
};

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Medical-Grade Skincare Products at Illari Aesthetics Chicago",
  description:
    "Professionally dispensed AlumierMD and Derma Made skincare products used and recommended by Dr. Chavez at Illari Aesthetics in Chicago's Wicker Park.",
  url: "https://illariaesthetics.com/products",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "AlumierMD AluminEye",
      url: "https://us.alumiermd.com/products/alumineye?code=44A5EB2P",
      description: "Eye treatment targeting dark circles, puffiness, and fine lines around the eye area.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AlumierMD Retinol Resurfacing Serum 0.5",
      url: "https://us.alumiermd.com/products/retinol-resurfacing-serum-0-5?code=44A5EB2P",
      description: "Medical-grade 0.5% retinol serum for resurfacing, fine lines, and uneven texture.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AlumierMD HydraDew",
      url: "https://us.alumiermd.com/products/hydradew-11221?code=44A5EB2P",
      description: "Lightweight moisturizer that rebuilds the skin barrier. Works well with retinol or post-peel.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "AlumierMD Bright & Clear Solution",
      url: "https://us.alumiermd.com/products?code=44A5EB2P",
      description: "Targets hyperpigmentation and uneven skin tone. Often used after cryoablation or chemical peels.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "AlumierMD Purifying Gel Cleanser",
      url: "https://us.alumiermd.com/products/purifying-gel-cleanser?code=44A5EB2P",
      description: "Cleansing gel that removes impurities without stripping moisture.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "AlumierMD HydraRich",
      url: "https://us.alumiermd.com/products/hydrarich?code=44A5EB2P",
      description: "Dense moisturizer for dry or compromised skin. Repairs the barrier without clogging pores.",
    },
  ],
};

const alumierProducts = [
  {
    name: "AluminEye",
    description: "Eye treatment formulated for the thin skin around the eye, where most creams underperform. Targets dark circles, puffiness, and fine lines.",
    url: "https://us.alumiermd.com/products/alumineye?code=44A5EB2P",
  },
  {
    name: "Retinol Resurfacing Serum 0.5",
    description: "0.5% medical-grade retinol for resurfacing and renewal. Targets fine lines and uneven texture at a concentration not available over the counter.",
    url: "https://us.alumiermd.com/products/retinol-resurfacing-serum-0-5?code=44A5EB2P",
  },
  {
    name: "HydraDew",
    description: "Lightweight moisturizer that rebuilds the skin barrier. Works well alongside retinol or as aftercare following a chemical peel.",
    url: "https://us.alumiermd.com/products/hydradew-11221?code=44A5EB2P",
  },
  {
    name: "Bright & Clear Solution",
    description: "Targets hyperpigmentation and uneven tone. Commonly used after cryoablation or a chemical peel to maintain the results.",
    url: "https://us.alumiermd.com/products?code=44A5EB2P",
  },
  {
    name: "Purifying Gel Cleanser",
    description: "Cleansing gel that clears the skin without stripping moisture. A clean starting point for any AlumierMD regimen.",
    url: "https://us.alumiermd.com/products/purifying-gel-cleanser?code=44A5EB2P",
  },
  {
    name: "HydraRich",
    description: "Dense moisturizer for dry or compromised skin. Repairs the barrier without clogging pores.",
    url: "https://us.alumiermd.com/products/hydrarich?code=44A5EB2P",
  },
];

const dermaMadeProducts = [
  {
    name: "Derma Made Retinol Serum",
    description: "Retinol at clinical potency for texture improvement, fine line reduction, and skin renewal.",
  },
  {
    name: "Derma Made Brightening Cream",
    description: "Targets hyperpigmentation and uneven tone. Dr. Chavez recommends it alongside pigmentation treatments.",
  },
  {
    name: "Derma Made Hydration Boost",
    description: "Moisture formula for barrier support and daily hydration. Works across skin types.",
  },
  {
    name: "Derma Made Acne Control",
    description: "Reduces breakouts and controls excess oil without stripping the skin. Pairs well with an acne treatment plan.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      {/* Hero */}
      <section className="relative py-32 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/products/alumiermd-hero.jpg"
            alt="AlumierMD medical-grade skincare products"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">
            Professional-Grade Skincare, Chicago
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-3xl">
            Medical-Grade Products Recommended by Dr. Chavez
          </h1>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            The products we use on you in the office are the same ones we recommend for home. AlumierMD and Derma Made are professionally dispensed, meaning you cannot walk into a pharmacy and pick them up. They require a medical provider, and the formulations are built for clinical outcomes.
          </p>
        </div>
      </section>

      {/* Why These Products */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Our Philosophy</p>
          <h2 className="section-title">The Same Products We Use in Office</h2>
          <div className="gold-divider" />
          <p className="text-neutral-medium leading-relaxed mb-6 text-lg">
            Most skincare products at retail are formulated to be safe for anyone. That is not a criticism. It just means the concentrations stay low. Medical-grade lines like AlumierMD and Derma Made are dispensed through medical providers because the formulations are more potent. You need proper guidance to use them correctly.
          </p>
          <blockquote className="border border-gold/20 p-8 mt-8">
            <p className="text-dark-medium font-serif italic text-xl leading-relaxed">
              &ldquo;As a doctor, we use higher grade medical products for a better patient result.&rdquo;
            </p>
            <cite className="text-neutral-medium text-sm mt-4 block not-italic font-sans tracking-wider">
              Dr. Milton Chavez, Founder and Medical Director
            </cite>
          </blockquote>
          <p className="text-neutral-medium leading-relaxed mt-8">
            We carry what we use. Every product on this page is something Dr. Chavez and the staff have used in the office. Not a lineup assembled for the sake of having a retail section.
          </p>
        </div>
      </section>

      {/* AlumierMD Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="aspect-square relative overflow-hidden mb-6">
                <Image
                  src="/assets/gallery/gallery-3-alumier.jpg"
                  alt="AlumierMD medical-grade skincare products at Illari Aesthetics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Brand 01</p>
              <h2 className="text-4xl font-serif text-dark-medium mb-4">AlumierMD</h2>
              <div className="gold-divider-left" />
              <p className="text-neutral-medium leading-relaxed mb-6">
                AlumierMD is what the industry calls clean science. The formulations are built for clinical use, not general retail. No unnecessary fillers, no preservatives that compromise active ingredients. Dr. Chavez carries it because it holds up to the same standard he applies to everything else in the practice.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-8">
                AlumierMD products used at Illari Aesthetics are available through our physician referral link. Same formulas, same guidance. Not a third-party reseller.
              </p>
              <a
                href="https://www.alumiermd.com/products?code=44A5EB2P"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                Shop All AlumierMD Products
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumierProducts.map((product) => (
              <div key={product.name} className="bg-white p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-serif text-xl text-dark-medium mb-3 group-hover:text-gold transition-colors">{product.name}</h3>
                <div className="w-6 h-px bg-gold mb-4" />
                <p className="text-neutral-medium text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-sm tracking-wider uppercase font-sans hover:text-gold-dark transition-colors flex items-center gap-2"
                >
                  Purchase from Illari Aesthetics
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Derma Made Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Brand 02</p>
              <h2 className="text-4xl font-serif text-dark-medium mb-4">Derma Made</h2>
              <div className="gold-divider-left" />
              <p className="text-neutral-medium leading-relaxed mb-6">
                Derma Made carries a 94% recommendation rate among the physicians who use it. Dr. Chavez reaches for it alongside treatments when the clinical profile fits the patient.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-8">
                Available in office. The right product depends on your skin type and what treatments you have in progress. Our staff will walk you through it.
              </p>
              <a
                href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                Ask Us In Office
              </a>
            </div>
            <div className="lg:col-span-1">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/assets/gallery/skincare-chemical-peel.jpg"
                  alt="Derma Made professional skincare products at Illari Aesthetics Chicago"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dermaMadeProducts.map((product) => (
              <div key={product.name} className="border border-neutral-bg p-6 hover:border-gold/30 transition-colors">
                <h3 className="font-serif text-lg text-dark-medium mb-3">{product.name}</h3>
                <div className="w-6 h-px bg-gold mb-4" />
                <p className="text-neutral-medium text-sm leading-relaxed mb-4">{product.description}</p>
                <p className="text-gold text-xs font-sans tracking-wider uppercase">Available in office</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Expert Guidance</p>
          <h2 className="section-title-white mb-6">Not Sure Which Products Are Right for You?</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light mb-10 max-w-xl mx-auto leading-relaxed">
            Book a skin survey or consultation. Dr. Chavez reviews your skin and tells you exactly what to use and in what order. No guesswork involved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Skin Survey
            </a>
            <a href="tel:7732190326" className="btn-outline-white">
              Call 773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
