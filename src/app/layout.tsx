import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./redux/providers";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Add Friends App",
  description: "Add Friends App by Fabrizio Ossola",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="bg-second">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
