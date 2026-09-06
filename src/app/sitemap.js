import { collections } from "@/lib/collections";
export default function sitemap() {
  return [
    "",
    "/about",
    "/work",
    "/writing",
    "/life",
    "/legal/privacy",
    "/legal/terms",
    "/sitemap",
    ...collections.map((c) => `/creative-studio/${c.slug}`),
  ].map((path) => ({
    url: `https://dalronjrobertson.com${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/creative-studio") ? 0.6 : 0.8,
  }));
}
