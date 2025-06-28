import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sachin Yenkure | Graphic Designer & Visual Artist',
  description:
    'Explore Sachin Yenkure’s portfolio—graphic design, festival creatives, branding, UI/UX, and visual storytelling all in one place.',
  keywords:
    'Graphic Designer, UI/UX Designer, Festival Graphics, Instagram Post Designer, Branding Designer, Canva Designer, Figma, Social Media Graphics, Creative Portfolio, Visual Artist',
  metadataBase: new URL(process.env.APP_URL!),
  openGraph: {
    title: 'Sachin Yenkure | Graphic Designer & Visual Artist',
    description:
      'Explore the creative works of Sachin Yenkure - specializing in festival graphics, branding, traditional visuals, and UX designs that tell your brand story.',
    url: process.env.APP_URL,
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
    canonical: process.env.APP_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
