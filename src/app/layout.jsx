import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Sea Salt Studio | Architecture, Interiors & Landscapes",
  description: "Creating architecture, interiors and landscapes that are rooted in atmosphere, material sensitivity and lived experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col bg-[#f3efe6] text-[#1c1c1c] font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
