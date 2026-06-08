import "./globals.css";

export const metadata = {
  title: "First Choice Property Group",
  description: "Professional property management homepage built with Next.js, Tailwind CSS, and Framer Motion."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
