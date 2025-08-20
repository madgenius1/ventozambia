import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./ui-items/common/Navbar";
import Footer from "./ui-items/common/Footer";
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa6";


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
        <div className="p-2 rounded-full bg-[#099D15] fixed bottom-8 right-5 z-50">
          <Link
            href="https://wa.me/260968539232"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={40} color="#FFFFFF" />
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
