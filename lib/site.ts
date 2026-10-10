const productionUrl = 'https://sachinyenkure.vercel.app';
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.APP_URL;

function resolveSiteUrl(value: string | undefined) {
    if (!value) return productionUrl;

    try {
        const url = new URL(value);
        if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
            return productionUrl;
        }
        return url.origin;
    } catch {
        return productionUrl;
    }
}

export const siteUrl = resolveSiteUrl(configuredUrl);