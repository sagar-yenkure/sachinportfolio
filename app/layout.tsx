import './globals.css';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sachin Yenkure | Graphic Designer & Visual Artist',
  authors: [{ name: 'Sachin Yenkure' }],
  creator: 'Sachin Yenkure',
  publisher: 'Sachin Yenkure',
  description:
    'Explore Sachin Yenkure’s portfolio—graphic design, festival creatives, branding, UI/UX, and visual storytelling all in one place.',
  keywords:
    'Graphic Designer, UI/UX Designer, Festival Graphics, Instagram Post Designer, Branding Designer, Canva Designer, Figma, Social Media Graphics, Creative Portfolio, Visual Artist',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Sachin Yenkure | Graphic Designer & Visual Artist',
    description:
      'Explore the creative works of Sachin Yenkure - specializing in festival graphics, branding, traditional visuals, and UX designs that tell your brand story.',
    url: siteUrl,
    siteName: 'Sachin Yenkure Portfolio',
    locale: 'en_US',
    type: 'website',
    images: ['opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sachin Yenkure | Graphic Designer & Visual Artist',
    description:
      'Portfolio of Sachin Yenkure - specializing in festival creatives, Instagram posts, traditional art, branding, and engaging UX/UI visuals.',
    images: ['opengraph-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
