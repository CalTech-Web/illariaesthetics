import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medical-Grade Skincare Products Chicago | AlumierMD & Derma Made",
  description: "Shop medical-grade skincare products used by Dr. Chavez at Illari Aesthetics in Chicago. AlumierMD and Derma Made, professionally dispensed skincare not available over the counter.",
};

const alumierProducts = [
  {
    name: "AluminEye",
    description: "Advanced eye cream targeting dark circles, puffiness, and fine lines around the delicate eye area.",
    url: "https://us.alumiermd.com/products/alumineye?code=44A5EB2P",
  },
  {
    name: "Retinol Resurfacing Serum 0.5",
    description: "Medical-grade retinol serum for skin resurfacing, targeting fine lines, uneven texture, and signs of aging.",
    url: "https://us.alumiermd.com/products/retinol-resurfacing-serum-0-5?code=44A5EB2P",
  },
  {
    name: "HydraDew",
    description: "Deeply hydrating moisturizer that restores moisture balance for a plump, dewy complexion.",
    url: "https://us.alumiermd.com/products/hydradew-11221?code=44A5EB2P",
  },
  {
    name: "Bright & Clear Solution",
    description: "Brightening treatment targeting uneven skin tone, hyperpigmentation, and dullness for a clearer complexion.",
    url: "https://us.alumiermd.com/products?code=44A5EB2P",
  },
  {
    name: "Purifying Gel Cleanser",
    description: "Medical-grade cleansing gel that removes impurities without stripping the skin's natural moisture barrier.",
    url: "https://us.alumiermd.com/products/purifying-gel-cleanser?code=44A5EB2P",
  },
  {
    name: "HydraRich",
    description: "Rich, nourishing moisturizer for dry skin providing intense hydration and barrier repair.",
    url: "https://us.alumiermd.com/products/hydrarich?code=44A5EB2P",
  },
];

const dermaMadeProducts = [
  {
    name: "Derma Made Retinol Serum",
    description: "Professional-grade retinol formulated to resurface, refine, and renew skin for visible anti-aging results.",
  },
  {
    name: "Derma Made Brightening Cream",
    description: "Targets hyperpigmentation and uneven skin tone with a clinical brightening formula recommended by Dr. Chavez.",
  },
  {
    name: "Derma Made Hydration Boost",
    description: "Advanced moisturizing formula for optimal skin hydration and barrier support.",
  },
  {
    name: "Derma Made Acne Control",
    description: "Clinically formulated to reduce acne breakouts and control excess oil production without over-drying.",
  },
];

export default function ProductsPage() {
  return (
    <>
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
            Illari Aesthetics carries and recommends AlumierMD and Derma Made, two professionally dispensed skincare lines used during in-office treatments and available for your home regimen.
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
            We chose AlumierMD and Derma Made because they are the same products Dr. Chavez and our staff use during your in-office treatments. These professional-grade lines are not available over the counter because they require medical oversight to use correctly and safely.
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
            We chose these products to complement the services we offer and the recommendations we give. Every product we carry is one we stand behind clinically.
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
                A true professionally-dispensed medical-grade skincare brand dedicated to the latest advancements in Clean Science, delivering therapeutic outcomes for patients presenting an array of skin conditions and concerns.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-8">
                AlumierMD products used at Illari Aesthetics can be purchased online through our physician referral link, ensuring you receive the correct formulas with proper guidance.
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
                Derma Made is a professional skincare brand with a 94% recommendation rate, trusted by physicians and skincare professionals. Dr. Chavez and the Illari Aesthetics team use and recommend Derma Made products alongside treatments to extend and enhance results.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-8">
                Available for purchase in-office at Illari Aesthetics. Ask our staff for personalized recommendations based on your skin type, concerns, and treatment plan.
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
            Dr. Chavez and our team can recommend the right products for your skin type and concerns during a consultation or skin survey. We only recommend what we use and believe in clinically.
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
