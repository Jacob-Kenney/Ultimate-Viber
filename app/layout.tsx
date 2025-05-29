import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "The Ultimate Viber - Learn to Build with Language",
  description:
    "Master natural language programming and learn to collaborate with AI to create software. The future of coding is conversational.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                {children}
              </main>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
