// components/ServiceHeader.tsx
// This reusable component displays the hero section for a service page.

import React from 'react';

interface ServiceHeaderProps {
    title: string;
    statement: string;
    url: string;
}

export default function ServiceHeader({ title, statement, url }: ServiceHeaderProps) {
    return (
        <div className="relative lg:h-64 h-56 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                style={{ backgroundImage: `url(${url})` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
                <div className="max-w-3xl space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                        {title}
                    </h1>
                    <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
                        {statement}
                    </p>
                </div>
            </div>
        </div>
    );
}
