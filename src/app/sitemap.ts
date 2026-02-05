import type { MetadataRoute } from "next";

const baseUrl = "https://aldenaire.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/integrations`, lastModified: new Date() },
    { url: `${baseUrl}/security`, lastModified: new Date() },
    { url: `${baseUrl}/auth/login`, lastModified: new Date() },
    { url: `${baseUrl}/auth/register`, lastModified: new Date() },
    { url: `${baseUrl}/auth/forgot`, lastModified: new Date() },
    { url: `${baseUrl}/dashboard`, lastModified: new Date() },
    { url: `${baseUrl}/dashboard/assistant`, lastModified: new Date() },
    { url: `${baseUrl}/dashboard/tasks`, lastModified: new Date() },
    { url: `${baseUrl}/dashboard/analytics`, lastModified: new Date() },
    { url: `${baseUrl}/dashboard/history`, lastModified: new Date() },
    { url: `${baseUrl}/dashboard/settings`, lastModified: new Date() },
    { url: `${baseUrl}/admin`, lastModified: new Date() },
    { url: `${baseUrl}/admin/analytics`, lastModified: new Date() },
    { url: `${baseUrl}/admin/logs`, lastModified: new Date() }
  ];
}
