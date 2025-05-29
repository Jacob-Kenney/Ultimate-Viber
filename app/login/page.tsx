"use client";

import { SignIn } from "@/components/sign-in";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export default function Page() {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <SignIn />
                </main>
            </div>
        </ThemeProvider>
    )
}