import type { Metadata } from "next";
import "./globals.css";
import 'aos/dist/aos.css';

export const metadata: Metadata = {
  title: "Pedro Barros - Site Portfolio",
  description: "Site portfolio presenting Pedro Barros' skills, previous jobs and resumé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
