import type { Metadata } from "next";
import localFont from "next/font/local";
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal Escolar",
  description: "Primaria Carlos Hank González",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ChakraProvider>
          <header>
            <nav>
              {/* Aquí podrías colocar la barra de navegación */}
            </nav>
          </header>
          <main>
            {children} {/* Aquí se renderizarán las páginas */}
          </main>
          <footer>
            <p>© 2024 Portal Escolar</p>
          </footer>
        </ChakraProvider>
      </body>
    </html>
  );
}
