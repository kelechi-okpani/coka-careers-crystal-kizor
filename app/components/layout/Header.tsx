'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Ecosystem', href: '#ecosystem' },
        { name: 'Projects', href: '#projects' },
        { name: 'Studio COKA', href: '#studio' },
        { name: 'Speaking', href: '#speaking' },
        { name: 'Research', href: '#research' },
    ];

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-500 ease-out
                ${isScrolled
                ? 'px-4 md:px-8 lg:px-12 pt-4'
                : 'px-0 pt-0'
            }
            `}
        >
            <div
                className={`
                    mx-auto transition-all duration-500
                    ${isScrolled
                    ? `
                            max-w-7xl
                            rounded-2xl
                            border border-white/50
                            bg-[#F7F4EC]/75
                            backdrop-blur-2xl
                            shadow-[0_12px_40px_rgba(83,67,47,0.10)]
                        `
                    : 'max-w-7xl bg-transparent'
                }
                `}
            >
                <div
                    className={`
                        relative flex items-center justify-between
                        px-6 md:px-8
                        transition-all duration-500
                        ${isScrolled ? 'py-3.5' : 'py-6 md:py-7'}
                    `}
                >
                    {/* Subtle glass highlight */}
                    {isScrolled && (
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />
                    )}

                    {/* Brand */}
                    <Link
                        href="/"
                        className="group relative z-10 flex items-center gap-3"
                    >
                        <span
                            className="
                                flex h-8 w-8 items-center justify-center
                                rounded-full
                                border border-[#8C7A62]/30
                                bg-[#E7DED0]/50
                                text-[10px]
                                font-serif
                                text-[#5D5042]
                                transition-all duration-300
                                group-hover:bg-[#DCCFBD]
                            "
                        >
                            CK
                        </span>

                        <span
                            className="
                                font-serif
                                text-sm md:text-base
                                tracking-[0.18em]
                                font-medium
                                text-[#443A31]
                                transition-colors
                                group-hover:text-[#8C7152]
                            "
                        >
                            CRYSTAL KIZOR
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="
                                    group relative
                                    py-2
                                    text-[10px]
                                    xl:text-[11px]
                                    uppercase
                                    tracking-[0.16em]
                                    font-medium
                                    text-[#71675D]
                                    transition-colors
                                    duration-300
                                    hover:text-[#443A31]
                                "
                            >
                                {link.name}

                                <span
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        h-px
                                        w-0
                                        bg-[#A68B68]
                                        transition-all
                                        duration-300
                                        group-hover:w-full
                                    "
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="#contact"
                            className="
                                group
                                flex items-center gap-2
                                rounded-full
                                border border-[#8C7A62]/25
                                bg-white/45
                                px-5 py-2.5
                                text-[10px]
                                uppercase
                                tracking-[0.16em]
                                font-medium
                                text-[#4D4339]
                                backdrop-blur-md
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-[#8C7A62]/40
                                hover:bg-white/70
                                hover:shadow-md
                            "
                        >
                            <span>Let's Connect</span>

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.5}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="
                            lg:hidden
                            relative z-10
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            border border-[#8C7A62]/25
                            bg-white/40
                            text-[#51473D]
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:bg-white/70
                        "
                        aria-label={
                            mobileMenuOpen
                                ? 'Close navigation menu'
                                : 'Open navigation menu'
                        }
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <X size={19} strokeWidth={1.5} />
                        ) : (
                            <Menu size={19} strokeWidth={1.5} />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`
                        lg:hidden
                        overflow-hidden
                        transition-all
                        duration-500
                        ease-out
                        ${mobileMenuOpen
                        ? 'max-h-[520px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }
                    `}
                >
                    <div className="border-t border-[#8C7A62]/15 px-6 pb-7 pt-5">
                        <nav className="flex flex-col">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="
                                        flex items-center justify-between
                                        border-b border-[#8C7A62]/10
                                        py-4
                                        text-xs
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#655B51]
                                        transition-colors
                                        hover:text-[#9A7B56]
                                    "
                                >
                                    <span>{link.name}</span>

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.5}
                                        className="text-[#A68B68]"
                                    />
                                </Link>
                            ))}

                            {/* Mobile CTA */}
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="
                                    mt-6
                                    flex items-center justify-between
                                    rounded-full
                                    border border-[#8C7A62]/25
                                    bg-[#E7DED0]/70
                                    px-5 py-3.5
                                    text-[10px]
                                    uppercase
                                    tracking-[0.16em]
                                    font-medium
                                    text-[#4D4339]
                                    backdrop-blur-md
                                    transition-all
                                    hover:bg-[#DDD0BE]
                                "
                            >
                                <span>Let's Connect</span>

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.5}
                                />
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}