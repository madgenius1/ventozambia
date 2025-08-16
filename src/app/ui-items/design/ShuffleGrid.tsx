'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

// --- Types ---
// Define a type for a single item in the grid
type GridItem = {
    id: number;
    src: string;
};

// --- Data ---
const initialGridData: GridItem[] = [
    { id: 1, src: '/hififilter.jpg' },
    { id: 2, src: '/hydrauliccylinder.jpg' },
    { id: 3, src: '/hydraulicpump.jpg' },
    { id: 4, src: '/hififilter.jpg' },
    { id: 5, src: '/hydrauliccylinder.jpg' },
    { id: 6, src: '/hydraulicpump.jpg' },
    { id: 7, src: '/hififilter.jpg' },
    { id: 8, src: '/hydrauliccylinder.jpg' },
    { id: 9, src: '/hydraulicpump.jpg' },
    { id: 10, src: '/hififilter.jpg' },
    { id: 11, src: '/hydrauliccylinder.jpg' },
    { id: 12, src: '/hydraulicpump.jpg' },
    { id: 13, src: '/hififilter.jpg' },
    { id: 14, src: '/hydrauliccylinder.jpg' },
    { id: 15, src: '/hydraulicpump.jpg' },
    { id: 16, src: '/hififilter.jpg' },
];

// --- Custom Hook for Shuffling Logic ---
const useShuffle = (initialData: GridItem[], interval: number = 3000) => {
    const [data, setData] = useState<GridItem[]>(initialData);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const shuffleArray = (array: GridItem[]): GridItem[] => {
        // Create a new array to avoid mutating the original
        const newArray = [...array];
        let currentIndex = newArray.length;
        let randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // Swap it with the current element.
            [newArray[currentIndex], newArray[randomIndex]] = [
                newArray[randomIndex],
                newArray[currentIndex],
            ];
        }
        return newArray;
    };

    useEffect(() => {
        const startShuffling = () => {
            setData(shuffleArray(initialData));
            timeoutRef.current = setTimeout(startShuffling, interval);
        };

        startShuffling();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [initialData, interval]);

    return data;
};

export const ShuffleGrid = () => {
    const squares = useShuffle(initialGridData, 3000);

    return (
        <div className="grid grid-cols-3 grid-rows-3 lg:grid-cols-4 lg:grid-rows-4 md:grid-cols-4 md:grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => (
                <motion.div
                    key={sq.id}
                    layout
                    transition={{ duration: 1.5, type: 'spring',  }}
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url(${sq.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}
        </div>
    );
};