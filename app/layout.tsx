import type { Metadata } from "metadata";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cormorant",
});

export const metadata: Metadata = {
    title: "Crystal Kizor — Architect, Designer, Entrepreneur & Speaker",
    description: "Official personal brand and ecosystem platform for Crystal Kizor, uniting architecture, design, education, and impact.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-white text-neutral-900`}>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}