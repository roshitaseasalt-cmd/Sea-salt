export const metadata = {
  title: "Philosophy | Sea Salt Studio",
  description: "Read about the philosophy behind Sea Salt Studio. Architecture, for us, begins with careful observation, shaped by material, memory, and atmosphere.",
  keywords: ["Architecture Philosophy", "Roshita Sudhir", "Architects in Ernakulam", "Architects in Bangalore", "Interior Designers in Kochi", "Sea Salt Studio Philosophy"],
  alternates: {
    canonical: "/philosophy",
  },
  openGraph: {
    title: "Philosophy | Sea Salt Studio",
    description: "Read about the philosophy behind Sea Salt Studio. Architecture, for us, begins with careful observation.",
    url: "https://seasaltarchitecture.com/philosophy",
    images: [
      {
        url: "/philosophy/philosophy-video-poster.jpg", // We use a theoretical poster image if available, else fallback to logo
        width: 1200,
        height: 630,
        alt: "Sea Salt Studio Philosophy",
      },
    ],
  },
};

export default function PhilosophyLayout({ children }) {
  return children;
}
