import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./ui-items/common/Navbar";
import Footer from "./ui-items/common/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vento Zambia",
  description: "Industrial Equipment Supplier in Zambia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
