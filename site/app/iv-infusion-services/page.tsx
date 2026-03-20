import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IV Therapy Chicago | IV Infusions & Vitamin Injections | Illari Aesthetics",
  description: "IV therapy and vitamin injections in Chicago's Wicker Park. Physician-supervised IV infusions for beauty, energy, immunity, hydration, and more. Walk-ins welcome.",
};

export default function IVTherapyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-dark overflow-hidden">
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
            Deliver concentrated vitamins, minerals, and nutrients directly into your bloodstream, bypassing the digestive system for rapid absorption and optimal cellular function. Physician-supervised for maximum safety and results.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
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
            When vitamins and nutrients are taken orally, they pass through the digestive system, which significantly reduces what your body actually absorbs. IV therapy delivers a concentrated blend directly into the bloodstream, achieving absorption rates not possible with oral supplements.
          </p>
          <p className="text-neutral-medium leading-relaxed text-lg">
            At Illari Aesthetics in Chicago, every IV infusion is administered in a physician-supervised environment, ensuring safety, proper formulation, and optimal results for your specific goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-gold/25 z-0" />
            {[
              { step: "01", title: "Select Your Drip", detail: "Choose from our full menu of infusions targeting beauty, energy, immunity, hydration, and more." },
              { step: "02", title: "Relax (About 45 Min)", detail: "Sit back in our comfortable treatment room while your IV infusion delivers nutrients directly to your cells." },
              { step: "03", title: "Feel the Difference", detail: "Many patients notice effects immediately or within hours as nutrients are rapidly absorbed and utilized." },
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

            <div className="bg-dark p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">Injections</h3>
              <p className="text-neutral-light text-sm leading-relaxed mb-6">
                Quick intramuscular injections for targeted results including hair, skin, and nail boost, B12 energy, glutathione antioxidant, immunity, NAD+, and weight wellness. Approximately 15 minutes.
              </p>
              <p className="text-gold font-sans text-sm font-medium mb-6">Starting at $35</p>
              <Link href="/injections" className="btn-outline-white">
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
                Enhance any IV infusion with add-on boosters including glutathione, Toradol for pain, Zofran for nausea, and additional hydration.
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
              { name: "Illari", price: "$250", tag: "Beauty", description: "Hydration, powerful antioxidants, and nutrients blended to enhance natural beauty." },
              { name: "NAD+", price: "$400+", tag: "Anti-Aging", description: "Reverse signs of aging, aid in DNA repair, and support withdrawal symptom management." },
              { name: "Hangover", price: "$225", tag: "Recovery", description: "Hydration plus essential vitamins to recover after a long night." },
              { name: "Myers Cocktail", price: "$165", tag: "Wellness", description: "Decreases inflammation, boosts immunity, and supports full-body detox." },
              { name: "High Dose C", price: "$200", tag: "Immunity", description: "Vitamin C antioxidant to fight free radicals, reduce oxidative stress, and support healthy aging." },
              { name: "Soothe", price: "$250", tag: "Migraine Relief", description: "Targeted blend for migraine relief and symptom management." },
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
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
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
