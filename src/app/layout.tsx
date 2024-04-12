import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/navbar/HeaderNav";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import MainFooter from "@/components/footer/MainFooter";
import { TherapiesProvider } from "@/providers/TherapiesProvider";
import { TypesProvider } from "@/providers/TypesProvider";
import { BlogsProvider } from "@/providers/BlogProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metaduzey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-secondary">
      <body className={cn(inter.className)}>
        <TherapiesProvider>
          <TypesProvider>
            <BlogsProvider>
              <HeaderNav />
              <Navbar />
              <main>{children}</main>
            </BlogsProvider>
          </TypesProvider>
        </TherapiesProvider>
        <MainFooter />
      </body>
    </html>
  );
}
