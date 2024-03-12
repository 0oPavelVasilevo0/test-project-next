import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import '../styles/main.css';
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <main className="main-container">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
