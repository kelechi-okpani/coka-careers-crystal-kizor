import React from 'react';
import {
    ArrowUpRight,
    Mic2,
    Quote,
    Sparkles,
} from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function SpeakingSection() {
    const topics = [
        {
            title: 'Climate-Responsive Architecture in African Urban Centers',
            description:
                'Exploring how architecture can respond intelligently to climate, culture, materials, and rapidly changing African cities.',
        },
        {
            title: 'The Multidisciplinary Creator: Blending Art, Design & Business',
            description:
                'A practical perspective on building across disciplines while maintaining a clear creative identity and purpose.',
        },
        {
            title: 'Faith, Identity, and Purpose in Professional Leadership',
            description:
                'A conversation about values, identity, leadership, and building meaningful work without losing personal conviction.',
        },
        {
            title: 'Elevating Standards: The Future of Architectural Education',
            description:
                'Reimagining architectural education, mentorship, technology, and the skills needed by the next generation.',
        },
    ];

    return (
        <section
            id="speaking"
            className="
                relative overflow-hidden
                bg-[#F3F0E8]
                px-6 py-28
                sm:px-8
                lg:px-12 lg:py-36
            "
        >
            {/* ================= AMBIENT BACKGROUND ================= */}
            <div
                className="
                    pointer-events-none absolute
                    -left-40 top-10
                    h-[450px] w-[450px]
                    rounded-full
                    bg-[#DCCDB5]/40
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -right-40 bottom-10
                    h-[500px] w-[500px]
                    rounded-full
                    bg-[#C7D1C3]/40
                    blur-[130px]
                "
            />

            {/* Architectural grid */}
            <div
                className="
                    pointer-events-none absolute inset-0
                    opacity-[0.11]
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
                        lg:grid-cols-[0.9fr_1.1fr]
                        lg:items-end
                    "
                >
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#A88A61]" />

                            <span
                                className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.24em]
                                    text-[#977951]
                                "
                            >
                                Thought Leadership
                            </span>
                        </div>

                        <h2
                            className="
                                max-w-xl
                                font-serif
                                text-5xl
                                font-light
                                leading-[0.95]
                                tracking-tight
                                text-[#3B342D]
                                sm:text-6xl
                                lg:text-7xl
                            "
                        >
                            Ideas worth{' '}
                            <span className="italic text-[#927756]">
                                sharing.
                            </span>
                        </h2>
                    </div>

                    {/* Intro Glass Panel */}
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-2xl
                            border border-white/70
                            bg-white/40
                            p-7
                            shadow-[0_15px_50px_rgba(75,61,44,0.07)]
                            backdrop-blur-2xl
                        "
                    >
                        <div
                            className="
                                pointer-events-none absolute
                                inset-x-0 top-0
                                h-px
                                bg-white/90
                            "
                        />

                        <div className="flex gap-5">
                            <div
                                className="
                                    flex h-12 w-12
                                    shrink-0
                                    items-center justify-center
                                    rounded-full
                                    border border-white/80
                                    bg-white/55
                                    text-[#8E7350]
                                    shadow-sm
                                    backdrop-blur-xl
                                "
                            >
                                <Mic2
                                    size={20}
                                    strokeWidth={1.4}
                                />
                            </div>

                            <div>
                                <p
                                    className="
                                        text-sm
                                        font-light
                                        leading-7
                                        text-[#665D54]
                                        md:text-base
                                    "
                                >
                                    Crystal speaks at conferences,
                                    universities, industry roundtables, and
                                    creative forums, bringing together
                                    architecture, sustainability, leadership,
                                    faith, and purposeful enterprise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= MAIN CONTENT ================= */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-8
                        lg:grid-cols-12
                        lg:gap-10
                    "
                >
                    {/* ================= LEFT FEATURE CARD ================= */}
                    <div className="lg:col-span-4">
                        <div
                            className="
                                group
                                relative
                                flex
                                min-h-[500px]
                                flex-col
                                justify-between
                                overflow-hidden
                                rounded-[2rem]
                                border border-white/70
                                bg-[#3E3730]/90
                                p-8
                                shadow-[0_25px_80px_rgba(60,47,34,0.15)]
                                backdrop-blur-2xl
                            "
                        >
                            {/* Ambient glow */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-20
                                    -top-20
                                    h-64
                                    w-64
                                    rounded-full
                                    bg-[#B79B72]/20
                                    blur-[80px]
                                "
                            />

                            {/* Large decorative quote */}
                            <Quote
                                size={100}
                                strokeWidth={0.5}
                                className="
                                    absolute
                                    right-2
                                    top-12
                                    text-white/[0.05]
                                "
                            />

                            <div className="relative z-10">
                                <div
                                    className="
                                        mb-8
                                        flex h-12 w-12
                                        items-center justify-center
                                        rounded-full
                                        border border-white/20
                                        bg-white/10
                                        text-[#D4B98E]
                                        backdrop-blur-xl
                                    "
                                >
                                    <Sparkles
                                        size={19}
                                        strokeWidth={1.3}
                                    />
                                </div>

                                <span
                                    className="
                                        text-[9px]
                                        uppercase
                                        tracking-[0.22em]
                                        text-white/45
                                    "
                                >
                                    The Conversation
                                </span>

                                <h3
                                    className="
                                        mt-4
                                        max-w-sm
                                        font-serif
                                        text-3xl
                                        font-light
                                        leading-tight
                                        text-white
                                        md:text-4xl
                                    "
                                >
                                    Designing better spaces,
                                    ideas & futures.
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        max-w-sm
                                        text-sm
                                        font-light
                                        leading-7
                                        text-white/60
                                    "
                                >
                                    Conversations that connect creative
                                    practice with culture, technology,
                                    sustainability and human purpose.
                                </p>
                            </div>

                            <div className="relative z-10">
                                <div
                                    className="
                                        mb-6
                                        h-px
                                        w-full
                                        bg-white/10
                                    "
                                />

                                <div className="flex items-center justify-between">
                                    <span
                                        className="
                                            text-[9px]
                                            uppercase
                                            tracking-[0.18em]
                                            text-white/40
                                        "
                                    >
                                        Keynotes • Panels • Lectures
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.4}
                                        className="
                                            text-[#D4B98E]
                                            transition-transform
                                            duration-300
                                            group-hover:-translate-y-1
                                            group-hover:translate-x-1
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= TOPICS ================= */}
                    <div className="lg:col-span-8">
                        <div className="space-y-3">
                            {topics.map((topic, index) => (
                                <article
                                    key={topic.title}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border border-white/70
                                        bg-white/40
                                        p-6
                                        shadow-[0_10px_40px_rgba(75,61,44,0.05)]
                                        backdrop-blur-2xl
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:bg-white/60
                                        hover:shadow-[0_20px_60px_rgba(75,61,44,0.10)]
                                        sm:p-7
                                    "
                                >
                                    {/* Glass reflection */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-20
                                            -top-20
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

                                    <div
                                        className="
                                            relative z-10
                                            flex gap-5
                                            md:gap-7
                                        "
                                    >
                                        {/* Number */}
                                        <div className="shrink-0">
                                            <span
                                                className="
                                                    font-serif
                                                    text-3xl
                                                    font-light
                                                    text-[#B09A7C]/60
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-[#967A56]
                                                "
                                            >
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0'
                                                )}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-4">
                                                <h3
                                                    className="
                                                        max-w-2xl
                                                        font-serif
                                                        text-xl
                                                        font-light
                                                        leading-tight
                                                        text-[#3E3730]
                                                        transition-colors
                                                        duration-300
                                                        group-hover:text-[#896D4E]
                                                        sm:text-2xl
                                                    "
                                                >
                                                    {topic.title}
                                                </h3>

                                                <div
                                                    className="
                                                        hidden
                                                        h-9 w-9
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        border border-white/70
                                                        bg-white/45
                                                        text-[#806A4C]
                                                        opacity-0
                                                        backdrop-blur-xl
                                                        transition-all
                                                        duration-300
                                                        group-hover:opacity-100
                                                        sm:flex
                                                    "
                                                >
                                                    <ArrowUpRight
                                                        size={15}
                                                        strokeWidth={1.4}
                                                    />
                                                </div>
                                            </div>

                                            <p
                                                className="
                                                    mt-3
                                                    max-w-2xl
                                                    text-sm
                                                    font-light
                                                    leading-6
                                                    text-[#71685F]
                                                "
                                            >
                                                {topic.description}
                                            </p>

                                            <div
                                                className="
                                                    mt-5
                                                    flex items-center gap-2
                                                "
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#AA8A61]" />

                                                <span
                                                    className="
                                                        text-[9px]
                                                        uppercase
                                                        tracking-[0.17em]
                                                        text-[#998876]
                                                    "
                                                >
                                                    Keynote • Panel • Lecture
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover accent */}
                                    <div
                                        className="
                                            absolute
                                            bottom-0
                                            left-0
                                            h-[2px]
                                            w-0
                                            bg-[#A88A61]
                                            transition-all
                                            duration-500
                                            group-hover:w-20
                                        "
                                    />
                                </article>
                            ))}
                        </div>

                        {/* CTA */}
                        <div
                            className="
                                mt-6
                                flex
                                flex-col
                                gap-5
                                rounded-2xl
                                border border-white/70
                                bg-white/30
                                p-5
                                backdrop-blur-2xl
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                                sm:p-6
                            "
                        >
                            <div>
                                <p
                                    className="
                                        font-serif
                                        text-lg
                                        font-light
                                        text-[#4B4138]
                                    "
                                >
                                    Have a conversation in mind?
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        font-light
                                        text-[#80766C]
                                    "
                                >
                                    Available for keynotes, panels,
                                    moderation and guest lectures.
                                </p>
                            </div>

                            <Button
                                variant="primary"
                                href="#contact"
                            >
                                Book Crystal to Speak
                            </Button>
                        </div>
                    </div>
                </div>

                {/* ================= BOTTOM STATEMENT ================= */}
                <div
                    className="
                        mt-16
                        border-t
                        border-[#968671]/20
                        pt-8
                    "
                >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <p
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.18em]
                                text-[#968675]
                            "
                        >
                            Architecture • Design • Culture • Leadership
                        </p>

                        <p
                            className="
                                font-serif
                                text-lg
                                font-light
                                italic
                                text-[#695D51]
                            "
                        >
                            Ideas that inspire meaningful action.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}