"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "illariaesthetics.com",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          source: "contact-page",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-gold/20 p-10 text-center">
        <div className="w-14 h-14 border border-gold flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-dark-medium mb-3">Message Sent</h3>
        <p className="text-neutral-medium text-sm leading-relaxed">
          Thank you for reaching out. Someone from Illari Aesthetics will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gold/20 p-8 md:p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs tracking-widest uppercase text-neutral-medium font-sans mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full border border-neutral-bg focus:border-gold outline-none px-4 py-3 text-dark-medium text-sm transition-colors placeholder:text-neutral-light"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs tracking-widest uppercase text-neutral-medium font-sans mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-neutral-bg focus:border-gold outline-none px-4 py-3 text-dark-medium text-sm transition-colors placeholder:text-neutral-light"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-neutral-medium font-sans mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className="w-full border border-neutral-bg focus:border-gold outline-none px-4 py-3 text-dark-medium text-sm transition-colors placeholder:text-neutral-light resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or call us at 773.219.0326.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
