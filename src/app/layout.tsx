import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";

const font = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CaseCobra",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", font.className)}>
        <Navbar />

        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>
              {children}
            </Providers>
          </div>
          
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
