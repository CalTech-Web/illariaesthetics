import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Semaglutide & Ozempic Chicago | Medical Weight Loss by Dr. Chavez",
  description: "Physician-supervised tirzepatide and semaglutide weight loss in Chicago's Wicker Park. Dr. Chavez offers GLP-1 programs with monthly check-ins, tailored dosing, and real physician oversight. Starting at $350/month.",
  alternates: { canonical: "https://illariaesthetics.com/weight-loss-1" },
  openGraph: {
    url: "https://illariaesthetics.com/weight-loss-1",
    title: "Semaglutide & Ozempic Chicago | Medical Weight Loss by Dr. Chavez",
    description: "Physician-supervised semaglutide and tirzepatide weight loss in Chicago. GLP-1 program with monthly check-ins starting at $350/month.",
    images: [
      {
        url: "/assets/gallery/weight-loss-hero.jpg",
        alt: "Medical weight loss program at Illari Aesthetics, Chicago",
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
      name: "Which GLP-1 medications do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tirzepatide and semaglutide, two GLP-1 receptor agonists with strong clinical research behind them. Dr. Chavez will recommend the right one based on your medical history, health profile, and goals.",
      },
    },
    {
      "@type": "Question",
      name: "Am I a candidate for the weight loss program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, GLP-1 programs are appropriate for adults with a BMI of 27 or greater, or people who have tried diet and exercise without lasting results. Schedule a consultation with Dr. Chavez to confirm based on your health profile.",
      },
    },
    {
      "@type": "Question",
      name: "What are the potential side effects of semaglutide or tirzepatide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nausea, vomiting, and diarrhea are the most common early side effects, particularly as your body adjusts to the medication. Some people experience redness or itching at the injection site. Most of these resolve over time. Dr. Chavez monitors and adjusts dosing at your monthly check-ins to minimize them.",
      },
    },
    {
      "@type": "Question",
      name: "What does the weight loss program cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plans start at approximately $350 per month. The exact cost varies based on the specific medication and dosage required for your treatment plan. Dr. Chavez will review all pricing transparently during your consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will I see results from GLP-1 treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some patients notice appetite changes within the first few weeks. Measurable weight loss typically follows over several months with consistent use. Results vary by person, but Dr. Chavez is tracking your progress and adjusting the plan the whole time.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Illari Aesthetics for my weight loss program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial weight loss clinics scale by standardizing everything. Dr. Chavez does the opposite. He is a board-certified family physician reviewing your actual health at every visit and adjusting your program based on what he sees, not a template.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer Ozempic or Wegovy in Chicago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Illari Aesthetics offers semaglutide, the active ingredient found in Ozempic and Wegovy, as part of a physician-supervised GLP-1 weight loss program. Dr. Chavez prescribes and monitors your semaglutide treatment with monthly check-ins and adjustments based on your response. Programs start around $350 per month.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://illariaesthetics.com" },
    { "@type": "ListItem", position: 2, name: "Weight Loss", item: "https://illariaesthetics.com/weight-loss-1" },
  ],
};

