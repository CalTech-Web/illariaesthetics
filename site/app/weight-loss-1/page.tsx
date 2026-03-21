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
      <section className="relative py-32 bg-dark overflow-hidden">
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
            href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">The Program</p>
              <h2 className="section-title">GLP-1 Weight Loss Program</h2>
              <div className="gold-divider-left" />
              <p className="text-neutral-medium leading-relaxed mb-6">
                The program uses tirzepatide and semaglutide, two GLP-1 receptor agonists with strong clinical track records for sustained weight loss. Dr. Chavez is a board-certified family physician, which means he is not just writing the prescription. He is evaluating your response, adjusting dosing, and making decisions informed by your actual medical history.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-8">
                Monthly check-ins, regular weight assessments, and a regimen that changes as you do. The goal is results that hold, not a number you hit and lose again.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  {
                    label: "Monthly Check-Ins",
                    icon: (
                      <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Tailored Dosing",
                    icon: (
                      <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    ),
                  },
                  {
                    label: "Weight Assessments",
                    icon: (
                      <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Physician-Led",
                    icon: (
                      <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="border border-gold/20 p-4 text-center">
                    <div className="flex justify-center mb-3">{item.icon}</div>
                    <p className="text-dark-medium text-sm font-sans font-medium">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-neutral-bg p-6 border-l-2 border-gold">
                <p className="text-dark-medium font-sans">
                  <span className="text-gold font-medium">Starting at:</span> Approximately $350/month (varies by medication and dosage)
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/assets/gallery/weight-loss-hero.jpg"
                  alt="Weight loss results from physician-supervised GLP-1 program"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How GLP-1 Works */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">The Science</p>
            <h2 className="section-title">How GLP-1 Medications Work</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Targeting Brain and GI Receptors",
                description: "GLP-1 receptor agonists mimic the natural GLP-1 hormone your body produces, targeting receptors in both the brain and GI tract. That dual action is what makes them more effective than appetite suppressants that only work on one pathway.",
              },
              {
                title: "Appetite Regulation",
                description: "The medication slows gastric emptying and promotes fullness, so you eat less without fighting hunger all day. Many patients notice appetite changes within the first few weeks of starting treatment.",
              },
              {
                title: "Metabolic Benefits",
                description: "GLP-1 medications also increase energy expenditure and improve insulin sensitivity. The weight loss comes alongside real metabolic improvements, which is why the results tend to be gradual and lasting rather than dramatic and short-lived.",
              },
              {
                title: "Physician Oversight",
                description: "Dr. Chavez adjusts your dosage based on how your body responds, not a fixed schedule. Monthly check-ins exist specifically for this. No two patients follow exactly the same path through the program.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="w-2 h-2 rounded-full bg-gold mt-3 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-dark-medium mb-2">{item.title}</h3>
                  <p className="text-neutral-medium leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Common Questions</p>
            <h2 className="section-title">Weight Loss Program FAQ</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-6">
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
          <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Chicago Medical Weight Loss</p>
          <h2 className="section-title-white mb-6">Start Your Weight Loss Journey</h2>
          <div className="gold-divider" />
          <p className="text-neutral-light mb-10 max-w-xl mx-auto leading-relaxed">
            Book a consultation with Dr. Chavez to review your goals and find out if the GLP-1 program is a fit for your health profile.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
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
