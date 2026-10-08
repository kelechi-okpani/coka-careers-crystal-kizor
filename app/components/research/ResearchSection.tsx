import React from 'react';
import { ArrowUpRight, BookOpen, PenLine } from 'lucide-react';

export default function ResearchSection() {
    const papers = [
        {
            title: 'Vernacular Materiality and Modern Thermal Comfort',
            category: 'Architectural Research',
            year: '2025',
            description:
                'An investigative study into integrating indigenous building materials with modern HVAC reduction strategies in West African climates.',
        },
        {
            title: 'The Economics of Practice for the Independent Architect',
            category: 'Professional Practice',
            year: '2024',
            description:
                'Examining sustainable business models, client acquisition, and digital leverage for contemporary architectural studios.',
        },
    ];

    return (
        <section
            id="research"
            className="
                relative overflow-hidden
                bg-[#F1EEE6]
                px-6 py-28
                sm:px-8
                lg:px-12 lg:py-36
            "
        >
            {/* Ambient background */}
            <div
                className="
                    pointer-events-none absolute
                    -left-40 top-20
                    h-[450px] w-[450px]
                    rounded-full
                    bg-[#DCCCB2]/40
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -right-40 bottom-0
                    h-[500px] w-[500px]
                    rounded-full
                    bg-[#C8D1C5]/40
                    blur-[140px]
                "
            />

            {/* Subtle architectural grid */}
            <div
                className="
                    pointer-events-none absolute inset-0
                    opacity-[0.1]
                    bg-[linear-gradient(to_right,#8F806B_1px,transparent_1px),linear-gradient(to_bottom,#8F806B_1px,transparent_1px)]
                    bg-[size:90px_90px]
                "
            />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div
                    className="
                        mb-16
                        grid grid-cols-1
                        gap-8
                        lg:grid-cols-12
                        lg:items-end
                    "
                >
                    <div className="lg:col-span-7">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#A78A62]" />

                            <span
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.24em]
                                    text-[#957951]
                                "
                            >
                                Investigation & Insights
                            </span>
                        </div>

                        <h2
                            className="
                                max-w-2xl
                                font-serif
                                text-5xl
                                font-light
                                leading-[0.95]
                                tracking-tight
                                text-[#3B342D]
                                sm:text-6xl
                            "
                        >
                            Research &{' '}
                            <span className="italic text-[#927756]">
                                writing.
                            </span>
                        </h2>
                    </div>

                    {/* Intro glass card */}
                    <div className="lg:col-span-5">
                        <div
                            className="
                                rounded-2xl
                                border border-white/70
                                bg-white/35
                                p-6
                                shadow-[0_15px_50px_rgba(75,61,44,0.06)]
                                backdrop-blur-2xl
                            "
                        >
                            <div className="flex gap-4">
                                <div
                                    className="
                                        flex h-11 w-11
                                        shrink-0
                                        items-center justify-center
                                        rounded-full
                                        border border-white/80
                                        bg-white/50
                                        text-[#907552]
                                        backdrop-blur-xl
                                    "
                                >
                                    <BookOpen
                                        size={18}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <p
                                    className="
                                        text-sm
                                        font-light
                                        leading-7
                                        text-[#6C635A]
                                    "
                                >
                                    A collection of ideas, investigations and
                                    observations exploring architecture,
                                    culture, creative practice and the future
                                    of design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= RESEARCH GRID ================= */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        lg:grid-cols-2
                    "
                >
                    {papers.map((paper, index) => (
                        <article
                            key={paper.title}
                            className="
                                group
                                relative
                                flex
                                min-h-[420px]
                                flex-col
                                justify-between
                                overflow-hidden
                                rounded-[2rem]
                                border border-white/70
                                bg-white/40
                                p-7
                                shadow-[0_15px_55px_rgba(75,61,44,0.06)]
                                backdrop-blur-2xl
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:bg-white/55
                                hover:shadow-[0_25px_70px_rgba(75,61,44,0.10)]
                                sm:p-9
                            "
                        >
                            {/* Glass reflection */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-24
                                    -top-24
                                    h-64
                                    w-64
                                    rounded-full
                                    bg-white/30
                                    blur-3xl
                                    transition-transform
                                    duration-700
                                    group-hover:scale-125
                                "
                            />

                            {/* Decorative number */}
                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    right-7
                                    top-4
                                    font-serif
                                    text-[110px]
                                    font-light
                                    leading-none
                                    text-[#8F7655]/[0.06]
                                "
                            >
                                0{index + 1}
                            </span>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-8 flex items-center justify-between gap-4">
                                    <span
                                        className="
                                            rounded-full
                                            border border-white/70
                                            bg-white/40
                                            px-3.5 py-1.5
                                            text-[9px]
                                            font-medium
                                            uppercase
                                            tracking-[0.16em]
                                            text-[#8F7655]
                                            backdrop-blur-xl
                                        "
                                    >
                                        {paper.category}
                                    </span>

                                    <span
                                        className="
                                            font-serif
                                            text-sm
                                            font-light
                                            text-[#9A8D7F]
                                        "
                                    >
                                        {paper.year}
                                    </span>
                                </div>

                                <div
                                    className="
                                        mb-6
                                        flex h-12 w-12
                                        items-center justify-center
                                        rounded-full
                                        border border-white/70
                                        bg-white/45
                                        text-[#8F7452]
                                        backdrop-blur-xl
                                    "
                                >
                                    <PenLine
                                        size={18}
                                        strokeWidth={1.3}
                                    />
                                </div>

                                <h3
                                    className="
                                        max-w-xl
                                        font-serif
                                        text-3xl
                                        font-light
                                        leading-[1.1]
                                        text-[#3E3730]
                                        transition-colors
                                        duration-300
                                        group-hover:text-[#896D4D]
                                        sm:text-4xl
                                    "
                                >
                                    {paper.title}
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        max-w-xl
                                        text-sm
                                        font-light
                                        leading-7
                                        text-[#70675E]
                                    "
                                >
                                    {paper.description}
                                </p>
                            </div>

                            {/* Bottom action */}
                            <div
                                className="
                                    relative z-10
                                    mt-10
                                    flex
                                    items-center
                                    justify-between
                                    border-t
                                    border-[#9A8872]/15
                                    pt-6
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        uppercase
                                        tracking-[0.18em]
                                        text-[#9A8876]
                                    "
                                >
                                    Publication {String(index + 1).padStart(2, '0')}
                                </span>

                                <a
                                    href="#"
                                    className="
                                        group/link
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-[0.12em]
                                        text-[#66584A]
                                    "
                                >
                                    <span className="relative">
                                        Read publication

                                        <span
                                            className="
                                                absolute
                                                -bottom-1
                                                left-0
                                                h-px
                                                w-0
                                                bg-[#8F7452]
                                                transition-all
                                                duration-300
                                                group-hover/link:w-full
                                            "
                                        />
                                    </span>

                                    <span
                                        className="
                                            flex h-8 w-8
                                            items-center justify-center
                                            rounded-full
                                            border border-white/70
                                            bg-white/40
                                            backdrop-blur-xl
                                            transition-transform
                                            duration-300
                                            group-hover/link:-translate-y-0.5
                                            group-hover/link:translate-x-0.5
                                        "
                                    >
                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.4}
                                        />
                                    </span>
                                </a>
                            </div>

                            {/* Bottom hover accent */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-[2px]
                                    w-0
                                    bg-[#A78A62]
                                    transition-all
                                    duration-500
                                    group-hover:w-24
                                "
                            />
                        </article>
                    ))}
                </div>

                {/* ================= BOTTOM STATEMENT ================= */}
                <div
                    className="
                        mt-12
                        flex
                        flex-col
                        gap-4
                        border-t
                        border-[#968671]/20
                        pt-7
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >
                    <p
                        className="
                            text-[9px]
                            uppercase
                            tracking-[0.18em]
                            text-[#968675]
                        "
                    >
                        Architecture • Practice • Culture • Ideas
                    </p>

                    <p
                        className="
                            font-serif
                            text-sm
                            italic
                            text-[#706257]
                        "
                    >
                        Research informs the work.
                    </p>
                </div>
            </div>
        </section>
    );
}