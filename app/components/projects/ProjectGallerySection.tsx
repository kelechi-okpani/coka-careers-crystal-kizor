'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectItem {
    id: string;
    title: string;
    category: 'Community Center' | 'Natural Homes';
    image: string;
    description: string;
    location?: string;
}

type Category = 'All' | 'Community Center' | 'Natural Homes';

interface ProjectGallerySectionProps {
    projects?: ProjectItem[];
}

const defaultProjects: ProjectItem[] = [
    // Replace these with your actual 5 Community Center images
    {
        id: 'cc-1',
        title: 'Community Center I',
        category: 'Community Center',
        image: '/img/community/01.jpg',
        description:
            'A civic space shaped around openness, gathering and natural light.',
        location: 'Nigeria',
    },
    {
        id: 'cc-2',
        title: 'Community Center II',
        category: 'Community Center',
        image: '/img/community/02.png',
        description:
            'A welcoming architectural environment designed for shared experiences.',
        location: 'Nigeria',
    },
    {
        id: 'cc-3',
        title: 'Community Center III',
        category: 'Community Center',
        image: '/img/community/03.png',
        description:
            'Architecture that connects community life with landscape and daylight.',
        location: 'Nigeria',
    },
    {
        id: 'cc-4',
        title: 'Community Center IV',
        category: 'Community Center',
        image: '/img/community/04.png',
        description:
            'A contemporary civic expression rooted in climate-responsive design.',
        location: 'Nigeria',
    },
    {
        id: 'cc-5',
        title: 'Community Center V',
        category: 'Community Center',
        image: '/img/community/05.png',
        description:
            'A flexible gathering space designed around people and place.',
        location: 'Nigeria',
    },

    // Replace these with your actual 13 Natural Homes images
    {
        id: 'nh-1',
        title: 'Natural Home I',
        category: 'Natural Homes',
        image: '/img/natural-homes/1.jpeg',
        description:
            'A warm residential environment shaped by natural materials and daylight.',
        location: 'Nigeria',
    },
    {
        id: 'nh-2',
        title: 'Natural Home II',
        category: 'Natural Homes',
        image: '/img/natural-homes/2.jpeg',
        description:
            'A quiet home that brings landscape, shade and interior life together.',
        location: 'Nigeria',
    },
    {
        id: 'nh-3',
        title: 'Natural Home III',
        category: 'Natural Homes',
        image: '/img/natural-homes/3.jpeg',
        description:
            'A climate-conscious residence designed around comfort and connection.',
        location: 'Nigeria',
    },
    {
        id: 'nh-4',
        title: 'Natural Home IV',
        category: 'Natural Homes',
        image: '/img/natural-homes/4.jpeg',
        description:
            'Earth, texture and light create a calm residential experience.',
        location: 'Nigeria',
    },
    {
        id: 'nh-5',
        title: 'Natural Home V',
        category: 'Natural Homes',
        image: '/img/natural-homes/5.jpeg',
        description:
            'A contemporary interpretation of natural living and materiality.',
        location: 'Nigeria',
    },
    {
        id: 'nh-6',
        title: 'Natural Home VI',
        category: 'Natural Homes',
        image: '/img/natural-homes/6.jpeg',
        description:
            'A residence organized around shade, ventilation and outdoor living.',
        location: 'Nigeria',
    },
    {
        id: 'nh-7',
        title: 'Natural Home VII',
        category: 'Natural Homes',
        image: '/img/natural-homes/7.jpeg',
        description:
            'Simple forms and natural textures create an intimate home.',
        location: 'Nigeria',
    },
    {
        id: 'nh-8',
        title: 'Natural Home VIII',
        category: 'Natural Homes',
        image: '/img/natural-homes/8.jpeg',
        description:
            'A light-filled home designed to respond to its surrounding landscape.',
        location: 'Nigeria',
    },
    {
        id: 'nh-9',
        title: 'Natural Home IX',
        category: 'Natural Homes',
        image: '/img/natural-homes/9.png',
        description:
            'Architecture that balances privacy, openness and natural ventilation.',
        location: 'Nigeria',
    },
    {
        id: 'nh-10',
        title: 'Natural Home X',
        category: 'Natural Homes',
        image: '/img/natural-homes/10.jpeg',
        description:
            'Warm materials and soft daylight define this residential study.',
        location: 'Nigeria',
    },
    {
        id: 'nh-11',
        title: 'Natural Home XI',
        category: 'Natural Homes',
        image: '/img/natural-homes/11.jpeg',
        description:
            'A contemporary home grounded in natural materials and climate.',
        location: 'Nigeria',
    },
    {
        id: 'nh-12',
        title: 'Natural Home XII',
        category: 'Natural Homes',
        image: '/img/natural-homes/12.jpeg',
        description:
            'A residential composition designed around light, shade and landscape.',
        location: 'Nigeria',
    },
    {
        id: 'nh-13',
        title: 'Natural Home XIII',
        category: 'Natural Homes',
        image: '/img/natural-homes/13.jpeg',
        description:
            'A final exploration of natural living, material and architectural form.',
        location: 'Nigeria',
    },
];

