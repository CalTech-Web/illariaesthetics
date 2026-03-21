import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IV Add-Ons | Enhance Your IV Infusion | Illari Aesthetics Chicago",
  description: "Enhance any IV infusion with add-ons at Illari Aesthetics in Chicago's Wicker Park. Glutathione, Toradol, Zofran, and additional hydration available.",
  alternates: { canonical: "https://illariaesthetics.com/add-ons" },
  openGraph: {
    url: "https://illariaesthetics.com/add-ons",
  },
};

const addOns = [
  { name: "Glutathione", price: "$35+", description: "The same antioxidant available as a standalone injection, added directly into your drip. Supports skin radiance and cellular detox. No extra appointment needed." },
  { name: "Toradol", price: "$35", description: "Ketorolac, a non-opioid anti-inflammatory, delivered intravenously. Works faster than a pill and skips your stomach entirely. Useful for headaches, muscle pain, or inflammation." },
  { name: "Zofran", price: "$35", description: "Ondansetron for nausea. Particularly useful during hangover recovery or if you experience GI sensitivity from certain drip formulas." },
  { name: "Additional Hydration", price: "$35+", description: "Plain saline added to your infusion. More volume, more time in the chair. Worth it if you came in dehydrated or want to push your recovery further." },
];

export default function AddOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[100px] pb-[75px] bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">IV Therapy Menu</p>
          <h1 className="text-5xl font-serif text-white mb-6">IV Add-Ons</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-neutral-light leading-relaxed text-lg max-w-2xl mx-auto">
            Most infusions work harder with the right add-on. Glutathione, pain relief, anti-nausea, extra saline. Tell us what you need when you book or when you arrive.
          </p>
        </div>
      </section>

      {/* Add-Ons Menu */}
      <section className="py-24 bg-dark linen-texture-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="divide-y divide-gold/10">
            {addOns.map((item, index) => (
              <div
                key={item.name}
                className="group flex items-start justify-between gap-8 py-8 hover:bg-white/[0.02] transition-colors duration-500 px-2"
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span className="stroke-numeral font-serif text-3xl leading-none mt-1 flex-shrink-0 w-8 text-right opacity-50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-ivory text-2xl group-hover:text-gold transition-colors duration-500 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-neutral-light/60 text-sm leading-relaxed font-sans font-light max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 text-right pt-1">
                  <p className="font-serif text-gold text-2xl">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-gold/15 p-6">
            <p className="text-neutral-light/50 text-xs font-sans font-light leading-relaxed tracking-wide">
              <span className="text-neutral-light/70 font-normal">How to add:</span> Simply mention your desired add-ons when booking or when you arrive at Illari Aesthetics. Our staff will confirm compatibility with your chosen infusion.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/iv-infusions"
              className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
            >
              View IV Infusions
            </Link>
            <span className="text-gold/20 self-end pb-1">·</span>
            <Link
              href="/injections"
              className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
            >
              View Injections
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-ivory text-3xl md:text-4xl mb-6">Book Your IV Session</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light mb-10 leading-relaxed">
            Book online or call us at 773.219.0326. Open Monday through Friday, 9am to 4pm, in Wicker Park, Chicago.
          </p>
          <a
            href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
