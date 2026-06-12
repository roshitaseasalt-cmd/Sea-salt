export const projectsData = {
  architecture: [
    {
      slug: "sri-aurobindo-integral-life-center",
      title: "Sri Aurobindo Life Center",
      location: "Surat, India",
      client: "Sri Aurobindo Life Center Trust",
      status: "Built",
      role: "Project Architect",
      architect: "Studio Naqshbandi, Auroville",
      year: "2016",
      category: "Architecture",
      details:
        "Conceived as a meditative landscape of water, light and movement, the Sri Aurobindo Life Center unfolds through a sequence of courts, bridges and reflective thresholds.",
      blockquote:
        "A place for contemplation, learning and inner growth — where architecture becomes a silent companion.",
      images: {
        hero: "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/01. Hero Image.jpg",
        plan: "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/02. Drawing.jpg",
        views: [
          "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/03. VIEW 01.jpg",
          "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/03. VIEW 02.jpeg",
          "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/03. VIEW 03.jpeg",
        ],
        moments: [
          {
            src: "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/04. Moments 01.png",
            caption: "Framed views",
          },
          {
            src: "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/04. Moments 02.png",
            caption: "Thresholds",
          },
          {
            src: "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/04. Moments 03 .png",
            caption: "Landscape integration",
          },
          {
            src: "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/04. Moments 04.png",
            caption: "Light and shadow",
          },
        ],
      },
    },
    {
      slug: "house-of-courts",
      title: "House of Courts",
      location: "Hyderabad, India",
      role: "Project Architect",
      architect: "Stapati, Bangalore",
      year: "2025",
      category: "Architecture",
      details:
        "A premium private residence constructed using raw brick lattices and central courtyard layout systems to facilitate natural ventilation.",
      images: {
        hero: "/projects/02. House of Courts_ARCHITECTURE/01. Hero Image.png",
      },
    },
    {
      slug: "residence-at-hospet",
      title: "Residence at Hospet",
      location: "Karnataka, India",
      role: "Project Lead",
      architect: "Malik Architecture, Mumbai",
      year: "2024",
      category: "Architecture",
      details:
        "An architectural exploration using massive local granite blocks and concrete canopies looking out onto a landscape pool.",
      images: {
        hero: "/projects/03. Residence at Hospet_ARCHITECTURE/01. Hero Image.jpg",
      },
    },
    {
      slug: "resort-at-kalimpong",
      title: "Resort at Kalimpong",
      location: "West Bengal, India",
      role: "Project Lead",
      architect: "Malik Architecture, Mumbai",
      year: "2025",
      category: "Architecture",
      details:
        "A hillside retreat built on steep topography featuring cantilevered steel volumes and sustainable wood cladding.",
      images: {
        hero: "/projects/04. Resort at Kalimpong_ARCHITECTURE/01. Hero Image.png",
      },
    },
  ],
  interiors: [
    {
      slug: "courtyard-house",
      title: "Courtyard House",
      location: "Hyderabad, India",
      status: "Built",
      scope: "Interior Design",
      role: "Interior Design",
      architect: "Collective Project, Bangalore",
      year: "2023",
      category: "Interiors",
      details:
        "A sequence of thresholds, crafted surfaces and filtered light — where materiality shapes atmosphere and movement.",
      blockquote:
        "Atmosphere emerges through shadow, texture and ritual movement.",
      images: {
        hero: "/projects/05. Courtyard House_INTERIOR/01_Hero image.jpg",
        plan: "/projects/05. Courtyard House_INTERIOR/02_Drawing.png",
        views: [
          "/projects/05. Courtyard House_INTERIOR/03_View 01.png",
          "/projects/05. Courtyard House_INTERIOR/03_View 02.png",
          "/projects/05. Courtyard House_INTERIOR/03_View 03.png",
        ],
        moments: [
          {
            src: "/projects/05. Courtyard House_INTERIOR/05_Moments 01a.jpg",
            caption: "Carved stone",
          },
          {
            src: "/projects/05. Courtyard House_INTERIOR/05_Moments 01b.jpg",
            caption: "Glass relief",
          },
          {
            src: "/projects/05. Courtyard House_INTERIOR/05_Moments 02.jpg",
            caption: "Timber craft",
          },
          {
            src: "/projects/05. Courtyard House_INTERIOR/05_Moments 03.png",
            caption: "Water reflections",
          },
        ],
      },
    },
    {
      slug: "smile-mantra-dental-clinic",
      title: "Smile Mantra Dental Clinic",
      location: "Surat, India",
      role: "Project Architect",
      architect: "Studio Naqshbandi",
      year: "2024",
      category: "Interiors",
      details:
        "A modern dental wellness space centered around a custom concrete reception counter, glass block wall elements, and soft warm textures.",
      images: {
        hero: "/projects/06. Smile Mantra DentaL Clinic_INTERIOR/01. Hero Image.jpeg",
      },
    },
  ],
};

// Flat list for direct slug lookups
export const flatProjects = [
  ...projectsData.architecture,
  ...projectsData.interiors,
];
