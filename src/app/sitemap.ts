import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://seu-dominio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/termos-de-uso", "/politica-de-privacidade", "/politica-de-reembolso", "/contato"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
