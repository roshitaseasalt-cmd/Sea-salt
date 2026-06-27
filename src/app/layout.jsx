import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://seasaltarchitecture.com"),
  title: {
    default: "Sea Salt Studio | Architecture & Interiors | Ernakulam & Bangalore",
    template: "%s | Sea Salt Studio"
  },
  description: "Creating architecture and interiors rooted in atmosphere, material sensitivity, and lived experience. Sea Salt Studio is a premier architecture and interior design firm serving Kochi, Ernakulam, Bangalore, and across India.",
  keywords: ["Architecture", "Interiors", "Landscape", "Ernakulam", "Kochi", "Bangalore", "Bengaluru", "Sea Salt Architecture", "Sea Salt Interiors", "Sea Salt Landscapes", "Architects in Ernakulam", "sea salt", "Architects in Bangalore", "Interior Designers in Kochi", "Architecture Firm Bangalore", "Luxury Interior Designers Kerala"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://seasaltarchitecture.com",
    title: "Sea Salt Studio | Architecture & Interiors | Ernakulam & Bangalore",
    description: "Creating architecture and interiors rooted in atmosphere, material sensitivity, and lived experience.",
    siteName: "Sea Salt Studio",
    images: [
      {
        url: "/sea-salt-logo.png",
        width: 1200,
        height: 630,
        alt: "Sea Salt Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sea Salt Studio | Architecture & Interiors | Bangalore & Ernakulam",
    description: "Creating architecture and interiors rooted in atmosphere, material sensitivity, and lived experience.",
    images: ["/sea-salt-logo.png"],
  },
  authors: [{ name: "Janakripan C" }],
  publisher: "Sea Salt Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://seasaltarchitecture.com/#organization",
        "name": "Sea Salt Studio",
        "url": "https://seasaltarchitecture.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://seasaltarchitecture.com/sea-salt-logo.png",
          "width": 500,
          "height": 64
        },
        "sameAs": [
          "https://instagram.com/seasalt.architecture"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-70947-44989",
          "contactType": "customer service",
          "email": "roshita.seasalt@gmail.com",
          "areaServed": "IN",
          "availableLanguage": ["English", "Malayalam", "Hindi", "Tamil"]
        }
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService", "Architect", "InteriorDesigner"],
        "@id": "https://seasaltarchitecture.com/#localbusiness",
        "name": "Sea Salt Studio",
        "url": "https://seasaltarchitecture.com",
        "image": "https://seasaltarchitecture.com/sea-salt-logo.png",
        "telephone": "+91-70947-44989",
        "email": "roshita.seasalt@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Bengaluru"
          },
          {
            "@type": "City",
            "name": "Kochi"
          },
          {
            "@type": "City",
            "name": "Ernakulam"
          },
          {
            "@type": "Country",
            "name": "India"
          }
        ],
        "priceRange": "$$$",
        "description": "Premium architecture and interior design firm creating enduring spaces rooted in atmosphere."
      },
      {
        "@type": "WebSite",
        "@id": "https://seasaltarchitecture.com/#website",
        "url": "https://seasaltarchitecture.com",
        "name": "Sea Salt Studio",
        "publisher": {
          "@id": "https://seasaltarchitecture.com/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} antialiased`}
    >
      <body className="flex flex-col font-sans">
        <SmoothScroll>
          <div className="min-h-screen flex flex-col w-full">
            <Header />
            <main className="flex-1 flex flex-col w-full">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
