import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenToken - Equitable AI Access for Everyone",
  description: "Empowering the open-source community through donated compute credits from leading AI providers. Supporting research, development, and innovation.",
  keywords: ["OpenToken", "AI", "open source", "machine learning", "compute credits", "AI providers"],
  authors: [{ name: "OpenToken" }],
  openGraph: {
    title: "OpenToken - Equitable AI Access for Everyone",
    description: "Empowering the open-source community through donated compute credits from leading AI providers.",
    type: "website",
    url: "https://open-token.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenToken - Equitable AI Access for Everyone",
    description: "Empowering the open-source community through donated compute credits from leading AI providers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
