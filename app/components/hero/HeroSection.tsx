import React from 'react';
import Image from 'next/image';
import {
    ArrowDown,
    ArrowUpRight,
    Sparkles,
} from 'lucide-react';
import Button from '@/app/components/ui/Button';
import portrait from '@/public/img/earthy-Editorial-Portrait-by-African-Architecture.png';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F5F2EA] px-5 pb-10 pt-24 sm:px-8 lg:px-12">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            {/* Warm ambient glow */}
            <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#DCCCB8]/35 blur-[100px]" />

            <div className="pointer-events-none absolute right-[-120px] top-[15%] h-[520px] w-[520px] rounded-full bg-[#D8E0D3]/45 blur-[120px]" />

            <div className="pointer-events-none absolute bottom-[-180px] left-[35%] h-[500px] w-[500px] rounded-full bg-[#E5D8C8]/40 blur-[120px]" />

            {/* Architectural grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `
                        linear-gradient(#6D6256 1px, transparent 1px),
                        linear-gradient(90deg, #6D6256 1px, transparent 1px)
                    `,
                    backgroundSize: '70px 70px',
                }}
            />

            {/* =====================================================
                MAIN CONTAINER
            ====================================================== */}

            <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1450px] flex-col justify-center">

                {/* =================================================
                    GLASS NAV / TOP LABEL
                ================================================== */}

                <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between">

                    <div className="rounded-full border border-white/60 bg-white/35 px-4 py-2.5 shadow-[0_8px_30px_rgba(95,82,65,0.06)] backdrop-blur-xl">
                        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#776957]">
                            Crystal Kizor
                        </span>
                    </div>

                    <a
                        href="#contact"
                        className="
                            hidden
                            rounded-full
                            border
                            border-white/60
                            bg-white/35
                            px-5
                            py-2.5
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-[#776957]
                            shadow-[0_8px_30px_rgba(95,82,65,0.06)]
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:bg-white/60
                            sm:block
                        "
                    >
                        Let's work together
                    </a>
                </div>

                {/* =================================================
                    HERO GRID
                ================================================== */}

                <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">

                    {/* =================================================
                        LEFT — CONTENT
                    ================================================== */}

                    <div className="relative z-20 lg:col-span-7">

                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center gap-3">

                            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#CBBBA5]/70 bg-white/40 backdrop-blur-md">
                                <Sparkles
                                    size={12}
                                    strokeWidth={1.5}
                                    className="text-[#9C856C]"
                                />
                            </div>

                            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#9A8977]">
                                Architect · Designer · Creator
                            </span>

                        </div>

                        {/* Main heading */}
                        <h1 className="
                            max-w-4xl
                            font-serif
                            text-[3.25rem]
                            font-normal
                            leading-[0.98]
                            tracking-[-0.045em]
                            text-[#514A42]
                            sm:text-6xl
                            md:text-7xl
                            lg:text-[5.5rem]
                            xl:text-[6.3rem]
                        ">
                            Shaping spaces,
                            <br />

                            <span className="relative inline-block text-[#A18A70]">

                                ideas & futures.

                                {/* underline */}
                                <span className="absolute -bottom-2 left-1 h-px w-[75%] bg-[#C9B59D]/70" />

                            </span>
                        </h1>

                        {/* Description */}
                        <p className="
                            mt-8
                            max-w-[610px]
                            text-base
                            font-light
                            leading-8
                            text-[#766E65]
                            sm:text-lg
                        ">
                            Crystal Kizor works across architecture, design,
                            education, research, entrepreneurship and social
                            impact — connecting ideas, people and spaces to
                            create meaningful futures.
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                            <Button
                                variant="primary"
                                href="#ecosystem"
                            >
                                Explore the ecosystem
                                <ArrowUpRight
                                    size={15}
                                    className="ml-2"
                                />
                            </Button>

                            <Button
                                variant="outline"
                                href="#contact"
                            >
                                Start a conversation
                            </Button>

                        </div>

                        {/* =================================================
                            GLASS STATEMENT
                        ================================================== */}

                        <div className="
                            mt-12
                            max-w-[560px]
                            rounded-2xl
                            border
                            border-white/70
                            bg-white/35
                            p-5
                            shadow-[0_20px_60px_rgba(91,76,60,0.07)]
                            backdrop-blur-2xl
                            sm:p-6
                        ">

                            <div className="flex items-start gap-4">

                                <div className="mt-1 h-8 w-[2px] rounded-full bg-[#B99D7E]" />

                                <div>
                                    <p className="text-sm leading-6 text-[#6F665D]">
                                        Architecture, culture, education and
                                        ideas — connected by a vision for
                                        better ways of living, building and
                                        becoming.
                                    </p>

                                    <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#A08F7D]">
                                        One vision · Multiple expressions
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* =================================================
                        RIGHT — IMAGE
                    ================================================== */}

                    <div className="relative z-10 lg:col-span-5">

                        {/* Outer glow */}
                        <div className="
                            absolute
                            -inset-6
                            rounded-[2rem]
                            bg-[#D8C8B4]/25
                            blur-3xl
                        " />

                        {/* Decorative circle */}
                        <div className="
                            absolute
                            -right-16
                            -top-16
                            h-44
                            w-44
                            rounded-full
                            border
                            border-white/50
                            bg-white/20
                            backdrop-blur-2xl
                        " />

                        {/* Image glass frame */}
                        <div className="
                            relative
                            mx-auto
                            w-full
                            max-w-[510px]
                            rounded-[2rem]
                            border
                            border-white/70
                            bg-white/30
                            p-3
                            shadow-[0_30px_90px_rgba(83,69,54,0.13)]
                            backdrop-blur-xl
                        ">

                            {/* Image */}
                            <div className="
                                relative
                                aspect-[4/5]
                                overflow-hidden
                                rounded-[1.5rem]
                                bg-[#DED3C5]
                            ">

                                <Image
                                    src={portrait}
                                    alt="Crystal Kizor"
                                    fill
                                    priority
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-1000
                                        hover:scale-[1.035]
                                    "
                                    sizes="(max-width: 1024px) 90vw, 40vw"
                                />

                                {/* Soft glass gradient */}
                                <div className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-[#4D4237]/25
                                    via-transparent
                                    to-white/10
                                " />

                            </div>

                            {/* =================================================
                                FLOATING GLASS IDENTITY CARD
                            ================================================== */}

                            <div className="
                                absolute
                                -bottom-6
                                -left-5
                                max-w-[245px]
                                rounded-2xl
                                border
                                border-white/70
                                bg-white/45
                                px-5
                                py-4
                                shadow-[0_20px_50px_rgba(76,63,49,0.12)]
                                backdrop-blur-2xl
                                sm:-left-8
                            ">

                                <p className="text-[9px] uppercase tracking-[0.22em] text-[#9A8976]">
                                    Building across
                                </p>

                                <p className="mt-2 font-serif text-lg text-[#5D5349]">
                                    Architecture · Design · Ideas
                                </p>

                            </div>

                            {/* =================================================
                                FLOATING NUMBER
                            ================================================== */}

                            <div className="
                                absolute
                                -right-5
                                top-1/3
                                hidden
                                rounded-full
                                border
                                border-white/70
                                bg-white/40
                                px-4
                                py-3
                                shadow-[0_15px_40px_rgba(76,63,49,0.1)]
                                backdrop-blur-2xl
                                sm:block
                            ">

                                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8D7D6B]">
                                    Multidisciplinary
                                </span>

                            </div>

                        </div>

                        {/* Caption */}
                        <div className="mt-7 flex items-center justify-between px-2">

                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#A19383]">
                                Architect · Researcher · Entrepreneur
                            </span>

                            <span className="h-px w-12 bg-[#CDBDA8]" />

                        </div>

                    </div>

                </div>

                {/* =================================================
                    BOTTOM GLASS NAV
                ================================================== */}

                <div className="
                    mt-20
                    hidden
                    items-center
                    justify-between
                    rounded-full
                    border
                    border-white/60
                    bg-white/25
                    px-5
                    py-3
                    shadow-[0_10px_40px_rgba(80,65,50,0.04)]
                    backdrop-blur-xl
                    md:flex
                ">

                    <div className="flex items-center gap-6">

                        <span className="text-[9px] uppercase tracking-[0.22em] text-[#A09282]">
                            Architecture
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#C5B29C]" />

                        <span className="text-[9px] uppercase tracking-[0.22em] text-[#A09282]">
                            Design
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#C5B29C]" />

                        <span className="text-[9px] uppercase tracking-[0.22em] text-[#A09282]">
                            Education
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#C5B29C]" />

                        <span className="text-[9px] uppercase tracking-[0.22em] text-[#A09282]">
                            Impact
                        </span>

                    </div>

                    <a
                        href="#ecosystem"
                        className="
                            group
                            flex
                            items-center
                            gap-3
                            text-[9px]
                            uppercase
                            tracking-[0.2em]
                            text-[#827261]
                        "
                    >
                        Discover more

                        <span className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#CDBDA9]
                            bg-white/30
                            transition-all
                            duration-300
                            group-hover:bg-white/70
                        ">
                            <ArrowDown size={12} />
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}