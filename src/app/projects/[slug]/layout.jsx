import { flatProjects } from "@/data/projects";

export async function generateMetadata({ params }) {
  // Extract slug properly from params (Promise in Next 15)
  const { slug } = await params;
  const project = flatProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Sea Salt Studio",
    };
  }

  const url = `https://seasaltarchitecture.com/projects/${project.slug}`;
  const keywords = [
    project.title,
    project.location,
    project.category,
    "Sea Salt Studio",
    project.role || "Interior Design",
  ].filter(Boolean);

  return {
    title: `${project.title} | ${project.category} | Sea Salt Studio`,
    description: project.details || project.blockquote || `Explore the ${project.title} project by Sea Salt Studio in ${project.location}.`,
    keywords: keywords,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Sea Salt Studio`,
      description: project.details || project.blockquote,
      url: url,
      images: [
        {
          url: project.images?.hero || "/sea-salt-logo.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "article",
      authors: ["Roshita Sudhir"],
    },
  };
}

export default async function ProjectLayout({ children, params }) {
  const { slug } = await params;
  const project = flatProjects.find((p) => p.slug === slug);

  if (!project) {
    return <>{children}</>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "headline": `${project.title} - ${project.category}`,
    "image": `https://seasaltarchitecture.com${project.images?.hero}`,
    "author": {
      "@type": "Person",
      "name": "Roshita Sudhir"
    },
    "publisher": {
      "@id": "https://seasaltarchitecture.com/#organization"
    },
    "creator": {
      "@type": "Organization",
      "name": project.architect || "Sea Salt Studio"
    },
    "spatialCoverage": {
      "@type": "Place",
      "name": project.location
    },
    "about": project.details || project.blockquote,
    "url": `https://seasaltarchitecture.com/projects/${project.slug}`
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
