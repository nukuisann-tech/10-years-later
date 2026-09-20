import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { works } from "@/data/works";
import { journalPosts } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/works", "/philosophy", "/performance", "/journal", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })
  );

  const workRoutes = works.map((w) => ({
    url: `${site.url}/works/${w.slug}`,
    lastModified: new Date(),
  }));

  const journalRoutes = journalPosts.map((p) => ({
    url: `${site.url}/journal/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...workRoutes, ...journalRoutes];
}
