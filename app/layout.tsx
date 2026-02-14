
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Outlier Protocol | Zero to World Class",
  description: "A comprehensive curriculum to master systems thinking, software engineering, and high-agency execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-sans/style.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-mono/style.css" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
