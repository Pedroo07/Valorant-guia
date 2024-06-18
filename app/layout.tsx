import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Valorant Guia",
  description: "Me valorant beginners guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/e7322a6673613ab13604fadda3d20e56?family=VALORANT" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/561f38b1f4570de0fb8a39d691ab058c?family=Tungsten-Bold" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/7bb508fd7255ec38b6f29cb4cf8668cf?family=DINNextW1G-Regular" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
