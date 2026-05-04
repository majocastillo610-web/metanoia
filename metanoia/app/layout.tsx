import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metanoia — Agencia Digital",
  description:
    "Transformamos tu presencia digital con estrategia, contenido y pauta. Auditoría gratuita, consultoría digital, packs de contenido y pauta en Meta, Google y TikTok.",
  keywords:
    "agencia digital, marketing digital, pauta digital, meta ads, google ads, tiktok ads, contenido digital, consultoría digital",
  openGraph: {
    title: "Metanoia — Agencia Digital",
    description: "Transformamos tu presencia digital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
