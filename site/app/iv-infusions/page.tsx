import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IV Infusions Menu Chicago | Vitamin Drips | Illari Aesthetics",
  description: "Full IV infusion drip menu at Illari Aesthetics in Chicago's Wicker Park. Beauty, immunity, NAD+, hangover recovery, and more. Starting at $99.",
};

const infusions = [
  { name: "Illari", price: "$250", time: "~45 min", description: "Hydration, powerful antioxidants, and nutrients blended to enhance natural beauty." },
  { name: "Allergy", price: "$165", time: "~45 min", description: "Treat allergy symptoms and provide relief." },
  { name: "Hangover", price: "$225", time: "~45 min", description: "Hydration plus essential vitamins to recover after a long night." },
  { name: "High Dose C", price: "$200", time: "~45 min", description: "Vitamin C antioxidant to fight free radicals, reduce oxidative stress, and support healthy aging." },
  { name: "Immunity", price: "$165", time: "~45 min", description: "Boost your immune system with powerful antioxidants." },
  { name: "Modest", price: "$99", time: "~45 min", description: "Plain saline for essential hydration." },
  { name: "Myers Cocktail", price: "$165", time: "~45 min", description: "Decreases inflammation, boosts immunity, and supports full-body detox." },
  { name: "NAD+", price: "$400+", time: "~45 min", description: "Reverse signs of aging, aid in DNA repair, and help with withdrawal symptoms." },
  { name: "Soothe", price: "$250", time: "~45 min", description: "Targeted blend for migraine relief." },
];

export default function IVInfusionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-dark">
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

          <div className="flex flex-wrap gap-4 mt-8">
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
