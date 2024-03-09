import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import '../../styles/main.css'
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Next",
  description: "Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
