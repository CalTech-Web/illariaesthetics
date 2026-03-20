import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Illari Aesthetics | Dr. Milton Chavez, Chicago Med Spa",
  description: "Meet Dr. Milton Chavez, board-certified family physician with 30+ years of clinical experience and founder of Illari Aesthetics in Wicker Park, Chicago.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Our Story</p>
              <h1 className="text-5xl font-serif text-dark-medium mb-6 leading-tight">
                Physician-Led<br />Aesthetic Excellence
              </h1>
              <div className="gold-divider-left" />
              <p className="text-neutral-medium leading-relaxed mb-6">
                Illari Aesthetics is a physician-led medical spa in Chicago&apos;s Wicker Park neighborhood, founded by Dr. Milton Chavez. With over 30 years of clinical experience and academic training at Rush University, Dr. Chavez brings a level of medical expertise rarely found in aesthetic medicine.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-6">
                Our mission is to facilitate the expression of your true desired appearance, enhancing and rejuvenating your natural beauty through evidence-based treatments and medical-grade protocols. Every patient receives a customized plan, not a one-size-fits-all menu.
              </p>
              <p className="text-neutral-medium leading-relaxed mb-8">
                Located in the vibrant Wicker Park community, Illari Aesthetics offers a welcoming and professional environment where patients feel comfortable, confident, and cared for by a physician who truly understands both the art and science of aesthetics.
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
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/assets/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez, Founder and Medical Director of Illari Aesthetics"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-dark text-white p-8 max-w-xs">
                <p className="font-serif text-gold text-lg mb-2">Dr. Milton Chavez</p>
                <p className="text-xs tracking-wider uppercase text-neutral-light">Founder &amp; Medical Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Chavez Bio */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Leadership</p>
            <h2 className="section-title">Meet Dr. Chavez</h2>
            <div className="gold-divider" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-medium leading-relaxed mb-6 text-lg">
              Dr. Chavez is a board-certified family physician with over 30 years of clinical and academic experience. He trained at Rush University, then joined the Rush faculty as a teacher and preceptor for resident physicians. In 2010, Dr. Chavez opened a private practice in Family Medicine, medical aesthetics and surgical dermatology.
            </p>
            <p className="text-neutral-medium leading-relaxed mb-6 text-lg">
              Dr. Chavez has a special interest and additional training in surgical scar revisions, Ortho biologics, acne and advanced filler technique. His academic credentials and ongoing commitment to evidence-based medicine set Illari Aesthetics apart from typical beauty spas.
            </p>

            <blockquote className="border-l-2 border-gold pl-8 my-10">
              <p className="text-dark-medium font-serif italic text-2xl leading-relaxed">
                &ldquo;As a doctor, we use higher grade medical products for a better patient result.&rdquo;
              </p>
              <cite className="text-neutral-medium text-sm mt-4 block not-italic font-sans tracking-wider">
                Dr. Milton Chavez
              </cite>
            </blockquote>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "Board Certification",
                detail: "Board-Certified Family Physician",
              },
              {
                title: "Academic Training",
                detail: "Rush University, Faculty Member and Preceptor",
              },
              {
                title: "Private Practice",
                detail: "Opened in 2010, Family Medicine, Medical Aesthetics, and Surgical Dermatology",
              },
              {
                title: "Specialties",
                detail: "Surgical Scar Revisions, Ortho Biologics, Acne Treatment, Advanced Filler Technique",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 p-6">
                <h3 className="font-serif text-gold text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-medium text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-4 font-sans">Why Choose Us</p>
            <h2 className="section-title-white">What Sets Us Apart</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Physician-Led Care",
                description: "Dr. Chavez is a board-certified family physician with 30+ years of experience. This means medical-grade protocols and doctor-level expertise in every treatment.",
                iconPath: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
              },
              {
                title: "Medical-Grade Products",
                description: "We use AlumierMD and Derma Made, professional-dispensed brands not available over the counter, for superior, evidence-based results.",
                iconPath: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 0 1 .45 1.317C20.25 17.801 18.988 19 17.438 19H6.562C5.012 19 3.75 17.801 3.75 16.317a2.25 2.25 0 0 1 .45-1.317M16.5 3h-9",
              },
              {
                title: "True Personalization",
                description: "Each patient receives a customized plan based on individual skin type and aesthetic goals, never a cookie-cutter treatment.",
                iconPath: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
              },
              {
                title: "Academic Credentials",
                description: "Dr. Chavez trained at Rush University and returned as a faculty member and preceptor for resident physicians.",
                iconPath: "M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
              },
              {
                title: "Advanced Techniques",
                description: "Specialization in surgical scar revisions, Ortho biologics, acne treatment, and advanced filler techniques sets Illari apart.",
                iconPath: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
              },
              {
                title: "Comprehensive Wellness",
                description: "From skin care and injectables to IV therapy and physician-supervised weight loss, complete wellness under one roof.",
                iconPath: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 p-8 hover:border-gold/40 transition-colors">
                <svg
                  className="w-10 h-10 text-gold mb-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={item.iconPath} />
                </svg>
                <h3 className="font-serif text-white text-xl mb-3">{item.title}</h3>
                <p className="text-neutral-light text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Ready to Experience the Illari Difference?</h2>
          <div className="gold-divider" />
          <p className="text-neutral-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation and discover what physician-led aesthetics can do for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://illariaesthetics.zenoti.com/webstoreNew/services/e815a1a1-0210-4e12-bd1b-4cd9d22b34c2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Consultation
            </a>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
