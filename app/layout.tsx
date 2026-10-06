import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KBIHU Nahdatul Jamaah | Perjalanan Umroh Amanah",
  description:
    "KBIHU Nahdatul Jamaah mendampingi perjalanan ibadah Umroh dengan pelayanan yang amanah, nyaman, dan terarah.",
  keywords: [
    "KBIHU Nahdatul Jamaah",
    "Umroh",
    "KBIHU",
    "Bimbingan Umroh",
    "Umroh Indonesia"
  ],
  authors: [{ name: "KBIHU Nahdatul Jamaah" }],
  openGraph: {
    title: "KBIHU Nahdatul Jamaah | Perjalanan Umroh Amanah",
    description:
      "Wujudkan impian beribadah ke Tanah Suci bersama KBIHU Nahdatul Jamaah.",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
