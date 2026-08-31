import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const routes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/paket",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/tentang",
    changeFrequency: "monthly",
    priority: 0.8,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
