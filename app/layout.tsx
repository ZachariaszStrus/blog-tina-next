import { ReactNode } from "react";

import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body className="relative bg-background-dark text-fg-default">
        <div className="absolute h-full w-screen overflow-hidden">
          <img alt="background" src="/background.webp" className="w-full" />
        </div>
        {children}
      </body>
    </html>
  );
}
