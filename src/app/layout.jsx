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
  title: "Sea Salt Studio | Architecture, Interiors & Landscapes | Ernakulam & Bangalore",
  description: "Creating architecture, interiors and landscapes that are rooted in atmosphere, material sensitivity and lived experience. Serving Ernakulam, Kochi, and Bangalore regions.",
  keywords: ["Architecture", "Interiors", "Landscape", "Ernakulam", "Kochi", "Bangalore", "Bengaluru", "Sea Salt Architecture", "Sea Salt Interiors", "Sea Salt Landscapes", "Architects in Ernakulam", "Architects in Bangalore"],
};

export default function RootLayout({ children }) {
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
      </body>
    </html>
  );
}
