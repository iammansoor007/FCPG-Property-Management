import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "First Choice Property Group | Professional Property Management SC",
  description:
    "First Choice Property Group delivers expert HOA, residential, commercial, and financial property management services across South Carolina — Greenville, Columbia, Charleston & beyond.",
  keywords: [
    "property management South Carolina",
    "HOA management Greenville SC",
    "residential property management",
    "commercial property management",
    "First Choice Property Group",
  ],
  openGraph: {
    title: "First Choice Property Group",
    description:
      "Full-service property management for communities, investors, and developers across South Carolina.",
    type: "website",
    locale: "en_US",
    siteName: "First Choice Property Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Choice Property Group",
    description: "Professional property management across South Carolina.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}




