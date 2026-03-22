import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Myers Cocktail & NAD+ IV Therapy Chicago | Vitamin Drips by Dr. Chavez",
  description: "Physician-supervised IV therapy in Chicago's Wicker Park. Myers Cocktail, NAD+ infusions, hydration, immunity, beauty drips, and more. Starting at $99.",
  alternates: { canonical: "https://illariaesthetics.com/iv-infusion-services" },
  openGraph: {
    url: "https://illariaesthetics.com/iv-infusion-services",
    title: "IV Therapy Chicago | Vitamin Drips & IV Hydration in Wicker Park",
    description: "Physician-supervised IV therapy in Chicago's Wicker Park. Hydration, NAD+, immunity, beauty, hangover recovery, and more. Starting at $99.",
    images: [
      {
        url: "/assets/gallery/gallery-2-treatment.jpg",
        alt: "IV therapy and vitamin infusions at Illari Aesthetics, Chicago",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is IV therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IV therapy delivers a concentrated blend of vitamins, minerals, and nutrients directly into your bloodstream, bypassing the digestive system entirely. This means full absorption and faster effects compared to oral supplements. At Illari Aesthetics, every infusion is administered in a physician-supervised clinical setting in Chicago's Wicker Park.",
      },
    },
    {
      "@type": "Question",
      name: "How long does IV therapy take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IV infusions take approximately 45 minutes. Intramuscular vitamin injections take approximately 15 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What IV drips do you offer in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer the Illari beauty drip ($250), NAD+ anti-aging ($400+), Hangover recovery ($225), Myers Cocktail ($165), High Dose C ($200), Immunity ($165), Allergy relief ($165), Soothe for migraines ($250), and Modest hydration ($99). Add-ons including glutathione, Toradol, Zofran, and extra hydration are available.",
      },
    },
    {
      "@type": "Question",
      name: "Is IV therapy safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when administered in a proper medical setting. At Illari Aesthetics, all IV therapy is physician-supervised by Dr. Milton Chavez, a board-certified family physician with 30+ years of clinical experience. Every infusion is performed in a clinical setting, not a spa.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Illari Aesthetics for IV therapy in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illari Aesthetics is physician-led. Dr. Chavez is a board-certified family physician who oversees every infusion in a real medical practice in Wicker Park, Chicago. That is a different standard of care than IV lounges or wellness spas offering similar services without physician oversight.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer hangover IV therapy in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Hangover IV delivers hydration and essential vitamins to help you recover after a long night. At $225 for approximately 45 minutes, it replenishes what your body lost with a targeted vitamin blend administered directly into your bloodstream. Available at Illari Aesthetics in Wicker Park, Chicago, Monday through Friday 9am to 4pm.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://illariaesthetics.com" },
    { "@type": "ListItem", position: 2, name: "IV Therapy", item: "https://illariaesthetics.com/iv-infusion-services" },
  ],
};

