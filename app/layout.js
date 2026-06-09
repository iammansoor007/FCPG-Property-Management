import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "First Choice Property Group",
  description: "Professional property management homepage built with Next.js, Tailwind CSS, and Framer Motion."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

