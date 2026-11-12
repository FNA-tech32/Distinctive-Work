import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://distinctiveworks.com/'),
  title: "Distinctive Works ✌️",
  description: "Distinctive Works - Creative engineering studio specializing in interactive 3D web experiences, bespoke digital craftsmanship, and modern frontend architecture.",
  keywords: "Distinctive Works, Creative Development, Interactive 3D, WebGL, Three.js, React Developer, Frontend Studio, Digital Experiences, Portfolio",
  authors: [{ name: "Distinctive Works" }],
  creator: "Distinctive Works",
  publisher: "Distinctive Works",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Distinctive Works - Creative Engineering & Digital Craftsmanship",
    description: "Creative engineering studio crafting interactive 3D experiences, modern frontend architecture, and bespoke digital design.",
    siteName: "Distinctive Works",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Distinctive Works - Creative Engineering & Digital Craftsmanship",
    description: "Creative engineering studio crafting interactive 3D experiences, modern frontend architecture, and bespoke digital design.",
  },
  verification: {
    google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}
