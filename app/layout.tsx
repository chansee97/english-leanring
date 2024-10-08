import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/view-transition.css";
import { cn } from "@/utils";
import { Nav } from "@/components/Nav";

import {
  TooltipProvider,
} from "@/components/ui/tooltip"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={cn(
        inter.className,
        "flex flex-col min-h-screen"
      )}>
        <Nav />
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
