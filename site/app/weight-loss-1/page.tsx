import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medical Weight Loss Chicago | GLP-1 Program by Dr. Chavez",
  description: "Physician-supervised GLP-1 weight loss program in Chicago's Wicker Park. Dr. Chavez offers tirzepatide and semaglutide with monthly check-ins starting at $350/month.",
};

export default function WeightLossPage() {
  return (
    <>
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
            The GLP-1 weight loss program at Illari Aesthetics is physician-supervised from start to finish. Dr. Chavez provides personalized medication dosing, monthly check-ins, and ongoing support for sustainable results in Chicago&apos;s Wicker Park.
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
                Illari Aesthetics offers a physician-supervised GLP-1 receptor agonist program using tirzepatide and semaglutide, two of the most clinically studied medications for sustained weight loss. Unlike commercial weight loss programs, our approach is guided by Dr. Chavez, a board-certified physician with the medical background to customize your treatment safely and effectively.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-8">
                The program includes monthly provider check-ins, tailored medication regimens based on your individual response, and regular weight assessments to track your progress. Our goal is sustainable, long-term results, not a quick fix.
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
                description: "GLP-1 receptor agonists target receptors in both the brain and gastrointestinal tract, mimicking the natural GLP-1 hormone your body produces. This dual-action approach makes them highly effective for appetite regulation.",
              },
              {
                title: "Appetite Regulation",
                description: "By slowing gastric emptying and promoting feelings of fullness, GLP-1 medications naturally reduce caloric intake without the need for extreme restriction. Many patients notice significant appetite changes within the first few weeks.",
              },
              {
                title: "Metabolic Benefits",
                description: "These medications increase energy expenditure and improve insulin sensitivity, supporting not just weight loss but overall metabolic health. The result is gradual, sustainable weight reduction alongside improved wellness markers.",
              },
              {
                title: "Physician Oversight",
                description: "Under Dr. Chavez's supervision, your dosage is carefully calibrated to your individual response. Monthly check-ins allow for adjustments that maximize effectiveness while minimizing side effects.",
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
                a: "We offer tirzepatide and semaglutide, two of the most clinically studied GLP-1 receptor agonist medications currently available. Dr. Chavez will recommend the most appropriate option based on your medical history, goals, and candidacy.",
              },
              {
                q: "Am I a candidate for the weight loss program?",
                a: "GLP-1 programs are suitable for individuals with a BMI of 27 or greater, or those who have struggled with weight loss through diet and exercise alone. Schedule a consultation with Dr. Chavez to determine if the program is right for your health profile.",
              },
              {
                q: "What are the potential side effects?",
                a: "Common early side effects include nausea, vomiting, and diarrhea, particularly as your body adjusts to the medication. Injection site reactions such as redness or itching may also occur. Most side effects resolve with continued use and proper dosage adjustment, which Dr. Chavez monitors during monthly check-ins.",
              },
              {
                q: "What does the program cost?",
                a: "Plans start at approximately $350 per month. The exact cost varies based on the specific medication and dosage required for your treatment plan. Dr. Chavez will review all pricing transparently during your consultation.",
              },
              {
                q: "How quickly will I see results?",
                a: "Some patients notice appetite changes within the first few weeks of starting treatment. Most see gradual, measurable weight loss over several months. Consistent use combined with a healthy lifestyle and Dr. Chavez's guidance optimizes long-term results.",
              },
              {
                q: "Why choose Illari Aesthetics for my weight loss program?",
                a: "Unlike commercial weight loss clinics, Illari Aesthetics is led by Dr. Chavez, a board-certified family physician. His clinical background means your program is medically sound, personally supervised, and adjusted based on your ongoing health, not a standardized protocol.",
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
            Schedule a consultation with Dr. Chavez to discuss your goals and determine if our GLP-1 program is right for you.
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
