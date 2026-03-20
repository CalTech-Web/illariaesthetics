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
                  { label: "Monthly Check-Ins", icon: "📋" },
                  { label: "Tailored Dosing", icon: "💊" },
                  { label: "Weight Assessments", icon: "📊" },
                  { label: "Physician-Led", icon: "👨‍⚕️" },
                ].map((item) => (
                  <div key={item.label} className="border border-gold/20 p-4 text-center">
                    <p className="text-2xl mb-2">{item.icon}</p>
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
