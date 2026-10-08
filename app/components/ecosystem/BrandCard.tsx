import React from 'react';
import { Initiative } from '@/app/types';
import { ArrowUpRight } from 'lucide-react';

interface BrandCardProps {
    initiative: Initiative;
}

export function BrandCard({ initiative }: BrandCardProps) {
    return (
        <div className="group relative bg-neutral-50 border border-neutral-200 overflow-hidden flex flex-col justify-between p-8 hover:border-neutral-900 transition-all duration-300">
            <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <ArrowUpRight size={18} className="text-neutral-900" />
            </div>
            <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">{initiative.category}</span>
                <h3 className="font-serif text-2xl font-normal text-neutral-900 mt-2 mb-3">{initiative.name}</h3>
                <p className="text-sm font-medium text-neutral-800 mb-2">{initiative.tagline}</p>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">{initiative.description}</p>
            </div>
            <div className="pt-8 mt-8 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs tracking-wider uppercase text-neutral-500">{initiative.stats}</span>
                <a href={initiative.href} className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline">
                    Learn more
                </a>
            </div>
        </div>
    );
}



