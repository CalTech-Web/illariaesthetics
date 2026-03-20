import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamin Injections Menu Chicago | B12, Glutathione, NAD+ | Illari Aesthetics",
  description: "Quick vitamin and wellness injections at Illari Aesthetics in Chicago's Wicker Park. B12 energy, glutathione, NAD+, immunity, and more. Approximately 15 minutes. Starting at $35.",
};

const injections = [
  { name: "Illari", price: "$35", description: "Boost for hair, skin, and nails." },
  { name: "Illari Plus", price: "$40", description: "Hair, skin, and nails boost plus an additional antioxidant for enhanced glow." },
  { name: "Energy", price: "$35", description: "B12 injection to reduce fatigue and provide an energy boost." },
  { name: "Energy Plus", price: "$40", description: "B12 combined with other B vitamins for energy and immune support." },
  { name: "Glutathione", price: "$35", description: "Antioxidant to fight free radicals and promote anti-aging." },
  { name: "Glutathione Plus", price: "$40", description: "Double dose of glutathione antioxidant for enhanced results." },
  { name: "Immunity", price: "$40", description: "Triple defense to amplify your immune system, decrease inflammation, and fight free radicals." },
  { name: "Skinny", price: "$40", description: "Weight loss and wellness injection (in conjunction with diet and exercise); may release fat deposits." },
  { name: "NAD+ 50mg", price: "$75", description: "Reverse aging, support DNA repair, and help with withdrawal symptoms." },
  { name: "NAD+ 100mg", price: "$100", description: "Higher-dose NAD+ for reverse aging, DNA repair, and withdrawal symptom support." },
];

export default function InjectionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">IV Therapy Menu</p>
          <h1 className="text-5xl font-serif text-white mb-6">Injections</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-neutral-light leading-relaxed text-lg max-w-2xl mx-auto">
            Fifteen minutes. One injection, direct into muscle for fast absorption. No IV required. Each option targets a specific outcome.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {injections.map((item) => (
              <div key={item.name} className="border border-neutral-bg p-6 flex items-start justify-between gap-6 hover:border-gold/30 transition-colors group">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-xl text-dark-medium group-hover:text-gold transition-colors">{item.name}</h3>
                    <span className="text-xs text-neutral-medium font-sans">~15 min</span>
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
              <span className="text-dark-medium font-medium">Note:</span> All injections are administered at Illari Aesthetics in Wicker Park, Chicago, under physician-supervised protocols. Skinny injection is intended to complement a healthy diet and exercise plan, not as a standalone weight loss solution.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/iv-infusions" className="btn-outline">View IV Infusions</Link>
            <Link href="/add-ons" className="btn-outline">View Add-Ons</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="section-title-white mb-6">Ready to Book?</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light mb-10 leading-relaxed">
            Schedule your injection at Illari Aesthetics, Wicker Park, Chicago. Open Monday through Friday, 9am to 4pm. Each session takes approximately 15 minutes.
          </p>
          <a
            href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book an Injection
          </a>
        </div>
      </section>
    </>
  );
}
