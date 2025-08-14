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
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
        <nav className="bg-background/95 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
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
                <div className="hidden md:flex space-x-4 px-4">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-4">
                            {/* Products */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-semibold text-md">
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
                                <NavigationMenuTrigger className="font-semibold text-md">
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
                                        className="font-semibold text-md px-2 py-1 rounded-md hover:bg-accent"
                                    >
                                        Resources
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Company */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/company"
                                        className="font-semibold text-md px-2 py-1 rounded-md hover:bg-accent"
                                    >
                                        Company
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
                className={`absolute left-0 w-full transition-all duration-300 ease-in-out md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg ${isMobileMenuOpen
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
                            href="/company"
                            className="block px-4 py-2 font-semibold text-lg hover:bg-accent rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            Company
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
