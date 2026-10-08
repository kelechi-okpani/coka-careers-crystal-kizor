'use client';

import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function Footer() {
    const ecosystemLinks = [
        { name: 'Studio COKA', href: '#studio' },
        { name: 'ELEvated Design', href: '#ecosystem' },
        { name: 'The Effective Architect', href: '#ecosystem' },
        { name: 'AKO Alliance', href: '#ecosystem' },
        { name: 'Alive and Free', href: '#ecosystem' },
    ];

    const connectLinks = [
        { name: 'Speaking Bookings', href: '#speaking' },
        { name: 'Project Inquiries', href: '#contact' },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            external: true,
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com',
            external: true,
        },
    ];

    return (
        <footer
            className="
                relative overflow-hidden
                bg-[#E6E1D7]
                px-6
                pb-8
                pt-16
                sm:px-8
                lg:px-12
                lg:pt-20
            "
        >
            {/* ================= AMBIENT BACKGROUND ================= */}
            <div
                className="
                    pointer-events-none absolute
                    -left-40
                    top-20
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[#D5C3A6]/40
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -right-40
                    bottom-20
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#C5CEC2]/40
                    blur-[140px]
                "
            />

            {/* Architectural grid */}
            <div
                className="
                    pointer-events-none absolute inset-0
                    opacity-[0.09]
                    bg-[linear-gradient(to_right,#8F806B_1px,transparent_1px),linear-gradient(to_bottom,#8F806B_1px,transparent_1px)]
                    bg-[size:90px_90px]
                "
            />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* ================= TOP BRAND AREA ================= */}
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[2rem]
                        border border-white/70
                        bg-white/30
                        p-7
                        shadow-[0_20px_70px_rgba(70,55,38,0.08)]
                        backdrop-blur-2xl
                        sm:p-10
                        lg:p-12
                    "
                >
                    {/* Glass highlight */}
                    <div
                        className="
                            pointer-events-none absolute
                            inset-x-0 top-0
                            h-px
                            bg-white/90
                        "
                    />

                    <div
                        className="
                            pointer-events-none absolute
                            -right-24
                            -top-24
                            h-72
                            w-72
                            rounded-full
                            bg-white/30
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            relative z-10
                            grid
                            grid-cols-1
                            gap-10
                            lg:grid-cols-12
                            lg:items-end
                        "
                    >
                        {/* Brand */}
                        <div className="lg:col-span-7">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#A88A61]" />

                                <span
                                    className="
                                        text-[9px]
                                        font-medium
                                        uppercase
                                        tracking-[0.24em]
                                        text-[#947952]
                                    "
                                >
                                    Personal Practice
                                </span>
                            </div>

                            <h2
                                className="
                                    font-serif
                                    text-4xl
                                    font-light
                                    tracking-tight
                                    text-[#39332D]
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >
                                CRYSTAL KIZOR
                            </h2>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    text-sm
                                    font-light
                                    leading-7
                                    text-[#6C635A]
                                    sm:text-base
                                "
                            >
                                Architect, designer, entrepreneur, speaker,
                                and researcher shaping sustainable
                                environments, ideas, and communities.
                            </p>
                        </div>

                        {/* Contact glass button */}
                        <div className="lg:col-span-5 lg:flex lg:justify-end">
                            <a
                                href="mailto:hello@crystalkizor.com"
                                className="
                                    group
                                    flex
                                    w-fit
                                    items-center
                                    gap-3
                                    rounded-full
                                    border border-white/80
                                    bg-[#4A4138]/90
                                    px-5
                                    py-3
                                    text-white
                                    shadow-[0_15px_40px_rgba(60,47,34,0.14)]
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-[#3F3730]
                                "
                            >
                                <span
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-full
                                        border border-white/15
                                        bg-white/10
                                    "
                                >
                                    <Mail
                                        size={14}
                                        strokeWidth={1.5}
                                    />
                                </span>

                                <span
                                    className="
                                        text-xs
                                        tracking-[0.06em]
                                    "
                                >
                                    hello@crystalkizor.com
                                </span>

                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={1.4}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:-translate-y-0.5
                                        group-hover:translate-x-0.5
                                    "
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ================= NAVIGATION ================= */}
                <div
                    className="
                        mt-5
                        grid
                        grid-cols-1
                        gap-5
                        md:grid-cols-2
                    "
                >
                    {/* Ecosystem */}
                    <div
                        className="
                            rounded-[1.75rem]
                            border border-white/70
                            bg-white/30
                            p-7
                            shadow-[0_15px_50px_rgba(70,55,38,0.05)]
                            backdrop-blur-2xl
                            sm:p-8
                        "
                    >
                        <div className="mb-7 flex items-center justify-between">
                            <h3
                                className="
                                    text-[9px]
                                    font-medium
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#927A5A]
                                "
                            >
                                Ecosystem
                            </h3>

                            <span
                                className="
                                    font-serif
                                    text-sm
                                    text-[#A39380]
                                "
                            >
                                01
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                            {ecosystemLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-xl
                                        border
                                        border-transparent
                                        px-3
                                        py-3
                                        text-sm
                                        font-light
                                        text-[#5F564D]
                                        transition-all
                                        duration-300
                                        hover:border-white/70
                                        hover:bg-white/40
                                        hover:text-[#3F3730]
                                    "
                                >
                                    <span>{link.name}</span>

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.3}
                                        className="
                                            opacity-0
                                            transition-all
                                            duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                            group-hover:opacity-100
                                        "
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div
                        className="
                            rounded-[1.75rem]
                            border border-white/70
                            bg-white/30
                            p-7
                            shadow-[0_15px_50px_rgba(70,55,38,0.05)]
                            backdrop-blur-2xl
                            sm:p-8
                        "
                    >
                        <div className="mb-7 flex items-center justify-between">
                            <h3
                                className="
                                    text-[9px]
                                    font-medium
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#927A5A]
                                "
                            >
                                Connect
                            </h3>

                            <span
                                className="
                                    font-serif
                                    text-sm
                                    text-[#A39380]
                                "
                            >
                                02
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                            {connectLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    {...(link.external
                                        ? {
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                        }
                                        : {})}
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-xl
                                        border
                                        border-transparent
                                        px-3
                                        py-3
                                        text-sm
                                        font-light
                                        text-[#5F564D]
                                        transition-all
                                        duration-300
                                        hover:border-white/70
                                        hover:bg-white/40
                                        hover:text-[#3F3730]
                                    "
                                >
                                    <span>{link.name}</span>

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.3}
                                        className="
                                            opacity-0
                                            transition-all
                                            duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                            group-hover:opacity-100
                                        "
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= LARGE STATEMENT ================= */}
                <div className="py-16 sm:py-20">
                    <div className="max-w-5xl">
                        <p
                            className="
                                font-serif
                                text-3xl
                                font-light
                                leading-[1.1]
                                tracking-tight
                                text-[#403830]
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Designing with intention.
                            <br />
                            <span className="italic text-[#947956]">
                                Building for impact.
                            </span>
                        </p>
                    </div>
                </div>

                {/* ================= BOTTOM BAR ================= */}
                <div
                    className="
                        border-t
                        border-[#968671]/20
                        pt-6
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            text-[9px]
                            uppercase
                            tracking-[0.16em]
                            text-[#958777]
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <p>
                            © {new Date().getFullYear()} Crystal Kizor
                        </p>

                        <p>
                            Architecture • Design • Research • Impact
                        </p>

                        <a
                            href="#"
                            className="
                                transition-colors
                                hover:text-[#65584B]
                            "
                        >
                            Back to top ↑
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}