'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { products } from '@/lib/products';
import { services } from '@/lib/services';

interface ListItemProps {
    href: string;
    title: string;
    children: React.ReactNode;
}

const ListItem = ({ href, title, children }: ListItemProps) => (
    <li>
        <NavigationMenuLink asChild>
            <Link
                href={href}
                className="block select-none space-y-1 leading-none no-underline outline-none transition-colors text-red-700 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </Link>
        </NavigationMenuLink>
    </li>
);

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    return (
        <nav className="bg-background/95 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
                <div className="flex justify-start">
                    <Link href="/">
                        <Image
                            src="/simplelogo.svg"
                            alt="logo"
                            width={160}
                            height={80}
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-end items-center space-x-2 px-4">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-2">
                            {/* Products */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-semibold text-md text-red-700">
                                    <Link href="/products">Products</Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-4 list-none p-4">
                                        {products.map(product => (
                                            <ListItem
                                                key={product.id}
                                                href={`/products/${product.id}`}
                                                title={product.name}
                                            >
                                                {product.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Services */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-semibold text-md text-red-700">
                                    <Link href="/services">Services</Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-4 list-none p-4">
                                        {services.map(service => (
                                            <ListItem
                                                key={service.id}
                                                href={`/services/${service.id}`}
                                                title={service.name}
                                            >
                                                {service.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Resources */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/resources"
                                        className=" text-red-700 font-semibold text-lg p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        Resources
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Company */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/about-us"
                                        className=" text-red-700 font-semibold text-lg p-w rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        About Us
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        className="p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                        {isMobileMenuOpen ? (
                            <X size={30} className="text-foreground" />
                        ) : (
                            <Menu size={30} className="text-foreground" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute left-0 w-full transition-all duration-300 ease-in-out md:hidden bg-neutral-500 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg ${isMobileMenuOpen
                    ? 'top-full opacity-100 visible'
                    : '-top-96 opacity-0 invisible'
                    }`}
            >
                <ul className="flex flex-col items-start p-4 space-y-2 list-none">
                    <li className="w-full">
                        <Link
                            href="/products"
                            className="block px-4 py-2 font-semibold text-md hover:bg-accent rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            Products
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            href="/services"
                            className="block px-4 py-2 font-semibold text-md hover:bg-accent rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            href="/resources"
                            className="block px-4 py-2 font-semibold text-md hover:bg-accent rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            Resources
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            href="/about-us"
                            className="block px-4 py-2 font-semibold text-md hover:bg-accent rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            href="/contact"
                            className="block px-4 py-2 font-semibold text-md hover:bg-accent rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            href="/terms"
                            className="block px-4 py-2 font-semibold text-md hover:bg-accent rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            Terms & Conditions
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
