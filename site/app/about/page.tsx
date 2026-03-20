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
              },
              {
                title: "Medical-Grade Products",
                description: "We use AlumierMD and Derma Made, professional-dispensed brands not available over the counter, for superior, evidence-based results.",
              },
              {
                title: "True Personalization",
                description: "Each patient receives a customized plan based on individual skin type and aesthetic goals, never a cookie-cutter treatment.",
              },
              {
                title: "Academic Credentials",
                description: "Dr. Chavez trained at Rush University and returned as a faculty member and preceptor for resident physicians.",
              },
              {
                title: "Advanced Techniques",
                description: "Specialization in surgical scar revisions, Ortho biologics, acne treatment, and advanced filler techniques sets Illari apart.",
              },
              {
                title: "Comprehensive Wellness",
                description: "From skin care and injectables to IV therapy and physician-supervised weight loss, complete wellness under one roof.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 p-8 hover:border-gold/40 transition-colors">
                <div className="w-8 h-px bg-gold mb-6" />
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
