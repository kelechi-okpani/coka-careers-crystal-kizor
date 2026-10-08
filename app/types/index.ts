export interface Initiative {
    id: string;
    name: string;
    category: 'Architecture' | 'Design' | 'Education' | 'Impact' | 'Media' | 'Faith';
    tagline: string;
    description: string;
    image: string;
    href: string;
    stats?: string;
}

export interface NavItem {
    label: string;
    href: string;
}