import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import data from "../data/data.json";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
});

export const metadata = data.metadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* DNS prefetch for external image CDN */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        {/* Preconnect to Google Fonts origin */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect to Unsplash for hero image */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        {/* Theme color for browser chrome */}
        <meta name="theme-color" content="#031b31" />
        {/* Mobile viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}





