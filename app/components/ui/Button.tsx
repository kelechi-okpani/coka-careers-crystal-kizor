import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    href?: string;
}

export default function Button({ variant = 'primary', children, href, className = '', ...props }: ButtonProps) {
    const baseStyles = "px-8 py-4 text-sm tracking-wide font-light transition-all duration-300 inline-flex items-center justify-center text-center";

    const variants = {
        primary: "bg-neutral-900 text-white hover:bg-neutral-800",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
        outline: "border border-neutral-300 text-neutral-900 hover:border-neutral-900"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClasses}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}