import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import DynamicTitle from "./components/DynamicTitle";

export const metadata: Metadata = {
  title: "maisyland",
  description: "aura evangelist ( ᵘ ᵕ ᵘ ⁎)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <DynamicTitle />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