export default function ProjectGallerySection({
                                                  projects = defaultProjects,
                                              }: ProjectGallerySectionProps) {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [selectedProject, setSelectedProject] =
        useState<ProjectItem | null>(null);

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') {
            return projects;
        }

        return projects.filter(
            (project) => project.category === activeCategory
        );
    }, [activeCategory, projects]);

    const categoryCount = (category: Category) => {
        if (category === 'All') return projects.length;

        return projects.filter((project) => project.category === category)
            .length;
    };

    return (
        <section
            id="projects"
            className="
                relative overflow-hidden
                bg-[#F3EFE6]
                px-6 py-28
                md:px-10
                lg:px-12
                lg:py-36
            "
        >
            {/* Architectural ambient light */}
            <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D8CBB7]/30 blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#BFCBBE]/30 blur-[120px]" />

            {/* Very subtle architectural grid */}
            <div
                className="
                    pointer-events-none absolute inset-0 opacity-[0.18]
                    bg-[linear-gradient(to_right,#9B8D7A_1px,transparent_1px),linear-gradient(to_bottom,#9B8D7A_1px,transparent_1px)]
                    bg-[size:80px_80px]
                "
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#A88C68]" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#9A7B56]">
                                Selected Works
                            </span>
                        </div>

                        <h2
                            className="
                                max-w-3xl
                                font-serif
                                text-4xl
                                font-light
                                leading-[1.05]
                                tracking-tight
                                text-[#3E372F]
                                sm:text-5xl
                                lg:text-7xl
                            "
                        >
                            Architecture shaped by{' '}
                            <span className="italic text-[#8F785C]">
                                people, place & light.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:pb-1">
                        <p className="max-w-lg text-sm font-light leading-7 text-[#70675E] md:text-base">
                            A collection of architectural explorations
                            considering natural materials, climate, community
                            and the way people experience space.
                        </p>
                    </div>
                </div>

                {/* Glass Filter Bar */}
                <div
                    className="
                        mb-10
                        rounded-2xl
                        border border-white/70
                        bg-white/45
                        p-2
                        shadow-[0_12px_50px_rgba(85,70,50,0.08)]
                        backdrop-blur-2xl
                    "
                >
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        {/* Category filters */}
                        <div className="flex flex-wrap gap-1">
                            {(
                                [
                                    'All',
                                    'Community Center',
                                    'Natural Homes',
                                ] as Category[]
                            ).map((category) => {
                                const active =
                                    activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category)
                                        }
                                        className={`
                                            group
                                            flex items-center gap-2
                                            rounded-xl
                                            px-4 py-3
                                            text-[10px]
                                            uppercase
                                            tracking-[0.14em]
                                            transition-all
                                            duration-300
                                            ${
                                            active
                                                ? 'bg-[#4D443A] text-white shadow-lg shadow-[#4D443A]/15'
                                                : 'text-[#756B61] hover:bg-white/70 hover:text-[#413930]'
                                        }
                                        `}
                                    >
                                        <span>{category}</span>

                                        <span
                                            className={`
                                                rounded-full
                                                px-1.5 py-0.5
                                                text-[9px]
                                                ${
                                                active
                                                    ? 'bg-white/15 text-white/80'
                                                    : 'bg-[#E3DCD1] text-[#887B6D]'
                                            }
                                            `}
                                        >
                                            {categoryCount(category)}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="hidden h-7 w-px bg-[#A99A87]/20 md:block" />

                        <span className="px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-[#958879]">
                            {filteredProjects.length} works
                        </span>
                    </div>
                </div>

                {/* Gallery */}
                <div
                    className="
                        grid grid-cols-1
                        gap-5
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {filteredProjects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border border-white/60
                                bg-white/30
                                shadow-[0_15px_50px_rgba(75,61,44,0.08)]
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:shadow-[0_25px_70px_rgba(75,61,44,0.14)]
                                ${
                                index % 5 === 0
                                    ? 'md:row-span-2'
                                    : ''
                            }
                            `}
                        >
                            <div
                                className={`
                                    relative
                                    overflow-hidden
                                    ${
                                    index % 5 === 0
                                        ? 'h-[620px] md:h-full'
                                        : 'h-[390px]'
                                }
                                `}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="
                                        (max-width: 768px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                    "
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-1000
                                        ease-out
                                        group-hover:scale-[1.06]
                                    "
                                />

                                {/* Image veil */}
                                <div
                                    className="
                                        absolute inset-0
                                        bg-gradient-to-t
                                        from-[#2E2924]/85
                                        via-[#2E2924]/10
                                        to-transparent
                                        opacity-80
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-95
                                    "
                                />

                                {/* Glass top badge */}
                                <div className="absolute left-5 top-5">
                                    <div
                                        className="
                                            rounded-full
                                            border border-white/30
                                            bg-white/15
                                            px-3 py-1.5
                                            text-[9px]
                                            uppercase
                                            tracking-[0.16em]
                                            text-white
                                            backdrop-blur-xl
                                        "
                                    >
                                        {project.category}
                                    </div>
                                </div>

                                {/* Glass arrow */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedProject(project)
                                    }
                                    aria-label={`View ${project.title}`}
                                    className="
                                        absolute right-5 top-5
                                        flex h-10 w-10
                                        items-center justify-center
                                        rounded-full
                                        border border-white/30
                                        bg-white/15
                                        text-white
                                        opacity-0
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        group-hover:opacity-100
                                        hover:bg-white/30
                                    "
                                >
                                    <ArrowUpRight
                                        size={17}
                                        strokeWidth={1.5}
                                    />
                                </button>

                                {/* Content glass panel */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <div
                                        className="
                                            rounded-xl
                                            border border-white/20
                                            bg-[#342F29]/35
                                            p-5
                                            backdrop-blur-xl
                                            transition-all
                                            duration-500
                                            group-hover:bg-[#342F29]/50
                                        "
                                    >
                                        <div className="mb-2 flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#D8C19E]" />

                                            <span className="text-[9px] uppercase tracking-[0.18em] text-white/60">
                                                {project.location ||
                                                    'Architecture'}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-2xl font-light text-white">
                                            {project.title}
                                        </h3>

                                        <p className="mt-2 line-clamp-2 text-xs font-light leading-5 text-white/70">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom statement */}
                <div className="mt-16 flex flex-col gap-6 border-t border-[#9D8E7C]/20 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-xl font-serif text-xl font-light leading-relaxed text-[#544A40] md:text-2xl">
                        “Good architecture should feel connected to the
                        people and environment around it.”
                    </p>

                    <a
                        href="#contact"
                        className="
                            group
                            flex w-fit items-center gap-3
                            rounded-full
                            border border-[#9B886F]/30
                            bg-white/40
                            px-5 py-3
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-[#574B40]
                            backdrop-blur-xl
                            transition-all
                            hover:bg-white/70
                        "
                    >
                        Discuss a project

                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.5}
                            className="
                                transition-transform
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                            "
                        />
                    </a>
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div
                    className="
                        fixed inset-0 z-[100]
                        flex items-center justify-center
                        bg-[#302A24]/40
                        p-5
                        backdrop-blur-md
                    "
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="
                            relative
                            w-full
                            max-w-4xl
                            overflow-hidden
                            rounded-3xl
                            border border-white/60
                            bg-[#F5F1E8]/90
                            shadow-[0_30px_100px_rgba(45,35,25,0.25)]
                            backdrop-blur-2xl
                        "
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="relative h-[300px] md:h-[520px]">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col justify-center p-7 md:p-10">
                                <span className="mb-4 text-[9px] uppercase tracking-[0.2em] text-[#9A7B56]">
                                    {selectedProject.category}
                                </span>

                                <h3 className="font-serif text-3xl font-light text-[#3F372F] md:text-4xl">
                                    {selectedProject.title}
                                </h3>

                                <p className="mt-5 text-sm font-light leading-7 text-[#70675E]">
                                    {selectedProject.description}
                                </p>

                                <div className="mt-8 border-t border-[#9D8E7C]/20 pt-5">
                                    <span className="text-[9px] uppercase tracking-[0.18em] text-[#9A8A79]">
                                        Location
                                    </span>

                                    <p className="mt-1 text-sm text-[#51473E]">
                                        {selectedProject.location ||
                                            'Nigeria'}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedProject(null)
                                    }
                                    className="
                                        mt-8
                                        flex w-fit items-center gap-2
                                        rounded-full
                                        border border-[#8E7B64]/25
                                        bg-white/50
                                        px-5 py-3
                                        text-[10px]
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#50453A]
                                        backdrop-blur-xl
                                        transition-all
                                        hover:bg-white/80
                                    "
                                >
                                    <ChevronLeft size={14} />
                                    Back to projects
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}