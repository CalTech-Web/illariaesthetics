import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Illari Aesthetics",
    short_name: "Illari",
    description: "Physician-led medical spa in Chicago's Wicker Park offering skin care, injectables, weight loss, and IV therapy.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a18",
    theme_color: "#b8933a",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
