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
      {/* Hero */}
      <section className="relative pt-[100px] pb-[75px] bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/gallery/gallery-2-treatment.jpg"
            alt="IV therapy and vitamin infusions in Chicago"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">
            Physician-Supervised, Chicago
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-3xl">
            IV Therapy and Vitamin Drips in Chicago&apos;s Wicker Park
          </h1>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            When you take a vitamin orally, your digestive system decides how much actually makes it through. For most nutrients, that number is well below the label. IV therapy skips that process. The full dose goes directly into your bloodstream, available to your cells right now. At Illari Aesthetics, every infusion runs under physician supervision in a clinical setting.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book IV Therapy
            </a>
            <Link href="/iv-infusions" className="btn-outline-white">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">How It Works</p>
          <h2 className="section-title">Direct Absorption, Maximum Effect</h2>
          <div className="gold-divider" />
          <p className="text-neutral-medium leading-relaxed mb-6 text-lg">
            Oral supplements have to survive your digestive system before any of the active compounds reach your blood. Depending on the vitamin, the form, and what else you have eaten, absorption can be surprisingly low. IV therapy delivers the full blend straight into your bloodstream, bypassing that entirely.
          </p>
          <p className="text-neutral-medium leading-relaxed text-lg">
            At Illari Aesthetics in Chicago, every infusion is administered in a physician-supervised setting. Not a spa room. A medical practice in Wicker Park.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-gold/25 z-0" />
            {[
              { step: "01", title: "Select Your Drip", detail: "Browse the full menu of targeted infusions. Beauty, energy, immunity, migraine relief, NAD+ anti-aging, plain hydration. Pick based on what you actually need." },
              { step: "02", title: "Relax (About 45 Min)", detail: "Settle in for about 45 minutes. The drip runs while you sit. Our staff is with you throughout." },
              { step: "03", title: "Feel the Difference", detail: "Many patients notice effects within hours. Some feel it before they leave. Faster than any supplement schedule." },
            ].map((item) => (
              <div key={item.step} className="text-center relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-6 bg-white">
                  <span className="font-serif text-gold text-xl">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl text-dark-medium mb-3">{item.title}</h3>
                <p className="text-neutral-medium text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Our Offerings</p>
            <h2 className="section-title">IV Therapy Services</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-dark-medium mb-4">IV Infusions</h3>
              <p className="text-neutral-medium text-sm leading-relaxed mb-6">
                Full intravenous drips targeting beauty, hangover recovery, immunity, high dose vitamin C, NAD+ anti-aging, migraine relief, and more. Appointments approximately 45 minutes.
              </p>
              <p className="text-gold font-sans text-sm font-medium mb-6">Starting at $99</p>
              <Link href="/iv-infusions" className="btn-outline">
                View IV Menu
              </Link>
            </div>

            <div className="bg-white p-8 text-center border-2 border-gold relative">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-xs tracking-widest uppercase font-sans px-3 py-1">Featured</span>
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-dark-medium mb-4">Injections</h3>
              <p className="text-neutral-medium text-sm leading-relaxed mb-6">
                Intramuscular injections for targeted results. Hair, skin, and nails. B12 energy. Glutathione. Immunity. NAD+. Weight wellness. Each one takes about 15 minutes.
              </p>
              <p className="text-gold font-sans text-sm font-medium mb-6">Starting at $35</p>
              <Link href="/injections" className="btn-outline">
                View Injection Menu
              </Link>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-dark-medium mb-4">Add-Ons</h3>
              <p className="text-neutral-medium text-sm leading-relaxed mb-6">
                Add glutathione, Toradol for pain relief, Zofran for nausea, or extra saline to any IV infusion. Tell us when you book or when you arrive.
              </p>
              <p className="text-gold font-sans text-sm font-medium mb-6">Starting at $35</p>
              <Link href="/add-ons" className="btn-outline">
                View Add-Ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drips */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Popular Choices</p>
            <h2 className="section-title">Featured IV Drips</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Illari", price: "$250", tag: "Beauty", description: "Our signature drip. Hydration, antioxidants, and nutrients formulated to support your appearance from the inside out." },
              { name: "NAD+", price: "$400+", tag: "Anti-Aging", description: "NAD+ is a coenzyme tied to DNA repair and cellular energy. Most people have never had levels this high outside of an IV." },
              { name: "Hangover", price: "$225", tag: "Recovery", description: "The fastest recovery option after a long night. Fluids and vitamins your body spent processing alcohol." },
              { name: "Myers Cocktail", price: "$165", tag: "Wellness", description: "The benchmark IV formula developed by Dr. John Myers. Magnesium, B vitamins, calcium, high-dose C. Still one of the most versatile drips available." },
              { name: "High Dose C", price: "$200", tag: "Immunity", description: "Oral vitamin C tops out at what your gut can process. IV delivery bypasses that ceiling entirely." },
              { name: "Soothe", price: "$250", tag: "Migraine Relief", description: "Formulated specifically for migraines. Works faster than waiting for a pill to clear your stomach." },
            ].map((drip) => (
              <div key={drip.name} className="border border-neutral-bg p-6 hover:border-gold/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-gold font-sans tracking-wider uppercase bg-gold/10 px-2 py-1">{drip.tag}</span>
                  <span className="text-gold font-sans font-medium">{drip.price}</span>
                </div>
                <h3 className="font-serif text-xl text-dark-medium mb-2">{drip.name}</h3>
                <p className="text-neutral-medium text-sm leading-relaxed">{drip.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/iv-infusions" className="btn-primary">
              View Full IV Menu
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Common Questions</p>
            <h2 className="section-title">IV Therapy FAQ</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-6">
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
                a: "Yes. Our Hangover IV delivers hydration and essential vitamins to help you recover after a long night. At $225 for approximately 45 minutes, it replenishes what your body lost with a targeted vitamin blend administered directly into your bloodstream. Available at Illari Aesthetics in Wicker Park, Chicago, Monday through Friday 9am to 4pm.",
              },
            ].map((item) => (
              <details key={item.q} className="border border-neutral-bg bg-white group">
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
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Wicker Park, Chicago</p>
          <h2 className="section-title-white mb-6">Book Your IV Therapy Session</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light mb-10 max-w-xl mx-auto leading-relaxed">
            Available Monday through Friday, 9am to 4pm. Infusions approximately 45 minutes. Injections approximately 15 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Now
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
