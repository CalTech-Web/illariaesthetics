import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://illariaesthetics.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/skin-care`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/injectables`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/weight-loss-1`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/iv-infusion-services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/iv-infusions`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/injections`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/add-ons`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/schedule`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
