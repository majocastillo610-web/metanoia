import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metanoia. — Marketing con propósito",
  description:
    "Transformamos la presencia digital de tu negocio en un motor de crecimiento real y medible. Estrategia que conecta. Pauta que convierte.",
  keywords:
    "agencia digital paraguay, marketing digital, meta ads, google ads, tiktok ads, consultoría digital, contenido digital",
  openGraph: {
    title: "Metanoia. — Marketing con propósito",
    description: "Estrategia que conecta. Pauta que convierte.",
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
