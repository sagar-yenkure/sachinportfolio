import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.APP_URL}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        }
    ];
}
