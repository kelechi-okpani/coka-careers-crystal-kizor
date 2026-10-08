import React from 'react';
import { initiatives } from '@/app/data/ecosystemData';
import {
    ArrowUpRight,
    Sparkles,
    Building2,
    BookOpen,
    Mic2,
    Users,
    Leaf,
    Home,
} from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
    Architecture: Building2,
    Sustainability: Leaf,
    'Natural Homes': Home,
    Research: BookOpen,
    Speaking: Mic2,
    Community: Users,
};

export default function EcosystemSection() {
    return (
        <section
            id="ecosystem"
            className="
                relative overflow-hidden
                bg-[#F3F0E8]
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
                    h-[500px] w-[500px]
                    rounded-full
                    bg-[#DCCEB8]/40
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -right-40 bottom-10
                    h-[550px] w-[550px]
                    rounded-full
                    bg-[#C7D0C1]/40
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    left-1/2 top-1/2
                    h-[300px] w-[300px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#E8DCC8]/30
                    blur-[100px]
                "
            />

            {/* Subtle architectural grid */}
            <div
                className="
                    pointer-events-none absolute inset-0
                    opacity-[0.12]
                    bg-[linear-gradient(to_right,#8F806B_1px,transparent_1px),linear-gradient(to_bottom,#8F806B_1px,transparent_1px)]
                    bg-[size:90px_90px]
                "
            />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div
                    className="
                        mb-16
                        grid gap-8
                        lg:grid-cols-[1.2fr_0.8fr]
                        lg:items-end
                    "
                >
                    <div>
                        {/* Eyebrow */}
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#A88A61]" />

                            <span
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.24em]
                                    text-[#9A7A52]
                                "
                            >
                                The Brand Ecosystem
                            </span>
                        </div>

                        <div className="flex items-end gap-4">
                            <h2
                                className="
                                    max-w-3xl
                                    font-serif
                                    text-4xl
                                    font-light
                                    leading-[1.05]
                                    tracking-tight
                                    text-[#39332D]
                                    sm:text-5xl
                                    lg:text-7xl
                                "
                            >
                                What Crystal
                                <br />

                                <span className="italic text-[#917655]">
                                    is building.
                                </span>
                            </h2>

                            <Sparkles
                                size={28}
                                strokeWidth={1}
                                className="
                                    mb-2
                                    hidden
                                    text-[#A98B62]
                                    sm:block
                                "
                            />
                        </div>
                    </div>

                    {/* Intro glass panel */}
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-2xl
                            border border-white/70
                            bg-white/40
                            p-6
                            shadow-[0_15px_50px_rgba(77,63,46,0.07)]
                            backdrop-blur-2xl
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

                        <div className="mb-4 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#A88A61]" />

                            <span
                                className="
                                    text-[9px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#9A8A78]
                                "
                            >
                                One vision. Many expressions.
                            </span>
                        </div>

                        <p
                            className="
                                text-sm
                                font-light
                                leading-7
                                text-[#665D54]
                                md:text-base
                            "
                        >
                            Multidisciplinary initiatives connected by
                            rigorous research, aesthetic clarity, and a
                            commitment to sustainable human impact.
                        </p>
                    </div>
                </div>

                {/* ================= ECOSYSTEM GRID ================= */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {initiatives.map((item, index) => {
                        const Icon =
                            categoryIcons[item.category] || Sparkles;

                        return (
                            <article
                                key={item.id}
                                className="
                                    group
                                    relative
                                    flex
                                    min-h-[390px]
                                    flex-col
                                    justify-between
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/70
                                    bg-white/35
                                    p-7
                                    shadow-[0_15px_50px_rgba(75,61,44,0.07)]
                                    backdrop-blur-2xl
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:bg-white/50
                                    hover:shadow-[0_25px_70px_rgba(75,61,44,0.13)]
                                "
                            >
                                {/* Card glass reflection */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-16
                                        -top-16
                                        h-40
                                        w-40
                                        rounded-full
                                        bg-white/30
                                        blur-3xl
                                        transition-transform
                                        duration-700
                                        group-hover:scale-150
                                    "
                                />

                                {/* Top row */}
                                <div className="relative z-10">
                                    <div className="mb-8 flex items-start justify-between">
                                        {/* Icon glass bubble */}
                                        <div
                                            className="
                                                flex h-12 w-12
                                                items-center justify-center
                                                rounded-full
                                                border border-white/80
                                                bg-white/55
                                                text-[#806A4D]
                                                shadow-[0_8px_25px_rgba(65,52,38,0.08)]
                                                backdrop-blur-xl
                                                transition-all
                                                duration-500
                                                group-hover:-translate-y-1
                                                group-hover:bg-white/75
                                            "
                                        >
                                            <Icon
                                                size={21}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        {/* Arrow */}
                                        <div
                                            className="
                                                flex h-10 w-10
                                                items-center justify-center
                                                rounded-full
                                                border border-white/70
                                                bg-white/40
                                                text-[#756452]
                                                opacity-0
                                                shadow-sm
                                                backdrop-blur-xl
                                                transition-all
                                                duration-500
                                                group-hover:translate-x-0
                                                group-hover:opacity-100
                                            "
                                        >
                                            <ArrowUpRight
                                                size={17}
                                                strokeWidth={1.5}
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover:translate-x-0.5
                                                    group-hover:-translate-y-0.5
                                                "
                                            />
                                        </div>
                                    </div>

                                    {/* Category */}
                                    <span
                                        className="
                                            text-[9px]
                                            font-medium
                                            uppercase
                                            tracking-[0.22em]
                                            text-[#9A7B54]
                                        "
                                    >
                                        {item.category}
                                    </span>

                                    {/* Name */}
                                    <h3
                                        className="
                                            mt-2
                                            font-serif
                                            text-2xl
                                            font-light
                                            leading-tight
                                            text-[#39332D]
                                            transition-colors
                                            duration-300
                                            group-hover:text-[#876C4D]
                                            md:text-3xl
                                        "
                                    >
                                        {item.name}
                                    </h3>

                                    {/* Tagline */}
                                    <p
                                        className="
                                            mt-3
                                            font-serif
                                            text-sm
                                            italic
                                            leading-6
                                            text-[#8B7356]
                                        "
                                    >
                                        {item.tagline}
                                    </p>

                                    {/* Description */}
                                    <p
                                        className="
                                            mt-4
                                            max-w-md
                                            text-sm
                                            font-light
                                            leading-6
                                            text-[#6E665E]
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom glass panel */}
                                <div
                                    className="
                                        relative z-10
                                        mt-8
                                        flex items-center
                                        justify-between
                                        gap-4
                                        rounded-xl
                                        border border-white/60
                                        bg-white/35
                                        px-4 py-3.5
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        group-hover:bg-white/55
                                    "
                                >
                                    <span
                                        className="
                                            text-[9px]
                                            font-medium
                                            uppercase
                                            tracking-[0.16em]
                                            text-[#75695D]
                                        "
                                    >
                                        {item.stats}
                                    </span>

                                    <a
                                        href={item.href}
                                        className="
                                            group/link
                                            flex
                                            items-center
                                            gap-2
                                            whitespace-nowrap
                                            text-[10px]
                                            font-medium
                                            uppercase
                                            tracking-[0.14em]
                                            text-[#55483B]
                                        "
                                    >
                                        Learn more

                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.5}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover/link:-translate-y-0.5
                                                group-hover/link:translate-x-0.5
                                            "
                                        />
                                    </a>
                                </div>

                                {/* Bottom accent */}
                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-7
                                        h-[2px]
                                        w-0
                                        bg-[#A88A61]
                                        transition-all
                                        duration-500
                                        group-hover:w-16
                                    "
                                />

                                {/* Card number */}
                                <span
                                    className="
                                        pointer-events-none
                                        absolute
                                        bottom-7
                                        right-7
                                        font-serif
                                        text-5xl
                                        font-light
                                        text-[#8B7964]/10
                                    "
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </article>
                        );
                    })}
                </div>

                {/* ================= BOTTOM STATEMENT ================= */}
                <div
                    className="
                        mt-16
                        flex flex-col
                        gap-6
                        border-t
                        border-[#9B8A76]/20
                        pt-8
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >
                    <div className="flex items-center gap-4">
                        <div
                            className="
                                flex h-10 w-10
                                items-center justify-center
                                rounded-full
                                border border-white/70
                                bg-white/40
                                text-[#967A57]
                                backdrop-blur-xl
                            "
                        >
                            <Sparkles
                                size={17}
                                strokeWidth={1.3}
                            />
                        </div>

                        <p
                            className="
                                max-w-xl
                                font-serif
                                text-lg
                                font-light
                                leading-relaxed
                                text-[#554A40]
                                md:text-xl
                            "
                        >
                            Different disciplines. One continuous pursuit:
                            creating meaningful impact through design.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="
                            group
                            flex w-fit
                            items-center gap-3
                            rounded-full
                            border border-[#917858]/25
                            bg-white/40
                            px-5 py-3
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.18em]
                            text-[#574A3D]
                            shadow-sm
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-white/70
                            hover:shadow-md
                        "
                    >
                        Start a conversation

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
        </section>
    );
}