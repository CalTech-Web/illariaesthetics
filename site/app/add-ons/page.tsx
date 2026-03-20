import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IV Add-Ons | Enhance Your IV Infusion | Illari Aesthetics Chicago",
  description: "Enhance any IV infusion with add-ons at Illari Aesthetics in Chicago's Wicker Park. Glutathione, Toradol, Zofran, and additional hydration available.",
};

const addOns = [
  { name: "Glutathione", price: "$35+", description: "Enhance your IV treatment with this powerful antioxidant for added radiance and cellular protection." },
  { name: "Toradol", price: "$35", description: "Add pain relief to your infusion session." },
  { name: "Zofran", price: "$35", description: "Curb nausea and vomiting during or after your infusion." },
  { name: "Additional Hydration", price: "$35+", description: "Extra saline to boost hydration beyond your standard infusion." },
];

export default function AddOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">IV Therapy Menu</p>
          <h1 className="text-5xl font-serif text-white mb-6">IV Add-Ons</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-neutral-light leading-relaxed text-lg max-w-2xl mx-auto">
            Most infusions work harder with the right add-on. Glutathione, pain relief, anti-nausea, extra saline. Tell us what you need when you book or when you arrive.
          </p>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {addOns.map((item) => (
              <div key={item.name} className="border border-neutral-bg p-6 flex items-start justify-between gap-6 hover:border-gold/30 transition-colors group">
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-dark-medium mb-2 group-hover:text-gold transition-colors">{item.name}</h3>
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
              <span className="text-dark-medium font-medium">How to add:</span> Simply mention your desired add-ons when booking or when you arrive at Illari Aesthetics. Our staff will confirm compatibility with your chosen infusion.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/iv-infusions" className="btn-outline">View IV Infusions</Link>
            <Link href="/injections" className="btn-outline">View Injections</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="section-title-white mb-6">Book Your IV Session</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light mb-10 leading-relaxed">
            Book online or call us at 773.219.0326. Open Monday through Friday, 9am to 4pm, in Wicker Park, Chicago.
          </p>
          <a
            href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
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
