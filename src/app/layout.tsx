import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "GMT20 Jombang | Internet Cepat dan Stabil",
  description:
    "Layanan internet GMT20 Jombang untuk rumah, bisnis, sekolah, dan kebutuhan profesional.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="id">

      <body className={inter.variable}>

        {children}

      </body>

    </html>

  );

}