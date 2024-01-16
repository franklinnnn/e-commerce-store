import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";

import ModalProvider from "@/prodivders/modal-provider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ToastProvider from "@/prodivders/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
