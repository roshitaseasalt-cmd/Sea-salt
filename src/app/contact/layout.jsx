export const metadata = {
  title: "Contact | Sea Salt Studio",
  description: "Get in touch with Sea Salt Studio to discuss your next architecture, interior design, or landscape project in Kochi, Ernakulam, Bangalore, or across India.",
  keywords: ["Contact Sea Salt Studio", "Hire Interior Designer Kochi", "Architecture Firm Contact Bangalore", "Roshita Sudhir Contact"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Sea Salt Studio",
    description: "Get in touch with Sea Salt Studio to discuss your next architecture or interior design project.",
    url: "https://seasaltarchitecture.com/contact",
    images: [
      {
        url: "/contact/contact-door.png",
        width: 1200,
        height: 630,
        alt: "Contact Sea Salt Studio",
      },
    ],
  },
};

export default function ContactLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://seasaltarchitecture.com/#localbusiness",
      "name": "Sea Salt Studio",
      "telephone": "+91-70947-44989",
      "email": "roshita.seasalt@gmail.com",
      "url": "https://seasaltarchitecture.com/contact"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
