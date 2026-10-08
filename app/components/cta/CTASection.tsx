import React from 'react';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';

export default function CTASection() {
    return (
        <section
            id="contact"
            className="
                relative overflow-hidden
                bg-[#EAE5DA]
                px-6 py-28
                sm:px-8
                lg:px-12 lg:py-36
            "
        >
            {/* ================= AMBIENT LIGHT ================= */}
            <div
                className="
                    pointer-events-none absolute
                    -left-40 top-1/4
                    h-[500px] w-[500px]
                    rounded-full
                    bg-[#D8C7AD]/45
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -right-40 bottom-0
                    h-[550px] w-[550px]
                    rounded-full
                    bg-[#C4CFC1]/45
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    left-1/2 top-1/2
                    h-[350px] w-[350px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#EFE3CE]/50
                    blur-[110px]
                "
            />

            {/* Architectural grid */}
            <div
                className="
                    pointer-events-none absolute inset-0
                    opacity-[0.1]
                    bg-[linear-gradient(to_right,#8F806B_1px,transparent_1px),linear-gradient(to_bottom,#8F806B_1px,transparent_1px)]
                    bg-[size:90px_90px]
                "
            />

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* ================= GLASS PANEL ================= */}
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[2rem]
                        border border-white/70
                        bg-white/35
                        px-6 py-14
                        shadow-[0_30px_100px_rgba(70,55,38,0.12)]
                        backdrop-blur-2xl
                        sm:px-12
                        sm:py-20
                        lg:px-20
                        lg:py-24
                    "
                >
                    {/* Glass highlights */}
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
                            bg-white/35
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            pointer-events-none absolute
                            -bottom-32
                            -left-24
                            h-80
                            w-80
                            rounded-full
                            bg-[#D8C6A9]/20
                            blur-3xl
                        "
                    />

                    {/* ================= CONTENT ================= */}
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-[#A88A61]" />

                            <span
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.24em]
                                    text-[#967750]
                                "
                            >
                                Start a Conversation
                            </span>

                            <span className="h-px w-10 bg-[#A88A61]" />
                        </div>

                        {/* Decorative icon */}
                        <div
                            className="
                                mx-auto mb-7
                                flex h-14 w-14
                                items-center justify-center
                                rounded-full
                                border border-white/80
                                bg-white/45
                                text-[#977A57]
                                shadow-[0_10px_30px_rgba(70,55,38,0.08)]
                                backdrop-blur-xl
                            "
                        >
                            <Sparkles
                                size={22}
                                strokeWidth={1.2}
                            />
                        </div>

                        {/* Heading */}
                        <h2
                            className="
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
                            Let’s build something{' '}
                            <span className="italic text-[#907552]">
                                extraordinary.
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className="
                                mx-auto
                                mt-7
                                max-w-2xl
                                text-sm
                                font-light
                                leading-7
                                text-[#6D645B]
                                md:text-base
                                md:leading-8
                            "
                        >
                            Whether you are looking to commission an
                            architectural project with Studio COKA, book a
                            speaking engagement, or explore a meaningful
                            collaboration, I would love to hear from you.
                        </p>

                        {/* ================= CONTACT CARD ================= */}
                        <div className="mt-10">
                            <a
                                href="mailto:hello@crystalkizor.com"
                                className="
                                    group
                                    mx-auto
                                    flex
                                    w-fit
                                    items-center
                                    gap-4
                                    rounded-full
                                    border border-white/80
                                    bg-[#4A4138]/90
                                    px-6 py-3
                                    text-white
                                    shadow-[0_15px_40px_rgba(60,47,34,0.15)]
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-[#40372F]
                                    hover:shadow-[0_20px_50px_rgba(60,47,34,0.20)]
                                    sm:px-7
                                    sm:py-3.5
                                "
                            >
                                {/* Mail icon */}
                                <span
                                    className="
                                        flex h-9 w-9
                                        items-center justify-center
                                        rounded-full
                                        border border-white/15
                                        bg-white/10
                                    "
                                >
                                    <Mail
                                        size={15}
                                        strokeWidth={1.5}
                                    />
                                </span>

                                <span
                                    className="
                                        text-xs
                                        tracking-[0.08em]
                                        sm:text-sm
                                    "
                                >
                                    hello@crystalkizor.com
                                </span>

                                <ArrowUpRight
                                    size={17}
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

                        {/* ================= CONTACT TYPES ================= */}
                        <div
                            className="
                                mx-auto
                                mt-12
                                grid
                                max-w-2xl
                                grid-cols-1
                                gap-3
                                sm:grid-cols-3
                            "
                        >
                            <div
                                className="
                                    rounded-xl
                                    border border-white/60
                                    bg-white/30
                                    px-4 py-4
                                    backdrop-blur-xl
                                "
                            >
                                <p
                                    className="
                                        text-[9px]
                                        uppercase
                                        tracking-[0.18em]
                                        text-[#9A8874]
                                    "
                                >
                                    Architecture
                                </p>

                                <p
                                    className="
                                        mt-1
                                        font-serif
                                        text-sm
                                        text-[#51463C]
                                    "
                                >
                                    Studio COKA
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    border border-white/60
                                    bg-white/30
                                    px-4 py-4
                                    backdrop-blur-xl
                                "
                            >
                                <p
                                    className="
                                        text-[9px]
                                        uppercase
                                        tracking-[0.18em]
                                        text-[#9A8874]
                                    "
                                >
                                    Speaking
                                </p>

                                <p
                                    className="
                                        mt-1
                                        font-serif
                                        text-sm
                                        text-[#51463C]
                                    "
                                >
                                    Keynotes & Talks
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    border border-white/60
                                    bg-white/30
                                    px-4 py-4
                                    backdrop-blur-xl
                                "
                            >
                                <p
                                    className="
                                        text-[9px]
                                        uppercase
                                        tracking-[0.18em]
                                        text-[#9A8874]
                                    "
                                >
                                    Collaboration
                                </p>

                                <p
                                    className="
                                        mt-1
                                        font-serif
                                        text-sm
                                        text-[#51463C]
                                    "
                                >
                                    Partnerships
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= FOOTER NOTE ================= */}
                <div
                    className="
                        mt-8
                        flex flex-col
                        items-center
                        justify-between
                        gap-3
                        text-center
                        sm:flex-row
                        sm:text-left
                    "
                >
                    <p
                        className="
                            text-[9px]
                            uppercase
                            tracking-[0.18em]
                            text-[#958777]
                        "
                    >
                        Architecture • Design • Research • Impact
                    </p>

                    <p
                        className="
                            font-serif
                            text-sm
                            italic
                            text-[#75695E]
                        "
                    >
                        Building with purpose.
                    </p>
                </div>
            </div>
        </section>
    );
}