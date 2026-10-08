import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Leaf, Sun, Compass } from 'lucide-react';
import Button from '@/app/components/ui/Button';
import portrait from '@/public/img/architectural-Studio-Portrait.png';

export default function StudioSection() {
    return (
        <section
            id="studio"
            className="
                relative overflow-hidden
                bg-[#EAE5DA]
                px-6 py-28
                sm:px-8
                lg:px-12 lg:py-36
            "
        >
            {/* Ambient background */}
            <div
                className="
                    pointer-events-none absolute
                    -left-40 top-1/4
                    h-[450px] w-[450px]
                    rounded-full
                    bg-[#D4C4AA]/40
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -right-40 bottom-0
                    h-[500px] w-[500px]
                    rounded-full
                    bg-[#C4CEC0]/40
                    blur-[130px]
                "
            />

            {/* Architectural grid */}
            <div
                className="
                    pointer-events-none absolute inset-0
                    opacity-[0.12]
                    bg-[linear-gradient(to_right,#8F806B_1px,transparent_1px),linear-gradient(to_bottom,#8F806B_1px,transparent_1px)]
                    bg-[size:90px_90px]
                "
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-12
                        lg:grid-cols-12
                        lg:items-center
                        lg:gap-16
                    "
                >
                    {/* ================= LEFT CONTENT ================= */}
                    <div className="lg:col-span-6">
                        {/* Eyebrow */}
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#A78A62]" />

                            <span
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.24em]
                                    text-[#95764F]
                                "
                            >
                                Featured Practice
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="
                                max-w-xl
                                font-serif
                                text-5xl
                                font-light
                                leading-[0.95]
                                tracking-tight
                                text-[#39332D]
                                sm:text-6xl
                                lg:text-7xl
                            "
                        >
                            Studio{' '}
                            <span className="italic text-[#8C7355]">
                                COKA.
                            </span>
                        </h2>

                        {/* Intro */}
                        <p
                            className="
                                mt-7
                                max-w-xl
                                text-base
                                font-light
                                leading-8
                                text-[#655D54]
                                md:text-lg
                            "
                        >
                            Thoughtful, climate-responsive architecture and
                            interior design that brings people, materials and
                            place into meaningful conversation.
                        </p>

                        <p
                            className="
                                mt-4
                                max-w-xl
                                text-sm
                                font-light
                                leading-7
                                text-[#7A7168]
                            "
                        >
                            Studio COKA creates spaces that respond to their
                            natural environment while honouring local material
                            heritage and contemporary ways of living.
                        </p>

                        {/* ================= PRINCIPLES ================= */}
                        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {/* Card 1 */}
                            <div
                                className="
                                    rounded-2xl
                                    border border-white/70
                                    bg-white/35
                                    p-5
                                    shadow-[0_10px_35px_rgba(70,55,38,0.06)]
                                    backdrop-blur-2xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white/50
                                "
                            >
                                <div
                                    className="
                                        mb-5
                                        flex h-10 w-10
                                        items-center justify-center
                                        rounded-full
                                        border border-white/70
                                        bg-white/50
                                        text-[#8C7455]
                                        backdrop-blur-xl
                                    "
                                >
                                    <Leaf
                                        size={18}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <h3
                                    className="
                                        font-serif
                                        text-xl
                                        font-light
                                        text-[#443B33]
                                    "
                                >
                                    Sustainable
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        font-light
                                        leading-5
                                        text-[#756C63]
                                    "
                                >
                                    Passive thermal design and localized
                                    sourcing.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="
                                    rounded-2xl
                                    border border-white/70
                                    bg-white/35
                                    p-5
                                    shadow-[0_10px_35px_rgba(70,55,38,0.06)]
                                    backdrop-blur-2xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white/50
                                "
                            >
                                <div
                                    className="
                                        mb-5
                                        flex h-10 w-10
                                        items-center justify-center
                                        rounded-full
                                        border border-white/70
                                        bg-white/50
                                        text-[#8C7455]
                                        backdrop-blur-xl
                                    "
                                >
                                    <Sun
                                        size={18}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <h3
                                    className="
                                        font-serif
                                        text-xl
                                        font-light
                                        text-[#443B33]
                                    "
                                >
                                    Climate
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        font-light
                                        leading-5
                                        text-[#756C63]
                                    "
                                >
                                    Spaces designed around light, shade and
                                    natural airflow.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="
                                    rounded-2xl
                                    border border-white/70
                                    bg-white/35
                                    p-5
                                    shadow-[0_10px_35px_rgba(70,55,38,0.06)]
                                    backdrop-blur-2xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-white/50
                                "
                            >
                                <div
                                    className="
                                        mb-5
                                        flex h-10 w-10
                                        items-center justify-center
                                        rounded-full
                                        border border-white/70
                                        bg-white/50
                                        text-[#8C7455]
                                        backdrop-blur-xl
                                    "
                                >
                                    <Compass
                                        size={18}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <h3
                                    className="
                                        font-serif
                                        text-xl
                                        font-light
                                        text-[#443B33]
                                    "
                                >
                                    Contextual
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        font-light
                                        leading-5
                                        text-[#756C63]
                                    "
                                >
                                    Architecture rooted in regional identity.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <Button
                                variant="primary"
                                href="#contact"
                            >
                                Commission a Project
                            </Button>
                        </div>
                    </div>

                    {/* ================= IMAGE ================= */}
                    <div className="lg:col-span-6">
                        <div
                            className="
                                relative
                                mx-auto
                                max-w-xl
                                lg:max-w-none
                            "
                        >
                            {/* Offset decorative frame */}
                            <div
                                className="
                                    absolute
                                    -bottom-4
                                    -left-4
                                    h-full
                                    w-full
                                    rounded-[2rem]
                                    border
                                    border-[#A68A64]/25
                                "
                            />

                            {/* Image container */}
                            <div
                                className="
                                    relative
                                    h-[500px]
                                    overflow-hidden
                                    rounded-[2rem]
                                    border
                                    border-white/70
                                    bg-white/30
                                    p-2
                                    shadow-[0_25px_80px_rgba(64,51,37,0.15)]
                                    backdrop-blur-xl
                                    sm:h-[600px]
                                "
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                                    <Image
                                        src={portrait}
                                        alt="Studio COKA architectural project"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="
                                            object-cover
                                            transition-transform
                                            duration-1000
                                            ease-out
                                            hover:scale-[1.04]
                                        "
                                    />

                                    {/* Image overlay */}
                                    <div
                                        className="
                                            absolute inset-0
                                            bg-gradient-to-t
                                            from-[#2F2923]/50
                                            via-transparent
                                            to-white/5
                                        "
                                    />

                                    {/* Image label */}
                                    <div
                                        className="
                                            absolute
                                            left-6
                                            top-6
                                            rounded-full
                                            border border-white/30
                                            bg-white/15
                                            px-4 py-2
                                            text-[9px]
                                            uppercase
                                            tracking-[0.2em]
                                            text-white
                                            backdrop-blur-xl
                                        "
                                    >
                                        Studio COKA
                                    </div>

                                    {/* Bottom glass card */}
                                    <div
                                        className="
                                            absolute
                                            bottom-5
                                            left-5
                                            right-5
                                            rounded-2xl
                                            border border-white/25
                                            bg-[#3B342D]/30
                                            p-5
                                            backdrop-blur-xl
                                        "
                                    >
                                        <div className="flex items-end justify-between gap-4">
                                            <div>
                                                <p
                                                    className="
                                                        text-[9px]
                                                        uppercase
                                                        tracking-[0.18em]
                                                        text-white/60
                                                    "
                                                >
                                                    Design Philosophy
                                                </p>

                                                <p
                                                    className="
                                                        mt-2
                                                        max-w-sm
                                                        font-serif
                                                        text-xl
                                                        font-light
                                                        leading-tight
                                                        text-white
                                                    "
                                                >
                                                    Building with place,
                                                    climate and people in mind.
                                                </p>
                                            </div>

                                            <div
                                                className="
                                                    flex h-10 w-10
                                                    shrink-0
                                                    items-center justify-center
                                                    rounded-full
                                                    border border-white/30
                                                    bg-white/15
                                                    text-white
                                                    backdrop-blur-xl
                                                "
                                            >
                                                <ArrowUpRight
                                                    size={17}
                                                    strokeWidth={1.4}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating glass badge */}
                            <div
                                className="
                                    absolute
                                    -bottom-6
                                    -right-4
                                    z-20
                                    hidden
                                    rounded-2xl
                                    border border-white/70
                                    bg-white/60
                                    px-5 py-4
                                    shadow-[0_15px_45px_rgba(65,52,38,0.12)]
                                    backdrop-blur-2xl
                                    sm:block
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-[#A48A67]" />

                                    <div>
                                        <p
                                            className="
                                                text-[9px]
                                                uppercase
                                                tracking-[0.16em]
                                                text-[#968573]
                                            "
                                        >
                                            Practice
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                font-serif
                                                text-sm
                                                text-[#4A4037]
                                            "
                                        >
                                            Architecture + Interiors
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom statement */}
                <div
                    className="
                        mt-20
                        border-t
                        border-[#968671]/20
                        pt-8
                    "
                >
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <p
                            className="
                                max-w-2xl
                                font-serif
                                text-xl
                                font-light
                                leading-relaxed
                                text-[#51473E]
                                md:text-2xl
                            "
                        >
                            Architecture is not simply about creating
                            buildings. It is about creating better ways to
                            experience place.
                        </p>

                        <a
                            href="#projects"
                            className="
                                group
                                flex w-fit
                                items-center gap-3
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.18em]
                                text-[#80694D]
                            "
                        >
                            Explore the work

                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.5}
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
        </section>
    );
}