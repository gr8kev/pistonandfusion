import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavScrollExample from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam",
  weight: ["400", "500", "600", "700"], // include weights you’ll use
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piston and Fusion",
  description:
    "dedicated to empowering individuals with cutting-edge skills and knowledge that drive success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavScrollExample />
      <body className={`${beVietnam.variable} antialiased`}>{children}</body>
      <Footer />
    </html>
  );
}