export default function WeightLossPage() {
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
            src="/assets/gallery/weight-loss-hero.jpg"
            alt="Physician-supervised medical weight loss in Chicago"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">
            Physician-Supervised, Chicago
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-3xl">
            Medical Weight Loss with a Board-Certified Physician
          </h1>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            GLP-1 medications work. The clinical evidence is clear. But medication alone is not a program. Dr. Chavez supervises every step, adjusting dosing based on your response and checking in monthly. This is physician-led weight loss in Chicago&apos;s Wicker Park, not a subscription box.
          </p>
          <a
            href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Program Overview */}
      <section className="bg-marble-stone linen-texture py-32">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Content */}
            <div className="lg:col-span-7 lg:pr-20 order-2 lg:order-1">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-8">The Program</p>
              <h2 className="font-serif text-dark text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-10">
                GLP-1 Weight Loss<br /><span className="italic">by a Board-Certified Physician</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mb-8" />
              <p className="text-dark/50 text-sm font-sans font-light leading-[1.8] mb-6">
                The program uses tirzepatide and semaglutide, two GLP-1 receptor agonists with strong clinical track records for sustained weight loss. Dr. Chavez is a board-certified family physician, which means he is not just writing the prescription. He is evaluating your response, adjusting dosing, and making decisions informed by your actual medical history.
              </p>
              <p className="text-dark/50 text-sm font-sans font-light leading-[1.8] mb-12">
                Monthly check-ins, regular weight assessments, and a regimen that changes as you do. The goal is results that hold, not a number you hit and lose again.
              </p>

              <div className="grid grid-cols-2 gap-px bg-gold/10 mb-10">
                {[
                  {
                    label: "Monthly Check-Ins",
                    icon: (
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Tailored Dosing",
                    icon: (
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    ),
                  },
                  {
                    label: "Weight Assessments",
                    icon: (
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Physician-Led",
                    icon: (
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-marble-stone p-6 flex items-center gap-4">
                    {item.icon}
                    <p className="text-dark text-sm font-sans font-light tracking-wide">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="border border-gold/30 px-8 py-5 inline-block">
                <p className="text-dark/60 text-[11px] tracking-[0.2em] uppercase font-sans font-light">
                  Starting at <span className="font-serif text-gold text-xl normal-case tracking-normal">$350</span> / month
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 order-1 lg:order-2 mb-12 lg:mb-0">
              <div className="aspect-[3/4] relative overflow-hidden lg:-mr-12">
                <Image
                  src="/assets/gallery/weight-loss-hero.jpg"
                  alt="Weight loss results from physician-supervised GLP-1 program at Illari Aesthetics Chicago"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How GLP-1 Works */}
      <section className="bg-dark linen-texture-dark py-32">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">The Science</p>
            <h2 className="font-serif text-ivory text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              How GLP-1<br /><span className="italic">Medications Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            <div className="hidden lg:block absolute top-[2.5rem] left-[12%] right-[12%] h-px bg-gold/15" />
            {[
              {
                num: "01",
                title: "Brain & GI Receptors",
                description: "GLP-1 receptor agonists mimic the natural GLP-1 hormone, targeting receptors in both the brain and GI tract. That dual action is what makes them more effective than single-pathway appetite suppressants.",
              },
              {
                num: "02",
                title: "Appetite Regulation",
                description: "The medication slows gastric emptying and promotes fullness, so you eat less without fighting hunger all day. Many patients notice appetite changes within the first few weeks.",
              },
              {
                num: "03",
                title: "Metabolic Benefits",
                description: "GLP-1 medications increase energy expenditure and improve insulin sensitivity. The weight loss comes alongside real metabolic improvements, gradual and lasting rather than dramatic and short-lived.",
              },
              {
                num: "04",
                title: "Physician Oversight",
                description: "Dr. Chavez adjusts your dosage based on how your body responds, not a fixed schedule. Monthly check-ins exist specifically for this. No two patients follow exactly the same path.",
              },
            ].map((item) => (
              <div key={item.num} className="relative">
                <p className="stroke-numeral font-serif text-6xl lg:text-7xl mb-6">{item.num}</p>
                <h3 className="font-serif text-ivory text-xl mb-3">{item.title}</h3>
                <p className="text-ivory/40 text-sm font-sans font-light leading-[1.8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-marble-stone linen-texture py-32">
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">
            <div className="lg:col-span-4 lg:pr-16">
              <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans font-light mb-6">Common Questions</p>
              <h2 className="font-serif text-dark text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-8">
                Weight Loss<br /><span className="italic">FAQ</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mb-8" />
              <p className="text-dark/50 text-sm font-sans font-light leading-[1.8]">
                Questions about the GLP-1 program, candidacy, and what to expect. Book a consultation to discuss your specific health profile with Dr. Chavez.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-gold/10">
              {[
                {
                  q: "Which GLP-1 medications do you offer?",
                  a: "Tirzepatide and semaglutide, two GLP-1 receptor agonists with strong clinical research behind them. Dr. Chavez will recommend the right one based on your medical history, health profile, and goals.",
                },
                {
                  q: "Am I a candidate for the weight loss program?",
                  a: "Generally, GLP-1 programs are appropriate for adults with a BMI of 27 or greater, or people who have tried diet and exercise without lasting results. Schedule a consultation with Dr. Chavez to confirm based on your health profile.",
                },
                {
                  q: "What are the potential side effects?",
                  a: "Nausea, vomiting, and diarrhea are the most common early side effects, particularly as your body adjusts to the medication. Some people experience redness or itching at the injection site. Most of these resolve over time. Dr. Chavez monitors and adjusts dosing at your monthly check-ins to minimize them.",
                },
                {
                  q: "What does the program cost?",
                  a: "Plans start at approximately $350 per month. The exact cost varies based on the specific medication and dosage required for your treatment plan. Dr. Chavez will review all pricing transparently during your consultation.",
                },
                {
                  q: "How quickly will I see results?",
                  a: "Some patients notice appetite changes within the first few weeks. Measurable weight loss typically follows over several months with consistent use. Results vary by person, but Dr. Chavez is tracking your progress and adjusting the plan the whole time.",
                },
                {
                  q: "Why choose Illari Aesthetics for my weight loss program?",
                  a: "Commercial weight loss clinics scale by standardizing everything. Dr. Chavez does the opposite. He is a board-certified family physician reviewing your actual health at every visit and adjusting your program based on what he sees, not a template.",
                },
                {
                  q: "Do you offer Ozempic or Wegovy in Chicago?",
                  a: "Illari Aesthetics offers semaglutide, the active ingredient found in Ozempic and Wegovy, as part of a physician-supervised GLP-1 weight loss program. Dr. Chavez prescribes and monitors your semaglutide treatment with monthly check-ins and adjustments based on your response. Programs start around $350 per month.",
                },
              ].map((item) => (
                <details key={item.q} className="group py-1">
                  <summary className="py-6 cursor-pointer flex items-center justify-between font-serif text-dark text-lg hover:text-gold transition-colors duration-300 list-none">
                    {item.q}
                    <svg className="w-4 h-4 flex-shrink-0 ml-6 text-gold/50 group-open:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <div className="pb-6">
                    <p className="text-dark/50 text-sm font-sans font-light leading-[1.8]">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Chicago Medical Weight Loss</p>
          <h2 className="section-title-white mb-6">Start Your Weight Loss Journey</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light mb-10 max-w-xl mx-auto leading-relaxed">
            Book a consultation with Dr. Chavez to review your goals and find out if the GLP-1 program is a fit for your health profile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule Now
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