export default function IVTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-end bg-dark linen-texture-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/gallery-2-treatment.jpg"
            alt="IV therapy and vitamin infusions in Chicago"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/40" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 pb-24 pt-40 w-full">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">
            Physician-Supervised, Chicago
          </p>
          <h1 className="font-serif text-ivory text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] mb-8 max-w-3xl">
            IV Therapy &amp;<br /><span className="italic">Vitamin Drips</span><br />in Wicker Park
          </h1>
          <div className="w-12 h-px bg-gold/40 mb-8" />
          <p className="text-ivory/50 text-sm font-sans font-light leading-[1.9] mb-12 max-w-xl">
            When you take a vitamin orally, your digestive system decides how much actually makes it through. IV therapy skips that entirely. The full dose goes directly into your bloodstream, available to your cells right now. Every infusion at Illari Aesthetics runs under physician supervision in a clinical setting.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Book IV Therapy
            </a>
            <Link
              href="/iv-infusions"
              className="text-ivory/50 text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-ivory/20 pb-1 hover:border-ivory/50 hover:text-ivory/80 transition-colors duration-500 py-3.5"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-marble-stone py-32 linen-texture">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">How It Works</p>
            <h2 className="font-serif text-dark text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              Direct Absorption,<br />Maximum Effect
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <p className="text-dark/50 text-sm font-sans font-light leading-[1.9]">
              Oral supplements have to survive your digestive system before any of the active compounds reach your blood. Depending on the vitamin, the form, and what else you have eaten, absorption can be surprisingly low. IV therapy delivers the full blend straight into your bloodstream, bypassing that entirely.
            </p>
            <p className="text-dark/50 text-sm font-sans font-light leading-[1.9]">
              At Illari Aesthetics in Chicago, every infusion is administered in a physician-supervised setting. Not a spa room. A medical practice in Wicker Park run by Dr. Milton Chavez, a board-certified family physician with 30+ years of clinical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[2rem] left-[16%] right-[16%] h-px bg-gold/15" />
            {[
              { step: "01", title: "Select Your Drip", detail: "Browse the full menu of targeted infusions. Beauty, energy, immunity, migraine relief, NAD+ anti-aging, plain hydration. Pick based on what you actually need." },
              { step: "02", title: "Relax (About 45 Min)", detail: "Settle in for about 45 minutes. The drip runs while you sit. Our staff is with you throughout." },
              { step: "03", title: "Feel the Difference", detail: "Many patients notice effects within hours. Some feel it before they leave. Faster than any supplement schedule." },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <p className="stroke-numeral font-serif text-6xl lg:text-7xl mb-6">{item.step}</p>
                <h3 className="font-serif text-dark text-xl mb-3">{item.title}</h3>
                <p className="text-dark/40 text-sm font-sans font-light leading-[1.8]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE CATEGORIES ─── */}
      <section className="bg-dark linen-texture-dark py-32">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Our Offerings</p>
            <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              IV Therapy<br /><span className="italic">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "IV Infusions",
                price: "From $99",
                description: "Full intravenous drips targeting beauty, hangover recovery, immunity, high dose vitamin C, NAD+ anti-aging, migraine relief, and more. Approximately 45 minutes.",
                href: "/iv-infusions",
                cta: "View IV Menu",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: "Injections",
                price: "From $35",
                description: "Intramuscular injections for targeted results. Hair, skin, and nails. B12 energy. Glutathione. Immunity. NAD+. Weight wellness. About 15 minutes each.",
                href: "/injections",
                cta: "View Injection Menu",
                featured: true,
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                ),
                title: "Add-Ons",
                price: "From $35",
                description: "Add glutathione, Toradol for pain relief, Zofran for nausea, or extra saline to any IV infusion. Tell us when you book or when you arrive.",
                href: "/add-ons",
                cta: "View Add-Ons",
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`relative p-10 flex flex-col ${service.featured ? "bg-[#1e1c18]" : "bg-dark"}`}
              >
                {service.featured && (
                  <p className="text-gold text-[9px] tracking-[0.3em] uppercase font-sans font-light mb-6">Featured</p>
                )}
                <div className="mb-8">{service.icon}</div>
                <h3 className="font-serif text-ivory text-2xl mb-2">{service.title}</h3>
                <p className="text-gold/70 text-[10px] tracking-[0.2em] uppercase font-sans font-light mb-6">{service.price}</p>
                <p className="text-ivory/40 text-sm font-sans font-light leading-[1.8] mb-10 flex-1">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/30 pb-1 hover:border-gold transition-colors duration-500 self-start"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED DRIPS ─── */}
      <section className="bg-marble py-32 linen-texture">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end mb-20">
            <div className="lg:col-span-8">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Popular Choices</p>
              <h2 className="font-serif text-dark text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
                Featured<br /><span className="italic">IV Drips</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right mt-8 lg:mt-0">
              <Link
                href="/iv-infusions"
                className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
              >
                View Full Menu
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-dark/5">
            {[
              { name: "Illari", price: "$250", tag: "Beauty", description: "Our signature drip. Hydration, antioxidants, and nutrients formulated to support your appearance from the inside out." },
              { name: "NAD+", price: "$400+", tag: "Anti-Aging", description: "NAD+ is a coenzyme tied to DNA repair and cellular energy. Most people have never had levels this high outside of an IV." },
              { name: "Hangover", price: "$225", tag: "Recovery", description: "The fastest recovery option after a long night. Fluids and vitamins your body spent processing alcohol." },
              { name: "Myers Cocktail", price: "$165", tag: "Wellness", description: "The benchmark IV formula developed by Dr. John Myers. Magnesium, B vitamins, calcium, high-dose C. Still one of the most versatile drips available." },
              { name: "High Dose C", price: "$200", tag: "Immunity", description: "Oral vitamin C tops out at what your gut can process. IV delivery bypasses that ceiling entirely." },
              { name: "Soothe", price: "$250", tag: "Migraine Relief", description: "Formulated specifically for migraines. Works faster than waiting for a pill to clear your stomach." },
            ].map((drip, i) => (
              <div
                key={drip.name}
                className={`p-8 group hover:bg-marble-stone transition-colors duration-500 ${
                  i < 3 ? "md:border-b border-dark/5" : ""
                } ${i % 3 !== 2 ? "md:border-r border-dark/5" : ""}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[9px] text-gold/70 font-sans tracking-[0.25em] uppercase">{drip.tag}</span>
                  <span className="font-serif text-gold text-xl">{drip.price}</span>
                </div>
                <h3 className="font-serif text-dark text-2xl mb-3 group-hover:text-gold transition-colors duration-500">{drip.name}</h3>
                <p className="text-dark/40 text-sm font-sans font-light leading-[1.8]">{drip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-32 bg-dark linen-texture-dark">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left — sticky header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Common Questions</p>
              <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] mb-6">
                IV Therapy <span className="italic">FAQ</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mb-8" />
              <p className="text-ivory/35 text-sm font-sans font-light leading-[1.8] mb-8">
                Questions about what to expect, how long it takes, and what we offer at our Wicker Park clinic.
              </p>
              <a
                href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-[11px] tracking-[0.25em] uppercase font-sans font-light border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-500"
              >
                Still Have Questions? Book a Consultation
              </a>
            </div>

            {/* Right — accordion */}
            <div className="lg:col-span-8">
              {[
                {
                  q: "What is IV therapy?",
                  a: "IV therapy delivers a concentrated blend of vitamins, minerals, and nutrients directly into your bloodstream, bypassing the digestive system entirely. This means full absorption and faster effects compared to oral supplements. At Illari Aesthetics, every infusion is administered in a physician-supervised clinical setting in Chicago's Wicker Park.",
                },
                {
                  q: "How long does IV therapy take?",
                  a: "IV infusions take approximately 45 minutes. Intramuscular vitamin injections take approximately 15 minutes.",
                },
                {
                  q: "What IV drips do you offer in Chicago?",
                  a: "We offer the Illari beauty drip ($250), NAD+ anti-aging ($400+), Hangover recovery ($225), Myers Cocktail ($165), High Dose C ($200), Immunity ($165), Allergy relief ($165), Soothe for migraines ($250), and Modest hydration ($99). Add-ons including glutathione, Toradol, Zofran, and extra hydration are available.",
                },
                {
                  q: "Is IV therapy safe?",
                  a: "Yes, when administered in a proper medical setting. At Illari Aesthetics, all IV therapy is physician-supervised by Dr. Milton Chavez, a board-certified family physician with 30+ years of clinical experience. Every infusion is performed in a clinical setting, not a spa.",
                },
                {
                  q: "Why choose Illari Aesthetics for IV therapy in Chicago?",
                  a: "Illari Aesthetics is physician-led. Dr. Chavez is a board-certified family physician who oversees every infusion in a real medical practice in Wicker Park, Chicago. That is a different standard of care than IV lounges or wellness spas offering similar services without physician oversight.",
                },
                {
                  q: "Do you offer hangover IV therapy in Chicago?",
                  a: "Yes. Our Hangover IV delivers hydration and essential vitamins to help you recover after a long night. At $225 for approximately 45 minutes, it replenishes what your body lost with a targeted vitamin blend administered directly into your bloodstream. Available Monday through Friday, 9am to 4pm.",
                },
              ].map((item, i) => (
                <details key={item.q} className="group border-b border-ivory/[0.06]">
                  <summary className="cursor-pointer flex items-center gap-5 py-7 list-none">
                    <span className="font-serif text-gold/40 text-sm flex-shrink-0 group-open:text-gold transition-colors duration-300 w-6 text-right">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-ivory/70 text-lg leading-snug group-hover:text-gold transition-colors duration-300 flex-1">
                      {item.q}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center group-open:bg-gold/10 group-open:border-gold/50 transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-gold group-open:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <div className="pb-7 pl-11">
                    <p className="text-ivory/35 text-sm font-sans font-light leading-[1.9]">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative bg-dark overflow-hidden">
        {/* Background image — right side */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 bottom-0 w-[60%]">
            <Image
              src="/assets/gallery/iv-cta-bg.png"
              alt=""
              fill
              className="object-cover object-center opacity-50"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-dark/30 via-dark/80 to-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 py-28 lg:py-36">
          <div className="lg:max-w-lg">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">Wicker Park, Chicago</p>
            <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8">
              Book Your<br /><span className="italic">IV Therapy Session</span>
            </h2>
            <div className="w-12 h-px bg-gold/30 mb-8" />
            <p className="text-ivory/40 text-sm font-sans font-light leading-[1.9] mb-12 max-w-md">
              Available Monday through Friday, 9am to 4pm. Infusions approximately 45 minutes. Injections approximately 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a
                href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold/60 text-gold px-10 py-3.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-sans font-light hover:bg-gold/10 hover:border-gold transition-all duration-500"
              >
                Book Now
              </a>
              <a
                href="tel:7732190326"
                className="text-ivory/40 text-sm font-mono tracking-widest hover:text-ivory/70 transition-colors duration-500 py-3.5"
              >
                773.219.0326
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
