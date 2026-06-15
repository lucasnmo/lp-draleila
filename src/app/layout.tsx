import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Leila Fidelis | Harmonização Facial em Salvador",
  description:
    "Tratamentos de harmonização facial com naturalidade, segurança e atendimento personalizado em Salvador.",
  keywords: [
    "harmonização facial em Salvador",
    "Dra. Leila Fidelis",
    "botox em Salvador",
    "preenchimento labial em Salvador",
    "bioestimulador de colágeno",
  ],
  authors: [{ name: "Dra. Leila Fidelis" }],
  creator: "Dra. Leila Fidelis",
  icons: {
    icon: [{ url: "/favicon.ico?v=20260615", type: "image/x-icon" }],
    shortcut: "/favicon.ico?v=20260615",
  },
  openGraph: {
    title: "Dra. Leila Fidelis | Harmonização Facial em Salvador",
    description:
      "Tratamentos de harmonização facial com naturalidade, segurança e atendimento personalizado em Salvador.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Leila Fidelis | Harmonização Facial em Salvador",
    description:
      "Tratamentos de harmonização facial com naturalidade, segurança e atendimento personalizado em Salvador.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
