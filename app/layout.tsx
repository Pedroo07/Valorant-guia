import type { Metadata } from "next";

import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
    <html lang="pt-br">
      <head>
        <link href="https://db.onlinewebfonts.com/c/e7322a6673613ab13604fadda3d20e56?family=VALORANT" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/561f38b1f4570de0fb8a39d691ab058c?family=Tungsten-Bold" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/b621d1ffb46493164fd62fb7a83ab0ff?family=Mark+W05+Medium" rel="stylesheet"></link>
        <link href="https://db.onlinewebfonts.com/c/7bb508fd7255ec38b6f29cb4cf8668cf?family=DINNextW1G-Regular" rel="stylesheet" />
        <link rel="shortcut icon" href="/ico.png" type="image/x-icon" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
