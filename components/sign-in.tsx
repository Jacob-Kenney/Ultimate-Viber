"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import Link from "next/link"
import Image from 'next/image'
import { useTheme } from "next-themes";

export function SignIn() {
    const { theme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [magicLinkSent, setMagicLinkSent] = useState(false);
    const [email, setEmail] = useState("")
    

    const resendAction = (formData: FormData) => {
        const email = formData.get("email") as string;
        signIn("resend", { email })
    }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="flex flex-col px-4 py-12 md:py-20">
            {/* Mobile Hero Section - Only visible on mobile */}
            <div className="md:hidden px-4 py-8">
                <div className={`transform transition-all duration-1000 delay-200  mt-20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <h1 className="text-2xl font-bold tracking-tight mb-2">
                        Join 
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                            {" "}
                            The Ultimate Viber{" "}
                        </span>
                    </h1>
                </div>
                <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <p className="text-md text-muted-foreground mb-8 mx-auto leading-relaxed"><i>"The Hottest New Programming Language is English"</i> -- Andrej Kaparthy</p>
                </div>
            </div>

            {/* Main content */}
            <section className="flex-1 container px-4 mx-auto md:py-24 flex flex-col md:flex-row md:max-2-6xl">
                <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1 mt-12 md:mt-0 md:pr-6">
                    {/* Desktop Hero Section - Only visible on desktop */}
                    <div className="hidden md:block">
                        <div className={`transform transition-all duration-1000 delay-200  mt-20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                            <h1 className="text-6xl font-bold tracking-tight mb-4">
                                Join 
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                                    {" "}
                                    The Ultimate Viber{" "}
                                </span>
                            </h1>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                            <p className="text-2xl text-muted-foreground mb-8 mx-auto leading-relaxed"><i>"The Hottest New Programming Language is English"</i> -- Andrej Kaparthy</p>
                        </div>
                    </div>
                    {/* Value proposition */}
                </div>

                {/* Sign-in form */}
                <div className="md:w-1/2 order-1 md:order-2 md:pl-6 md:border-l md:border-slate-700">
                    <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>

                    <div className="space-y-6">
                        <form action={resendAction} className="space-y-4">
                            <div className="space-y-2">
                            <Label htmlFor="email">
                                Email Address
                            </Label>
                            <Input
                                id="email-resend"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                required
                            />
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Send Magic Link
                            </Button>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                            <span className="hidden px-2">Or continue with</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Button
                            onClick={() => signIn("github", {redirectTo: "/"})}
                            variant="outline"
                            className="w-full flex items-center justify-center"
                            >
                            <Image
                                src={theme === "dark" ? "/ext/github-mark-white.svg" : "/ext/github-mark.svg"}
                                alt="GitHub"
                                width={24}
                                height={24}
                                className="mr-2" />
                                Sign in with GitHub
                            </Button>
                            <Button
                            onClick={() => signIn("google", {redirectTo: "/"})}
                            variant="outline"
                            className="w-full flex items-center justify-center"
                            >
                            <Image
                                src={theme === "dark" ? "/ext/web_light_rd_na.svg" : "/ext/web_dark_rd_na.svg"}
                                alt="Google"
                                width={24}
                                height={24}
                                className="mr-2" />
                                Sign in with Google
                            </Button>
                        </div>

                        <p className="mt-8 text-center text-sm text-gray-400">
                            By signing up, you agree to our{" "}
                            <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};