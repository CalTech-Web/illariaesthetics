import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamin Injections Menu Chicago | B12, Glutathione, NAD+ | Illari Aesthetics",
  description: "Quick vitamin and wellness injections at Illari Aesthetics in Chicago's Wicker Park. B12 energy, glutathione, NAD+, immunity, and more. Approximately 15 minutes. Starting at $35.",
  alternates: { canonical: "https://illariaesthetics.com/injections" },
  openGraph: {
    url: "https://illariaesthetics.com/injections",
  },
};

const injectionsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vitamin Injection Menu at Illari Aesthetics Chicago",
  description:
    "Quick vitamin and wellness injections at Illari Aesthetics in Wicker Park, Chicago. B12, glutathione, NAD+, and more. Physician-supervised. Starting at $35.",
  url: "https://illariaesthetics.com/injections",
  numberOfItems: 10,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Illari Injection", description: "Nutrients for hair, skin, and nails. $35." },
    { "@type": "ListItem", position: 2, name: "Illari Plus Injection", description: "Hair, skin, and nails plus a glow antioxidant. $40." },
    { "@type": "ListItem", position: 3, name: "Energy Injection (B12)", description: "B12 injected directly into muscle for fast fatigue relief. $35." },
    { "@type": "ListItem", position: 4, name: "Energy Plus Injection", description: "Full B complex for energy and immune support. $40." },
    { "@type": "ListItem", position: 5, name: "Glutathione Injection", description: "Master antioxidant to fight free radicals and promote anti-aging. $35." },
    { "@type": "ListItem", position: 6, name: "Glutathione Plus Injection", description: "Double dose of glutathione antioxidant. $40." },
    { "@type": "ListItem", position: 7, name: "Immunity Injection", description: "Three-part formula for immune defense, inflammation, and free radicals. $40." },
    { "@type": "ListItem", position: 8, name: "Skinny Injection", description: "Weight loss and wellness injection to complement diet and exercise. $40." },
    { "@type": "ListItem", position: 9, name: "NAD+ 50mg Injection", description: "NAD+ coenzyme for cellular energy and DNA repair, starter dose. $75." },
    { "@type": "ListItem", position: 10, name: "NAD+ 100mg Injection", description: "Full therapeutic dose of NAD+ for cellular energy and DNA repair. $100." },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer glutathione injections in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Illari Aesthetics offers glutathione injections at our Wicker Park location in Chicago. Glutathione is a master antioxidant that fights free radicals and supports anti-aging. We offer a standard dose ($35) and a Glutathione Plus double dose ($40), administered in approximately 15 minutes by physician-supervised staff.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer B12 injections in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Energy injection delivers B12 directly into muscle for faster absorption than oral supplements. For a broader effect, the Energy Plus includes a full B vitamin complex for energy and immune support. Both take approximately 15 minutes and are available at Illari Aesthetics in Wicker Park, Chicago, starting at $35.",
      },
    },
    {
      "@type": "Question",
      name: "What vitamin injections do you offer in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer B12 energy injections ($35), B complex Energy Plus ($40), glutathione antioxidant ($35), Glutathione Plus double dose ($40), Immunity formula ($40), hair and skin and nails support via the Illari ($35) and Illari Plus ($40), NAD+ at 50mg ($75) and 100mg ($100), and the Skinny weight wellness injection ($40). All physician-supervised at Illari Aesthetics in Wicker Park, Chicago.",
      },
    },
  ],
};

const injections = [
  { name: "Illari", price: "$35", description: "Nutrients for hair, skin, and nails. One shot, 15 minutes." },
  { name: "Illari Plus", price: "$40", description: "The Illari injection plus a glow antioxidant. Same 15 minutes, wider effect." },
  { name: "Energy", price: "$35", description: "B12 injected directly into muscle. Cuts fatigue faster than any supplement you can swallow." },
  { name: "Energy Plus", price: "$40", description: "Full B complex for energy and immune support, not just B12 alone." },
  { name: "Glutathione", price: "$35", description: "Master antioxidant your liver produces naturally. Levels drop with age, stress, and poor diet. One shot replenishes them faster than any supplement." },
  { name: "Glutathione Plus", price: "$40", description: "Double the glutathione. Twice the antioxidant load in the same 15-minute window." },
  { name: "Immunity", price: "$40", description: "Three-part formula targeting immune defense, inflammation reduction, and free radical damage." },
  { name: "Skinny", price: "$40", description: "Intended to complement diet and exercise. May release stored fat deposits. Not a standalone weight loss solution." },
  { name: "NAD+ 50mg", price: "$75", description: "NAD+ coenzyme for cellular energy and DNA repair at a starter dose. Good for first-timers. Effects are real and manageable." },
  { name: "NAD+ 100mg", price: "$100", description: "Full therapeutic dose. Stronger cellular energy response, deeper impact on DNA repair. For those who have done the 50mg or want the higher tier from the start." },
];

export default function InjectionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(injectionsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="pt-[100px] pb-[75px] bg-dark">
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
      <section className="py-24 bg-dark linen-texture-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="divide-y divide-gold/10">
            {injections.map((item, index) => (
              <div
                key={item.name}
                className="group flex items-start justify-between gap-8 py-8 hover:bg-white/[0.02] transition-colors duration-500 px-2"
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span className="stroke-numeral font-serif text-3xl leading-none mt-1 flex-shrink-0 w-8 text-right opacity-50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <h3 className="font-serif text-ivory text-2xl group-hover:text-gold transition-colors duration-500">
                        {item.name}
                      </h3>
                      <span className="text-gold/40 text-[10px] tracking-[0.2em] uppercase font-sans font-light border border-gold/20 px-2 py-0.5">
                        ~15 min
                      </span>
                    </div>
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
              All injections are administered at Illari Aesthetics in Wicker Park, Chicago, under physician-supervised protocols. Skinny injection is intended to complement a healthy diet and exercise plan, not as a standalone weight loss solution.
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
              href="/add-ons"
              className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
            >
              View Add-Ons
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Common Questions</p>
            <h2 className="section-title">Injections FAQ</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Do you offer glutathione injections in Chicago?",
                a: "Yes. Illari Aesthetics offers glutathione injections at our Wicker Park location in Chicago. Glutathione is a master antioxidant that fights free radicals and supports anti-aging. We offer a standard dose ($35) and a Glutathione Plus double dose ($40), administered in approximately 15 minutes by physician-supervised staff.",
              },
              {
                q: "Do you offer B12 injections in Chicago?",
                a: "Yes. Our Energy injection delivers B12 directly into muscle for faster absorption than oral supplements. For a broader effect, the Energy Plus includes a full B vitamin complex for energy and immune support. Both take approximately 15 minutes and are available at Illari Aesthetics in Wicker Park, Chicago, starting at $35.",
              },
              {
                q: "What vitamin injections do you offer in Chicago?",
                a: "We offer B12 energy injections ($35), B complex Energy Plus ($40), glutathione antioxidant ($35), Glutathione Plus double dose ($40), Immunity formula ($40), hair and skin and nails support via the Illari ($35) and Illari Plus ($40), NAD+ at 50mg ($75) and 100mg ($100), and the Skinny weight wellness injection ($40). All physician-supervised at Illari Aesthetics in Wicker Park, Chicago.",
              },
            ].map((item) => (
              <details key={item.q} className="border border-neutral-bg group">
                <summary className="px-6 py-5 cursor-pointer flex items-center justify-between font-serif text-dark-medium text-lg hover:text-gold transition-colors">
                  {item.q}
                  <svg className="w-5 h-5 flex-shrink-0 ml-4 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-neutral-medium leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
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
            href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
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
