import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IV Infusions Menu Chicago | Vitamin Drips | Illari Aesthetics",
  description: "Full IV infusion drip menu at Illari Aesthetics in Chicago's Wicker Park. Beauty, immunity, NAD+, hangover recovery, and more. Starting at $99.",
  alternates: { canonical: "https://illariaesthetics.com/iv-infusions" },
  openGraph: {
    url: "https://illariaesthetics.com/iv-infusions",
  },
};

const infusionsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IV Infusion Menu at Illari Aesthetics Chicago",
  description:
    "Full IV vitamin drip infusion menu at Illari Aesthetics in Wicker Park, Chicago. Physician-supervised IV therapy starting at $99.",
  url: "https://illariaesthetics.com/iv-infusions",
  numberOfItems: 9,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Illari IV Drip", description: "Hydration and antioxidants formulated for skin, hair, and appearance. The Illari house drip. $250." },
    { "@type": "ListItem", position: 2, name: "Allergy IV Drip", description: "Targets histamine response and inflammation. Treat allergy symptoms without drowsiness. $165." },
    { "@type": "ListItem", position: 3, name: "Hangover IV Drip", description: "Replaces fluids, electrolytes, and B vitamins after a long night. $225." },
    { "@type": "ListItem", position: 4, name: "High Dose C IV Drip", description: "IV vitamin C antioxidant bypassing the digestive system for maximum absorption. $200." },
    { "@type": "ListItem", position: 5, name: "Immunity IV Drip", description: "Antioxidants and micronutrients to strengthen immune defense and reduce inflammation. $165." },
    { "@type": "ListItem", position: 6, name: "Modest IV Drip", description: "Plain saline hydration. The simplest and most affordable IV infusion. $99." },
    { "@type": "ListItem", position: 7, name: "Myers Cocktail", description: "Magnesium, B vitamins, calcium, and high-dose vitamin C. Classic IV formula. $165." },
    { "@type": "ListItem", position: 8, name: "NAD+ IV Drip", description: "NAD+ coenzyme for cellular energy and DNA repair delivered intravenously. $400+." },
    { "@type": "ListItem", position: 9, name: "Soothe IV Drip", description: "Formulated for migraine relief. $250." },
  ],
};

const infusions = [
  { name: "Illari", price: "$250", time: "~45 min", description: "Hydration and antioxidants formulated for skin, hair, and appearance. The Illari house drip." },
  { name: "Allergy", price: "$165", time: "~45 min", description: "Targets histamine response and inflammation during allergy season or acute flare-ups. Works without the drowsiness of most antihistamines." },
  { name: "Hangover", price: "$225", time: "~45 min", description: "Replaces the fluids, electrolytes, and B vitamins your body burned through the night before. Faster than sleep." },
  { name: "High Dose C", price: "$200", time: "~45 min", description: "Oral vitamin C absorbs at a fraction of the labeled dose. This bypasses your gut entirely and delivers directly to your cells." },
  { name: "Immunity", price: "$165", time: "~45 min", description: "Antioxidants and micronutrients to shore up immune defense and reduce inflammation. Best taken before you get sick." },
  { name: "Modest", price: "$99", time: "~45 min", description: "Plain saline. No vitamins, no add-ons. The fastest way to rehydrate when that is all you need." },
  { name: "Myers Cocktail", price: "$165", time: "~45 min", description: "Magnesium, B vitamins, calcium, and high-dose C. Dr. John Myers developed this formula in the 1960s. Still one of the most widely used IV blends available." },
  { name: "NAD+", price: "$400+", time: "~45 min", description: "NAD+ is a coenzyme tied to cellular energy and DNA repair. Oral forms absorb poorly. IV delivery gets it where your body can actually use it." },
  { name: "Soothe", price: "$250", time: "~45 min", description: "Formulated for migraines. Works faster than waiting for a pill to clear your stomach." },
];

export default function IVInfusionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(infusionsJsonLd) }}
      />
      {/* Hero */}
      <section className="pt-[100px] pb-[75px] bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">IV Therapy Menu</p>
          <h1 className="text-5xl font-serif text-white mb-6">IV Infusions</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-neutral-light leading-relaxed text-lg max-w-2xl mx-auto">
            Every drip on this menu delivers nutrients straight into your bloodstream, bypassing your digestive system entirely. Sessions run about 45 minutes. Choose based on what you need today.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {infusions.map((item) => (
              <div key={item.name} className="border border-neutral-bg p-6 flex items-start justify-between gap-6 hover:border-gold/30 transition-colors group">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-xl text-dark-medium group-hover:text-gold transition-colors">{item.name}</h3>
                    <span className="text-xs text-neutral-medium font-sans">{item.time}</span>
                  </div>
                  <p className="text-neutral-medium text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gold font-sans font-medium text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-neutral-bg border-l-2 border-gold">
            <p className="text-neutral-medium text-sm leading-relaxed">
              <span className="text-dark-medium font-medium">Note:</span> All IV infusions are administered in a physician-supervised environment at Illari Aesthetics in Wicker Park, Chicago. Pricing may vary based on individual formulation adjustments. Add-ons are available to enhance any infusion.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/add-ons" className="btn-outline">View Add-Ons</Link>
            <Link href="/injections" className="btn-outline">View Injections</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="section-title-white mb-6">Ready to Book?</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light mb-10 leading-relaxed">
            Schedule your IV infusion at Illari Aesthetics, Wicker Park, Chicago. Open Monday through Friday, 9am to 4pm.
          </p>
          <a
            href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book an IV Infusion
          </a>
        </div>
      </section>
    </>
  );
}
