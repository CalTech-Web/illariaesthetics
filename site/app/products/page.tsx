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
    image: "/assets/products/alumiermd-alumineye.png",
  },
  {
    name: "Retinol Resurfacing Serum 0.5",
    description: "0.5% medical-grade retinol for resurfacing and renewal. Targets fine lines and uneven texture at a concentration not available over the counter.",
    url: "https://us.alumiermd.com/products/retinol-resurfacing-serum-0-5?code=44A5EB2P",
    image: "/assets/products/alumiermd-retinol.png",
  },
  {
    name: "HydraDew",
    description: "Lightweight moisturizer that rebuilds the skin barrier. Works well alongside retinol or as aftercare following a chemical peel.",
    url: "https://us.alumiermd.com/products/hydradew-11221?code=44A5EB2P",
    image: "/assets/products/alumiermd-hydradew.png",
  },
  {
    name: "Bright & Clear Solution",
    description: "Targets hyperpigmentation and uneven tone. Commonly used after cryoablation or a chemical peel to maintain the results.",
    url: "https://us.alumiermd.com/products?code=44A5EB2P",
    image: "/assets/products/alumiermd-bright-clear.png",
  },
  {
    name: "Purifying Gel Cleanser",
    description: "Cleansing gel that clears the skin without stripping moisture. A clean starting point for any AlumierMD regimen.",
    url: "https://us.alumiermd.com/products/purifying-gel-cleanser?code=44A5EB2P",
    image: "/assets/products/alumiermd-cleanser.png",
  },
  {
    name: "HydraRich",
    description: "Dense moisturizer for dry or compromised skin. Repairs the barrier without clogging pores.",
    url: "https://us.alumiermd.com/products/hydrarich?code=44A5EB2P",
    image: "/assets/products/alumiermd-hydrarich.png",
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://illariaesthetics.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://illariaesthetics.com/products" },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative pt-[100px] pb-[75px] bg-dark overflow-hidden">
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
      <section className="py-24 bg-marble-stone linen-texture">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Our Philosophy</p>
              <h2 className="font-serif text-dark text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] mb-8">
                The Same Products<br />We Use in Office
              </h2>
              <div className="w-12 h-px bg-gold/30 mb-8" />
              <p className="text-dark/50 text-sm font-sans font-light leading-[1.8] mb-6">
                Most skincare products at retail are formulated to be safe for anyone. That is not a criticism. It just means the concentrations stay low. Medical-grade lines like AlumierMD and Derma Made are dispensed through medical providers because the formulations are more potent. You need proper guidance to use them correctly.
              </p>
              <p className="text-dark/50 text-sm font-sans font-light leading-[1.8]">
                We carry what we use. Every product on this page is something Dr. Chavez and the staff have used in the office. Not a lineup assembled for the sake of having a retail section.
              </p>
            </div>
            <div>
              <blockquote className="border-l-2 border-gold pl-8 py-4">
                <p className="font-serif text-dark italic text-[clamp(1.5rem,2.5vw,2.2rem)] leading-[1.4] mb-6">
                  &ldquo;We carry what we use. Every product we recommend is one we have used in the office.&rdquo;
                </p>
                <div className="w-8 h-px bg-gold/30 mb-4" />
                <cite className="text-dark/30 text-[10px] tracking-[0.2em] uppercase font-sans font-light not-italic">
                  Dr. Milton Chavez, Founder and Medical Director
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* AlumierMD Section */}
      <section className="py-24 bg-dark linen-texture-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="aspect-square relative overflow-hidden mb-6">
                <Image
                  src="/assets/gallery/gallery-3-alumier.jpg"
                  alt="AlumierMD medical-grade skincare products at Illari Aesthetics"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Brand 01</p>
              <h2 className="text-4xl font-serif text-ivory mb-4">AlumierMD</h2>
              <div className="w-12 h-px bg-gold/40 mb-6" />
              <p className="text-ivory/60 leading-relaxed mb-6">
                AlumierMD is what the industry calls clean science. The formulations are built for clinical use, not general retail. No unnecessary fillers, no preservatives that compromise active ingredients. Dr. Chavez carries it because it holds up to the same standard he applies to everything else in the practice.
              </p>
              <p className="text-ivory/60 leading-relaxed mb-8">
                AlumierMD products used at Illari Aesthetics are available through our physician referral link. Same formulas, same guidance. Not a third-party reseller.
              </p>
              <a
                href="https://www.alumiermd.com/products?code=44A5EB2P"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500 self-start"
              >
                Shop All AlumierMD Products
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {alumierProducts.map((product) => (
              <div key={product.name} className="bg-dark group flex flex-col overflow-hidden hover:bg-[#1e1e1c] transition-colors duration-500">
                <div className="aspect-square relative bg-[#121210] flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 border-t border-gold/10">
                  <h3 className="font-serif text-lg text-ivory mb-3 group-hover:text-gold transition-colors duration-500">{product.name}</h3>
                  <div className="w-6 h-px bg-gold/30 mb-4" />
                  <p className="text-ivory/40 text-sm leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-[10px] tracking-[0.2em] uppercase font-sans font-light border-b border-gold/30 pb-0.5 hover:border-gold transition-colors duration-500 self-start"
                  >
                    Purchase from Illari Aesthetics
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Derma Made Section */}
      <section className="py-24 bg-marble linen-texture">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
            <div className="lg:col-span-7 lg:pr-12 flex flex-col justify-center">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Brand 02</p>
              <h2 className="font-serif text-dark text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] mb-6">Derma Made</h2>
              <div className="w-12 h-px bg-gold/30 mb-8" />
              <p className="text-dark/50 text-sm font-sans font-light leading-[1.8] mb-4">
                Derma Made carries a 94% recommendation rate among the physicians who use it. Dr. Chavez reaches for it alongside treatments when the clinical profile fits the patient.
              </p>
              <p className="text-dark/50 text-sm font-sans font-light leading-[1.8] mb-10">
                Available in office. The right product depends on your skin type and what treatments you have in progress. Our staff will walk you through it.
              </p>
              <a
                href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500 self-start"
              >
                Ask Us In Office
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/assets/gallery/skincare-chemical-peel.jpg"
                  alt="Derma Made professional skincare products at Illari Aesthetics Chicago"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
            {dermaMadeProducts.map((product) => (
              <div key={product.name} className="bg-marble-stone p-8 hover:bg-marble-warm transition-colors duration-500">
                <h3 className="font-serif text-dark text-lg mb-4">{product.name}</h3>
                <div className="w-8 h-px bg-gold/40 mb-4" />
                <p className="text-dark/45 text-sm font-sans font-light leading-[1.8] mb-4">{product.description}</p>
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-sans font-light">Available in office</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark linen-texture-dark">
        <div className="max-w-[1000px] mx-auto px-8 lg:px-12 text-center">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Expert Guidance</p>
          <h2 className="font-serif text-ivory text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] mb-8">
            Not Sure Which Products<br />Are Right for You?
          </h2>
          <div className="w-12 h-px bg-gold/30 mx-auto mb-8" />
          <p className="text-ivory/40 text-sm font-sans font-light leading-[1.8] mb-12 max-w-xl mx-auto">
            Book a skin survey or consultation. Dr. Chavez reviews your skin and tells you exactly what to use and in what order. No guesswork involved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Book a Skin Survey
            </a>
            <a href="tel:7732190326" className="text-ivory/30 text-sm font-mono tracking-widest hover:text-ivory/60 transition-colors duration-500">
              773.219.0326
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
