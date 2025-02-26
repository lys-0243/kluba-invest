import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Kluba - Investir, devenir grand",
  description: "Trouvez des opportunités d’investissement et les meilleurs conseils pour entreprendre ou accroître votre business.",
  applicationName: "Kluba",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <html lang="en">
        <body className={""}>{children}</body>
      </html>
  );
}
