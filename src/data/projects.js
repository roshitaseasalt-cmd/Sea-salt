export const projectsData = {
  architecture: [
    {
      slug: "sri-aurobindo-integral-life-center",
      title: "Sri Aurobindo Integral Life Center",
      location: "Surat, India",
      role: "Project Architect",
      architect: "Studio Naqshbandi, Auroville",
      image: "/projects/01. Sri Aurobindo Life Center_ARCHITECTURE/01. Hero Image.jpg",
      year: "2024",
      category: "Architecture",
      details: "A spiritual learning center and sanctuary designed around natural lighting, materiality, and meditative circulation patterns."
    },
    {
      slug: "house-of-courts",
      title: "House of Courts",
      location: "Hyderabad, India",
      role: "Project Architect",
      architect: "Stapati, Bangalore",
      image: "/projects/02. House of Courts_ARCHITECTURE/01. Hero Image.png",
      year: "2025",
      category: "Architecture",
      details: "A premium private residence constructed using raw brick lattices and central courtyard layout systems to facilitate natural ventilation."
    },
    {
      slug: "residence-at-hospet",
      title: "Residence at Hospet",
      location: "Karnataka, India",
      role: "Project Lead",
      architect: "Malik Architecture, Mumbai",
      image: "/projects/03. Residence at Hospet_ARCHITECTURE/01. Hero Image.jpg",
      year: "2024",
      category: "Architecture",
      details: "An architectural exploration using massive local granite blocks and concrete canopies looking out onto a landscape pool."
    },
    {
      slug: "resort-at-kalimpong",
      title: "Resort at Kalimpong",
      location: "West Bengal, India",
      role: "Project Lead",
      architect: "Malik Architecture, Mumbai",
      image: "/projects/04. Resort at Kalimpong_ARCHITECTURE/01. Hero Image.png",
      year: "2025",
      category: "Architecture",
      details: "A hillside retreat built on steep topography featuring cantilevered steel volumes and sustainable wood cladding."
    }
  ],
  interiors: [
    {
      slug: "courtyard-house",
      title: "Courtyard House",
      location: "Hyderabad, India",
      role: "Project Architect",
      architect: "Collective Project, Bangalore",
      image: "/projects/05. Courtyard House_INTERIOR/01_Hero image.jpg",
      year: "2023",
      category: "Interiors",
      details: "An interior redesign focused on slate tiles, warm wood lattices, and arched concrete entries that frame transition zones."
    },
    {
      slug: "smile-mantra-dental-clinic",
      title: "Smile Mantra Dental Clinic",
      location: "Surat, India",
      role: "Project Architect",
      architect: "Studio Naqshbandi",
      image: "/projects/06. Smile Mantra DentaL Clinic_INTERIOR/01. Hero Image.jpeg",
      year: "2024",
      category: "Interiors",
      details: "A modern dental wellness space centered around a custom concrete reception counter, glass block wall elements, and soft warm textures."
    }
  ]
};

// Flat list for direct slug lookups
export const flatProjects = [
  ...projectsData.architecture,
  ...projectsData.interiors
];
