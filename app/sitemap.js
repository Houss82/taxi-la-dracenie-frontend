import { SITE_URL } from "./lib/site";
import { getAllPageSlugs } from "./lib/pages";
import { getAllPostSlugs } from "@/lib/blog";

export default function sitemap() {
  const now = new Date();
  const staticPaths = ["", "/contact", "/reservation", "/mentions-legales", "/blog"];

  const pages = [
    ...staticPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: path === "" || path === "/blog" ? "daily" : "monthly",
      priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.7,
    })),
    ...getAllPageSlugs().map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: slug.includes("conventionne") || slug.includes("aeroport") ? 0.9 : 0.85,
    })),
    ...getAllPostSlugs().map(({ slug }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    })),
  ];

  return pages;
}
