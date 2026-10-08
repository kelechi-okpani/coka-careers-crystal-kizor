import { Initiative } from '@/app/types';

export const initiatives: Initiative[] = [
    {
        id: 'studio-coka',
        name: 'Studio COKA',
        category: 'Architecture',
        tagline: 'Thoughtful, Climate-Responsive Architecture',
        description: 'An architecture, interior design and construction studio crafting sustainable spaces rooted in context.',
        image: '/images/studio-coka.jpg',
        href: '#studio',
        stats: 'Sustainable Spaces'
    },
    {
        id: 'elevated',
        name: 'ELEvated',
        category: 'Design',
        tagline: 'Furniture & Product Design',
        description: 'Contemporary furniture and functional products rooted in African context, materials, and ideas.',
        image: '/images/elevated.jpg',
        href: '#elevated',
        stats: 'Crafted Living'
    },
    {
        id: 'tea',
        name: 'The Effective Architect (TEA)',
        category: 'Education',
        tagline: 'Architecture Education & Media Platform',
        description: 'Helping architects and built-environment professionals learn, grow, and build better careers.',
        image: '/images/tea.jpg',
        href: '#tea',
        stats: 'Professional Growth'
    },
    {
        id: 'ako-alliance',
        name: 'AKO Alliance',
        category: 'Impact',
        tagline: 'Expanding Access to Education',
        description: 'An initiative dedicated to creating opportunities and expanding educational access for children and young people.',
        image: '/images/ako.jpg',
        href: '#ako',
        stats: 'Social Impact'
    },
    {
        id: 'speaking',
        name: 'Speaking Engagements',
        category: 'Media',
        tagline: 'Conversations That Shape Cities',
        description: 'Keynotes and talks on architecture, climate-responsive design, African cities, and entrepreneurship.',
        image: '/images/speaking.jpg',
        href: '#speaking',
        stats: 'Global Stages'
    },
    {
        id: 'alive-and-free',
        name: 'Alive and Free',
        category: 'Faith',
        tagline: 'Christian Youth Movement',
        description: 'Guiding young people to walk in truth, healing, freedom, identity, purpose, and life in Christ.',
        image: '/images/alive-free.jpg',
        href: '#faith',
        stats: 'Community & Purpose'
    }
];
